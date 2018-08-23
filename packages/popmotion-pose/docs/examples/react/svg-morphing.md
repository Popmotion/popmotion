---
title: SVG Morphing
description: With Pose and a path morphing library like Flubber, you can perform declarative SVG path morphing animations.
category: react
---

# SVG Morphing

By combining a path morphing library like [Flubber](https://github.com/veltman/flubber) with Pose, we can declaratively animate between any two SVG paths.

By importing animations from [Popmotion Pure](/pure), which is included with Pose, we can use their powerful `pipe` method with Flubber's `interpolate` to create a special `transition` prop that animates between paths:

```javascript
import { tween } from 'popmotion';
import { interpolate } from 'flubber';

const morphTransition = ({ from, to }) =>
  tween().pipe(interpolate(from, to));
```

<CodeSandbox height="700" id="31lzml4nr1" />