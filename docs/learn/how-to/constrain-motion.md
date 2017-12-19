---
title: Constrain motion
description: How to constrain motion to within ranges using clamping and springs.
category: how-to
---

# Constrain motion

When creating UIs, there's plenty of instances when we want to constrain motion to within a specific range.

For instance, if we're making a product carousel, we'll want to stop the carousel from moving when it reaches either end of the shelf.

In this tutorial, we'll look at a functional approach to this problem by handling out-of-range motion with 1) a hard clamp and 2) a static spring.

## Clamp

The easiest way to restrict motion to within a range is by clamping it. Clamping is simply the process of making sure a number doesn't go beyond the limit set by another.

JavaScript comes inbuilt with two commonly-used clamping functions, `Math.min` and `Math.max`.

If we had a `physics` simulation that we didn't want to output a number greater than `500`, we could use `Math.min` with the `pipe` method like this:

```javascript
physics({ velocity: 1000 })
  .pipe(v => Math.min(v, 500))
  .start(console.log) // Never greater than 500
```

To keep a value within a range, we could use a combination of the two functions:

```javascript
v => Math.min(Math.max(v, 0), 500)
```

But this approach can be difficult to remember. Instead, Popmotion offers a [transformer](/api/transformers) called, descriptively, `clamp`. This function takes two numbers, the lower and upper range, and returns a function that will clamp any given number to within that range.

Which means we could make a `pointer` action that restricts its `x` output to within a range like this:

```javascript
pointer({ x: 0 })
  .pipe(
    ({ x }) => x,
    clamp(0, 500)
  )
```

While the clamp approach is sufficient in restricting motion to a range, in many situations it doesn't feel very satisfying to **use**. Think of iOS when you scroll a view beyond its boundaries: They tug rather than stop dead.

For this effect, we can use static springs.

## Static springs



## Conclusion
