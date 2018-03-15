---
title: Circular motion
description: How to animate angle and radius to output x and y coordinates.
category: how-to
---

# Circular motion

HTML and SVG elements are positioned by `x` and `y` coordinates. This type of positioning is known as **cartesian coordinates**, and animating these is great for moving elements in straight lines (the majority use-case).

However, to move elements in a circular fashion, it's much easier to animate position using **polar coordinates**: Position as defined by `angle` and `radius`.

We can then convert these polar coordinates into `x` and `y` to produce movement like this:

<CodePen id="eygBGW" height={400} />

In this quick tutorial, we'll create circular motion converting polar to cartesian coordinates using functional composition.

As a bonus step, we'll then explain how we can rotate the element to face its direction of travel.

You can [fork this CodePen](https://codepen.io/popmotion/pen/qpRROg?editors=0010) to follow along.

## Position

We can convert `radius` and `angle` into `x` and `y` using `cos` and `sin` functions:

```javascript
const x = radius * Math.cos(angle);
const y = radius * Math.sin(angle);
```

By expressing this as a pure function, we'll be able to provide it to any animation's `pipe` method:

```javascript
const polarToCartesian = ({ angle, radius }) => ({
  x: radius * Math.cos(angle),
  y: radius * Math.sin(angle)
});
```

With this function we can write a simple animation that:
- 1) Changes `radius` at a constant velocity of 5 radians a second.
- 2) Pipes the animation output through `polarToCartesian` to convert into `x` and `y`.
- 3) Styles the div by using `boxStyler.set`:

```javascript
physics({
  from: { angle: 0, radius: 150 },
  velocity: { angle: 5, radius: 0 }
}).pipe(polarToCartesian)
  .start(boxStyler.set);
```

Now our box moves in a circular motion.

<CodePen id="GyrWJv" />

In this animation we're keeping `radius` at a constant value by setting `velocity` to `0`. By using the `composite` function, we can combine two different animations to animate `radius` and `angle` in different ways:

```javascript
composite({
  angle: physics({ velocity: 5 }),
  radius: tween({
    from: 0,
    to: 150,
    yoyo: Infinity,
    ease: easing.easeInOut,
    duration: 2000
  })
}).pipe(polarToCartesian)
  .start(boxStyler.set);
```

## Direction

It looks a little awkward to have a square stay upright as it moves in a circular motion.

We can calculate and inject a `rotate` property based on the current `angle` to ensure the square is facing the direction of travel.

First, let's make our `polarToCartesian` function more composable by allowing it to pass through any properties that it doesn't consume using spread props:

```javascript
const polarToCartesian = ({ angle, radius, ...props }) => ({
  x: radius * Math.cos(angle),
  y: radius * Math.sin(angle),
  ...props
});
```

Next, we need to make a function that simply takes `angle` and returns the angle perpendicular to it as a new property, `rotate`.

`cos` and `sin` functions accept radians, whereas CSS and SVG `rotate` properties are defined in degrees. We can use Popmotion's [`radiansToDegrees` calculator](/api/calc) to convert `angle` into degrees, and then simply rotate it by `90`:

```javascript
const rotatePerpendicular = (props) => {
  const { angle } = props;
  return {
    rotate: radiansToDegrees(angle) + 90,
    ...props
  };
};
```

Applying this new function is as easy as modifying `pipe` to read:

```javascript
.pipe(rotatePerpendicular, polarToCartesian)
```

<CodePen id="PEWWmG" />

## Conclusion

Circular motion is much easier to reason about in polar coordinates, and mapping these to cartesian is simple with `pipe`.

We can animate `angle` and `radius` with separate animations by using the `composite` composition function.

And finally, we can make the element rotate along with the direction of travel by converting `angle` into degrees and then adding an extra `90` degrees.
