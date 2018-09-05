---
title: Enter/exit transitions
description: Learn how to make enter and exit transitions with Pose for Vue's PoseTransition component
category: vue
next: vue-passive
---

# Enter/exit transitions

Pose for Vue includes a spin on the [Vue `transition` component](https://vuejs.org/v2/guide/transitions.html), `PoseTransition`.

Its used for animating a single component as it's added or removed from the DOM.

In this tutorial we'll learn how to use it to animate a single component as it enters and leaves the DOM.

<CodeSandbox id="3qvz9w2rp6" height="500" vue />

<TOC />

## Setup

Begin by forking this [CodeSandbox playground](https://codesandbox.io/s/r7wv84wmnn?module=%2Fsrc%2FApp.vue).

It's set up with some basic styles, and a `button` that sets an `isVisible` data property to `true`.

## Adding the modal

First lets add a modal that gets conditionally rendered when `isVisible` is `true`.

In our template, add after the `button`:

```html
<div class="shade" v-if="isVisible">
  <div class="modal" />
</div>
```

Now, when you click the button, the modal is added to the DOM.

To animate this, we can use `PoseTransition`. At the top of the `script` section, import it:

```javascript
import { PoseTransition } from 'vue-pose';
```

Pass this through to our template by providing it in the `components` property of our exported component:

```javascript
export default {
  data: () => ({ isVisible: false }),
  components: { PoseTransition }
};
```

Now in our `template` section we can wrap our newly-added HTML with the `PoseTransition` component:

```html
<PoseTransition>
  <div class="shade" v-if="isVisible">
    <div class="modal" />
  </div>
</PoseTransition>
```

Awesome! Our modal now fades in when we click the button.

If we add a new event to our `shade` div, we can see it also fades out when we remove the modal:

```javascript
<div class="shade" v-if="isVisible" v-on:click="isVisible = false">
```

## Custom transition

In many cases, we'll want to customise the animation used as components animate in and out.

We can do this by using posed components.

Import `posed`:

```javascript
import posed, { PoseTransition } from 'vue-pose';
```

Now made a new component for `Shade`. It's already a `div`, so let's use a `div`. We can define anything we want for the `'enter'` and `'exit'` poses, but for now lets just animate `opacity` with a quicker transition:

```javascript
components: {
  PoseTransition,
  Shade: posed.div({
    enter: {
      opacity: 1,
      transition: { duration: 200 }
    },
    exit: { opacity: 0 }
  })
}
```

Now replace the direct child of `PoseTransition` with `Shade`:

```html
<PoseTransition>
  <Shade class="shade" v-if="isVisible" v-on:click="isVisible = false">
    <div class="modal" />
  </Shade>
</PoseTransition>
```

And now the modal fades in faster! But wait, it doesn't fade out any more...

We can fix this by changing `v-on:click` with `v-on:click.native`. This tells Vue we want to add the event listener to the underlying element.

## Animating children

It'd be cooler if we could do an animation that involves the white modal box, too. Well, we can! As we saw before, poses get propagated throughout the DOM, and components under `PoseTransition` are no different.

Replace our `modal` div with:

```html
<Modal class="modal" />
```

And add a new posed component called `Modal` to `components`:

```javascript
Modal: posed.div({
  enter: { opacity: 1, z: 0 },
  exit: { opacity: 0, z: -150 }
})
```

Now the modal animates too! But all the animations happen at the same time. We can adjust the timings by providing some extra props to `Shade`.

By adding `beforeChildren` to `enter` and `afterChildren` to `exit`, we can ensure that `Modal` animates separately to `Shade`:

```javascript
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
```

<CodeSandbox id="3qvz9w2rp6" height="500" vue />

## Conclusion

There's more to `PoseTransition`, like animating between sibling components, and animating on mount. Find out its full capabilities with the [full API docs](/pose/api/vue-posetransition).
