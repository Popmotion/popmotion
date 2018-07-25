---
title: Dragging
description: Make elements draggable with React Native Pose
category: react-native
next: native-passive
---

# Dragging (experimental)

Simplifying interactivity is a core aim for Pose on the web, and the same is true for React Native Pose.

Currently, it offers experimental dragging support. In this tutorial, we'll:

- Make a component draggable
- Hook into the special `dragging` and `dragEnd` poses
- Use the `onDragStart` and `onDragEnd` callbacks

<TOC />

## Dragging

To make a component draggable set `draggable: true` in the posed component config:

```javascript
const config = {
  draggable: true
};
```

<Video src="/static/videos/native-drag.mp4" height="320" />

`true` sets both axis to draggable, but we can select a single axis to drag on by setting it to `'x'` or `'y'`:

```javascript
const config = {
  draggable: 'x'
}
```

<Video src="/static/videos/native-drag-x.mp4" height="320" />

## Special poses

When dragging, two special poses become available. `dragging`, and `dragEnd`.

These two poses will be set automatically and will propagate throughout the component's children as normal.

For instance, we could make a component that increases in scale while the user's dragging:

```javascript
const config = {
  draggable: true,
  dragging: { scale: 1.2 },
  dragEnd: { scale: 1 }
};
```

<Video src="/static/videos/native-drag-pose.mp4" height="320" />

Both of these poses gets provided [PanResponder's](https://facebook.github.io/react-native/docs/panresponder.html) `gestureState` object, so we can make different animations based on the behaviour of the drag:

```javascript
const config = {
  draggable: 'x',
  dragEnd: {
    x: 0,
    transition: ({ value, toValue, gestureState }) => {
      return gestureState.dx > 50 || gestureState.dx < -50
        ? Animated.decay(value, { velocity: gestureState.vx })
        : Animated.spring(value, { toValue })
    }
  }
}
```

<Video src="/static/videos/native-drag-end.mp4" height="320" />

## onDragStart/onDragEnd

If `onDragStart` or `onDragEnd` callbacks are provided to the component, they'll be called with the same arguments as [PanResponder's](https://facebook.github.io/react-native/docs/panresponder.html) `onPanResponderGrant` and `onPanResponderRelease` callbacks.

```javascript
<DraggableComponent onDragEnd={(e, gestureState) => {}} />
```

## Coming soon

Pose for the web has a `dragBounds` property that can clamp movement to within a specified range. This feature will come to React Native Pose in the coming weeks.

In the longer term we want to introduce a range of properties like snap points, but the serialisable nature of Animated's API makes this difficult compared to the functional API of Popmotion.

## Dragging via Interactable

Wix's [Interactable](https://github.com/wix/react-native-interactable) library is a declarative way of introducing interactions at the component level and is compatible with React Native Pose. If you use it be careful **not** to set `draggable: true` on the posed component otherwise Pose will disable the native driver.

```javascript
const PosedComponent = posed()(config);

export default () => (
  <PosedComponent pose="poseName">
    {({ x, y }) => (
      <Interactable.View
        animatedValueX={x}
        horizontalOnly={true}
        snapPoints={[{x: 0}, {x: -200}]}
      />
    )}
  </PosedComponent>
)
```
