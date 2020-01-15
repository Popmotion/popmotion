---
title: Pose is deprecated
description: All versions of Pose are now deprecated.
published: 20200115
author: Matt Perry
---

# Pose is deprecated

Over a year ago I joined [Framer](https://framer.com) to help write the next version of their animation API. This resulted in the release of [Framer Motion](https://framer.com/motion), a production-ready, declarative animation library for React.

It takes Popmotion, which is a low-level, unopinionated animation library, and wraps it in a super-simple API that lowers the time and knowledge investment required for people to make beautifully animated websites.

This raised a problem in that I'd already written a library that did exactly that, [Pose](/pose).

In the broadest strokes the two work quite similarly. Framer Motion just does more, a lot simpler, in roughly the same bundle size.

The key difference between the two is that supporting Pose as an open source library was an untenable situation for me. OSS funding is completely broken.

Framer Motion powers the animations within the Framer UI, and those created by its users. The same way Facebook's dogfooding of React leads to its continued investment, the same is true of Framer Motion. This is a much healthier product.

So with the announcement, we positioned it as the "successor to Pose", and React Pose was deprecated.

## A carnival of flavours

Pose was written as a configurable abstraction that was easy to write different implementations of. Relatively quickly we ended up with React Pose, React Native Pose, and Vue Pose. There was even an unreleased React 360 Pose.

However React Pose was always the primary focus. At it's peak, it was generating over 100k downloads a week. React Native Pose has sat at around 4.5k downloads, while Vue Pose has never breached 2k.

It was easy to write the different Pose implementations, but the resulting abstraction tree meant that it was a nightmare to maintain them. I chose the wrong abstractions and there's probably a deep dive I could do into why it became a nightmare in ways that Framer Motion won't.

When I officially deprecated React Pose, I effectively deprecated the lot. Since then there's been no updates to the React Native or Vue flavours and, because I no longer do this in my free time, there won't be in the future. So today I'm making it official.

## What next?

React Pose users already have an upgrade path in Framer Motion, and can follow the [official migration guide](https://www.framer.com/api/motion/migrate-from-pose/).

I would love to write a React Native version of Framer Motion, but there's plenty of cool animation-related features to write for Framer. It's also hard to gauge interest - the Pose download numbers above paint an unfortunate but incomplete picture. If you're interested in a React Native version let us know on the [GitHub ticket](https://github.com/framer/motion/issues/180).

As for Vue Pose, there are no current plans for a Vue Framer Motion and I suspect there won't be.

All these libraries will continue to be available on npm, and the documentation will continue to be found in the footer on this site. I just won't be releasing updates to the code, so they may break in future backwards-incompatible releases of their respective view libraries.

The code itself will be accessible in the [Popmotion `master` branch](https://github.com/popmotion/popmotion) for at least another month but beyond that you might need to go spelunking in the repo history if you want to fork it.

Popmotion itself has a brighter future. Framer Motion's existence and upcoming Framer product requirements has opened up space and created demand for Popmotion to become even lower-level, even more unopinionated, so look forward to these changes in the future.

---

[Framer Motion](https://framer.com/motion)