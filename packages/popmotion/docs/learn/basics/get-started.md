---
title: Get started
description: Introduction to Popmotion's tween animation.
category: basics
next: action-reaction
---

# Get started

Popmotion is a low-level, functional JavaScript motion library.

It allows developers to animate in any JavaScript environment (browser, Node), to any render target (CSS, SVG, Three.js, canvas, etc).

**Note:** If you're looking for React animation, you're probably after the [Motion](https://framer.com/motion) library. For absolute animation freedom, carry on reading!

In this simple introductory guide we're going to install Popmotion and use it to animate a DOM element using the `tween` animation.

## Installation

You can install Popmotion directly from npm:

```bash
npm install popmotion --save
```

Alternatively, you can also **download pre-bundled files** or **fork CodePen playgrounds**. Full installation options are available on the [Install Popmotion](/learn/install) page.

## Import

In Popmotion, everything can be imported from the main library like this:

```javascript
import { tween } from 'popmotion';
```

## The "Hello World" tween

A `tween` is a function that changes **one number to another, over a set duration of time**. If you're familiar with CSS transitions, that's a form of tweening.

By default, a `tween` will change `0` to `1` over `300` milliseconds:

```marksy
<Example template="Counter" id="a" autostart={false}>{`
const counter = document.querySelector('#a .counter');
const updateCounter = (v) => counter.innerHTML = v;

tween().start(updateCounter);
`}</Example>
```

**All examples in the green-bordered boxes are editable**. Try editing the above example by writing

```javascript
{ to: 300, duration: 500 }
```

as the argument to the `tween` function. The counter will now count up to `300` over the course of half a second.

## Animate!

As web developers, the DOM is our most common render target for animations.

So, let's use the exact same animation from before to output to an element's `translateX` property.

We can do this by setting the element's `style` property.

```javascript
const element = document.querySelector('.ball');

tween({ to: 300, duration: 500 })
  .start((v) => element.style += 'translateX(' + v + 'px)');
```

Alternatively there's a Popmotion library called [Stylefire](/stylefire) that provides a simple API for setting HTML and SVG styles. It also aggregates all style changes and renders them just once per frame, making it performant to run multiple different animations on a single DOM element.

```
npm install stylefire
```

Import `styler`:

```javascript
import { tween } from 'popmotion';
import styler from 'stylefire';
```

`styler` accepts a single HTML or SVG element. It returns a simple get/set interface for styling the element that unifies the transformation model of CSS and SVG and batches all styling to a single moment, once per frame.

This helps prevent layout-thrashing and allows you to animate transformation properties separately.

It's used like this:

```javascript
const element = document.querySelector('.ball');
const ball = styler(element);
```

When `ball.set` is called, it schedules a render on the following frame:

```marksy
<Example template="Ball" id="b" autostart={false}>{`
const element = document.querySelector('#b .ball');
const ball = styler(element); 

tween({ to: 300, duration: 500 })
  .start(v => ball.set('x', v));
`}</Example>
```

And that's it! Your first animation. 

## Multi-property animations

All animations included with Popmotion can animate:

- Numbers
- Colors (rgba, hsla and hex)
- Units `px`, `%`, `deg`, `vh`, and `vw`
- Complex strings containing numbers, units and colors, e.g. CSS shadows, gradients and SVG path definitions
- Objects of the above
- Arrays of the above

For instance, by replacing `300` in the previous example with `{ x: 300, scale: 2 }` the action will animate both `x` and `scale` values:

```marksy
<Example template="Ball" id="c" autostart={false}>{`
const ball = document.querySelector('#c .ball');
const ballStyler = styler(ball);

tween({
  from: { x: 0, scale: 1 },
  to: { x: 300, scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1000
}).start(v => ballStyler.set(v));
`}</Example>
```

## Next

This tutorial has covered the very the basics for the `tween` animation. You can find more details in the full [tween API docs](/api/tween).

`tween`, and all other Popmotion animations/interactions, are **actions**. Actions are simple reactive streams of values.

In the next tutorial, we'll briefly look at these [actions and reactions](/learn/action-reaction).
