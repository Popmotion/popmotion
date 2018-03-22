---
title: Passive values
description: Learn how to make values change when others do
category: basics
next: flip
---

# Passive values

The `passive` object can be used to define a group of values that only change when others do.

In this tutorial we'll see how to create passive values, and also how to create passive values that respond to changes in parent values.

## Defining a passive value

Take the [previous example](https://codepen.io/popmotion/pen/dmWWdp?editors=0010), and `props` with this:

```javascript
const props = {
  draggable: 'x'
}
```

Now motion is locked to the `x` axis, we can actually make this motion diagonal by creating `y` as a new `passive` value.

Passive values are defined as tuples, like this:

```javascript
const props = {
  draggable: 'x',
  passive: {
    y: ['x', v => v]
  }
}
```

The first value in the tuple is the value we want to link to, and the second is a transformation function. In this example, it's firing whenever `x` changes, and returns a new `y` that is exactly the same.

<CodePen id="QmvmOe" />

We can start changing this transform value to create different effects. For instance, try flipping `x` to create diagonal movement in the opposite direction:

```javascript
y: ['x', v => -v]
```

Or for wavey behaviour:

```javascript
y: ['x', v => v * Math.sin(v * 0.01)]
```

## Changing non-numerical values

So far, we've mapped two pixel values. But we can set any kind of value with any other.

Long-time users of Popmotion will recognise the signature of the transform function. It accepts one value, and returns another. Which means we can compose this function using [Popmotion's transformers](/api/transformers).

For instance, instead of `y` let's create a function that will map `x` to `backgroundColor`.

For this we'll need to import four functions from `popmotion.transform`:

```javascript
const { pipe, clamp, interpolate, blendColor } = popmotion.transform
```

Our steps will be:

1) Convert the output of `x` to a `0` to `1` range
2) Clamp that output to within `0` and `1`
3) Use that number to blend between two colors

Which means our function will look like this:

```javascript
backgroundColor: ['x', pipe(
  interpolate([-200, 200], [0, 1]),
  clamp(0, 1),
  blendColor('#FF1C68', '#198FE3')
)]
```

<CodePen id="vRmRvV" />

## Linking to parents

We can also link a value to a value in a poser's direct parent.

Let's revist our [sidebar example](https://codepen.io/popmotion/pen/LdybdN?editors=0010) from earlier.


