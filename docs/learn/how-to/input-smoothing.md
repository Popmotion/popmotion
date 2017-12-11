---
title: Input smoothing
description: How to apply input smoothing to mouse and touch input
category: how-to
---

# Input smoothing

You can easily add input smoothing to pointer tracking using some light functional composition.

Drag this ball to see pointer tracking without smoothing:

```marksy
<Example template="Ball" id="a" autostart={true}>{`
const ball = document.querySelector('#a .ball');
const ballStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, ballStyler.set);

let pointerTracker;

const startTracking = () => {
  pointerTracker = pointer(ballXY.get())
    .start(ballXY);
};

const stopTracking = () => {
  if (pointerTracker) pointerTracker.stop();
};

listen(ball, 'mousedown touchstart').start(startTracking);
listen(document, 'mouseup touchend').start(stopTracking);
`}</Example>
```

And now with smoothing applied:

```marksy
<Example template="Ball" id="b" autostart={true}>{`
const ball = document.querySelector('#b .ball');
const ballStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, ballStyler.set);

const { transformMap, smooth } = transform;
let pointerTracker;

const startTracking = () => {
  pointerTracker = pointer(ballXY.get())
    .pipe(transformMap({
      x: smooth(200),
      y: smooth(200)
    }))
    .start(ballXY);
};

const stopTracking = () => {
  if (pointerTracker) pointerTracker.stop();
};

listen(ball, 'mousedown touchstart').start(startTracking);
listen(document, 'mouseup touchend').start(stopTracking);
`}</Example>
```

## Add smoothing

We can use the `smooth` [transformer](/api/transformers#smooth) to apply smoothing to any numerical value.

`smooth` works by passing a smoothing amount, in milliseconds. This is the duration over which movement will be averaged. So, high numbers equal greater smoothing.

```javascript
smooth(200)
```

**Importantly**, a new instance of `smooth` must be created for each value we want to smooth. This is because the returned function refers to an internal average value. If we pass it multiple values from different sources, it can't work!

### Multi-axis smoothing

So, our `pointer` might originally look like this:

```javascript
pointer({ x: 0, y: 0 })
  .start(({ x, y }) => /* unsmoothed output */)
```

To apply smoothing on both `x` and `y`, we can use the `transformMap` transformer along with `smooth`:

```javascript
import { pointer, transform } from 'popmotion';
const { transformMap, smooth } = transform;

pointer({ x: 0, y: 0 })
  .pipe(transformMap({
    x: smooth(200),
    y: smooth(200)
  }))
  .start(({ x, y }) => /* smoothed! */)
```

### Single-axis smoothing

If we're just tracking a single axis, we don't even need `transformMap`:

```javascript
pointer({ x: 0, y: 0 })
  .pipe(
    ({ x }) => x,
    smooth(200)
  ).start((x) => /* smoothed x axis */)
```

## Conclusion

By using `smooth`, we can apply smoothing to not just `pointer` output, but that of any action.

More examples of `pipe` and functional composition can be found in the [value pipelines](/api/value-pipelines) tutorial.
