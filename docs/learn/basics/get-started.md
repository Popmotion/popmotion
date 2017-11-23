---
title: Get started
description: Introduction to Popmotion's tween animation.
category: basics
next: action-reaction
---

# Get started

Popmotion is a functional, reactive JavaScript motion library.

It allows developers to create animations and interactions from **actions**.

Actions are just streams of numbers, like tweens, physics and pointer tracking.

Actions are unopinionated, so those numbers can be used to create animations with CSS, SVG, React, Three.js... any API that accepts a number as an input.

In this simple guide we're going to install Popmotion, and use it to animate an element with its `tween` animation and DOM `styler`.

## Installation

You can install Popmotion directly from npm:

```bash
npm install popmotion --save
```

Or, you can also download pre-bundled files and fork CodePen playgrounds. Full installation options are available on the [Install Popmotion](/learn/install) page.

## Import

In Popmotion, everything can be imported from the main library:

```javascript
import { tween } from 'popmotion';
```

Or, if you're only using a small subset of the library you can respect your user's bytes by importing everything individually:

```javascript
import tween from 'popmotion/animations/tween';
```

## The "Hello World" tween

A `tween` is a function that changes one number to another, over a set duration of time. If you're familiar with CSS transitions, that is also a form of tweening.

By default, a `tween` will change `0` to `1` over `300` milliseconds:

```marksy
<Example template="Counter" id="a" autostart={false}>{`
const counter = document.querySelector('#a .counter');
const updateCounter = (v) => counter.innerHTML = v;

tween().start(updateCounter);
`}</Example>
```

All examples in the green-bordered boxes are editable; you can edit the above example by writing

```javascript
{ to: 300, duration: 500 }
```

in the `tween` function. The counter will now count up to `300` over the course of half a second.

## Animate!

As web developers, the DOM is our most common target for animations.

So, let's use the exact same animation from before to output to an element's `translateX` property.

For this, we can use the `styler` function:

```javascript
import { tween, styler } from 'popmotion';
```

`styler` exposes [Stylefire](/api/stylefire), which performantly animates HTML and SVG elements by batching renders [once per frame](/api/framesync).

It accepts an `Element`, and returns a get/set interface.

`set`, if called with just a prop name, returns a setter function. So we can swap `updateCounter` with `styler(element).set('x')` to animate the element:

```marksy
<Example template="Ball" id="css" autostart={false}>{`
const ball = document.querySelector('#css .ball');
const ballStyler = styler(ball);

tween({ to: 300, duration: 500 })
  .start(ballStyler.set('x'));
`}</Example>
```

And that's it! Your first animation. 

## Multi-property animations

All animations included with Popmotion can animate:

- Numbers
- Colors
- Objects of numbers and colors
- Arrays of numbers and colors

For instance, by replacing `300` in the previous example with `{ x: 300, scale: 2 }` the action will animate and output `x` and `scale` values:

```marksy
<Example template="Ball" id="object" autostart={false}>{`
const ball = document.querySelector('#object .ball');
const ballStyler = styler(ball);

tween({
  from: { x: 0, scale: 1 },
  to: { x: 300, scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1000
}).start(ballStyler.set);
`}</Example>
```

## Next

This tutorial has covered just the basics for the `tween` animation. You can find more details in the full [tween API docs](/api/tween).

Popmotion uses a simple reactive model. Every animation, like `tween`, and every input is an **action**.

And for every action, there is (naturally) a **reaction**.

In the next tutorial, we'll briefly look at [actions and reactions](/learn/action-reaction).
