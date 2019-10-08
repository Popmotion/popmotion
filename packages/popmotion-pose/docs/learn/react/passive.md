---
title: Passive values
description: Learn how to create passive values that only change when others do
category: react
next: flip
---

> React Pose has been **deprecated** in favour of [Framer Motion](https://framer.com/motion). [Read the upgrade guide](https://www.framer.com/api/motion/migrate-from-pose/)

# Passive values

Sometimes we don't want to explicitly define a state for a value, we might just want it to change whenever another value does.

For instance, we might want an element to disappear as it moves beyond certain boundaries:

<CodePen id="LdOJZR" />

For this, we can use **passive values**. In this tutorial we'll see how to define them, and how to make them respond to changes in parent values too.

<TOC />

## Defining a passive value

Open the [this draggable example](https://codepen.io/popmotion/pen/dmWWdp?editors=0010) and replace the posed component config with this:

```javascript
const Box = posed.div({
  draggable: 'x'
});
```

The dragging motion of the element is locked to the `x` axis. We can actually lock movement to the diagonal by defining `y` as a `passive` value.

Passive values are defined a tuples, like this:

```javascript
const Box = posed.div({
  draggable: 'x',
  passive: {
    y: ['x', v => v]
  }
});
```

The first item in the tuple is the name of the value we want to link to. In this case, that's `'x'`.

The second item is a mapping function. This takes the output of the linked value and returns our passive value. In this example, we're simply returning `x`, and creating this motion:

<CodePen id="QmvmOe" />

By using this mapping function we can start creating new effects. For instance, returning the negative of `x` creates diagonal movement in the opposite direction:

```javascript
y: ['x', v => -v]
```

Or by using `Math.sin` we can make wavey behaviour:

```javascript
y: ['x', v => v * Math.sin(v * 0.01)]
```

## Changing non-numerical values

So far, we've mapped two pixel values. But we can set any kind of value with any other.

Long-time users of Popmotion will recognise the signature of the mapping function. It accepts one value, and returns another. Which means we can compose this function using [Popmotion's transformers](/api/transformers).

For instance, instead of `y` let's create a function that will map `x` to `backgroundColor`.

For this we'll need to import four functions from `popmotion.transform`:

```javascript
const { pipe, clamp, interpolate, blendColor } = popmotion.transform
```

Our steps will be:

1) Convert the output of `x` from pixels to a `0` to `1` range
2) Clamp that output to within `0` and `1`
3) Use that progress number to blend between two colors

Which means our function will look like this:

```javascript
backgroundColor: ['x', pipe(
  interpolate([-200, 200], [0, 1]),
  clamp(0, 1),
  blendColor('#FF1C68', '#198FE3')
)]
```

<CodePen id="vRmRvV" />

## Linking to ancestors

We can also link a passive value to a value in one of the poser's ancestors.

Let's revist our [sidebar example](https://codepen.io/popmotion/pen/LdybdN?editors=0010) from earlier.

Currently, we're actively animating the children by setting poses on both the parent and the children.

But, it's possible to change the opacity of the items as the `x` of their sidebar parent changes.

To do this, we pass `true` as the third and final argument of the tuple.

Add a slower `transition` to `sidebarConfig.open` to help us see this in effect.

```javascript
transition: (props) => tween({  ...props, duration: 1000 })
```

Now, replace `itemConfig` with this:

```javascript
const Box = posed.li({
  passive: {
    opacity: ['x', pipe(
      parseFloat,
      interpolate([-100, 0], [0, 1])
    ), true]
  }
});
```

As you can see, we're passing in a third parameter to the passive tuple, `true`. This says "listen to the `x` value, but do so on my immediate parent".

<CodePen id="GxOXeX" />

### Distant ancestors

Using `true` is fine if we want to look just one part up the ancestor chain. But it's also possible to go much further up using `label`.

By explicitly naming our posers with a `label`, we can refer to any poser in the ancestor chain.

Add the label `'sidebar'` to our `sidebarConfig`:

```javascript
const Sidebar = posed.ul({
  label: 'sidebar',
  /* other props */
});
```

Now replace `true` in `itemConfig` with `'sidebar'`. It still works, and it will still work if you decide to put a poser between sidebar and items.
