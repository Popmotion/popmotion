---
title: Spinnable
description: Make any DOM node or React component spinnable!
category: plugins
---

# Spinnable

Make any DOM node or React DOM component spinnable in one line of code!

Provides an optional `onSpin` callback to use spinnable nodes as dial controls.

```marksy
<CodePen id="MoZXyM" />
```

## Install

```
npm install popmotion-spinnable --save
```

## DOM

To use with DOM nodes, simply provide a node to `spinnable`:

```javascript
import spinnable from 'popmotion-spinnable';

const node = document.querySelector('div');
spinnable(node);
```

Or provide additional options:

```javascript
import { transform } from 'popmotion';
const { snap } = transform;

spinnable(node, {
  onSpin: (angle) => console.log(angle),
  transformSpin: snap(45),
  friction: 1
});
```

## React

```javascript
import Spinnable from 'popmotion-spinnable/lib/react';

export default ({ onSpin }) => (
  <Spinnable className="dial" onSpin={onSpin} />
);
```

## Options
- `friction`: Friction applied to the spin when the user releases. Set to `1` to stop dead. Default: `0.4`
- `onSpin`: Function to be called every frame, provided the latest angle.
- `transformSpin`: A function that takes the spin, and returns it before the value is applied to the node.
- `className`: **React only** Provides support for adding a class for styling purposes, and adds support for `styled-components`-esque styling systems.

## Methods

- `stop`: Hard stops any currently active actions. Generally only used when unmounting the node.
