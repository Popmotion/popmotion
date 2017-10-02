---
title: SVG
description: Optimised SVG styler.
category: stylefire
---

# SVG Renderer

The SVG renderer provides a simple and optimised `get`/`set` interface for SVG elements.

`svg(element <Node>)`

## Methods
- `get(key <String>`: Get the property of the provided key.
- `set(props <Object>)` | `set(key <String>, value)`: Set provided property(s) and schedule render for next frame.
- `render()`: Immediately render.

## Example

```javascript
import { svg } from 'popmotion';

const polygon = document.querySelector('polygon');
const polygonRenderer = svg(polygon);

polygonRenderer.set({
  stroke: {
    red: 255,
    green: 255,
    blue: 255
  },
  x: 100
}); // set and schedule for render
```

## Supported props

All SVG properties are supported by Popmotion, but some properties are mapped to [value types](/api/value-types) for safety and convenience.

- `fill`: `color`
- `stroke`: `color`
- `scale`: `scale`
- `scaleX`: `scale`
- `scaleY`: `scale`
- `opacity`: `alpha`
- `fillOpacity`: `alpha`
- `strokeOpacity`: `alpha`

Set transform origin and line drawings
