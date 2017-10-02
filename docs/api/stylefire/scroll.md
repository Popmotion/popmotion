---
title: DOM Scroll
description: Scroll viewport and DOM elements with Popmotion tweens and physics.
category: stylefire
---

# Scroll Renderer

The scroll renderer provides a simple and optimised `get`/`set` interface for DOM elements and `window`.

## Install

```
npm install --save popmotion-scroll
```

```javascript
import scroll from 'popmotion-scroll';
```

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
import scroll from 'popmotion-scroll';

const windowScroll = scroll();

physics({
  from: windowScroll.get('top'),
  to: 500,
  spring: 600,
  friction: 1,
  onUpdate: (v) => windowScroll.set('top', v)
}).start();
```

## Methods
- `get(key <String>`: Get the property of the provided key.
- `set(props <Object>)` | `set(key <String>, value)`: Set provided property(s) and schedule render for next frame.
- `render()`: Immediately render.

## Property mapping
- `top` -> `scrollTop`/`pageYOffset`
- `left` -> `scrollLeft`/`pageXOffset`