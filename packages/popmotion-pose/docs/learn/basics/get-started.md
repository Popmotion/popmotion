---
title: Get started
description: Introduction to Popmotion Pose's declarative animation interface
category: basics
next: custom-transitions
---

# Get started

Pose is a declarative JavaScript motion system for animating the DOM.

It aims to combine the simplicity of CSS transitions with the power and flexibility of Popmotion.

In the following series of tutorials we'll explore Pose's capabilities.


Animations can be created by defining states, like this:

```javascript
const props = {
  open: { scaleX: 1 },
  closed: { scaleX: 0 }
}
```

With these props, we can define a **poser** that will animate to each state:

```javascript
// Plain JavaScript
const poser = pose(element, props)
poser.set('closed')

// React
const Component = posed.div(props)
({ isOpen }) => <Component pose={isOpen ? 'open' : 'closed'} />
```

## The "Hello world" animation

The easiest way to play around with Pose is to [use this CodePen playground](https://codepen.io/popmotion/pen/bvqJbV?editors=0010) to follow along with this tutorial.

Full installation options can be found on the [install](/pose/api/install) page.

Pose describes all animations in a `props` object. Like CSS, we use this object to describe the possible states (or "poses") that our element can be in:

```javascript
const props = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}
```

To make an element animate between these two states, we pass the element and the `props` object to Pose's [`pose` function](/pose/api/pose):

```javascript
const boxPoser = pose(box, props)
```

Now we can call `boxPoser`'s `set` method with either of our defined poses, and Pose will automatically animate between them:

```javascript
boxPoser.set('hidden')
```

### React

For React users, React Pose exposes the [`posed` function](/pose/api/posed). It creates components change their pose based on the current `pose` prop.

You can use the [React Pose playground](https://codepen.io/popmotion/pen/mxmrPZ?editors=0010) to follow along.

With the same props as before, make a new component:

```javascript
const Component = posed.div(props)
```

Above, we've called `posed.div` to create a `div`, but you can use any HTML or SVG element.

Now, replace `return null` on line 12 with our new component:

```javascript
return <Component pose={this.state.isVisible ? 'visible' : 'hidden'} />
```

## But wait, where was the animation?

By default, Pose doesn't require you to explicitly define the animations used to transition between two states.

Instead, it automatically selects a Popmotion animation based on the property being animated:

- `translate` and `rotate` props use a [slighty-bouncy spring](/api/spring).
- `scale` props use a [tight spring](/api/spring).
- All other props use a [tween](/api/tween).

These animations have been selected to create snappy and playful interfaces. In the near future, it will be possible to affect these animations by using properties to describe the **characteristics** of the interface.

However, there's plenty of situations where we need greater control. For that, we can define [custom transitions](/pose/learn/custom-transitions).