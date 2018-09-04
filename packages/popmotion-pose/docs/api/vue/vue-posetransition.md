---
title: PoseTransition
description: A component for managing entering and exiting Vue components 
category: vue
---

# `PoseTransition`

`PoseTransition` is a component that can animate a single element as its added to, and removed from, the DOM.

<TOC />

## Import

```javascript
import { PoseTransition } from 'vue-pose';
```

## Usage

### Animating a single element

By default, `PoseTransition` will automatically animate a child element in and out using a simple `opacity` fade. We can control whether the child is rendered using `v-if`:

```javascript
export default {
  props: ['isVisible'],
  components: { PoseTransition },
  template: `<PoseTransition>
    <div v-if="isVisible">Hello world</div>
  </PoseTransition>`
};
```

### Custom transition

We can change the enter and exit animations by making the child animation a posed component:

```javascript
export default {
  props: ['isVisible'],
  components: {
    PoseTransition,
    Message: posed.div({
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 }
    })
  },
  template: `<PoseTransition>
    <Message v-if="isVisible">Hello world</Message>
  </PoseTransition>`
}
```

### Animating children

Enter and exit poses are propagated like any other:

```javascript
export default {
  props: ['isVisible'],
  components: {
    PoseTransition,
    Shade: posed.div({
      enter: { opacity: 1, beforeChildren: true },
      exit: { opacity: 0, afterChildren: true }
    }),
    Modal: posed.div({
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 }
    })
  },
  template: `<PoseTransition>
    <Shade v-if="isVisible">
      <Modal>Hello world</Modal>
    </Shade>
  </PoseTransition>`
}
```

<CodeSandbox id="3qvz9w2rp6" height="500" vue />

### Animating between components

`PoseTransition` uses Vue's `transition` component under the hood, so many of the [same techniques for animating between components](https://vuejs.org/v2/guide/transitions.html#Transitioning-Between-Components) work here.

## Props

### appear

`appear: boolean = false`

By adding `appear`, any elements present when the component mounts will be animated in from their `'exit'` pose.

```javascript
<PoseTransition appear>
  /* children */
</PoseTransition>
```

### enterPose/exitPose

`enterPose: string = 'enter'`
`exitPose: string = 'exit'`

By default, the poses used for entering and exiting are `'enter'` and `'exit'`, respectfully.

By providing strings as props to `PoseTransition`, you can name these whatever you like.

```javascript
<PoseTransition enterPose="visible">
```

### mode

`mode: 'in-out' | 'out-in'`

By default, if one element is animating in and another is animating out, they'll both be rendered and animated simultaneously.

This can sometimes look odd, or not be the desired effect. By setting `mode`, we can change this behaviour:

- `'in-out'`: New element transitions in, then the current element transitions out.
- `'out-in'`: Current element transitions out, then the new element transitions in.

```javascript
<PoseTransition mode="out-in">
```
  