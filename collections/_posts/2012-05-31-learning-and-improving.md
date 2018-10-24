---
author: eric-rochester
date: 2012-05-31 14:23:08+00:00
layout: post
slug: learning-and-improving
title: Learning and Improving
categories:
- Research and Development
---

Mentoring and training have always been a big part of the Scholars' Lab's mission. With the [Praxis Program](http://praxis.scholarslab.org/), that focus has only intensified over the last year. All this emphasis on growth has me thinking about how I try to improve professionally myself.

For the last few years, I've been delving into [functional programming](http://en.wikipedia.org/wiki/Functional_programming). This started by working first with [Clojure](http://clojure.org/) and more recently with [Haskell](http://www.haskell.org/haskellwiki/Haskell). In 2008 I wrote an extended tutorial introduction to Clojure and natural language processing as a [series of blog posts](http://writingcoding.blogspot.com/2008/06/clojure-series-table-of-contents.html). Although they're a little out of date, they still see some traffic.

Not long ago, [Manuel Kiessling](http://manuel.kiessling.net/) commented on the page describing [some functions for the stemming algorithm](http://writingcoding.blogspot.com/2008/07/stemming-part-7-more-functions.html), suggesting an improvement to the `m` function.

This function takes the word currently being stemmed, along with some other data, and counts the number of consonant sequences between the beginning of the word and the end (not counting the initial consonant cluster, if there was one). The [description of the algorithm](http://tartarus.org/~martin/PorterStemmer/def.txt) gives these examples:

<table >
  <tr >Inputs Consonant Sequence Count</tr>
  <tbody >
    <tr >
<td >tr, ee, tree, y, by
</td>
<td >0
</td></tr>
    <tr >
<td >trouble, oats, trees, ivy
</td>
<td >1
</td></tr>
    <tr >
<td >troubles, private, oaten, orrery
</td>
<td >2
</td></tr>
  </tbody>
</table>

For reference, here was what I originally wrote:

[sourcecode language="clojure"]
(defn m
  "Measures the number of consonant sequences between
  the start of word and position j. If c is a consonant
  sequence and v a vowel sequence, and <...> indicates
  arbitrary presence,
    <c><v>       -> 0
    <c>vc<v>     -> 1
    <c>vcvc<v>   -> 2
    <c>vcvcvc<v> -> 3
    ...
  "
  [stemmer]
  (let [
        j (get-index stemmer)
        count-v (fn [n i]
                  (cond (> i j) [:return n i]
                        (vowel? stemmer i) [:break n i]
                        :else (recur n (inc i))))
        count-c (fn [n i]
                  (cond (> i j) [:return n i]
                        (consonant? stemmer i) [:break n i]
                        :else (recur n (inc i))))
        count-cluster (fn [n i]
                        (let [[stage1 n1 i1] (count-c n i)]
                          (if (= stage1 :return)
                            n1
                            (let [[stage2 n2 i2] (count-v (inc n1) (inc i1))]
                              (if (= stage2 :return)
                                n2
                                (recur n2 (inc i2)))))))
        [stage n i] (count-v 0 0)
        ]
    (if (= stage :return)
      n
      (count-cluster n (inc i)))))
[/sourcecode]

Wow. That's a mess.



<blockquote>

> 
> _(For better syntax color highlighting, see [this Gist](https://gist.github.com/2628865).)_
> 
> 
</blockquote>



Essentially, this is a [state machine](http://en.wikipedia.org/wiki/State_machine) that kind of [trampolines](http://en.wikipedia.org/wiki/Trampoline_(computers)) through the characters in a word. `count-v` walks through a vowel cluster; `count-c` walks through a consonant cluster; and `count-cluster` controls the process of alternating between these two functions. The first result passed out of each of these (usually assigned to a variable named `stage`) is what needs to happen next: either `:return` from `m` with the current count or `:break` from counting the current sequence (either vowel or consonant). The other two outputs are the character currently being considered and the number of consonant sequences seen so far.

Don't worry if that doesn't make sense. The code up there is actively obtuse. It's trying to make you dumber.

Manuel suggested merging the three functions together to get this:

[sourcecode language="clojure"]
(defn m
  "Measures the number of consonant sequences between
  the start of word and position j. If c is a consonant
  sequence and v a vowel sequence, and <...> indicates
  arbitrary presence,
    <c><v>       -> 0
    <c>vc<v>     -> 1
    <c>vcvc<v>   -> 2
    <c>vcvcvc<v> -> 3
    ...
  "
  ([stemmer]
    (m stemmer 0 0))
  
  ([stemmer num-c num-cs]
    (if (not (seq (:word stemmer))) ; Is the word empty? Then we reached the beginning of the stemmer
      (if (> num-c 1)               ; THEN1: More than 2 consonants in current counting?
        (inc num-cs)                ; THEN2: we have one more consonant sequence, and we return the number of sequences found plus 1
        num-cs)                     ; ELSE2: Return the number of sequences found
      (if (consonant? stemmer)                        ; ELSE1: Is there a consonant at the current index?
        (recur (pop-word stemmer) (inc num-c) num-cs) ; THEN3: increase the number of currently consecutice consonants, recur
        (if (> num-c 1)                               ; ELSE3: If not, check if we found more than 1 consecutive consonants
          (recur (pop-word stemmer) 0 (inc num-cs))   ; THEN4: If yes, we found one more sequence
          (recur (pop-word stemmer) 0 num-cs))))))    ; ELSE4: If not, then we found only one, and start anew
[/sourcecode]

It's better, but still not great. (It also doesn't work, the way it's presented here, but fixing that wouldn't be hard, so I'm neither going to make an issue of it nor fix it.)

So what's up? I thought that functional programming was supposed to be concise yet readable.

Well, when I wrote the first version, I was still learning to think functionally. I ended up with an imperative algorithm, without mutable state.

In other words, I was enjoying the worst of both worlds.

I decided to refactor again, this time being more functional. Here's what I ended up with:

[sourcecode language="clojure"]
(defn m
  "Measures the number of consonant sequences between the start of a word an
  position j. If c is a consonant sequence and v a vowel sequence, and <...>
  indicates arbitrary presence,
  <c><v>       -> 0
  <c>vc<v>     -> 1
  <c>vcvc<v>   -> 2
  <c>vcvcvc<v> -> 3
  ...
  "
  [stemmer]
  (let [consonant-group? (fn [ws] (consonant? (first ws)))]
    (->> stemmer
      (iterate pop-word)                    ; a sequence of all the parts of the word, from the whole word to the first letter.
      (take-while (fn [w] (seq (:word w)))) ; stop when done with the word
      (partition-by consonant?)             ; break it into vowel/consonant groups
      (reverse)                             ; reverse so the next step works
      (drop-while consonant-group?)         ; remove the first (was at the end of the sequence) constant group
      (filter consonant-group?)             ; filter out vowel groups
      count)))                              ; finally, count the remaining consonant groups
[/sourcecode]

Better (although I already see some places that could be improved). It really doesn't need the comments I added, and if this weren't pedagogical code, I would have left them out.

So what made the difference?

Primarily functional programming tries to abstract control flow out into [higher-order functions](http://en.wikipedia.org/wiki/Higher_order_functions) like `map`, `filter`, and `reduce`. (Or in this case, `iterate`, `take-while`, `partition-by`, `drop-while`, and `filter`.) In other words, the code to walk over the items in a sequence (`map`) is separated from what you do with those items, or the code to remove items from a list (`filter`) is separated from the predicate that determines which items to keep. This makes the data flow very clear.

But what is more interesting about this exercise is reflecting on my own growth as a programmer. As I mentor others, I often want to save them the pain and ugliness I've been through. But I need to remember that the only way to learn to write clear code is to write spaghetti code first and live through the fall-out.
