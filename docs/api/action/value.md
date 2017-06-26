---
title: Value
description: A simple value that updates when a new number is passed to `set`.
category: action
---

# Value

A single value that updates a function when a new number is passed to `set`.

`value(current <Number>, onUpdate <Function>)`

`value` is a good way of managing multiple actions all trying to act on the same property. By passing an instance of `value` to another action's `output` method (ie `tween` or `physics`), that action will register itself as the sole permitted updater of that `value`.

This means if a second action tries to update the `value`, the first action will be stopped first and there'll be no conflicts.

## Methods

- `set <Number>`: Updates `current` and schedules an update. Returns the `value` passed to it, useful for functional composition.

[...Action](action)

## Playground

```javascript
import { value } from 'popmotion';
```

```marksy
<Example template="Ball">{`
const ball = document.querySelector('.ball');
const ballRenderer = css(ball);

const ballX = value(
  0,
  (x) => ballRenderer.set('x', x)
);

ballX.set(150);

tween({ from: ballX.get(), to: 300 })
  .output(ballX)
  .start();
`}</Example>
```
