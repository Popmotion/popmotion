---
title: Get started
description: Introduction to Pose for React's declarative animation interface
category: react
next: custom-transitions
---

> React Pose has been **deprecated** in favour of [Framer Motion](https://framer.com/motion). [Read the upgrade guide](https://www.framer.com/api/motion/migrate-from-pose/)

# Get started

Pose is a declarative motion system that combines the simplicity of CSS transitions with the power and flexibility of JavaScript.

In this series of tutorials, we'll learn how to use Pose for React DOM. We'll gradually introduce each of its features, starting with this simple `opacity` animation:

<CodeSandbox id="w71ppx095" view="preview" />

<TOC />

## Setup

The easiest way to play around with Pose is to [fork this CodeSandbox playground](https://codesandbox.io/s/qz0zyqwnqq).

For local development, all installation options can be found on the [install](/pose/learn/install) page.

## The "Hello World" animation

In Pose for React, we create animated components by importing `posed` from `react-pose`:

```javascript
import posed from 'react-pose';
```

`posed` can create animated versions of any HTML or SVG element. Use it to create a `div`:

```javascript
const Box = posed.div();
```

Change the `render` function to return an instance of `Box` instead of `div`:

```javascript
return <Box className="box" />;
```

With Pose, we define possible states, or **poses**, that the `Box` can be in. It looks a lot like CSS:

```javascript
const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});
```

Now to animate `Box` between its `visible` and `hidden` poses, we just pass it a `pose` prop:

```javascript
return (
  <Box
    className="box"
    pose={this.state.isVisible ? 'visible' : 'hidden'}
  />
);
```

The box is now animating between the two poses!

## But wait, where did we define the animation?

Short answer: we didn't.

More helpful answer: By default, Pose **doesn't require you to explicitly define the animations** used to transition between two states.

Instead, it automatically creates an animation based on the properties being animated.

These animations have been designed to create snappy and playful interfaces. Physical motion uses `spring` to maintain velocity between animations, whereas properties like `opacity` use a `tween`.

However, there will always be situations where we want greater control. For that, we can define [custom transitions](/pose/learn/custom-transitions).