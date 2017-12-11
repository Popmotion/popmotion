---
title: Stylers
description: Style setters for CSS, SVG and scroll, optimized for animation.
category: stylefire
---

# Stylers

Stylers are performant CSS, SVG and DOM scroll style setters optimized to work with animation libraries.

They batch rendering on the render step of the [Framesync render loop](/api/framesync) to prevent layout thrashing.

They also provide a cached state to prevent unnecessary DOM reads.

## Install

**Stylers are included with Popmotion, but available as the standalone library `stylefire`.**

```javascript
npm install stylefire --save
```

## Stylers

- [CSS](/api/css)
- [SVG](/api/svg)
- [DOM Scroll](/api/scroll)

## Usage

The `styler` function accepts a single `Element` and returns either the [CSS](/api/css) or [SVG](/api/svg) styler depending on the detected element type.

From Popmotion:

```javascript
import { styler } from 'popmotion';
// Or, to import on its own:
import styler from 'stylefire';
```

As a standalone library:

```javascript
import styler from 'stylefire';
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

## Create custom styler

Custom stylers can be created with the `createStyler` function.

Stylers are useful for styling any rendering target that would benefit from either:
1) Batched renders, or
2) Cached state.

`createStyle` accepts a single object of arguments:
- `onRead(key: string, props: {}})`: Fired when the styler's `get` is called and no property is already found in its state cache.
- `onRender(state: {}}, props: {}, changedValues: string[])`: Fired when the state changes, either on the next available `render` step on the Framesync render loop, or when its `render` method is called.
- `useCache: boolean`: Default `true`.

### Example

```javascript
import { createStyler } from 'stylefire';

const demoStyler = createStyler({
  onRead: (key, { customObject }) => customObject[key],
  onRender: (state, { customObject }, changedValues) => {
    changedValues.forEach((key) => customObject[key] = state[key]);
  }
});

const color = { red: 255, green: 255, blue: 255 };

const myDemoStyler = demoStyler({ customObject: color });
myDemoStyler.set('green', 0);
```
