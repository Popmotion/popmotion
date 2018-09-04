---
title: Introducing Pose for Vue
description: An introduction to the declarative animation library for Vue
published: 20180409
author: mattperry
---

# Introducing Pose for Vue

Over the past couple weeks I've seen a few people mention Vue when talking about Pose integration.

So, over the last week I've been tinkering with Vue and figuring out the best way to bring Pose's declarative animations and interactions to this growing framework.

Today, I'm pleased to announce the first release of [Pose for Vue](/pose)!

Let's take a look at the new library.

<TOC />

## Posed components

As with Pose for React, the core of the library is the `posed` object.

```javascript
import posed from 'vue-pose';
```

It's used for making posed components, components that will magically animate from a single prop change. No `transition` needed!

```javascript
export default {
  components: {
    Box: posed.div({
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    })
  },
  template: `<Box :pose="isVisible ? 'visible' : 'hidden'" />`
};
```

<CodeSandbox id="3vov3orj71" height="500" vue />

## Interactions

Of course, all the normal Pose features are here. Making a component respond to pointer interactions is a matter of a couple of props:

```javascript
export default {
  components: {
    Box: posed.div({
      draggable: true,
      hoverable: true,
      init: { scale: 1 },
      hover: { scale: 1.2 },
      drag: { scale: 1.1 }
    })
  },
  template: `<Box />`
};
```

<CodeSandbox id="qvnw69lv9" height="500" vue />

## Animating children

One of Pose's most popular features is how simple it becomes to orchestrate animations throughout the DOM.

In Pose for Vue, it's no different. Poses set on a parent component flow through the DOM automatically, so any children components with the same poses defined will animate too.

Properties like `delayChildren` and `staggerChildren` allow total control over when child animations get fired.

```javascript
export default {
  components: {
    Sidebar: posed.ul({
      visible: {
        x: 0,
        beforeChildren: true,
        staggerChildren: 50
      },
      hidden: {
        x: '-100%',
        afterChildren: true,
        staggerChildren: 20,
        staggerDirection: -1
      }
    }),
    Item: posed.li({
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 20 }
    })
  },
  template: `<Sidebar :pose="isVisible">
    <Item v-for="item in items" v-bind:key="item" />
  </Sidebar>`
};
```

<CodeSandbox id="qq667ljpz4" height="500" vue />

## Enter/exit transitions

There's even a special version of Vue's `transition` component.

Called `PoseTransition`, it automatically creates opacity animations for children DOM elements, but posed components can be used to define custom transitions.

```javascript
export default {
  components: {
    PoseTransition,
    Modal: posed.div({
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 100 }
    })
  },
  template: `<PoseTransition>
    <Modal v-if="isVisible" />
  </PoseTransition>`
}
```

<CodeSandbox id="3qvz9w2rp6" height="500" vue />

## And the rest

That's to say nothing of the powerful [passive values](/pose/learn/vue-passive-values) or [FLIP](/pose/learn/vue-flip) features, that are both here as expected.

## What's missing

Currently, Pose for Vue doesn't have `transition-group` support. Vue's in-built `transition-group` is excellent, with all the FLIP-powered goodness that Pose for React offers with the `PoseGroup` component.

Unfortunately, `transition-group` doesn't offer JavaScript hooks for the move animations. Which means it would take serious time investment to offer the same feature with Pose for Vue.

If Pose for Vue proves popular, I'll be able to take another look in the coming weeks.

## What's next

Over the coming weeks we'll be doubling-down on making Popmotion libraries easier to contribute to and more robust. That means introducing [CircleCI](https://circleci.com/), and improving test coverage around the DOM Pose flavours.

Until then, [get started with Pose for Vue](/pose/learn/vue-get-started)!
