---
title: Supported values
description: A list of supported values in Pose.
category: react
---

# Supported values

It does, however, have enhanced support for some values, which we'll list here.

<TOC />

## Overview

**Any value that contains a number or color, or multiple numbers and colors, is animatable.**

Pose doesn't need specific support for a value to animate it. The only limitation is that if you're animating a complex value like CSS's `background-image` or SVG's `d`, **the non-animating parts of the value must match**.

For instance, from `'linear-gradient(to bottom, #1e5799 0%, #7db9e8 100%)'` you could animate to `'linear-gradient(to bottom, #D32A2D 25%, #FF3236 75%);'`, but not to `'linear-gradient(to top, #D32A2D 25%, #000 50%, #FF3236 75%);'`

## CSS

### Enhanced values

Pose has enhanced support for `x`, `y`, `width`, `height`, `top`, `left`, `right` and `bottom` values.

All of these can be animated between different value units, for instance `x` could be animated like so:

```javascript
{
  closed: { x: 0 },
  open: { x: '100vw' }
}
```

They can also be animated with `calc()`:

```javascript
{
  closed: { x: 0 },
  open: { x: 'calc(50vw - 50%)' }
}
```

`width` and `height` specifically can also be animated to and from `'auto'`.

### Transforms

Transform values can be animated as separate values:

- `x`, `y`, `z`, 
- `rotate`, `rotateX`, `rotateY`, `rotateZ`, 
- `scale`, `scaleX`, `scaleY`, `scaleZ`, 
- `skewX`, `skewY`, 
- `perspective`

## SVG

All SVG attributes like `fill` and `stroke` can be animated, and Pose attempts to replace the confusing SVG transformation model with CSS.

### Path drawing

Path drawing the process of using an SVG `path` element and its `stroke-dasharray` and `stoke-dashoffset` properties to emulate a pen drawing a line. [This blog post](https://css-tricks.com/svg-line-animation-works/) explains the effect in more detail.

Pose supports both`'stoke-dasharray'` and `stroke-dashorigin` properties, but also provides:

* `pathLength`
* `pathSpacing`
* `pathOffset`

These are all set as a **progress of the total path length, from `0` to `100`**, which is automatically measured by Pose.

So you can define an animation from `0` to `100`:

```javascript
{
  empty: { pathLength: 0 },
  fill: { pathLength: 100 }
}
```