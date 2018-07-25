---
title: Posed
description: Create posed components
category: react-native
---

# `posed`

React Native Pose exports a single function, `posed`.

```javascript
import posed from 'react-native-pose';
```

<TOC />

## Posed components

`posed` is a factory function that creates posed components. These are components [configured with a series of states that it can animate between and other options](/pose/api/native-config).

We can use `posed` to create three different kinds of posed component:

- Included components (ie `posed.View`)
- Custom components
- Function as child components

### Included components

[React Animated](https://facebook.github.io/react-native/docs/animations.html) ships with four animatable components: `View`, `Text`, `Image` and `ScrollView`.

Likewise, `posed` has shortcuts for each of these components:

- `posed.View(config)`
- `posed.Text(config)`
- `posed.Image(config)`
- `posed.ScrollView(config)`

### Custom components

Animated also has a helper function that you can use to create animated components from any normal component: `createAnimatedComponent(Component)`.

If `posed` is called as a function, it can also create an animated component from any other:

`posed(Component)(config)`

This makes `posed.View` practically the same as `posed(View)`.

### Function as children components

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
      <Animated.View style={{ transform: [{ translateX: x }, { scaleY }] }} />
    )}
  </PosedComponent>
)
```

## Props

### pose

`pose?: string | string[]`

The name of one or more poses to set to.

### initialPose

`initialPose?: string | string[]`

The name of one or more poses to set to before the component mounts. Once the component mounts, it will transition from this pose into `pose`.

### poseKey

`poseKey?: string | number`

If `poseKey` changes, it'll force the posed component to transition to the current `pose`, even if it hasn't changed.

This won't be required for the majority of use-cases. But we might have something like a paginated where we pass the x offset to the component but the pose itself doesn't change:

```javascript
const Slider = posed.View({
  nextItem: {
    x: ({ target }) => target
  }
})

({ target }) => <Slider pose="nextItem" poseKey={target} target={target} />
```

### onDragStart/onDragEnd

`onDragStart/onDragEnd?: (e: NativeEvent, gestureState: GestureState) => any`

Lifecycle callbacks for drag events. Provided the same arguments as [PanResponder's lifecycle events](https://facebook.github.io/react-native/docs/panresponder.html).

### withParent

`withParent?: boolean = true`

If explicitly set to `false`, this posed component will become a new root for any posed children components.

### values

`values?: { [key: string]: Animated.Value }`

Optional way of providing the posed component the `Animated.Value`s rather than letting it create them itself. In case you want to retain ownership for whatever reason.
