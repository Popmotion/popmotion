---
title: Supported values
description: A list of supported values in Pose for React.
category: react
---

> React Pose has been **deprecated** in favour of [Framer Motion](https://framer.com/motion). [Read the upgrade guide](https://www.framer.com/api/motion/migrate-from-pose/)

# Supported values

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

Path drawing is the process of animating `stroke-dasharray` and `stroke-dashoffset` to emulate a pen drawing a line. [This blog post](https://css-tricks.com/svg-line-animation-works/) explains the effect in more detail.

Path drawing works with these properties works with `circle`, `ellipse`, `path`, `polygon`, `polyline`, `rect` and `text` SVG elements.

But for `path`, there's three special properties:

* `pathLength`
* `pathSpacing`
* `pathOffset`

These are all set as a **percentage of the total path length, from `0` to `100`**, which is automatically measured by Pose.

So you can define an animation from `0` to `100`:

```javascript
{
  empty: { pathLength: 0 },
  fill: { pathLength: 100 }
}
```

## Automatic animations

Every value, if no `transition` prop is defined, will have an animation automatically generated for it.

Currently, these are:

### Movement

Translation and rotational transforms use an overdamped spring that retain any existing velocity and incorporate that into the next animation.

This gives the animation a playful, snappy and robust feel.

```javascript
{
  type: 'spring',
  stiffness: 500,
  damping: 25,
  restDelta: 0.5,
  restSpeed: 10
}
```

### Scale

Scale transforms use an overdamped spring that ensure that scale isn't inverted.

```javascript
{
  type: 'spring',
  stiffness: 700,
  damping: to === 0 ? 100 : 35
}
```

### Opacity

Opacity uses a linear easing tween. Opacity looks odd when eased, so we transition straight from one to the other.

```javascript
{
  ease: 'linear'
}
```

### Everything else

All other properties use [Popmotion Pure's default tween](/api/tween) settings.

In the future it'll be possible to define automatic animations by defining the type of interface you wish to have (ie 'confident', 'playfull' etc).

In the nearer future we'll intelligently combine automatic animations to ensure they all finish at the same time.
