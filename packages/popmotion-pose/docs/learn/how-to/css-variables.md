---
title: CSS variables
description: How to declaratively animate CSS variables
category: how-to
---

# Animate CSS variables

[CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) are variables that can be defined on a parent element and then referenced throughout its children:

```css
body {
  --brand-color: #f00;
}

a {
  color: var(--brand-color);
}
```

The benefit of CSS variables vs variables in CSS pre-processors like SASS is that they're **dynamic**, which means they can be updated at runtime.

So in the above example, to change the link color we'd simply change the value of `--brand-color`.

Because these values can be changed, they can be animated. In this tutorial we'll demonstrate how to animate multiple elements on a page by animating a single CSS variable.

<CodePen id="JLaBNG" />

<TOC />

## CSS

First, open this [CodePen](https://codepen.io/popmotion/pen/mxGZNx?editors=0110) to follow along with the tutorial.

As a simple example, we're going to animate a `distance` property. Add that to `body`:

```css
body {
  --distance: 0px;
}
```

Now, on the `.box` rule add a `transform` that uses this `distance`:

```css
transform: translateX(var(--distance));
``` 

## JavaScript

In all the previous Pose tutorials, if we've wanted to change a property of an element, we've selected the element itself.

With CSS variables, we're instead going to animate the parent element where the variable is set. Which, in this case, is `body`:

```javascript
const body = document.querySelector('body')
```

Now define the pose config with a single pose, called `right`:

```javascript
const config = {
  right: { '--distance': '100px' }
}
```

Bring the two together by creating a new poser:

```javascript
const bodyPoser = pose(body, config)
```

To trigger the animation, set the pose to "right":

```javascript
bodyPoser.set('right')
```

And that's it! All four boxes will animate to the right.

## Gotchas

There are a couple of points to keep in mind when you animate CSS variables.

### Pose can't infer types

In the example above, we explicitly set `--distance` to `'100px'`. Usually when animating `x`, we'd simply use `100` as a raw number and Pose would infer that we should use pixels.

When you're animating CSS variables, **Pose doesn't know what you're going to do with the variable**. So we need to manually tell it if we want specific measurements.

### CSS variables sometimes contain whitespace

In [this CodePen](https://codepen.io/popmotion/pen/JLaBNG?editors=0010), we're animating using the `--color` variable as initially read directly from the CSS.

Oddly, this read value is sometimes returned with extra whitespace. If you then set the value with the extra whitespace, it breaks! In this example we're using `from` as `from.trim()` to fix this, but there is an [open issue in the Stylefire](https://github.com/Popmotion/stylefire/issues/16) to have this fixed.
