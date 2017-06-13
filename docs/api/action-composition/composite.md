---
title: Composite
description: Control multiple named actions simultaneously.
category: action-composition
---

# Composite Action

Control multiple named actions simultaneously. Output value is an object. Composite actions can be nested.

`composite(actions <Object>, props <Object>)`

## Example

```javascript
import { composite, tween } from 'popmotion';

const tweenShadowCSSValue = composite({
  foo: physics(...opts),
  bar: physics(...opts)
}, {
  onUpdate: (v) => console.log(v) // { foo: 0, bar: 0 }
}).start();
```
