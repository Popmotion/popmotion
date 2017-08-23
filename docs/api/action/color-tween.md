---
title: Color Tween
description: Blends from one color to another using linear interpolation.
category: action
---

# Color Tween

Creates a special tween that smoothly transitions between two colors.

Popmotion uses an advanced algorithm for smoother blends without muddy saturation loss, as explained in the video [Computer Color is Broken](https://www.youtube.com/watch?v=LKnqECcg6Gw).

Colors can be provided either as objects of named color channels ('red', 'green' etc), or as hex/rgb/rgba strings.

`colorTween(props <Object>)`

```marksy
<Example template="Swatch" id="a">{`
const swatch = document.querySelector('#a .swatch');
const swatchRenderer = css(swatch);

colorTween({
  from: '#ED2754',
  to: '#6127ED',
  duration: 700,
  flip: Infinity,
  ease: easing.linear,
  onUpdate: (color) => swatchRenderer.set('backgroundColor', color)
}).start();
`}</Example>
```

This is the animated version of the `blendColor` transformer.

## Props

[...Tween](/api/tween)

## Methods

[...Tween](/api/tween)
