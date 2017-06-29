---
title: Nonsense about default easing
published: 20170625
---

# Nonsense about default easing

Choosing default values for a library can be difficult. Should you be lucky enough for someone to use your code:

1. Those defaults will be used, sometimes unwittingly, by your consumers, and
2. They become difficult to revise, lest you change or break other people's stuff.

The first, rife with power (for good!)

The second, stuffed with boring old responsibility (to others, the worst type.)

As the userbase of Popmotion is relatively small, I've always felt quite comfortable shirking the shakles of API stability until I finally felt like it had arrived at something resembling the Good Place.

Over all the years of development, and the big dipper Github activity graph that's left in its wake, there has been one (one) decision that I felt like I got right at the start. Making the `tween` default `ease` `easeOut`.

## Interaction > animation

Like many greying front enders (do we say that?), my first exposure to UI animation was [Greensock's](https://greensock.com) ActionScript library TweenMax. For a platform so disposed to garish show-off loading screen animations, Flash animations were disgusting to write unless you were using TimelineMax.

But that's largely what we used it for: showy animations. The Flash days were as OTT and as divorced from the user's interests as the Amiga demoscene. All you wanted to do was play your cracked version of Super Skidmarks but first you had to sit through the seizure-inducing cock-prancing of some asshole in Norwich. At least the Flash nonsense occasionally had a skip button.

Greensock, in its sunrise years, had the right intentions. It did, and still to this day, has an ease-out as default. That's because the author understands, despite our headonism and heathenism, that animation in UI design **should** be as the result of a user's actions. We'll get back to this later.

Flash died, and we collectively denied any involvement, lest we be hauled in front of the front end equivalent of the Nuremburg Trials. "What, like Gordon?" Nobody's buying it, turncoat.

After that, it was all about jQuery. jQuery was incredible for literally **everything**, which in the new world of npm is probably why we collectively deny any involvement, and why I'm talking about it in the past tense, as if it were mute grandfather who should have given up decades ago.

For me, and possibly for you, the coolest thing about jQuery was `animate`. It was amazing to finally get something resembling movement in humble HTML. It defaulted to `swing` easing, which is to `easeInOut` what Volvic Touch of Fruit is to actual fruit juice.

## The problem with easeInOut

To arrive at an actual point, the problem with `easeInOut` is that it **feels** absolutely horrid. When we read about the principles of animation, one of the things we're taught is that objects in motion don't start in motion and they don't stop dead.

They start slow, and end slow.

So we use `easeInOut`, or a framework like jQuery defaults to it. And then everyone uses it, by default. And everything feels sluggish. Why?

## Why

Our eyes are hardwired to detect motion. We've evolved to find motion distraction. Motion indicates that the present situation has changed, and if we'd prefer to survive, we need to reevaluate it. We **need** to be distracted.

When you're scrolling through a website, and a space opens for an advert in the middle of your article, and everything jumps around, and then after a couple of seconds your crap, overpriced "4G" connection finally loads in an animated banner ads, which doesn't stop animating - all of those things are distracting.

And because they're not trying to kill you, or otherwise impart information, they're annoying.

A **very** tiny amount of non-user-instigated motion is fine in a UI, as long as it correctly indicates that **the situration has changed, and the user needs to re-evaluate it**. A small "new message" dot, probably. Or a <another example>, possibly.

For this kind of animation, an `easeInOut` is very appropriate. It gives the user a little bit of time to acclimatise to the movement, and it stops quite gently. It also adheres to the principles of animation, being the autonomous ntofication dot that it is.

The **vast majority** of animation in UI is, or should be, user instigated. It is the result of an interaction. It is the click of a button that opens a pop up, and it is **not** a popup that just appears because your mouse movements look incriminatingly like a those of a person who is about to leave the site for good. Like a bunny boiling website.

For these animations, the user already knows that an action has taken place. **They** made it. We don't need to lead them softly. The "in" of an `easeInOut` now just feels sluggish because for god's sake hurry up, get on with it.

An `easeOut`, conversely, starts fast and finishes slow. It absolutely bursts with energy at the moment of contact, the moment the user's energy, **their** energy, travels through their finger or finger surrogate, straight into your interface. 

## Peer pressure



[Greensock](), in its salt and peppered wisdom, comes with `easeOut` by default, while [Anime.js](http://animejs.com/) uses a very fruity `elasticOut`.

The native Web Animations API uses `linear` easing, which is, frankly, a fucking crime.



For these animations, the user already knows that an action has taken place. We don't need to lead them in softly. And worse, the "in" part of the in-out easing actually feels sluggish because for god's sake hurry up, get going.

An easeOut bursts with energy, energy that the user imparted upon the interface. That's **their** energy, it's travelled down their surrogate finger (or on a touch device, their real finger) and imbued your interface with Duracell bunnies. `easeInOut` is barely bothered to get out of bed, like a stupid stroppy teenager who probably doesn't even have a finger. Probably.

A user will feel that difference, even if its subconscious, even if I have to pretend to myself that deep down they **know** just to justify the hours of my life I've spent writing (and now writing about) animations.


