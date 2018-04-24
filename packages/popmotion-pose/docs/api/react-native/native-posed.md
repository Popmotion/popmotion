---
title: Posed
description: Create posed components
category: react-native
---

# Posed components

React Native Pose exports a single function, `posed`.

```javascript
import posed from 'react-native-pose';
```

It's a factory function that creates posed components. These are components [configured with a series of states that it can animate between and other options](/pose/native-config).

We can use `posed` to create three different kinds of posed component:

- Included components (ie `posed.View`)
- Custom components
- Function as child components

## Included components

[React Animated](https://facebook.github.io/react-native/docs/animations.html) ships with four animatable components: `View`, `Text`, `Image` and `ScrollView`.

Likewise, `posed` has shortcuts for each of these components:

- `posed.View(config)`
- `posed.Text(config)`
- `posed.Image(config)`
- `posed.ScrollView(config)`

## Custom components

Animated also has a helper function that you can use to create animated components from any normal component: `createAnimatedComponent(Component)`.

If `posed` is called as a function, it can also create an animated component from any other:

`posed(Component)(config)`

This makes `posed.View` practically the same as `posed(View)`.

## Function as children components

By creating posed components with the previous two methods, React Native Pose will automatically handle the application of the generated `Animated.Value`s.

In return for this simplicity, you lose a little flexibility. For instance, you don't get to choose the `transform` order, and you can't create arbitrary values (as they all get applied as `style`s).

By calling `posed` as a function without any `Component`, the returned posed component will use the "function as children pattern" to provide the `Animated.Value`s to children:

```javascript
const PosedComponent = posed()({
  open: { x: 0, scaleY: 1 },
  closed: { x: 100, scaleY: 0 }
});

export default ({ isOpen }) => (
  <PosedComponent pose={isOpen ? 'open': 'closed'}>
    {({ x, scaleY }) => (
      <Animated.Value style={{ transform: [{ translateX: x }, { scaleY }] }} />
    )}
  </PosedComponent>
)
```
