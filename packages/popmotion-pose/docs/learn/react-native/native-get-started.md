---
title: Get started
description: Introduction to Pose for React Native's declarative animation interface
category: react-native
next: native-custom-transitions
---

# Get started

Pose is a declarative motion system that combines the simplicity of CSS syntax with the power and flexibility of JavaScript animations and interactions.

In this series of tutorials, we'll learn how to use Pose for React Native. We'll gradually introduce each of its features, starting with this simple `opacity` animation:

<Video src="/static/videos/native-get-started.mp4" height="320" />

<TOC />

## Setup

Install Pose for React Native in your React Native project:

### npm

```bash
npm install react-native-pose
```

### yarn

```bash
yarn add react-native-pose
```

## The "Hello World" animation

In Pose for React Native, we create animated components by importing `posed` from `react-native-posed`:

```javascript
import posed from 'react-native-pose';
```

`posed` can create [animated versions of any component](/pose/api/native-posed), but it has built-in support for `View`, `Text`, `Image`, and `ScrollView`:

```javascript
const Box = posed.View();
```

We can pass a [a configuration object](/pose/api/native-config) to the posed component that defines visual states, or "poses", that our component can be in:

```javascript
const Box = posed.View({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});
```

This `Box` component can be animated between `'hidden'` and `'visible'` poses by passing it a `pose` property on render:

```javascript
export default ({ isVisible }) => (
  <Box style={styles.box} pose={isVisible ? 'visible' : 'hidden'} />
)
```

And that's it! By switching `isVisible`, your `Box` component will animate in and out.

## But wait, where did we define the animation?

Short answer: we didn't.

More helpful answer: By default, Pose **doesn't require you to explicitly define the animations** used to transition between two states.

Instead, it automatically selects a React Animated animation based on the property being animated.

These animations have been designed to create snappy and playful interfaces. Physical motion uses `spring` to maintain velocity between animations, whereas properties like `opacity` use a `tween`.

However, there will always be situations where we need greater control over our animations. For that, we can define [custom transitions](/pose/learn/native-custom-transitions).
