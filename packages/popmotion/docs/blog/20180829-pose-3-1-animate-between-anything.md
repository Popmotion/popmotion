---
title: "Pose 3.1: Animate between any unit type"
description: A look at the latest Pose features, changes, and a hint of what's next
published: 20180830
author: mattperry
---

# Pose 3.1: Animate between any unit type

This week we released [Pose 3.1](/pose), Animate Between Anything.

It's a much-requested feature that enables you to animate `x`, `y`, `width`, and `height` between any unit type.

Previously this capability was only available via FLIP (by setting `flip: true`), but in some cases you may want to be animating `width` and `height` directly. And of course FLIP doesn't work with `x` and `y` transforms.

Now, you can animate `'100vh'` to `'50%'`, or `'calc(50vw - 50%)'` to `0`.

<CodeSandbox id="k3qx6p3r55 " />

You can also animate `width` and `height` to and from `'auto'`.

<CodeSandbox id="pwk5yq8pzx " />

It works with any valid CSS style, and the animations themselves happen in pixels so spring animations feel consistent between every transition.

When the animation finishes, the defined style is applied. So your designs will continue to be responsive.

## Still to come

This will probably be the last big new feature for a few weeks. I'll be working on more tutorials and examples, as well as a bug burn down.

I'll also be taking another look at React Native Pose. Compared to Pose, it's still fairly limited.

This owes in part to the restrictions in the underlying React Animated library. In part, its the difficulty in animating colors, and the ease with which an animation can be delegated to the JavaScript thread.

I'll be looking into potentially porting it to [Reanimated](https://github.com/kmagiera/react-native-reanimated) to enable native-driven gestures, and to try and bring the library to feature-party with Pose.
