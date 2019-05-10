---
author: brandon-walsh
date: 2013-05-14 09:58:37+00:00
layout: post
slug: arduino-rainbow-hack
title: Arduino Rainbow Hack
categories:
- Experimental Humanities
---

The following was co-authored and co-hacked with [Claire](http://www.scholarslab.org/people/claire-maiers/).

Claire and I went to the [Arduino](http://www.arduino.cc) Hackday hosted by the Scholars’ Lab on Friday. We had no idea what we were getting into, which made it all the more fun. [Jeremy](http://www.scholarslab.org/people/jeremy-boggs/) brought in a bunch of Arduino kits of all shapes and sizes, and various people went to work to see what they could make out of them.

First Claire and I got a blinking light to work. From there we decided to skip several chapters to make a little music player using a piezo speaker component. At that point we went off the map, dreaming big and working off the page. We started out working with this [schematic](http://www.arduino.cc/en/Tutorial/Melody), but we wanted to expand things a little.

I apologize in advance for whatever vocabulary gap there might be in the discussion below; it was my first time coding in C.

For one, this set-up only uses a single octave major scale. We opened things up by expanding the range of tones the speaker could play, including both a chromatic scale and adding an extra octave. One difficulty here was in the way that way that accidentals would be read by the board. At first we tried to use standard notation – f sharp would be represented by f#. But the code finds the notes in the melody by reading character by character through an array. So when the computer sees “cc#”, it processes it as two ‘c’s and one nonsense syllable that it can’t process. There is probably a more elegant solution, but we got around this by associating the accidentals with new characters entirely

C#/Db             =>       l

D#/Eb              =>       m

F#/Gb              =>       n

G#/Ab             =>       o

A#/Bb             =>       p

Next, we added an extra octave. To extend the range, we hard coded frequencies for the new notes according to the formula given by the original Arduino code:

timeHigh = period / 2 = 1 / (2 * toneFrequency)

We probably could have done this in a more dynamic way. Or, as [Eric](http://www.scholarslab.org/people/eric-johnson/) and [Ronda](http://www.scholarslab.org/people/ronda-grizzle/) showed, we could have just downloaded a tone library to do this for us. They were jamming out to the Star Wars theme while we were still trying to get things working.  But eventually, we were able to program in the opening of “Mary Had a Little Lamb,” Mozart’s _Lacrimosa_, John Coltrane’s “26-2,” and “Somewhere Over the Rainbow.”

Here is where things got really ambitious, we came up with the idea to incorporate a RGB LED light that would change colors each time there was a note change in “Somewhere Over the Rainbow.” Rainbow lights for a song about rainbows.

To get the light working we worked off a slightly modified version of [this schematic](http://ardx.org/CODE12S), mashed in with the piezo tutiorial. With some quick help from [Eric](http://www.scholarslab.org/people/eric-rochester/), we modified the light arrangement so that each generates a random RGB combination. We then synchronized this with the rhythm of the melody.

In terms of the actual circuitry, we just split the digital signal so that it went out to two different parts of the bread board simultaneously and then fed information to both pins. Later we added a volume knob to reduce the maddening noise. You can see attached photos below, though you’ll have to meet us halfway with our diagram of the breadboard.

A later, unsuccessful attempt to key each frequency to a particular color resulted in a light that got brighter or darker depending on the note. I think with a little more time I could fix that by hard coding particular RGB values to particular frequencies, but we were trying to do it dynamically by converting the frequency directly into an intensity value.

Behold our final product!

[gist id=5569210]![Arduino Rainbow Circuit Map](http://static.scholarslab.org/wp-content/uploads/2013/05/photo-300x224.jpg)[![Arduino Breadboard Diagram](http://static.scholarslab.org/wp-content/uploads/2013/05/photo-1-300x224.jpg)](http://static.scholarslab.org/wp-content/uploads/2013/05/photo-1.jpg)
