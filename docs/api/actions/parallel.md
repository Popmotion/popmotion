---
title: Parallel
description: Control playback of multiple actions in parallel.
---

# Parallel

Control playback of multiple actions in parallel.

`parallel(actions <Array>)`

## Example

```javascript
import { parallel, tween } from 'popmotion';

parallel([
  tween(props),
  tween(props)
]).start()
```
