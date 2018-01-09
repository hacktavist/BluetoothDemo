# Bluetooth Demo

### Bluetooth Companion App For Arduino Project

This app coincides with an arduino project I upgraded from my recent halloween project. The original project used a distance sensor to light up LED "eyes" that were placed into a rubber skull and played sounds from an adafruit audio fx board. I swapped out the distance sensor with a bluetooth board and when the board receives the numbers 0-9 it either plays sounds or toggles the LED eyes on or off.

It is a very simple app that connects only when it sees the bluetooth board named skull (this check can be changed for different names). One thing about this check that took me a bit to figure out was that my bluetooth board placed a space before the name (eg the name skull was read as " skull" in the conditional). I only had the one board to play with and when changing the name it always had a space in front of the name...I am unsure if this is solely the hardware or if there is something I am missing elsewhere.

# TODO:

* Add a variable for the name check ( pretty sure it is hardcoded right now)
* Come up with a better way to connect to the board ( at the moment it takes too much time, around 5 seconds, or at least it feels like it, maybe even longer)
* I'll think of more things that I don't like and want to fix

# Video of Eyes

Woops, lost the video of the app but this is the test video to make sure the bluetooth serial connection was working. I'll work on getting a new one made, but I will be at the whim of the new owner of the skull (which means it may not happen).  

[![Alt text](https://img.youtube.com/vi/himhceT05YY/0.jpg)](https://www.youtube.com/watch?v=himhceT05YY)
