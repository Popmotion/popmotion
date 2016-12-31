---
title: Stagger
description: Stagger the start of a series of a actions.
---

# Stagger

`stagger(actions <Array>, interval <Number | Function>)`

If `interval` is a function, it's provided `i` and returns a `timeToDelay` for each action in the list.

## Example

```javascript
import { stagger, tween, css } from 'popmotion';

const divs = document.getElementByTag('div');
const mappedTweens = [].slice.call(divs).map((element) => {
  const elementRenderer = css(element);
  return tween({
    from: 0,
    to: 100,
    onUpdate: (v) => elementRenderer.set('x', v)
  });
});

stagger(mappedTweens, 50);
```
