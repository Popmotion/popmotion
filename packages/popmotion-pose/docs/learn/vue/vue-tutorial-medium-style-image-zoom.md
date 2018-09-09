---
title: "Tutorial: Medium-style image zoom"
description: How to make Medium-style image zooming with Pose for Vue
category: vue
---

# Tutorial: Medium-style image zoom

[Medium](https://medium.com) have an beautiful zoom effect on their images. When clicked, they pop out of the page as a white background fades in behind them. Then, if clicked again, or if a user scrolls away, they pop back into place.

Take a look:

<iframe width="600" height="400" src="https://www.youtube.com/embed/Y2gd1ILCoYA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

In this tutorial, we'll learn how to achieve this same effect using Pose for Vue.

<TOC />

## Setup

To get started, fork this [CodeSandbox template](https://codesandbox.io/s/n4n8opjjvj?module=%2Fsrc%2FApp.vue).

`App.vue` contains a mock article that contains a couple of images. These are being rendered via the component we're going to work on, `ZoomImage`.

Open `components/ZoomImage.vue`, and let's get started!

## State

First, we need to create some state to keep track of whether the image is zoomed or not.

In the component exported from the `script` section, add a `data` property that returns our initial state:

```javascript
export default {
  props: ['imageWidth', 'imageHeight', 'src'],
  data: () => ({ isZoomed: false })
}
```

Of course, this state is useless on its own. We're going to need a couple of functions to set the zoom status. After the `data` prop, add a `methods` prop with `zoomIn` and `zoomOut` functions:

```javascript
methods: {
  zoomIn() {
    this.isZoomed = true;
  },
  zoomOut() {
    this.isZoomed = false;
  }
}
```

Finally, we want to toggle the zoomed state when someone clicks the image or, when zoomed in, its white background.

Add a `computed` property to the component with a `toggleZoom` property. This will return either `zoomIn` or `zoomOut` depending on whether `isZoomed` is `true` or `false`:

```javascript
computed: {
  toggleZoom() {
    return this.isZoomed ? this.zoomOut : this.zoomIn;
  }
}
```

In the `template` section, we can now provide this `toggleZoom` property to the `div`:

```javascript
<div
  v-bind:style="{ width: imageWidth + 'px', height: imageHeight + 'px' }"
  v-on:click="toggleZoom"
>
```

Now, when the image is clicked, the component will change zoom status. But we're not responding to this in our `template`. Let's make some animations!

## Image zoom animation

When the image zooms in, it needs to animate from its place in the document, smoothly into the center of the screen. To do this, we're going to use Pose's FLIP capabilities.

You can read the gritty details about FLIP in this [blog post by Paul Lewis](https://aerotwist.com/blog/flip-your-animations/). In essence, it's a way of *performantly* animating between two states that would otherwise be expensive, for instance where `position`, `top`, `width`, or other layout-changing properties have changed.

In Pose, you simply have to add `flip: true` to a pose, and it'll automatically perform the usually complicated steps to perform this animation.

Import Pose for Vue:

```javascript
import posed from 'vue-pose';
```

Now add a `components` prop to our exported component, and give it a posed `img` component named `ZoomImage`:

```javascript
components: {
  ZoomImage: posed.img()
}
```

We're going to provide the component two poses, one for each zoom state: `zoomedIn` and `zoomedOut`.

Our `zoomedIn` pose is going to set `position: fixed` and every positional prop to `0`. This will pop the content out of the layout and lock it to the viewport.

In our `style` section, `img` has a style of `margin: auto` which centers the image when it's being stretched across the screen in this way.

```javascript
ZoomImage: posed.img({
  zoomedIn: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flip: true
  }
})
```

`zoomedOut` sets `position: static` to pop it back into the DOM, as well as setting `width` and `height` to `auto` to make it fill its layout container:

```javascript
ZoomImage: posed.img({
  zoomedOut: {
    position: 'static',
    width: 'auto',
    height: 'auto',
    flip: true
  },
  zoomedIn: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flip: true
  }
})
```

We've now got our posed `img` component fully configured. Replace the `img` component in the `render` function with it:

```html
<ZoomImage :src="src" />
```

To animate `ZoomImage` between the two poses, we need to provide it a `pose` property.

Add a new `computed` property, `pose`. This will return the name of one of our defined poses, `'zoomedIn'` or `'zoomedOut'`, depending on whether `isZoomed` is `true` or `false`:

```javascript
pose() {
  return this.isZoomed ? 'zoomedIn' : 'zoomedOut';
}
```

We can now use this `pose` prop in our `template`:

```html
<ZoomImage :pose="pose" :src="src" />
```

Now, when we click our image, it zooms in and out!

I find the automatically generated animation a little bouncy for this purpose. We can define a new `transition` with a `ease` curve generated at [Lea Verou's cubic bezier generator](http://cubic-bezier.com/#.08,.69,.2,.99).

```javascript
const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};
```

Provide this as a `transition` prop to both `ZoomImage` poses, and the animation becomes a little slicker.

## Background animation

That's the (usually) difficult bit out of the way. It's looking pretty good but the Medium example fades a background in behind the image as it zooms in and out.

Make a new posed component in `components` called `Frame`:

```javascript
Frame: posed.div();
```

In our `style` section, add a new rule for `.frame`. We're going to make the background of this frame white, and set `translateZ(0)` to ensure its fade animation is hardware-accelerated:

```css
.frame {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  background: white;
  transform: translateZ(0);
}
```

And now add `Frame` as a sibling of `Image`, also passing it the `pose` prop:

```html
<Frame :pose="pose" class="frame" />
<ZoomImage :pose="pose" :src="src" />
```

Now we can animate it! We just want to fade the overlay in and out, so first add those poses:

```javascript
Frame: posed.div({
  zoomedIn: { opacity: 1 },
  zoomedOut: { opacity: 0 }
});
```

By itself this won't do anything, as we've got `display` set to `none` in the CSS.

For this we can use the `applyAtStart` and `applyAtEnd` props. They allow you to define styles to set at the start and at the end of the pose transition, respectively.

```javascript
Frame: posed.div({
  zoomedIn: {
    applyAtStart: { display: 'block' },
    opacity: 1
  },
  zoomedOut: {
    applyAtEnd: { display: 'none' },
    opacity: 0
  }
});
```

Now your background will fade in and out behind the image as it zooms in!

## Scroll to zoom out

The original Medium image zoom has a nice feature where if a user starts scrolling, the image zooms out back into its original place.

We can accomplish the same thing by adding a `'scroll'` event listener to `zoomIn`, and remove that event listener on `zoomOut`:

```javascript
zoomIn() {
  window.addEventListener('scroll', this.zoomOut);
  this.isZoomed = true;
},
zoomOut() {
  window.removeEventListener('scroll', this.zoomOut);
  this.isZoomed = false;
}
```

## Conclusion

Here's our finished example:

<CodeSandbox height="700" id="4w9vq9vkmw" vue />

There's plenty of fun things you can do to improve accessibility and aesthetics.

Have a think about:

- Closing the image via the `esc` key
- Changing the background animation. You could even incorporate SVGs.
- Adding a "scroll delay" where a user has to scroll a minimum distance before we close the image.
- Changing the cursor to show a zoom in or zoom out icon.