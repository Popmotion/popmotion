---
title: Enter/exit transitions
description: Learn how to animate React components as they mount and unmount with Pose for React's PoseGroup component
category: react
next: passive
---

> React Pose has been **deprecated** in favour of [Framer Motion](https://framer.com/motion). [Read the upgrade guide](https://www.framer.com/api/motion/migrate-from-pose/)

# Enter/exit transitions

Animating components when they unmount has been historically tricky with React.

[Pose for React's `PoseGroup` component](/pose/api/posegroup) makes it trivial to animate one or more children components as they enter and exit.

In this tutorial, we'll see how it can be used to make this modal animation:

<CodeSandbox id="lx6k64453l" />

<TOC />

## Setup

To start, fork [this CodeSandbox](https://codesandbox.io/s/842823w17j).

It's set up with a `setInterval` that switches the visibility of two components, the modal, and its background overlay.

```javascript
render() {
  return (
    this.state.isVisible && [
      <div key="shade" className="shade" />,
      <div key="modal" className="modal" />
    ]
  );
}
```

Currently, both components snap in and out, so let's make them smoothly animate instead!

## Import Pose for React

First, we need to import Pose for React. This time, we're going to be importing both `posed` and the `PoseGroup` component:

```javascript
import posed, { PoseGroup } from 'react-pose';
```

## Add PoseGroup

To start triggering animations when components enter and exit, we need to wrap them in `PoseGroup`.

`PoseGroup` needs to stay rendered at all times, and its children can be added and removed via logic. So wrap our `isVisible` check like so:

```javascript
return (
  <PoseGroup>
    {this.state.isVisible && [
      <div key="shade" className="shade" />,
      <div key="modal" className="modal" />
    ]}
  </PoseGroup>
);
```

## Create posed components

As the `shade` and `modal` children are currently plain `div` components, they won't animate. We need to replace them with posed components.

After the block of imports, add:

```javascript
const Modal = posed.div();
const Shade = posed.div();
```

Then replace the two `div`s with our new components:

```javascript
<Shade key="shade" className="shade" />,
<Modal key="modal" className="modal" />
```

## Animate!

By default, `PoseGroup` will fire a component's `enter` pose when they enter (transitioning from its `exit` pose), and `exit` when they exit.

So let's give our new `Shade` and `Modal` components `enter` and `exit` poses:

```javascript
const Modal = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});
```

Now, your modal and its shade will animate in and out!

As usual you can play around with these poses to tweak the animation. For instance you can add a `delay` to `Modal`'s `enter` pose to make it animate in a little after the `Shade`. Or provide it a custom `transition` to `exit` faster:

```javascript
const Modal = posed.div({
  enter: { y: 0, opacity: 1, delay: 300 },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 200 }
  }
});
```
