---
title: Supported values
description: A list of supported values in Pose for React Native.
category: react-native
---

# Supported values

<TOC />

## Transforms

Pose for React Native supports the animation of all `transform` values.

`rotate`, `rotateX` and `rotateY` must (currently) be defined as `'deg'` values:

```javascript
posed.View({
  init: { rotate: '0deg' },
  flip: { rotate: '180deg' }
})
```

## Colors

Color animations (`backgroundColor`, `color` etc) are **currently** only supported as [passive values](/pose/learn/native-passive):

```javascript
posed.View({
  draggable: 'x',
  passive: {
    backgroundColor: ['x', {
      inputRange: [-200, 200],
      outputRange: ['#f00', '#0f0']
    }]
  }
})
```

## Other values

All other values, defined either as a number or unit type, are animatable.

**However,** React Animated (the underlying animation library) doesn't currently support native animation of these values, and animating them will disable native animation of **all** values on that component.
