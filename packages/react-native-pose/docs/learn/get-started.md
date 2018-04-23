---
title: Get started
description: Introduction to React Native Pose's declarative animation interface
category: basics
next: custom-transitions
---

# Get started

React Native Pose is a declarative motion system for React Native's Animated library.

Some key features:

- **Automatic animations:** By default, transition animations are automatically generated based on the properties being animated.
- **Children binding:** Pose changes are propagated throughout children via context, allowing complex animations throughout components via a single prop change.
- **Units:** Handles unit animations without having to manually `interpolate`. Introduces CSS `vw` and `vh` units to React Native.
- **Easy dragging:** Making a component draggable is as simple as `draggable: true`.

In the following tutorials we'll take a look at each of React Native Pose's features, starting with a very simple `opacity` animation.

## Setup

Install React Native Pose in your React Native project:

### npm

```bash
npm install react-native-pose
```

### yarn

```bash
yarn add react-native-pose
```

## "Hello World" animation

React Native exports a single function, `posed`.

```javascript
import posed from 'react-native-pose';
```

`posed` is a factory function that creates posed components. These are components that can be animated between different states defined by a `config` object:

```javascript
const config = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const Box = posed.View(config);
```

Our new `Box` can now be animated between `'hidden'` and `'visible'` states by passing it a `pose` property on render:

```javascript
export default ({ isVisible }) => (
  <Box style={styles.box} pose={isVisible ? 'visible' : 'hidden'} />
)
```

And that's it! By switching `isVisible`, your `Box` component will animate in and out.

## But wait, where did we define the animation?

Short answer: we didn't.

More helpful answer: By default, Pose **doesn't require you to explicitly define the animations** used to transition between two states.

Instead, it automatically selects a React Animated animation based on the property being animated:

- `translate` and `rotate` props use a slighty-bouncy `spring`.
- `scale` props use a tight `spring`.
- All other props use `timing`.

These animations are configured identically to those in [Pose and React Pose](/pose). They've been tweaked to create snappy and playful interfaces. Physical motion uses `spring` to maintain velocity between animations.

In the near future, it will be possible to affect these default animations by using properties to describe the **characteristics** of the interface.

However, there will always be situations where we need greater control over our animations. For that, we can define [custom transitions](/react-native-pose/learn/custom-transitions).
