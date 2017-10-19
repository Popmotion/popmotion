# <a href="https://popmotion.io"><img src="https://cloud.githubusercontent.com/assets/7850794/21642571/1910a15e-d27b-11e6-84c7-19e88e207c14.png" height="52" width="243" alt="Popmotion" /></a>

### A **5kb**, **functional**, **reactive** motion library.

[![npm version](https://img.shields.io/npm/v/popmotion.svg?style=flat-square)](https://www.npmjs.com/package/popmotion)
[![npm downloads](https://img.shields.io/npm/dm/popmotion.svg?style=flat-square)](https://www.npmjs.com/package/popmotion)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](http://twitter.com/popmotionjs)

### [Get Started](https://popmotion.io/learn/get-started)
### [Full API documentation](https://popmotion.io/api)

### Popmotion does:
- **[Decay](https://popmotion.io/api/decay):** Exponentially-decayed velocity for motion akin to iOS scroll-deceleration.(https://popmotion.io/api/easing) functions.
- **[Keyframes](https://popmotion.io/api/keyframes):** Define a series of keyframes to animate between.
- **[Pointer](https://popmotion.io/api/pointer):** Full support for mouse and multitouch inputs.
- **[Physics](https://popmotion.io/api/physics):** Integrated, mutable simulation of velocity, acceleration, friction and springs.
- **[Spring](https://popmotion.io/api/spring):** An accurate spring-mass system ported from Apple's CASpringAnimation.
- **[Tween](https://popmotion.io/api/tween):** Change a value over specific duration of time. Full suite of [easing and easing creation]

### Popmotion is:
- **Tiny:** At **5kb max**, it's 88% smaller than GreenSock TweenMax. You can also import each action individually.
- **Reactive:** Super-simple Rx-inspired API for subscribing to streams of animation events.
- **Composable:** All actions can be **delayed**, **staggered** **merged**, **crossfaded** and **chained**.
- **Cross-platform:** Runs on **IE9+**, plus **Node**-based environments like Arduino.
- **Performant af:** Batches jobs on the [Framesync](https://github.com/popmotion/framesync) `update` render step. Stands up to popular alternatives in [performance tests](http://codepen.io/popmotion/pen/zNYXmR).
- **Typesafe and tested:** Written in TypeScript, with Flow definitions available on [flow-typed](https://github.com/flowtype/flow-typed). Full test coverage.
- **Supported:** Full ecosystem of awesome plugins.

## Examples
TODO

## Official plugins
- **[Color Tween](https://popmotion.io/api/color-tween):** Tweens colors using a sophisticated color blending equation that prevents weird brightness drops.
- **[Draggable](https://popmotion.io/api/draggable):** Make elements draggable with just one line of code.
- **[React](https://popmotion.io/api/react):** A component for animating **anything** in React. 
- **[Spinnable](https://popmotion.io/api/spinnable):** Make elements spinnable with just one line of code.
- **[Timeline](https://popmotion.io/api/timeline):** Programmatically create complex sequences of animations.

## Installation

```bash
npm install --save popmotion
```

In your javascript module:

```javascript
import { tween } from 'popmotion';
```

### [Get Started](https://popmotion.io/learn/get-started)
### [Full API documentation](https://popmotion.io/api)
