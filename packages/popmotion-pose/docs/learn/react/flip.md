---
title: FLIP
description: A look at Pose's powerful FLIP API
category: react
---

> React Pose has been **deprecated** in favour of [Framer Motion](https://framer.com/motion). [Read the upgrade guide](https://www.framer.com/api/motion/migrate-from-pose/)

# FLIP

The FLIP technique, [fully explained here](https://aerotwist.com/blog/flip-your-animations/), is a way of animating expensive, layout-breaking animations like `width` and `top` by using quick transforms.

Pose provides a couple of methods for performing FLIP:

1. Animate `width`/`top`/etc and adding `flip: true` to a pose
2. Via the [`PoseGroup` component](/pose/api/posegroup)

In this tutorial, we'll take a look at each of these.

<TOC />

## width/top

The problem with animating size and position properties is that they break layout. Recalculating layout is expensive, which can slow animations to below 60fps.

So, when you set a pose with `flip: true` and any of `width`, `height`, `top`, `left`, `right`, or `bottom` values, these will applied at the start of the animation. Pose will measure the size and position of the element before and after, and animate from one to the other using transform properties instead.

For instance, we can switch a `div` to fullscreen and back using the following config:

```javascript
const Panel = posed.div({
  fullscreen: {
    width: '100vw',
    height: '100vh',
    transition: tween,
    flip: true
  },
  thumbnail: {
    width: 100,
    height: 100,
    transition: tween,
    flip: true
  }
});
```

<CodePen id="BrmGmR" />

## PoseGroup

React Pose includes a [component called `PoseGroup`](/pose/api/posegroup).

When wrapping a group of posed components, it enables two things:

1. `enter`/`exit` poses
2. FLIP-powered re-ordering

When an item enters or exits the group, or changes position in it, all the other items automatically measure their position before the change and then FLIP into to the new position:

<CodePen id="eMexyR" />

This all happens automatically. Open [this CodePen template](https://codepen.io/popmotion/pen/mxqobd?editors=0010)

At the top of the JS, create a new posed component, a list item:

```javascript
const Item = posed.li()
```

Now, replace `null` in the render function of `Example` with:

```javascript
(
  <ul className="sidepanel">
    <PoseGroup>
      {this.state.items.map(item => (
        <Item className="item" data-key={item} key={item} />
      ))}
    </PoseGroup>
  </ul>
);
```

This component is pre-set to shuffle the items every two seconds. Notice how, without even defining any animations, all the items automatically animate to their new home.

Plus, the `flip` pose is enabled. So we can define the animation they use to move position by changing `Item` to:

```javascript
const { tween } = popmotion

const Item = posed.li({
  flip: {
    transition: tween
  }
})
```
