---
title: Get started
description: Introduction to Popmotion's tween, physics and user input tracking functions.
category: basics
next: input-tracking
---

# Get started

Popmotion is a functional, reactive JavaScript motion library.

It allows developers to create animations and interactions from **actions**, like tweens, physics and pointer tracking, to create polished and engaging interfaces.

It is unopinionated, so your animations will work equally well with HTML, SVG, React, Three.js... any API that accepts a number as an input.

In this simple guide we're going to install Popmotion amd our tiny DOM rendering library [Stylefire](/api/stylefire) to create our first animation using the simplest action, the tween.

## Installation

```javascript
npm install popmotion stylefire --save
```

## The "Hello World" tween

A tween is a function that changes one number to another, over a set duration of time. It's identical in functionality to a CSS transition.

Popmotion can be imported all at once:

```javascript
import { tween } from 'popmotion';
```

Or, if you're only using a small subset of the library you can respect your user's bytes by importing everything individually:

```javascript
import tween from 'popmotion';
```

By default, a tween will change `0` to `1` over `300` milliseconds:

```marksy
<Example template="Counter" id="a">{`
const counter = document.querySelector('#a .counter');

tween().start((v) => counter.innerHTML = v);
`}</Example>
```

All examples on this site are editable; you can edit the above example by providing

```javascript
  to: 300,
  duration: 1000
```

properties to the `tween`. The counter will now count up to `300` over the course of one second.

## Animate!

As web developers our most common use-case is to animate the DOM. So let's use this same animation to set an element's `transform` property:

```marksy
<Example template="Ball" id="css">{`
const ball = document.querySelector('#css .ball');

tween({
  to: 300,
  duration: 100
}).start(
  (v) => ball.style.transform = 'translateX(' + v + 'px)'
);
`}</Example>
```

This is okay, but Popmotion provides a tiny library called [Stylefire](/api/stylefire) designed to optimise DOM styling.





 Popmotion provides in-built functions to help render CSS and SVG.

```javascript
import { css, svg } from 'popmotion';
```

When provided a single `Node`, they provide `get` and `set` methods for that element's visual properties.

```marksy
<Example template="Ball" id="css">{`
const ball = document.querySelector('#css .ball');
const ballRenderer = css(ball);

ballRenderer.set({
  backgroundColor: '#FFAD44',
  x: 150, // Automatically converted to px
  y: '100%'
});
`}</Example>
```

By creating a new `onUpdate` function with a `css` renderer, we can easily make the above tween an animation:

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

And that's it! Your first animation. Next, learn about [input tracking](/learn/input-tracking) or deep-dive into the [tween docs](/api/tween)
