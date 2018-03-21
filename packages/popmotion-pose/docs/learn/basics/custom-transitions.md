---
title: Custom transitions
description: How to use Popmotion to define custom transitions for posers
category: basics
next: animating-children
---

# Custom transitions

Just like CSS, every pose has a `transition` property. This is a function that returns a [Popmotion animation](/api) (or `false`, for no animation).

Replace the `props` you added to either the [DOM](https://codepen.io/popmotion/pen/bvqJbV?editors=0010) or [React](https://codepen.io/popmotion/pen/mxmrPZ?editors=0010) playgrounds with the following:

```javascript
const { tween } = popmotion

const props = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: ({ from, to }) => tween({ from, to, duration: 1000 })
  }
}
```

This function is run **once, for every value being animated in the current pose**. This allows you to return a different animation for each value.

## `transition` props

The `transition` function is provided one argument, a `props` object.

This object contains properties that you can use to decide which animation is returned.

These props provide information about the value being animated:

- `from`: The current state of this value
- `to`: The target state defined in the pose
- `velocity`: If a numerical value, the current velocity of the value
- `key`: The name of the current value
- `prevPoseKey`: The name of the pose this value was previously set to

For instance, we can use `key` to return a different animation based on the value being animated. Let's add a `scaleY` property to our poses:

```javascript
const props = {
  visible: { scaleY: 1, opacity: 1 },
  hidden: {
    scaleY: 0,
    opacity: 0,
    transition: ({ from, to }) => tween({ from, to, duration: 1000 })
  }
}
```

We can use `key` here to return a different [easing](/api/easing) based on the property being animated:

```javascript
const { easing, tween } = popmotion

const props = {
  visible: { scaleY: 1, opacity: 1 },
  hidden: {
    scaleY: 0,
    opacity: 0,
    transition: ({ from, to, key }) => tween({
      from, to,
      duration: 1000,
      ease: key === 'opacity' ? easing.linear : easing.anticipate
    })
  }
}
```

You're also under no obligation to end the animation on the `to` property. You can do anything with the returned animation.

Let's replace our `props` with a new set of poses:

```javascript
const props = {
  rest: { scale: 1 },
  alert: { scale: 1.2 }
}
```

Set the poser or posed component to "alert" and the box will transition to the `scale: 1.2` defined in that pose.

Instead, let's use a custom `transition` function to return a `spring` animation with `damping` set to `0` so it permanently oscillates around the `to` value:

```javascript
const props = {
  rest: { scale: 1 },
  alert: {
    scale: 1.2,
    transition: ({ from, to, velocity }) => spring({
      from, to, velocity,
      stiffness: 20,
      damping: 0
    })
  }
}
```

Now, we can add a `setTimeout` function that will set the `boxPoser` to `rest` after any amount of time:

```javascript
setTimeout(() => boxPoser.set('rest'), 2000)
```

Try changing the timeout duration. The box will animate smoothly from any position. Because `scale` uses a spring animation by default, it also maintains some of the property's velocity.

## Next

So far, we've shown how simple it is to animate a single element.

Traditionally, orchestrating animation across multiple elements has been more involved. In the next topic we'll show that with Pose, it's just as simple.