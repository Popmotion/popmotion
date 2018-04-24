---
title: Get started
description: Introduction to Popmotion Pose's declarative animation interface
category: basics
next: custom-transitions
---

# Get started

Pose is a declarative motion system for the web.

It intends to combine the simplicity of CSS transitions with the power and flexibility of Popmotion.

In this series of tutorials, we'll gradually introduce each of Pose's features. Starting with implementing this very simple `opacity` animation:

<CodePen id="LdOpaN" />

## Setup

The easiest way to play around with Pose is to [use this CodePen playground](https://codepen.io/popmotion/pen/bvqJbV?editors=0010).

For local development, all installation options can be found on the [install](/pose/learn/install) page.

## The "Hello World" animation

Animations in Pose are created by defining states, like this:

```javascript
const poseProps = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}
```

This `poseProps` object is at the heart of both Pose and React Pose. Like CSS, we use this object to describe the possible states (or **poses**) that our element can be in.

How we actually use these props differs slightly between Pose and React Pose:

### Pose

With vanilla Pose, we use the [`pose` function](/pose/api/pose) to create a **poser**:

```javascript
const poser = pose(element, poseProps)
```

We can now use `poser`'s `set` method with the name a defined pose:

```javascript
poser.set('hidden')
```

### React

You can play with React Pose with the [React Pose playground](https://codepen.io/popmotion/pen/mxmrPZ?editors=0010).

React Pose exposes the [`posed` function](/pose/api/posed). Similar to [Styled Components'](https://styled-components.com) `styled` function, this creates reusable React components:

```javascript
const Box = posed.div(poseProps)
```

By calling `posed.div` we've created a component that will output a `div`, but you can use the name of any HTML or SVG element.

To animate this component between poses, we simply pass a `pose` prop on render:

```javascript
render() {
  return (
    <Box
      className="box"
      pose={this.state.isVisible ? 'visible' : 'hidden'}
    />
  )
}
```

## But wait, where did we define the animation?

Short answer: we didn't.

More helpful answer: By default, Pose **doesn't require you to explicitly define the animations** used to transition between two states.

Instead, it automatically selects a Popmotion animation based on the property being animated:

- `translate` and `rotate` props use a [slighty-bouncy spring](/api/spring).
- `scale` props use a [tight spring](/api/spring).
- All other props use a [tween](/api/tween).

These animations have been selected to create snappy and playful interfaces. Physical motion uses `spring` to maintain velocity between animations.

In the near future, it will be possible to affect these default animations by using properties to describe the **characteristics** of the interface.

However, there will always be situations where we need greater control. For that, we can define [custom transitions](/pose/learn/custom-transitions).