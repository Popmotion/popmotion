---
title: SVG Path
description: Optimised SVG Path renderer.
category: renderers
---

# SVG Path Renderer

The SVG Path renderer provides a simple and optimised `get`/`set` interface for SVG `path` elements.

`svg(element <Node>)`

## Methods
- `get(key <String>`: Get the property of the provided key.
- `set(props <Object>)` | `set(key <String>, value)`: Set provided property(s) and schedule render for next frame.
- `render()`: Immediately render.

## Example

```javascript
import { svgPath } from 'popmotion';

const path = document.querySelector('path');
const pathRenderer = svgPath(path);

// Will draw the second half of a path:
polygonRenderer.set({
  length: 50,
  spacing: 50
}); // set and schedule for render
```

## Property mapping
The following `path` attributes are optionally referenced by different alias`.

- `stroke-dasharray` -> Split into `length` and `spacing` properties, measured in `%`.
- `stroke-dashoffset` -> `offset`
