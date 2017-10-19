---
title: Parallel
description: Control playback of multiple actions in parallel.
category: action-composition
---

# Parallel

Control playback of multiple actions in parallel.

`parallel(actions <Array>, props <Object>)`

## Example

```javascript
import { parallel, tween } from 'popmotion';

parallel([
  tween(props),
  tween(props)
]).start();
```

## Methods

### `getChildren`
Returns an array of child actions

[...Action](/api/action)
