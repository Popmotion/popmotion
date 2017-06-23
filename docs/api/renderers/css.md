---
title: CSS Renderer
description: Optimised CSS renderer.
category: renderers
---

# CSS Renderer

The CSS renderer provides a simple and optimised `get`/`set` interface for DOM elements.

`css(element <Node>, props <Object>)`

## Methods
- `get(key <String>`: Get the property of the provided key.
- `set(props <Object>)` | `set(key <String>, value)`: Set provided property(s) and schedule render for next frame.
- `render()`: Immediately render.

## Props
- `enableHardwareAcceleration <Boolean>`: Can be set to `false` to prevent Popmotion from using the GPU to transform elements. This results (often) in higher image quality when scaling up, though reduces performance. (default: `true`)

## Getting `transform` properties
If a `transform` property isn't present in the caching layer (because it hasn't previously been set by the developer), firing `get` on a property will return its default value (`1` for scale props, `0` for others).

This is because browsers return the `transform` attribute as a matrix, and the size of the code required to convert these is prohibative. However it'd be relatively simple for someone to develop an alternative CSS renderer as a drop-in replacement.

## Property mapping
The following alias' can be optionally used for setting CSS props:

- `x` -> `translateX`
- `y` -> `translateY`
- `z` -> `translateZ`

## Example

```javascript
import { css } from 'popmotion';

const div = document.querySelector('div');
const divRenderer = css(div);

divRenderer.get('opacity'); // Reads opacity from div
divRenderer.set({
  x: 10, // default value types to px
  y: 10
}); // set and schedule for render
```

## Supported props

All CSS properties are supported by Popmotion, but some properties are mapped to [value types](/api/value-types) for safety and convenience.

So, for example, if you ran:

```javascript
myCssRenderer.set('backgroundColor', {
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
