---
title: Get Started
description: Introduction to Popmotion's tween, physics and user input tracking functions.
category: basics
---

# Get Started

Popmotion is a JavaScript motion engine that allows developers to combine **actions**, like tweens, physics and input tracking, to create polished and engaging interfaces.

In this simple guide we're going to install Popmotion and create our first animation using the simplest action, the tween.

## Installation

```javascript
npm install popmotion --save
```

## The "Hello World" tween

A tween is a function that changes one number to another, over a set duration of time.

```javascript
import { tween } from 'popmotion';
```

By default, a tween will change `0` to `1` over `300` milliseconds:

```marksy
<Example template="Counter" id="a">{`
const counter = document.querySelector('#a .counter');

tween({
  onUpdate: (v) => counter.innerHTML = v
}).start();
`}</Example>
```

All examples on this site are editable; you can edit the above example by adding

```javascript
  to: 300,
  duration: 1000
```

properties to the `tween`. The counter will now count up to `300` over the course of one second.

## Animate!

This raw value output is very powerful. It can be used to drive animations in Three.js, React, D3 - anything that takes a number as an input.

As web developers our most common use-case is to animate the DOM. Popmotion provides in-built functions to help render CSS and SVG.

```javascript
import { css, svg } from 'popmotion';
```

By creating a new `onUpdate` function with a `css` renderer, we can quickly make this tween an animation:

```marksy
<Example template="Ball" id="b">{`
const ball = document.querySelector('#b .ball');
const ballRenderer = css(ball);

tween({
  to: 300,
  duration: 1000,
  onUpdate: (x) => ballRenderer.set('x', x)
}).start();
`}</Example>
```
