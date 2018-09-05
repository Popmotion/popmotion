---
title: Enter/exit transitions
description: An live example of using the PoseTransition component to make enter and exit transitions with Pose for Vue
category: vue
---

# Enter/exit transitions

Pose for Vue offers a special version of Vue's `transition` component.

Used to animate between single children, `PoseTransition` automatically creates opacity animations as child DOM elements are added and removed.

By providing it posed components, custom animations can be defined. They even flow down through children!

```javascript
export default {
  data: () => ({ isVisible: true }),
  components: {
    PoseTransition,
    Shade: posed.div({
      enter: {
        opacity: 1,
        beforeChildren: true,
        transition: { duration: 200, ease: "linear" }
      },
      exit: {
        opacity: 0,
        afterChildren: true,
        transition: { duration: 200, ease: "linear" }
      }
    }),
    Modal: posed.div({
      enter: { opacity: 1, z: 0 },
      exit: { opacity: 0, z: -150 }
    })
  },
  template: `<div>
    <button v-on:click="isVisible = true">Open modal</button>
    <PoseTransition appear>
      <Shade v-on:click.native="isVisible = false" class="shade" v-if="isVisible">
        <Modal class="modal" />
      </Shade>
    </PoseTransition>
  </div>`
};
```

<CodeSandbox id="3qvz9w2rp6" height="500" vue />
