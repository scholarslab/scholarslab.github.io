---
author: brandon-walsh
date: 2015-09-21 10:48:25+00:00
layout: post
slug: music-genre-and-spotify-metadata
title: Music Genre and Spotify Metadata
category: essay
tags:
- grad-student-research
- music-and-sound
crosspost:
  - title: my personal site
    url: http://walshbr.com/blog/music-genre-and-spotify-metadata/
---

For the last couple weeks, I have been exploring APIs useful to sound studies for a sound recording and poetry project I am working on with former Scholars’ Lab fellow [Annie Swafford](https://annieswafford.wordpress.com/). I was especially drawn to playing around with [Spotify](https://www.spotify.com/us/), which has an [API](https://developer.spotify.com/web-api/) that allows you to access metadata for the large catalog of music available through their service. The experiment described below focuses on genre: a notoriously messy category that we nonetheless rely on to tell us how to process the materials we read, view, or hear. Genre tells us what to expect from the art we take in, and our construction and reception of generic categories can tell us a lot about ourselves. In music, especially, genres and subgenres can activate fierce debates about authenticity and belonging. Does your favorite group qualify as "authentic" jazz? What composers do you have to know in order to think of yourself as a real classical music aficionado? Playing with an artist's metadata can expose a lot of the assumptions that were made in its collection, and I was especially interested in the ways in which Spotify models relations among artists.

I wanted to explore Spotify’s metadata in a way that would model the interpretive messiness of generic categories. To do so, I built a program that bounces through Spotify’s metadata to produce multiple readings of the idea of genre in relation to a particular artist. Spotify offers a fairly robust API, and there are a number of handy wrappers that make it easier to work with. I used a Python module called [Spotipy](http://spotipy.readthedocs.org/en/latest/) for the material below, and you can find [the code for my little genre experiment over on my GitHub page](https://github.com/bmw9t/spotify/blob/master/genre_machine.py). If you do try to run this on your own machine, note that you will need to clone Spotipy’s repository and manually install it from the terminal with the following command from within the downloaded repository:

`$ python setup.py install`

Pip will install an older distribution of the code that will only run in Python 2, but Spotipy's GitHub page has a more recent release that is compatible with Python 3.

When run, the program outputs what I like to think of as the equivalent of music nerds arguing over musical genres. You provide an artist name and a number, and the terminal will work through Spotify’s API to produce the specified number of individual "mappings" of that artist’s genre as well as an aggregate list of all their associated genres. The program starts by pulling out all the genre categories associated with the given artist as well as those given to artists that Spotify flags as related. Once finished, the program picks one of those related artists at random and continues to do the same until the process returns no new genre categories, building up a list of associated genres over time.

So, in short, you give the program an artist and it offers you a few attempts at describing that artist generically using Spotify's catalog, the computational equivalent of instigating an argument about genre in your local record store. Here are the results for running the program three times for the band New Order:



* * *



`Individual genre maps`

`Just one nerd's opinions on New Order:`

`['dance rock', 'new wave', 'permanent wave', 'new romantic', 'new wave pop', 'hi nrg', 'europop', 'power pop', 'album rock']`

`Just one nerd's opinions on New Order:`

`['dance rock', 'new wave', 'permanent wave', 'gothic metal', 'j-metal', 'visual kei', 'intelligent dance music', 'uk post-punk', 'metropopolis', 'ambient', 'big beat', 'electronic', 'illbient', 'piano rock', 'trance', 'progressive house', 'progressive trance', 'uplifting trance', 'quebecois', 'deep uplifting trance', 'garage rock', 'neo-psychedelic', 'space rock', 'japanese psychedelic']`

`Just one nerd's opinions on New Order:`

`['dance rock', 'new wave', 'permanent wave', 'uk post-punk', 'gothic rock', 'discofox', 'madchester', 'britpop', 'latin', 'latin pop', 'teen pop', 'classic colombian pop', 'rai', 'pop rap', 'southern hip hop', 'trap music', 'deep rai']`

`Aggregate genre map for New Order:`

`['dance rock', 'new wave', 'permanent wave', 'new romantic', 'new wave pop', 'hi nrg', 'europop', 'power pop', 'album rock', 'gothic metal', 'j-metal', 'visual kei', 'intelligent dance music', 'uk post-punk', 'metropopolis', 'ambient', 'big beat', 'electronic', 'illbient', 'piano rock', 'trance', 'progressive house', 'progressive trance', 'uplifting trance', 'quebecois', 'deep uplifting trance', 'garage rock', 'neo-psychedelic', 'space rock', 'japanese psychedelic', 'gothic rock', 'discofox', 'madchester', 'britpop', 'latin', 'latin pop', 'teen pop', 'classic colombian pop', 'rai', 'pop rap', 'southern hip hop', 'trap music', 'deep rai']`



* * *



In each case, the genre maps all begin the same, with the categories directly assigned to the source artist. Because the process is slightly random, the program eventually maps the same artist’s genre differently each time. For each iteration, the program runs until twenty randomly selected related artists return no new genre categories, which I take to be a kind of threshold of completion for one understanding of an artist’s genre.

The results suggest an amalgam of generic influence, shared characteristics, common lineages, and overlapping angles of approach. The decisions I made in how the program interacts with Spotify’s metadata suggest a definition of genre like the one offered by Alastair Fowler: “Representatives of a genre may then be regarded as making up a family whose septs and individual members are related in various ways, without necessarily having any single feature shared in common by all” (41). Genre is fluid and a matter of interpretive opinion - it is not necessarily based on objective links. The program reflects this in its results: sometimes a particular generic mapping feels very coherent, while at other times the script finds its way to very bizarre tangents. The connections do exist in the metadata if you drill down deeply enough, and it is possible to reproduce the links that brought about such output. But the more leaps the program takes from the original artist the more tenuous the connections appear to be. As I wrote this sentence, the program suggested a connection between garage rock revivalists The Strokes and big band jazz music: such output looks less like a conversation among music nerds and more like the material for a Ph.D. dissertation. As the program illustrates, generic description is the beginning of interpretation - not the ending.

Of course, the program does not actually search all music ever: it only has access to the metadata for artists listed in Spotify, and some artists like Prince or the Beatles are notoriously missing from the catalog. Major figures like these have artist pages that serve as stubs for content drawn largely from compilation CDs, and the program can successfully crawl through these results. But this wrinkle points to a larger fact: the results the program produces are as skewed as the collection of musicians in the service’s catalog. Many of the errors I had to troubleshoot were related to the uneven nature of the catalog: early versions of the script were thrown into disarray when Spotify listed no related artists for a musician. On occasion, the API suggested a related artist who did not actually have an artist page in the system (often the case with new or less-established musicians). I massaged these gaps to make this particular exercise work (you’ll now get a tongue in cheek “Musical dead end” or “Artist deleted from Spotify” output for them), but the silences in the archive offer significant reminders of the commercial politics that go into generic and archival formation, particularly when an archive is proprietary. I can imagine tweaking things slightly to create a script that produces _only_ those archival gaps, but that is work for another day. In the meantime, I'll be trying to figure out how [Kanye West might be considered Christmas music](https://en.wikipedia.org/wiki/Yeezus).

Works Cited:

Fowler, Alastair David Shaw. _Kinds of Literature: An Introduction to the Theory of Genres and Modes_. Repr. Oxford: Clarendon Press, 1997. Print.
