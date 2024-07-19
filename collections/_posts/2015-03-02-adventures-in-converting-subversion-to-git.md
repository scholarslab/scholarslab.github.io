---
author: wayne-graham
date: 2015-03-02 09:37:03+00:00
layout: post
slug: adventures-in-converting-subversion-to-git
title: Adventures in Converting Subversion to Git
category: blog
tags:
- Research and Development
- code
---

While the Scholars' Lab was founded in 2006, we manage a lot of projects that had their roots in the eText Center in the late 1990s. These projects have lived through the numerous "best practices" of the various eras, many still bearing the marks of those bygone eras (you see a lot of projects that used FTP clients to manage the project as evidenced by numerous `WS_FTP.log` files for those who remember that). Most of the legacy projects we work with were migrated to Subversion by the the 2000s, but if you're one of the cool kids, you'll know that everyone uses [git](http://git-scm.com/) these days (thanks in large part to [GitHub](https://github.com)). Recently we've been working on one of these projects ([Salem Witch Trials](http://salem.lib.virginia.edu)) to help get it ready for a forthcoming book and we found that Subvesion kept getting in the way of actually doing work. Little and big issues kept nagging collaborators like flaky user permissions and issues with adding numerous files had made the Subversion repository to nearly 4Gb. Ben Ray came by my office one day and asked if there was a "better" way to do this. I suggested an experiment with `git` and GitHub and seeing if that would help ease some of the pain points he was having with Subversion.

At first, I naively thought this was be pretty straight forward. We've migrated other Subversion repositories to `git` and they've been relatively painless. However, in dealing with projects that started in the 1990s, you always expect a little (ok, a lot) of weirdness. I started out this process using the [`git-svn utility`](https://www.kernel.org/pub/software/scm/git/docs/git-svn.html) which converts repos from an SVN-style (directories `branches`, `tags`, and `trunk`) to git-style repo (`trunk` becomes master branch, and converts `branches` and `tags`). Part of this step is to map the authors in the repository to how git addresses its authors. I ran a bit of bash off the `svn log` to create a list of the authors:

```
$ cd path/to/svn_repo
$ svn log -q | awk -F '|' '/^r/ {sub("^ ", "", $2); sub(" $", "", $2); print $2" = "$2" <"$2">"}' | sort -u > authors.txt
```

This just generates a text file (`authors.txt`) with unique authors and I had to expand the mappings to read like so:

```
wsg4w = Wayne Graham <wsg4w@uva.edu>
```

After getting the authors, I made a clone of the repository and ran in to the first issue. The default convention in SVN is to create directories for your stuff in branches, tags, and trunk. The `trunk` directory is where your stuff typically is, but this is more of a convention than an enforced policy. In my case the repo was structured like `trunk/branch/stuff`. This meant I needed to pass another flag to get the actual source files out.

```
$ git svn clone https://subversion.lib.virginia.edu/repos/salem -T trunk/branch -A authors.txt --no-metadata
```

This would start and get some way through and start throwing 500 errors. Ok, no big deal as I think to myself, "I'll just mirror the SVN repo locally and then I can run this again on my own machine without any crazy network stuff in the way."

```
$ cd mkdir -p /tmp/salem
$ svnadmin create /tmp/salem
$ echo "exit 0;" > /tmp/salem/hooks/pre-revprop-change
$ chmod +x /tmp/salem/hooks/pre-revprop-change
$ svnsync init file:///tmp/salem https://subversion.lib.virginia.edu/repos/salem
$ svnsync sync file:///tmp/salem
```

This too got through some of the download process and started throwing [500 errors](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#5xx_Server_Error). After submitting a trouble ticket, it turned out the Subversion server was running out of memory trying to check out the nearly 4Gb repository. After the server admins increased the amount of memory on the virtual server running Subversion, I ran the `svnsync` again. After a good long while, I had a local copy of the entire repo and could on it without any network latency.

So I reran the `git svn` utility, but instead of an `https` connection, I change that to the `file` URI:

```
$ git svn clone file:///tmp/salem -T trunk/branch -A authors.txt --no-metadata
```

After a bit of churning, this process finished and I had a newly minted `git` repository with all the history from the SVN repo. I then start looking at things and notice that the repo is really big, even with all of the compression that occurs with `git`. I start looking around and notice that at some point in the project's history, all of the images that were being used were added to the project history. Not only that, there were also copies of all of those images in a tarball that was being tracked. Someone had realized this wasn't good and had removed it, but because of the way in which SCM systems work, we would continue to track these files.

To figure this out, I first counted the objects `git` was tracking.

```
$ git count-objects -v
count: 5414
size: 41548
in-pack: 40222
packs: 1
size-pack: 2164015
prune-packable: 0
garbage: 0
size-garbage: 0
```

That `size-pack` told me there was over 2Gb of data that it knew about. What's in there? I took a look at the `git index` and pulled the largest blobs out.

```
$ git verify-pack -v .git/objects/pack/pack-*.idx | sort -k 3 -n | tail -5
5b7e8c63a0bacd3dc2ab92db2d1d1cbc2359e69c blob   4715942 4715522 2077929726
f3e135fd90caa6a05a1da13a2afc60c8a0af1063 blob   4743461 1703778 6751124
6f9cbe6fa3fd702a70d666160329ef1176dd4a07 blob   8042973 7227900 1043663492
d18b98c09c0dcbf9edc2f6ccf91672a399c8a79d blob   9662999 2747934 8477062
17ccd45824bb4cb1e1c8b03e5780fa31175c18ab blob   48199680 47913744 93724263
```

This gave me references for the blobs, but I also needed to figure out what file was taking up so much space. I used the hash of the really big file as a good candidate for removal (`17ccd45824bb4cb1e1c8b03e5780fa31175c18ab` or `17ccd45` with its shorthand).

```
$ git rev-list --objects --all | grep 17ccd45
17ccd45824bb4cb1e1c8b03e5780fa31175c18ab trunk/branch/cocoon/html/Essex/vol2/gifs/gifs.tar
```

So now I know the path, let's see were this was introduced.

```
$ git log --oneline --branches -- trunk/branch/cocoon/html/Essex/vol2/gifs/gifs.tar
...
ddb3b1e Second commit
```

I then rewrote the `git` history to yank references to this blob out since revision `ddb3b1e`.

```
$ git filter-branch --index-filter 'git rm --ignore-unmatch --cached trunk/branch/cocoon/html/Essex/vol2/gifs/gifs.tar' -- ddb3b1e^..
```

Now I need to delete the objects and prune and reindex the `git` database.

```
$ git clone --no-hardlinks file:///Users/yourUser/your/full/repo/salem salem-smaller
```

This took a really long time, and after checking the repo size, it was still the same size. Time for some more drastic measures.

After some poking around on StackOverflow (where you go when you need to figure out something like this), I came across this question [Which commmit has this blob?](https://stackoverflow.com/questions/223678/which-commit-has-this-blob#223890) which had some promising information about finding large files (read the entire thread; lots of really good advice). However, none of it seemed to be helping decrease the size of the repository `packfile`. In fact, when I would run the command to see what blobs were taking up the most room, I always found the same files, even if I yanked them out and rewrote the history.

After several more hours of research I came across Ted Naleid's approach at [Finding and Purging Big Files From Git History](http://naleid.com/blog/2012/01/17/finding-and-purging-big-files-from-git-history). One of the parts I was missing was actually cloning the local directory. So, I cloned the local directory and removed the hard links:

```
$ git clone --no-hardlinks file:///Users/yourUser/your/full/repo/salem salem-smaller
```

After checking again the objects were much smaller:

```
$ git count-objects -v
count: 0
size: 0
in-pack: 32347
packs: 1
size-pack: 1978880
prune-packable: 0
garbage: 0
size-garbage: 0
```

Smaller, but there's a lot more I can yank out that should have never been there. Using Ted's approach, I wrote a bash script to generate file paths for all the blobs.

```
#! /usb/bin/env bash

clear

echo "Finding all objects in the repo..."
git rev-list --objects --all | sort -k 2 > allfileshas.txt

#git rev-list --objects --all | sort -k 2 | cut -f 2 -d\ | uniq
echo "Generating the SHA hashes and sorting them biggest to smallest..."
git gc && git verify-pack -v .git/objects/pack/pack-*.idx | egrep "^\w+ blob\W+[0-9]+ [0-9]+ [0-9]+$" | sort -k 3 -n -r > bigobjects.txt

echo "Generate object SHAs"
for SHA in `cut -f 1 -d\  < bigobjects.txt`; do
  echo "Looking up $SHA..."
  echo $(grep $SHA bigobjects.txt) $(grep $SHA allfileshas.txt) | awk '{print $1,$3,$7}' >> bigtosmall.txt
done;

echo "Done."
echo "Look at the bigtosmall.txt file for large files.\n"
echo "You can remove any large files from your repo history with:\n"
echo "\t git filter-branch --prune-empty --index-filter 'git rm -rf --cached --ignore-unmatch MY-BIG-DIRECTORY-OR-FILE' --tag-name-filter cat -- --all"
echo "\nYou can then compress it by cloning the repo without hard links:"
echo "\t git clone --no-hardlinks file:///Users/yourUser/your/full/repo/path repo-clone-name"
```

<script src="https://gist.github.com/waynegraham/ed6d074267e60d7fef07.js?file=gistfile12.sh"></script>

This generates several text files, but I was concerned with the `bigtosmall.txt`. This has the file paths of the large files in the repo.

```
17ccd45824bb4cb1e1c8b03e5780fa31175c18ab 48199680 trunk/branch/cocoon/html/Essex/vol2/gifs/gifs.tar
d726f0a0cab047838e3405ad59d3c5399f42db87 12300550 trunk/branch/cocoon/html/maps/DHS/danvers_hist_soc/put_hse2.tif
06a4076cac85350be52261a8f11df0ecb42d6696 10610964 trunk/branch/cocoon/html/maps/images/musick_nurse.tif
6f9cbe6fa3fd702a70d666160329ef1176dd4a07 8042973 trunk/branch/cocoon/images/small/casey.tif
5b7e8c63a0bacd3dc2ab92db2d1d1cbc2359e69c 4715942 trunk/branch/cocoon/html/archives/essex/eia/large/eia22r.jpg
20ea6bb7b466cd4ba4716834bae7507989ff88b7 3861655 trunk/branch/cocoon/html/archives/essex/eia/large/eia06r.jpg
8a37fabb82418c6e6b07abf08821a053b2dc4b11 3770686 trunk/branch/cocoon/html/archives/essex/eia/large/eia13r.jpg
5fecd828115d3909cbe70de0be3936f96fb61868 3708386 trunk/branch/cocoon/html/maps/DHS/danvers_hist_soc/Summerhouse
```

Looking through this, what I found was that most of these large files were in an `archives` directory, or `images` directory. What I did was move these more static files to a shared location on the server (most of which are a child of the `html` directory), so I ran the following to remove the `html` directory from the history:

```
$ git filter-branch --prune-empty --index-filter 'git rm -rf --cached --ignore-unmatch trunk/branch/cocoon/html' --tag-name-filter cat -- --all
```

This forces `git` to go through all of the commits, removing references to these blobs (whose history can be managed as a separate entity). This took a while, and after the history rewrite was finished, I recloned the repo and the pack size was quite a bit smaller. After a lot of this, it got a lot smaller:

```
$ git count-objects -v
count: 0
size: 0
in-pack: 24334
packs: 1
size-pack: 966726
prune-packable: 0
garbage: 0
size-garbage: 0
```

Now that it's under a single Gigabyte, I'm happy. So is GitHub with it's ["suggestion" that repos should be under 1Gb in size](https://help.github.com/articles/what-is-my-disk-quota/). There's probably more that could be cleaned up, but this is more finding odd files here and there. Hopefully this saves someone else some digging (including my future self for the next migration from Subversion to git).

Dealing with these legacy projects, particularly on performance issues related to decisions made 10 - 15 years ago in the workflow for source management can be difficult to track down and figure out; not to mention obscure and and somewhat impenetrable. However, there does come a point where people working on a long-running project will start to feel real pain in working on the system and being able to improve this performance helps ensure people continue to _want_ to work on a project rather than abandoning it due to frustration with the tooling.


> After a lot of really high-CPU spiking git rewrites, I discovered [BFG](https://rtyley.github.io/bfg-repo-cleaner/) which is an alternative to the `git-filter-branch` strategy. It claims it's up to 720x faster. While I didn't do a timed comparison (I really wanted to stop messing with this), I can say that it was orders of magnitude faster. So much so that if I need to do this again, I'll probably use that tool first.
