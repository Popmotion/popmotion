---
title: Animating children
description: An live example of animating across children using Pose for Vue.
category: vue
---

# Animating children

Pose changes propagate across posed components, so you only have to set `pose` on a parent to animate all its children.

```javascript
<template>
  <Sidebar :pose="isVisible ? 'visible': 'hidden'">
    <Item v-for="item in items" v-bind:key="item" />
  </Sidebar>
</template>
```

<CodeSandbox id="qq667ljpz4" height="500" vue />
