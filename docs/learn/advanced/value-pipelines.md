---
title: Composable value pipelines
description: Use `pipe` to compose reusable value pipelines
category: advanced
---

# Composable value pipelines

Popmotion provides simple utility functions that can take a value and return it transformed. These are, unsurprisingly, called **[transformers](/api/transformers)**.

```javascript
import { transform } from 'popmotion';
```

These functions can perform a wide range of tasks. Something as simple as appending a unit:

```javascript
const { px } = transform;
px(5); // '5px'
```

Performing arithmatic:

```javascript
add(5)(10); // 15
```

Make an infinite looping sequence:

```javascript
wrap(0, 100)(150); // 50
```

Or converting a value from one range to another:

```javascript
interpolate([0,1], [-500, 500])(0.5); // 0
```

## Curry

As you can see, many of these transformers are curried. So we can make a function:

```javascript
const restrictNormalised = clamp(0, 1);
```

And then reuse it elsewhere:

```javascript
restrictNormalised(5); // 1
```

## Compose

Because these functions are very simple and all carry the same signature, we can compose them. Popmotion provides a special transformer to do just that.

```javascript
const { pipe } = transform;
```

`pipe` is named as such because it takes a list of functions and returns a new function that will run these functions from **left to right**.

With many functions being curried, our composed functions become less imperitive and more declarative.

For instance, let's compose a function that will always return a valid RGB value. RGB values are simply integers between `0` and `255`.

```javascript
const rgbUnit = pipe(
  clamp(0, 255),
  Math.round
);
```

What's cool about this example is that it shows that **any** function that 1) takes a number and 2) returns a number, can be composed. `Math.round` does exactly that, so we can compose it.

Also, you don't have to create that function yourself, because that exact code is already included as a Popmotion transformer, and used in the `rgba` [value type](/api/value-types).

The `rgba` transformer is **itself** composed. Here's the exact code:

```javascript
const rgba = pipe(
  transformChildValues({
    red: rgbUnit,
    green: rgbUnit,
    blue: rgbUnit,
    alpha
  }),
  rgbaTemplate
);
```

This is an example of composing already composed functions, which becomes a very clear way of expressing our logic.

## `transform`

Every Popmotion action supports a `transform` property. This should be a function that accepts and returns a number. This function will be run whenever `.get()` is called, and the result is passed to `onUpdate`.

For instance, if we wanted to apply a static spring on a value, under specific conditions, we could do so purely with transformers:

```javascript
import { pointer, trackOffset, transform, value } from 'popmotion';
const { pipe, conditional, nonlinearSpring } = transform;

const myValue = value(0);

document.addEventListener('mousedown', (e) => {
  const trackPointer = pointer(e).start();

  trackOffset(pointerTracker.x, {
    from: myValue.get(),
    transform: conditional(
      (v) => v > 10,
      nonlinearSpring(5, 10) // strength, target
    ),
    onUpdate: myValue
  });
});
```
