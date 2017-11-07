---
title: Composite
description: Control a map of actions and output to that same structure.
category: compositors
---

# Composite

Control a named map of actions, and output to the same structure.

## Import

```javascript
import { composite } from 'popmotion';
// or stand-alone:
import composite from 'popmotion/compositors/composite';
```

## Usage

```javascript
composite({
  x: tween({ from: 60, to: 400 }),
  y: physics({ from: 60, velocity: 300 })
}).start(({ x, y }) => {});
```
