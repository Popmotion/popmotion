---
title: Morph SVG
description: How to animate between two SVG shapes with Popmotion.
category: how-to
---

# Morph SVG

Popmotion animations can be used to morph between any two SVG `path` shapes.

SVG-morphing libraries [Flubber](https://github.com/veltman/flubber) and [Polymorph](https://github.com/notoriousb1t/polymorph) both functions that accept a value between 0 and 1 to blend between two shapes. This works great with Popmotion's functional API, and animating the morph is as simple as this:

```javascript
tween()
  .pipe(morph)
  .start(styler(pathElement).set('d'));
```

In this quick tutorial we'll define this `morph` function with both Flubber and Polymorph and animate it with a `tween`.

## Set up

First, we need an SVG with a `path` element to render into.

```html
<svg viewBox="0 0 400 400">
  <path id="target" />
</svg>
```

As we're going to animate the `path`'s verbosely-named `d` attribute, which defines the shape of the path, we can use Popmotion's [`styler` function](/api/styler) to create an optimised setter:

```javascript
const path = document.getElementById('#target');
const setPathAttr = styler(path).set('d');
```

Now we simply need a path definition string to provide to `setPathAttr`.

## Flubber

<CodePen id="yProEp" />

[Flubber](https://github.com/veltman/flubber) is a fully-featured morphing library that yields very accurate and pleasing results. The drawback being its filesize: A whopping 53kb!

Once you've installed and imported Flubber according to the docs, you can make the `morph` function using `flubber.interpolate`.

This function accepts two strings, one of each path you want to morph between:

```javascript
const star = "M103.04 162.52L39.36 196l12.16-70.9L0 74.86 71.2 64.5 103.04 0l31.85 64.52 71.2 10.35-51.57 50.22L166.7 196z";
const circle = "M86,171.5 C38.7796539,171.5 0.5,133.220346 0.5,86 C0.5,38.7796539 38.7796539,0.5 86,0.5 C133.220346,0.5 171.5,38.7796539 171.5,86 C171.5,133.220346 133.220346,171.5 86,171.5 Z";

const morph = flubber.interpolate(circle, star);
```

By default, the blending of the two shapes is pretty rough. We can pass `interpolate` a third options argument `{ maxSegmentLength: 2 }` to output more accurate shapes, though this might have performance impacts with more complex blends.

The generated `morph` function accepts a number between `0` and `1` and outputs a path definition string generated from a blend of `circle` and `star`.

So to animate our target `path`, we simply need to write an animation that outputs a number between `0` and `1` and provide `morph` to its `pipe` method so its output is the new path:

```javascript
tween()
  .pipe(morph)
  .start(setPathAttr);
```

## Polymorph

<CodePen id="dZLRLq" />

[Polymorph](https://github.com/notoriousb1t/polymorph) is a much lighter library clocking in at just 6kb! For complex shapes it works just as well as Flubber, though results may vary for simpler shapes. 

Setup works a little differently as it takes `path` definitions from existing elements, so we'll need to add those:

```html
<svg>
  <path id="Oval" d="M86,171.5 C38.7796539,171.5 0.5,133.220346 0.5,86 C0.5,38.7796539 38.7796539,0.5 86,0.5 C133.220346,0.5 171.5,38.7796539 171.5,86 C171.5,133.220346 133.220346,171.5 86,171.5 Z" />
  <path id="Star" d="M103.04 162.52L39.36 196l12.16-70.9L0 74.86 71.2 64.5 103.04 0l31.85 64.52 71.2 10.35-51.57 50.22L166.7 196z" />
</svg>
```

We simply provide the element ids to `polymorph.interpolate`, along with an optional `precision` setting:

```javascript
const morph = polymorph.interpolate(['#Star', '#Oval'], { precision: 4 });

tween()
  .pipe(morph)
  .start(setPathAttr);
```

## Next steps

Popmotion, Flubber and Polymorph's functional approach gives you the freedom to combine whichever libraries suit your project.

In this article, we've shown how simple it is to animate between shapes using `tween`. You could play around with other animations like `pointer`, which would make the blending scrubbable:

```javascript
pointer()
  .pipe(
    ({ x }) => x,
    interpolate([0, window.innerWidth], [0, 1])
  )
  .start()
```

However, neither library accepts numbers outside of `0` and `1`, which entails the following:

- `spring` needs to be overdamped by choosing a `damping` property high enough to prevent overshoot.
- Easing functions that generate overshoot, like `backOut`, will lead to stunted animations.
