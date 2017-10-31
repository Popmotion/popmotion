---
title: DOM Scroll
description: Scroll viewport and DOM elements.
category: stylefire
---

# DOM Scroll Styler

The DOM Scroll styler batches `window` and DOM scroll events to the `render` step on the [Framesync render loop](/api/framesync).

## Install

```javascript
import scroll from 'stylefire/scroll';
```

`scroll()`

`scroll(element: HTMLElement)`

## Usage

To set a viewport position, just create a new scroll renderer with no arguments.

```javascript
const windowScroll = scroll();

windowScroll.set('top', 50);
```

Or provide a DOM node to scroll an overflowing element.

```javascript
const div = document.querySelector('div');
const elementScroll = scroll(div);

elementScroll.set('top', 100);
```

These renderers can be used as any other. To animate a scroll, simply use the renderer in an action's `onUpdate`:

```javascript
import { physics } from 'popmotion';
import scroll from 'stylefire/scroll';

const windowScroll = scroll();

physics({
  from: windowScroll.get('top'),
  to: 500,
  spring: 600,
  friction: 1
}).start((v) => windowScroll.set('top', v));
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

## Property mapping
- `top` -> `scrollTop`/`pageYOffset`
- `left` -> `scrollLeft`/`pageXOffset`