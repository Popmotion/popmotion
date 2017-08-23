---
title: Tween
description: Change a value over a specific duration of time.
category: action
---

# Tween

`tween(props <Object>)`

## Props

- `duration <Number>`: The amount of time for the tween to take, in milliseconds.
- `ease <Function>`: Easing function.
- `from <Number>`: The number to tween from. (default `0`)
- `to <Number>`: The number to tween to. (default: `1`)
- `flip <Number>`: Number of times to flip tween on tween complete. (default: `0`)
- `loop <Number>`: Number of times to restart tween from beginning on tween complete. (default: `0`)
- `yoyo <Number>`: Number of times to reverse tween on tween complete. (default: `0`)

[...Action](/api/action)

## Methods

### `getElapsed`
Get the elapsed time of the tween.

### `flip`
Flip the tween's `from` and `to`.

### `reverse`
Reverse the tween's progress through time.

### `seek(progress <Number>)`
Given a progress between 0 and 1, this will seek the tween to that position. If the tween is not already active, this will schedule an update.

[...Action](/api/action)

## Playground

```marksy
<Example template="Ball">{`
const ball = document.querySelector('.ball');
const ballRenderer = css(ball);

tween({
  to: 300,
  duration: 1000,
  ease: easing.easeInOut,
  loop: Infinity,
  onUpdate: (x) => ballRenderer.set('x', x)
}).start();
`}</Example>
```
