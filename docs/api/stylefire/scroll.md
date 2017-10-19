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
- `get(key <String>`: Get the property of the provided key.
- `set(props <Object>)` | `set(key <String>, value)`: Set provided property(s) and schedule render for next frame.
- `render()`: Immediately render.

## Property mapping
- `top` -> `scrollTop`/`pageYOffset`
- `left` -> `scrollLeft`/`pageXOffset`