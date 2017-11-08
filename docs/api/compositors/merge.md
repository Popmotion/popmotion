---
title: Merge
description: Combine multiple actions into one output.
category: compositors
---

# Merge

Combine multiple actions into one output.

## Import

```javascript
import { merge } from 'popmotion';
// or stand-alone:
import merge from 'popmotion/compositors/merge';
```

## Usage

```javascript
merge(
  tween(),
  action(({ update }) => update(1)),
  physics({ velocity: 1000 })
).start((v) => console.log(v));
```
