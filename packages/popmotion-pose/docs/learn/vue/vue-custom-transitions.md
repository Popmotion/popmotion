---
title: Custom transitions
description: How to use Pose for Vue to define custom transitions.
category: vue
next: vue-dynamic-props
---

# Custom transitions

With [automatic animations](/pose/learn/vue-get-started), it's easy to create snappy and playful animations just by defining poses.

But there's plenty of instances where we want full control over our animation. For this, we can use the `transition` property.

<TOC />

## Basic usage

Just like CSS, every pose can have a `transition` property. This property describes how each value should transition to its new pose:

```javascript
const config = {
  visible: {
    opacity: 1,
    transition: { duration: 300 }
  }
}
```

If we're animating multiple properties, we can **optionally** provide different animations for each by providing a named map.

```javascript
const config = {
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 300 },
      default: { ease: 'linear', duration: 500 }
    }
  }
};
```

**By default**, if we define a `transition`, it'll be a `tween`. This is an animation between two values over a specific duration of time.

By providing a `type` property, we can select a different animation to use:

## Transitions

Pose ships with five types of animation from [Popmotion Pure](/pure). Tween, spring, decay, keyframes, and physics.

### Tween

A tween animates from one value to another over a set duration of time.

```javascript
transition: {
  duration: 400,
  ease: 'linear'
}
```

#### Easing

The `ease` property can be used to affect the speed of the tween over the course of its duration.

This property can be the name of a [Popmotion easing function](/api/easing):

- 'linear'
- 'easeIn', 'easeOut', 'easeInOut'
- 'circIn', 'circOut', 'circInOut'
- 'backIn', 'backOut', 'backInOut'
- 'anticipate'

Or an array of four numbers to create a cubic bezier easing function:

```javascript
transition: {
  ease: [.01, .64, .99, .56]
}
```

[Full `tween` documentation](/api/tween)

### Spring

Spring animations maintain velocity between animations to create visceral, engaging motion.

It makes them perfect for animations that happen as a result of user interaction.

By adjusting their `stiffness`, `mass` and `damping` properties, a wide-variety of spring feels can be created.

```javascript
transition: { type: 'spring', stiffness: 100 }
```

[Full `spring` documentation](/api/spring)

### Decay

Decay reduces the velocity of an animation over a duration of time.

It's a perfect match for the special `dragEnd` pose that fires when a user stops [dragging](/pose/learn/vue-ui-events) something, as it can replicate the momentum-scrolling common on smart phones.

The end value is automatically calculated by Pose at the start of the animation, but with the `modifyTarget` prop, you can adjust this, allowing you to do things like snap to a grid.

```javascript
transition: {
  type: 'decay',
  modifyTarget: v => Math.ceil(v / 100) * 100 // Snap to nearest 100px
}
```

[Full `decay` documentation](/api/decay)

### Keyframes

Keyframes allows you to schedule a series of values to tween between.

```javascript
transition: ({ from, to }) => ({
  type: 'keyframes',
  values: [from, 100, to],
  times: [0, 0.25, 1]
})
```

[Full `keyframes` documentation](/api/keyframes)

### Physics

Physics allows you to simulate things like velocity, friction, and acceleration.

```javascript
transition: {
  type: 'physics',
  velocity: 1000
}
```

[Full `physics` documentation](/api/physics)

## Transition props

There are a number of other properties that can be used with any transition:

### Delay

If set, will delay the execution of the transition by the specified amount: 

```javascript
transition: {
  type: 'physics',
  delay: 400
}
```

### Min/Max

If set, will ensure values are capped to no less than `min` and no more than `max`.

```javascript
transition: {
  type: 'keyframes',
  values: [0, 3, 10],
  min: 2,
  max: 9
}
```

### Round

If set to `true`, `round` will ensure that values output from the animation will be rounded.

```javascript
transition: {
  type: 'spring',
  round: true
}
```
