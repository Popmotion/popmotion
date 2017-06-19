---
title: Color Tween
description: Blends from one color to another using linear interpolation.
category: action
---

# Color Tween

Creates a special tween that uses the `blendColor` transformer to smoothly transition between two colors. Popmotion uses an advanced algorithm for smoother blends, as explained in the video [Computer Color is Broken](https://www.youtube.com/watch?v=LKnqECcg6Gw).

Colors can be provided either as objects of named color channels ('red', 'green' etc), or as hex/rgb/rgba strings.

`colorTween(props <Object>)`

```javascript
import { css, colorTween } from 'popmotion';

const element = css(document.getElementById('example'));

colorTween({
  from: '#f00',
  to: '#00f',
  onUpdate: (v) => element.set('backgroundColor', v)
});
```

## Props

See: [Tween](tween)

## Methods

See: [Tween](tween)
