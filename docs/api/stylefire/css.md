---
title: CSS
description: CSS Styler optimised for animation.
category: stylefire
---

# CSS Styler

The CSS Styler provides a simple and optimised `get`/`set` interface for DOM elements.

It automatically detects and applies vendor prefixes.

## Import

From Popmotion:

```javascript
import { css } from 'popmotion';
// Or, to import on its own:
import css from 'stylefire/css';
```

As a standalone library:

```javascript
import css from 'stylefire/css';
```

```typescript
css(element: Node, props?: {
  enableHardwareAcceleration?: Boolean = true
})
```

## Methods

### `get`

```typescript
get(key: string): any
```

Returns the value of the provided key.

### `set`

```typescript
set(props: {}): this
set(key: string, prop: any): this
set(key: string): (prop: any) => void;
```

Set the provided property(s) and schedule a render for the next frame.

If only a `key` is provided, this returns a curried function which can then be provided a property value to set to that `key`.

### `render`

```typescript
render(): this
```

Immediately render, without waiting for the next frame.

## Props
- `enableHardwareAcceleration <Boolean>`: Can be set to `false` to prevent Stylefire from using the GPU to transform elements. This results (often) in higher image quality when scaling up, though reduces performance. (default: `true`)
- `preparseOutput <Boolean>`: If `true`, will preparse the value into an easily-animated value when read with `get` (for instance `20px` will be output as `20`. (default: `true` **Deprecated** will be `false` in a future `2.0.0` release - this was an API misstep)

## Getting `transform` properties
If a `transform` property isn't present in the caching layer (because it hasn't previously been set by the developer), firing `get` on a property will return its default value (`1` for scale props, `0` for others).

This is because browsers return the `transform` attribute as a matrix, and the size of the code required to convert these is prohibitive. However it'd be relatively simple for someone to develop an alternative CSS renderer as a drop-in replacement.

## Property mapping
The following alias' can be optionally used for setting CSS props:

- `x` -> `translateX`
- `y` -> `translateY`
- `z` -> `translateZ`

## Transform property order
The `transform` property can be animated using template strings, but in most cases we want to animate the `rotate`, `translate` and `scale` properties separately.

In accordance with the [CSS Transforms Level 2 spec](https://drafts.csswg.org/css-transforms-2/#individual-transforms), if set individually these properties will be set in the following order:

`translate`, `scale`, `rotate`

## Setting CSS variables

[CSS variables](https://css-tricks.com/difference-between-types-of-css-variables/#article-header-id-1) can be set and animated just like any other property:

```javascript
const htmlStyler = css(document.documentElement);

htmlRenderer.set('--bg-color', '#000');
```

## Example

```javascript
import css from 'stylefire/css';

const div = document.querySelector('div');
const divStyler = css(div);

divStyler.get('opacity'); // Reads opacity from div
divStyler.set({
  x: 10, // default value types to px
  y: 10
}); // set and schedule for render
```

## Supported props

All CSS properties are supported by Popmotion, but some properties are mapped to [value types](/api/value-types) for safety and convenience.

So, for example, if you ran:

```javascript
divStyler.set('backgroundColor', {
  red: 255,
  green: 125.6,
  blue: 0
});
```

The renderer will automatically use the `color.transformer` function to convert this to a valid `'rgba(255, 125, 0, 1)'` value.

### Color props
- `color`: `color`
- `backgroundColor`: `color`
- `outlineColor`: `color`
- `fill`: `color`
- `stroke`: `color`

### Border props
- `borderColor`: `color`
- `borderTopColor`: `color`
- `borderRightColor`: `color`
- `borderBottomColor`: `color`
- `borderLeftColor`: `color`
- `borderRadius`: `px`

### Positioning
- `width`: `px`
- `height`: `px`
- `top`: `px`
- `left`: `px`
- `bottom`: `px`
- `right`: `px`

### Transform 
- `rotate`: `degrees`
- `rotateX`: `degrees`
- `rotateY`: `degrees`
- `rotateZ`: `degrees`
- `scale`: `scale`
- `scaleX`: `scale`
- `scaleY`: `scale`
- `scaleZ`: `scale`
- `skewX`: `degrees`
- `skewY`: `degrees`
- `distance`: `px`
- `translateX`: `px`
- `translateY`: `px`
- `translateZ`: `px`
- `perspective`: `px`
- `opacity`: `alpha`
