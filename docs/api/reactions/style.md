---
title: Style
description: Style HTML and SVG elements.
category: reactions
---

# Style

Style HTML and SVG elements using the performance of [Stylefire](/api/stylefire).

## Import

```javascript
import { style } from 'popmotion';
// or stand-alone:
import style from 'popmotion/reaction/style';
```

## Usage

### Single prop

```typescript
style(selector: string, key?: string): { update: Function }
```

Passing `style` both a `selector` and a `key` will create a reaction that uses all provided values to set that property on **all** selected elements:

```javascript
const moveRight = spring({ to: 500 })
  .start(style('li', 'x'));
```

### Multi prop

Passing through just a selector will create a reaction that passes an object through to **all** selected elements.

For instance:

#### Dragging an element

```javascript
pointer().start(style('#my-draggable-element'));
```

#### Tweening multiple named properties:

```javascript
tween({
  from: {
    scaleY: 1,
    opacity: 1
  },
  to: {
    scaleY: 2,
    opacity: 0
  }
}).start(style('div'));
```

#### Composing multiple animations:

```javascript
composite({
  x: spring({ to: 500 }),
  opacity: tween({ from: 0, to: 1 })
}).start(style('./active'));
```