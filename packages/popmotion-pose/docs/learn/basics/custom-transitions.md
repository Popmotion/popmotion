---
title: Custom transitions
description: How to use Popmotion to define custom transitions for posers
category: basics
next: dynamic-props
---

# Custom transitions

With automatic animations, it's easy to create snappy and playful animations just by defining poses.

But there's plenty of instances where we want full control over our animation. For this, we can use the `transition` property.

- [Basic usage](#basic-usage)
- [Available animations](#available-animations)
  - [Tween](#tween)
    - [Easing](#easing)
  - [Spring](#spring)
  - [Decay](#decay)
  - [Keyframes](#keyframes)
  - [Physics](#physics)
- [Transition props](#transition-props)
  - [Delay](#delay)
  - [Min/Max](#min-max)
  - [Round](#round)

## Basic usage

Just like CSS, every pose can have a `transition` property. This property describes how each animating value should transition to its new pose:

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

**By default**, `transition` will be defined as a `tween`. By providing a `type` property, we can select a different animation to use:

## Available animations

Pose ships with five built-in Popmotion animations.

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

```javascript
transition: { type: 'spring', stiffness: 100 }
```

[Full `spring` documentation](/api/spring)

### Decay

```javascript
transition: { type: 'decay' }
```

[Full `decay` documentation](/api/decay)

### Keyframes

```javascript
transition: {
  type: 'keyframes',
  values: [0, 100, 50]
}
```

[Full `keyframes` documentation](/api/keyframes)

### Physics

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
