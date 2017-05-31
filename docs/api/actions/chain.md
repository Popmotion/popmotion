---
title: Chain
description: Chain a linear sequence of actions.
category: actionComposition
---

# Chain

Chain a linear sequence of actions. The next action in the sequence is started when the previous action is completed.

`chain(actions <Array>)`

## Example

```javascript
import { chain, tween, stagger } from 'popmotion';

chain([
  tween(0, 1),
  tween(1, 1000)
]).start();
```
