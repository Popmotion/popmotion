---
title: Stylefire
description: Style setters for CSS, SVG and scroll, optimized for animation.
category: stylefire
---

# Stylefire

Stylefire is a collection of CSS, SVG and DOM scroll style setters optimized to work with animation libraries. It can also be used outside of animations and provides a cached state to prevent unnecessary DOM reads.

It batches renders to the `render` step of the [Framesync](/api/framesync) loop to prevent layout thrashing, but renders can also be triggered manually.

## Install

**Stylefire is included with Popmotion.** If you're using as a standalone library, install with:

```javascript
npm install stylefire --save
```

## Stylers

- [CSS](/api/css)
- [SVG](/api/svg)
- [DOM Scroll](/api/scroll)

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
