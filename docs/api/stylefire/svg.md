---
title: SVG
description: SVG styler with simplified transformation model and line drawing support.
category: stylefire
---

# SVG Styler

The SVG Styler replaces the confusing SVG transformation model with the CSS model. It also provides support for line drawing.

## Import

```javascript
import svg from 'stylefire/svg';
```

`svg(element: SVGElement)`

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

## Example

```javascript
import svg from 'stylefire/svg';

const polygon = document.querySelector('polygon');
const polygonStyler = svg(polygon);

polygonStyler.set({
  stroke: 'rgba(255, 0, 0, 1)',
  x: 100
});
```

## Supported attributes

**All SVG attributes are supported**, but some properties are mapped to [value types](/api/value-types) for safety and convenience.

- `fill`: `color`
- `stroke`: `color`
- `scale`: `scale`
- `scaleX`: `scale`
- `scaleY`: `scale`
- `opacity`: `alpha`
- `fillOpacity`: `alpha`
- `strokeOpacity`: `alpha`

## Transform origin

Transform origin can be set with the `originX` and `originY` props.

## Line drawings

Line drawing the process of using an SVG `path` element and its `stroke-dasharray` and `stoke-dashoffset` properties to emulate a pen drawing a line. [This blog post](https://css-tricks.com/svg-line-animation-works/) explains the effect in more detail.

Stylefire supports both`'stoke-dasharray'` and `stroke-dashorigin` properties, but also provides:

- `pathLength`
- `pathSpacing`
- `pathOffset`

These are all set as a **percentage of the total path length**, which is automatically measured by Stylefire.

So you can define an animation from `0` to `100`:

```javascript
import { tween } from 'popmotion';
import svg from 'stylefire/svg';

const path = document.querySelector('path');
const pathStyler = svg(polygon);

tween({ to: 100 })
  .start((v) => pathStyler.set('pathLength', v));
```

In this example you can change the real `path` shape and length without having to update the animation.
