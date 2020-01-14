---
title: Posed
description: Create a posed component with Pose for Vue
category: vue
---

# `posed`

`posed` is used to create animated and interactive components that you can reuse throughout your Vue site.

<TOC />

## Import

```javascript
import posed from 'vue-pose';
```
## Usage

### Create a posed component

`posed` can be used to create posed HTML and SVG elements.

It isn't called directly, instead we call it via the name of the element we want to create, along with a [posed component config](/pose/api/vue-config).

```
<template>
  <Box :pose="isVisible ? 'visible' : 'hidden'" />
</template>

<script>
import posed from 'vue-pose';

export default {
  props: ['isVisible'],
  components: {
    Box: posed.div({
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    })
  }
};
</script>
```

Every HTML and SVG element is supported.

### Set a pose

Poses can be set via the `pose` property.

```
<template>
  <Box :pose="isVisible ? 'visible' : 'hidden'" />
</template>
```

### Children

Using a posed component creates a new tree of posed components. Any children that are also posed components are automatically added to this tree.

This means that orchestrating animations through React trees becomes trivial, as a pose only has to be set on a parent. Any children with that pose defined will also animate:

```
<template>
  <Sidebar :pose="isVisible ? 'visible' : 'hidden'">
    <ul>
      <Item v-for={item in items} v-bind:key={item} />
    </ul>
  </Sidebar>
</template>

<script>
import posed from 'vue-pose';

export default {
  props: ['isVisible', 'items'],
  components: {
    Sidebar: posed.nav({
      open: { x: '0%', staggerChildren: 100 },
      closed: { x: '-100%' }
    }),
    Item: posed.li({
      open: { opacity: 1 },
      closed: { opacity: 0 }
    })
  }
};
</script>
```

<CodeSandbox id="qq667ljpz4" height="500" vue />

### Styling

Posed components return regular HTML elements, so they can be used with any CSS styling solution.

## Props

### pose

`pose?: string`

The name of the current pose.

### preEnterPose

`preEnterPose?: string`

The name of a pose to set before the component mounts. If present, once the component mounts it will transition from this pose into `pose`.

### poseKey

`poseKey?: string | number`

If `poseKey` changes, it'll force the posed component to transition to the current `pose`, even if it hasn't changed.

This won't be required for the majority of use-cases. But we might have something like a paginated where we pass the x offset to the component but the pose itself doesn't change:

```
<template>
  <Slider pose="nextItem" :poseKey="target" :target="target" >
</template>

<script>
import posed from 'vue-pose';

export default {
  props: ['target'],
  components: {
    Slider: posed.div({
      nextItem: {
        x: ({ target }) => target
      }
    })
  }
};
</script>
```

### withParent

`withParent?: boolean = true`

If set to `false`, this component won't subscribe to its parent posed component and create root for any further child components.

### onPoseComplete

`onPoseComplete?: Function`

A callback that fires whenever a pose has finished transitioning.

### onValueChange

`onValueChange?: { [key: string]: any }`

`onValueChange` is a map of functions, each corresponding to a value being animated by the posed component and will fire when that value changes.

### ...props

`...props: { [key: string]: any }`

When a new pose is entered, any remaining props set on a component will be used to resolve that pose's dynamic props:

```
<template>
  <ul>
    <Item
      v-for={item in items}
      v-bind:key={item}
      :i={item}
      :pose="isVisible ? 'visible' : 'hidden'"
    />
  </ul>
</template>

<script>
import posed from 'vue-pose';

export default {
  props: ['isVisible', 'items'],
  components: {
    Item: posed.li({
      visible: { opacity: 1 },
      hidden: {
        opacity: 0,
        y: ({ i }) => i * 50
      }
    })
  }
};
</script>
```

## Events

The following events can be subscribed to with `v-on`:

### drag-start/drag-end

`drag-start/drag-end: (e: Event) => void`

Callbacks that fire when dragging starts or ends. **Note:** These props are immutable and can't be changed after mounting.

### press-start/press-end

`press-start/press-end: (e: Event) => void`

Callbacks that fire when pressing starts or ends. **Note:** These props are immutable and can't be changed after mounting.
