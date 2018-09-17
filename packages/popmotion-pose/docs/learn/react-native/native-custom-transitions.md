---
title: Custom transitions
description: How to use custom transitions with Pose for React Native
category: react-native
next: native-animating-children
---

# Custom transitions

With [automatic animations](/pose/learn/native-get-started), it's easy to create snappy and playful animations just by defining poses.

But there's plenty of instances where we want full control over our animation. For this, we can use the [`transition` property](/pose/api/native-config/#config-poses-transition).

<TOC />

## Basic usage

`transition` can be defined as an object that describes how each value should transition to its new pose:

```javascript
posed.View({
  visible: {
    opacity: 1,
    transition: { duration: 300 }
  }
})
```

If we're animating multiple properties, we can **optionally** provide different animations for each by providing a named map.

```javascript
posed.View({
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 300 },
      default: { ease: 'linear', duration: 500 }
    }
  }
});
```

**By default**, if we define a `transition`, it'll be a `tween`. This is an animation between two values over a specific duration of time.

By providing a `type` property, we can select a different animation to use:

```javascript
transition: { type: 'spring', stiffness: 100 }
```

Pose for React Native currently supports tween, spring, and keyframes animations.

## Advanced usage

It's possible to set a `transition` prop as a function.

This can be used to generate a transition definition using dynamic props:

```javascript
transition: ({ toValue }) => ({
  type: 'keyframes',
  values: [0, 10, toValue]
})
```

Or to return any [React Animated](https://facebook.github.io/react-native/docs/animated) animation:

```javascript
posed.View({
  draggable: 'x',
  dragEnd: {
    x: 0,
    transition: ({ value, toValue, gestureState, useNativeDriver }) =>
      gestureState.dx > 50 || gestureState.dx < -50
        ? Animated.decay(value, { velocity: gestureState.vx, useNativeDriver })
        : Animated.spring(value, { toValue, useNativeDriver })
  }
})
```

**Note:** When returning a React Animated animation, you **must** pass it the `useNativeDriver` prop as provided by the transition function.