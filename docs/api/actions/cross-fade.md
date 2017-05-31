---
title: Cross Fade
description: Fade between any two actions.
category: actionComposition
---

# Cross Fade

Fade between any two actions with the Cross Fade action. It creates a new value, interpolated between the output of two existing actions.

The "fader", a third action that provides a progress value from `0` to `1`, dictates the ratio of the blend between the `from` and `to` actions. By default, this is a tween that can be adjusted using `duration` and `ease` properties, but any action can be provided to the `fader` property.

`crossFade(props <Object>)`

## Props

- `from <Tween>`: The tween to fade from.
- `to <Tween>`: The tween to fade to.
- `duration <Number>`: Duration of fade (default: `300`).
- `ease <Function>`: Easing for the fade tween (default: `linear`).
- `fader <Action>`: Optional action, that outputs between `0` and `1`, to use to fade between the two actions.

## Example

```javascript
import { crossFade, tween } from 'popmotion';

const foo = tween(0, 100).start();
const bar = tween(100, 200).start();

const fadeBetween = crossFade({
  from: foo,
  to: bar,
  onUpdate: (v) => console.log(v)
});
```
