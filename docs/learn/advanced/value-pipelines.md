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

## Applying these to animations

Every Popmotion action supports a `transform` property. This accepts any function that accepts and returns a number. This function will be run whenever `.get()` is called, and the result is passed to `onUpdate`.

So we can ensure we always return a valid number:

```javascript
tween({
  from: 0,
  to: 255,
  transform: rgbUnit,
  onUpdate: (v) => console.log(v)
}).start();
```

Or apply stepped motion to spring physics:

```javascript
physics({
  from: 0,
  to: 100,
  transform: steps(5, 0, 100),
  onUpdate: (v) => console.log(v)
}).start();
```

## Conclusion

These pure, simple functions are easily composed and reused. They can also be used with any action, not just tweens, making them extremely versitile.

Most animation libraries provide options like `step` but we believe this functional approach gives developers the greatest flexibility and predictability.

We've covered just some of the many transformers here, the rest can be found detailed in the [API docs](/api/transformers). As simple functions they're also incredibly easy to create and share, so we hope you experiment with your own.
