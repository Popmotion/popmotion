---
title: Get started
description: Introduction to Pose for Vue's declarative animation interface
category: vue
next: vue-custom-transitions
---

# Get started

Pose for Vue is a declarative motion system that combines the simplicity of CSS transitions with the power and flexibility of JavaScript.

In this series of tutorials, we'll learn how to use Pose for Vue. We'll gradually introduce each of its features, starting with with this simple `opacity` animation:

<CodeSandbox id="3vov3orj71" vue view="preview" />

<TOC />

## Setup

The easiest way to follow this tutorial is to [fork this CodeSandbox playground](https://codesandbox.io/s/9l3vknjv74?module=%2Fsrc%2FApp.vue).

For local development, all installation options can be found on the [install](/pose/learn/vue-install) page.

## The "Hello World" animation

In Pose for Vue, we create animated components by importing `posed` from `vue-pose`.

In the head of the `script` section, add:

```javascript
import posed from 'vue-pose';
```

`posed` can create animated versions of any HTML or SVG element.

Add a `components` property to our exported component that uses `posed` to create a `div`:

```javascript
components: {
  Box: posed.div()
}
```

Now change the `div` in our `template` section to be an instance of `Box`:

```javascript
<template>
  <Box class="box" />
</template>
```

With Pose, we define possible states, or **poses**, that a component can be in. It looks a lot like CSS:

```javascript
components: {
  Box: posed.div({
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  })
}
```

Now to animate `Box` between its `visible` and `hidden` poses, we just pass it a `pose` prop.

Our exported component has an interval set on it that toggles `isVisible` between `true` and `false`. We can use that variable in our template to define a pose:

```javascript
<template>
  <Box class="box" :pose="isVisible ? 'visible' : 'hidden'" />
</template>
```

The box is now animating between the two poses!

## But wait, where did we define the animation?

Short answer: we didn't.

More helpful answer: By default, Pose **doesn't require you to explicitly define the animations** used to transition between two states.

Instead, it automatically creates an animation based on the properties being animated.

These animations have been designed to create snappy and playful interfaces. Physical motion uses `spring` to maintain velocity between animations, whereas properties like `opacity` use a `tween`.

However, there will always be situations where we want greater control. For that, we can define [custom transitions](/pose/learn/vue-custom-transitions).