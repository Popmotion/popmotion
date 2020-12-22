<p align="center"><img alt="Projection" width="315px" height="250px" src="https://user-images.githubusercontent.com/7850794/102894782-89d3bd80-445b-11eb-9ca4-1db275e684f0.png" /></p>

<h3 align="center">A lightweight layout projection library</h3>

## Introduction

Layout projection is a method for animating layout at 60fps.

In essence, it's the ability to project any element from its browser-computed layout to a size and position on screen of your choosing.

[Learn more about layout projection's capabilities.](https://mattperry.is/writing-code/layout-projection-animate-browser-layout-60fps-3)

**Projection** is an experimental, lightweight layout projection library. It currently clocks in at 1.8kb, and I expect it to land somewhere in the 2.5kb range.

[Demo](https://codesandbox.io/s/floral-frog-hv1k7?file=/src/index.js)

## Install

**Projection** is currently in alpha. Expect bugs, and breaking changes as the scope of the library is better defined.

```bash
npm install projection@alpha
```

## Usage

### Projecting an element

```javascript
import { layoutNode, updateProjectionStyle } from "projection"

const element = document.getElementById("element-id")

/**
 * Create a layoutNode for each element you want to project
 */
const node = layoutNode({
  onProjectionUpdate: () => updateProjectionStyle(node, element)
})

/**
 * To project, we need an accurate measurement of the element. To do this 
 * accurately, the measured element can't currently have a transform applied.
 * Future releases will handle this automatically.
 * 
 * Ensure that that `setLayout` is called every time the element's layout is recomputed.
 */
const bbox = element.getBoundingClientRect()
node.setLayout(bbox)

/**
 * Now we can project. Setting a target will project an element into
 * the provided bounding box.
 */
node.setTarget({
  top: 100,
  left: 100,
  right: 400,
  bottom: 400
})
```

### Projecting trees

A major difficulty of layout animations is once you apply a transform to a parent, you distort children elements that you might wish to be of a particular size or position throughout the animation.

The calculations involved in correcting this distortion become increasingly complex for deeper layout animation trees.

**Projection** removes this complexity by allowing `layoutNode` to accept another `layoutNode` as a parent. In this way, a tree can be formed. Projection will ensure all child transforms are calculated to compensate for parent transforms.

```javascript
const childNode = layoutNode(options, parentNode)
```

### Animations

By using a low-level animation library like [Popmotion](https://popmotion.io), layout animations are a matter of calling `setTarget` once per frame.

```javascript
import { animate, mix } from "popmotion"

// Just before layout change:
const prev = element.getBoundingClientRect()

// Immediately after layout change:
element.style.transform = ""
const next = element.getBoundingClientRect()
node.setLayout(next)

animate({
  from: 0,
  to: 1,
  onUpdate: progress => {
    node.setTarget({
      left: mix(prev.left, next.left, progress),
      right: mix(prev.right, next.right, progress),
      top: mix(prev.top, next.top, progress),
      bottom: mix(prev.bottom, next.bottom, progress),
    })
  }
})
```

## TODO

- [ ] Add helper functions for scale correcting box shadow, border etc.
- [ ] Make more DOM-specific API.
- [ ] Add parent-relative targets.
- [ ] Add support for `rotate`.

---

Thanks to [Alex Nault](https://alexnault.dev) for donating the `projection` package name!
