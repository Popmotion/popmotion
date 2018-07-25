---
title: Passive values
description: Learn how to create passive values that only change when others do
category: react-native
---

# Passive values

Passive values bind to a value defined in your poses, and change when they change using `Animated.Value.interpolate`.

They're currently the **only** way to animate colors in React Native Pose.

<TOC />

## Defining a passive value

Passive values are defined via the `passive` config prop.

They're defined as tuples, and look like this:

```javascript
const config = {
  draggable: 'x',
  passive: {
    opacity: ['x', {
      inputRange: [-200, 0, 200],
      outputRange: [0, 1, 0]
    }]
  }
}
```

<Video src="/static/videos/native-passive-opacity.mp4" height="320" />

The first property in the tuple is the name of the value to bind to.

The second is [the interpolation definition](https://facebook.github.io/react-native/docs/animations.html#interpolation). It maps from the bound value to our passive value.

## Animating color

We currently use `passive` to animate colors (though the ability to define them in poses is on the roadmap).

```javascript
const config = {
  open: { scale: 1 },
  closed: { scale: 0 },
  passive: {
    backgroundColor: ['scale', {
      inputRange: [0.5, 1],
      outputRange: ['#f00', '#0f0']
    }]
  }
};
```

<Video src="/static/videos/native-passive-color.mp4" height="320" />

## Binding to ancestors

So far we've bound passive values to other values on the same posed components.

We can also look back up the ancestor chain and link to values defined in parent posed components.

### First posed parent

To link to the first ancestor in the posed component ancestor chain, we just pass `true` as the third and final argument of the tuple.

```javascript
const Sidebar = posed.View({
  open: { x: 0 },
  closed: { x: -300 }
})

const Item = posed.View({
  passive: {
    opacity: ['x', {
      inputRange: [-300, 0],
      outputRange: [0, 1]
    }, true]
  }
})

export default ({ isOpen }) => (
  <Sidebar pose={isOpen ? 'open' : 'closed'}>
    <Item />
    <Item />
    <Item />
  </Sidebar>
)
```

<Video src="/static/videos/native-passive-children.mp4" height="320" />

### Further ancestors

To go further up the chain, we can use the `label` prop instead of `true`.

First, provide a label to the ancestor:

```javascript
const Sidebar = posed.View({
  label: 'sidebar',
  open: { x: 0 },
  closed: { x: 300 }
})
```

Then we provide this label to a child component:

```javascript
const Item = posed.View({
  passive: {
    opacity: ['x', {
      inputRange: [0, 300],
      outputRange: [1, 0]
    }, 'sidebar']
  }
})
```

`Item` could now be many posed components deep and it'll still bind to the Sidebar component.
