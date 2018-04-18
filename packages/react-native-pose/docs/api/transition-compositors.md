---
title: Transition utils
description: Utility functions for composing transition functions
---

# Transition utils

Poses can be defined with a custom `transition` property.

This function is run once for **each value in the pose** and can return a different Popmotion animation for each.

To simplify the creation of this logic, Pose includes two composition functions:

- `eachValue`: Return different animations for each animating value.
- `fromPose`: Return different animations depending on which pose the previous value was in.

## `eachValue`

Accepts a map of `transition` functions, where each key is the name of an animating value (or `default`, to match remaining values).

### Import

```javascript
import { eachValue } from 'popmotion-pose'
```

### Usage

```javascript
const props = {
  open: {
    x: 100,
    y: 100,
    transition: eachValue({
      x: tween,
      y: ({ from, to, velocity }) => spring({ from, to, velocity: velocity * 2 })
    })
  }
}
```

## `fromPose`

Accepts a map of `transition` functions, where each key is the name of another pose (or `default`, to match remaining poses).

### Import

```javascript
import { fromPose } from 'popmotion-pose'
```

### Usage

```javascript
const props = {
  offLeft: { x: '-100%' },
  offRight: { x: '100%' },
  on: {
    x: '0%',
    transition: fromPose({
      offLeft: ({ from, to }) => tween({ from, to, duration: 400 }),
      offRight: ({ from, to }) => tween({ from, to, duration: 200 })
    })
  }
}
```
