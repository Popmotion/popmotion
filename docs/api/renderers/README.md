---
title: Renderers
description: Optimised get/set renderers.
category: renderers
---

# Renderer

`Renderer` is the base class of Popmotion's CSS and SVG renderers.

It can be used to create a **cached** `get`/`set` interface to a rendering platform, as well as automatically scheduling renders to the `frameRender` step in the render loop.

The two main efficiencies this enables:

- `get` requests will only perform an expensive read from the underlying platform if the requested value isn't already present in the cache.
- `set` requests only schedule an expensive render on the underlying platform at a specific point in the render loop. This means multiple `set` requests can be made from different points in your program and they'll be batched into a single efficient call and prevent layout thrashing. **Note:** a render can be manually fired with a renderer's `render` method.

## Creation

Making a new renderer is easy, it accepts two main methods `onRead` and `onRender`.

- `onRead(key <String>)`
`onRead` is provided a key and should return a value. This value will be cached and further `get` calls will return the cached value instead.
- `onRender()`
`onRender` is the method that does the actual rendering. The latest state can be accessed with `this.state` and each renderer maintains a `this.changedValues` array, which is a list of keys you can use as a diff.

## Methods

- `get(key <String>)`: Returns the cached property or, if no cached value is present, reads the property and updates the cache.
- `set(props <Object>)` | `set(key <String>, value <Number | String>)`: Updates the cached properties and schedules a render on the render loop.
- `render`: Fires `onRender` immediately (non-optimal) and unschedules a render from the render loop.


## Example

A typical renderer would look like this:

```javascript
import { Renderer } from 'popmotion';

class MyRenderer extends Renderer {
  onRead(key) {

  }

  onRender() {

  }
}
```
