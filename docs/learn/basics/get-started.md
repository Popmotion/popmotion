---
title: Get started
description: Introduction to Popmotion's tween animation.
category: basics
next: action-basics
---

# Get started

Popmotion is a functional, reactive JavaScript motion library.

It allows developers to create animations and interactions from **actions**, like tweens, physics and pointer tracking, to create polished and engaging interfaces.

It is unopinionated, so your animations will work with CSS, SVG, React, Three.js... any API that accepts a number as an input.

In this simple guide we're going to install Popmotion, and use it to animate an element with its `tween` action and DOM `styler`.

## Installation

```javascript
npm install popmotion --save
```

## The "Hello World" tween

A `tween` is a function that changes one number to another, over a set duration of time. If you're familiar with CSS transitions, that is also a form of tweening.

In Popmotion, everything can be imported from the main library:

```javascript
import { tween } from 'popmotion';
```

Or, if you're only using a small subset of the library you can respect your user's bytes by importing everything individually:

```javascript
import tween from 'popmotion/animations/tween';
```

By default, a `tween` will change `0` to `1` over `300` milliseconds:

```marksy
<Example template="Counter" id="a">{`
const counter = document.querySelector('#a .counter');

tween().start((v) => counter.innerHTML = v);
`}</Example>
```

All examples on this site are editable; you can edit the above example by providing

```javascript
{ to: 500, duration: 1000 }
```

properties to the `tween` function. The counter will now count up to `500` over the course of one second.

## Animate!

As web developers our most common use-case is to animate the DOM. So let's use this same animation to set an element's `translateX` property. For this, we can use the `styler` function:

```javascript
import { tween, styler } from 'popmotion';
```

`styler` exposes [Stylefire](/api/stylefire) to performantly animate HTML and SVG elements.

It accepts an `Element`, and returns a get/set interface that batches renders on the [render loop](/api/framesync).

`set`, if called with just a prop name, returns a setter function:

```marksy
<Example template="Ball" id="css">{`
const ballStyler = styler(document.querySelector('#css .ball'));

tween({ to: 300, duration: 100 }).start(ballStyler.set('x'))
`}</Example>
```

And that's it! Your first animation. Next, let's learn more about [actions](/learn/action-basics).
