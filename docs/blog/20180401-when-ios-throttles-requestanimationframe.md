---
title: When iOS throttles requestAnimationFrame to 30fps
description: In specific situations, iOS throttles rAF to 30fps. Here's when, and why it's wrong.
published: 20180401
author: Matt Perry
---

# When iOS throttles `requestAnimationFrame` to 30fps

Yesterday, I was on my iPhone looking at the examples on the [Popmotion homepage](https://popmotion.io). They looked odd, clearly suffering a sluggish stutter, the affliction of (**gasp**) 30 frames per second:

<CodePen id="dJzaMo" />

I'd seen this illness once before. If you're looking at the example above on an iPhone, check out this unthrottled example:

<CodePen id="WXOPWX" />

Looks the same, right? To other readers, this second example runs at a silky 60fps. Animation as the gods intended.

Noticing this throttling for the first time, it was clear it was only affecting animations running on CodePen. The reason, though, was initially unclear.

I initially thought that perhaps Popmotion needed optimisation, but using Chrome's performance tab and CPU throttling showed that wasn't the case.

Next, I assumed CodePen itself was doing **something** weird in the background the cause the stuttering, but their Twitter helpfully pointed me to the Debug View, only available to the author of the Pen.

It worked. 60fps on iPhone, on CodePen. My first realisation:

## iOS throttles `requestAnimationFrame` in iframes

Specifically, it turns out, **cross-domain iframes**. Every CodePen embed.

As detailed in this [WebKit changeset](https://trac.webkit.org/changeset/215070/webkit), the throttling is cleared once a user interacts with the iframe.

Try it for yourself. If you're on iOS, take a look at the tween animation again:

<CodePen id="WXOPWX" />

This time, tap anywhere within the frame and watch as the 30fps frame cap is remedied in front of your very eyes.

I can't find a stated reason for this behaviour. But, to make an assumption, iframes are commonly used for advertising. Adverts are fairly liberal with your CPU cycles, so the throttling is to prevent adverts from eating your battery.

The performance cap is cleared once the user interacts with the iframe and indicates that the advert isn't unwelcome.

It's a noble assumption but ad blockers exist. I highly doubt the failed iAds platform, or in-app advertising, are throttled to 30fps.

Instead, the WebKit team is scorching the earth to save a few minutes of battery life.

It'd make more sense to throttle, or even pause entirely, iframes that lie outside the viewport. This would probably save more battery life while maintaining the quality of in-viewport animations.

Back to the present, this didn't explain why the examples on the homepage were stuttering. They're part of the page itself, not an iframe in sight.

The familiar feeling of nausea from standing on the precipice of a rabbit hole of unknown depth was cut mercifully short when I checked the page on another iPhone.

60fps. I checked the OS version, both the same. Looking at the two phones side by side, bewildered at what the difference between them could be.

Until I saw it, my second realisation:

![Take me from this earth](/static/images/low-power-mode.png)

## iOS throttles `requestAnimationFrame` in low power mode

As described in this [WebKit bug](https://bugs.webkit.org/show_bug.cgi?id=168837), iOS throttles `requestAnimationFrame` to 30fps whilst in low power mode is active.

## Conclusion

iOS throttles `requestAnimationFrame` to 30fps in cross-domain iframes and in low power mode.

It's a noble but misguided attempt at sacrificing quality in return for extending battery life.

It's no wonder that the web has a continuing reputation for being of a lower-quality platform than native apps. This kind of nanny-state hand holding would **never** be imposed on apps.

This decision doesn't exist in isolation. Take Safari and its magically-appearing bottom navigation. It prevents web navigation being put in the one position recommended by Apple's own app guidelines!

I've covered the litany of reasons the [mobile web sucks](https://popmotion.io/blog/20170710-mobile-web-is-awful-and-were-all-to-blame/) before so I won't hammer these points home.

The point is, at this point 
