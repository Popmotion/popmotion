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

`pipe` is named as such because it takes a list of functions and returns a new function that will run these functions from **left to right**. Essentially, creating a value pipeline.

As our functions are descriptively named, and as many of them are curried, our pipelines become very easy to read. They become less imperitive, and more declarative.

For instance, let's compose a function that will always return a valid RGB value. RGB values are simply integers between `0` and `255`.

```javascript
const rgbUnit = pipe(
  clamp(0, 255),
  Math.round
);
```

What's cool about this example is that it shows that **any** function that 1) takes a number and 2) returns a number, can be composed. `Math.round` does exactly that, so we can compose it.

You don't have to write this function yourself, because that exact code is already included as a Popmotion transformer, and used in the `rgba` [value type](/api/value-types).

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

This is an example of composing functions **which were themselves composed**. This is a very clear way of expressing and reusing our logic.

## Applying these to animations

Every Popmotion action supports a `transform` property. `transform` can be provided a function that accepts and returns a number. Sounds familiar?

The action's current value will be passed through this function
- Whenever `.get()` is called, and
- Before being sent to the action's `onUpdate` function.

So we can ensure the action always return a valid number:

```javascript
tween({
  from: 0,
  to: 255,
  transform: rgbUnit,
  onUpdate: (v) => console.log(v)
}).start();
```

Or applies stepped motion to spring physics:

```javascript
physics({
  from: 0,
  to: 100,
  transform: steps(5, 0, 100),
  onUpdate: (v) => console.log(v)
}).start();
```

Etc.

## Conclusion

These pure, simple functions are easily composed and reused. They can be used on their own, or with any action (not just tweens), making them extremely versitile.

Most animation libraries provide options like `step` or `round` but we believe this functional approach gives developers the greatest flexibility and predictability.

We've covered just some of the many transformers here, but you should explore the rest can be found detailed in the [API docs](/api/transformers), and have fun creating your own.
