---
title: Parallel
description: Control playback of multiple actions in parallel.
category: actionComposition
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
]).start()
```
