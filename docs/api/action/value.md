---
title: Value
description: A simple value that updates when a new number is passed to `set`.
category: action
---

# Value

`value(current <Number>, onUpdate <Function>)`

## Methods

- `set <Number>`: Updates `current` and schedules an update.

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
`}</Example>
```
