---
title: Nonsense about picking a default easing
published: 20170630
---

# Nonsense about picking a default easing

Choosing default values for a library can be difficult. Should you have the polarised luck of your library being used by others:

- Those defaults will be used, often unwittingly, by your consumers, and
- They become difficult to revise, in case you change or break other people's stuff.

In an animation framework, these choices are going to manifest themselves in a visceral way. With that, there's the power and potential to choose intelligent values and make parts of the web feel a certain way.

As the userbase of Popmotion is relatively small, I've always felt quite comfortable shirking the shackles of API stability until I finally felt like it had arrived at something resembling the Good Place.

Over the past few years of development and the oscillating GitHub activity graph left in its wake, there has been one (one) decision that I felt like I got right at the start. Making the `tween` default `ease` `easeOut`.

## Animation vs interaction

Like many greying front enders, my first exposure to UI animation was [Greensock's](https://greensock.com) ActionScript library, TweenMax. For a platform so disposed to garish show-off loading screen animations, Flash animations were disgusting to write unless you were using TimelineMax.

But that's largely what we used it for: showy animations. The Flash days were as OTT and as divorced from the user's interests as the Amiga demoscene. All you wanted to do was play your cracked version of Worms but first you had to sit through the seizure-inducing cock-prancing of some asshole in Norwich. At least Flash intros occasionally had a skip button.

Greensock, in its sunrise years, had the right intentions. It did, and still to this day, has an `easeOut` as default. That's because the author understands, despite our hedonism and heathenism, that animation in UI design **should** be as a result of a user's actions.

Flash died, and the community collectively denied any involvement, lest we be hauled in front of the front end equivalent of the Nuremberg Trials. "What, like Gordon?" Nobody's buying it, turncoat.

After that, it was all about jQuery. jQuery was incredible for literally **everything**, which in the new world of composable asynchronous micropackages is probably why we collectively deny any involvement, and why I'm talking about it in the past tense even while it's standing **right there**.

For me, and maybe for you, the coolest thing about jQuery was `animate`. It was amazing to finally get something resembling movement in humble HTML. It defaulted to `swing` easing, which is the flavoured water of easing fruit juices, an `easeInOut` of homeopathic strength.

## The problem with easeInOut

To arrive at an actual point, the problem with `easeInOut` is that it **feels** incredibly slow. When we [watch videos about the principles of animation](https://vimeo.com/93206523), one of the things we're taught is that objects in motion don't start in motion and they don't stop dead.

They start slow, and end slow.

So without thinking any further we use `easeInOut`, or a framework like jQuery makes the choice to default to it. And then everyone uses it, by default. And everything feels sluggish, by default. Why?

## Why

Our eyes and brain are hardwired to detect motion. We've evolved to find that motion distracting. Motion indicates that the present situation has changed, and if we'd prefer to survive, we need to react. We **need** that distraction.

When you're scrolling through a website, and a space opens for an advert in the middle of your article, and everything jumps around, and then after a couple of seconds your crap, overpriced "4G" connection finally loads the animated banner ad, which doesn't stop animating, until you scroll past it, when it needlessly hides, and your text jumps back up, and you think of the poor bastard forced to make it, their hopes, their dreams, their broken dreams - all of those things are distracting.

And because they're not trying to kill you, or otherwise impart information, they're annoying.

A **very** tiny amount of non-user-instigated motion is fine in a UI, as long as it correctly indicates that **the situation has changed, and the user needs to react**. A small "new message" dot, probably. Or a notification panel, possibly.

For this kind of animation, an `easeInOut` is very appropriate. It gives the user a little bit of time to acclimatise to the movement, and it stops quite gently. It also adheres to the principles of animation, being the autonomous being that it is.

The **vast majority** of animation in UI is, or should be, user instigated. It is the result of an interaction.

For these animations, these interactions, the user already knows that an action has taken place. **They** made it. They are the motion, and the situation has changed, and we need to react. The "in" of an `easeInOut` feels sluggish in this instance because for god's sake hurry up, get on with it.

`easeInOut` starts in your reality and stays there. An `easeOut`, conversely, starts fast and finishes slow.

It absolutely bursts with energy at the moment of contact, the moment the user's energy, **their** energy, travels through their finger, straight into your interface. The motion starts to slow as their energy naturally dissipates, from their reality into yours, bridging the gap.

`easeInOut` is barely bothered to get out of bed, like a stupid stroppy teenager who probably doesn't even have a finger. Probably.

A user will feel that difference, even if it's subconscious, even if I have to pretend to myself that deep down they **know**, just to justify the hours of my life I've spent writing (and now writing about) animations.

This is why Greensock comes with `easeOut` by default. It's why [Anime.js](http://animejs.com/) uses a very fruity `elasticOut`, which is opinionated (right!) but very solid choice.

Whereas, CSS transitions default to the `swing`-alike `ease`, which is exactly as bland as it sounds. Worse, the native Web Animations API uses `linear` easing, which is, frankly, a fucking crime.

## What have we learned?


