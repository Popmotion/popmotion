---
title: Stagger
description: Stagger the execution of a series of actions.
category: compositors
---

# Stagger

Stagger the execution of a series of actions.

<TOC />

## Import 

```javascript
import { stagger } from 'popmotion';
```

## Usage

```typescript
stagger(actions: Action[], interval: number | (i: number) => number): Action
```

`stagger` accepts two arguments, an array of actions and an `interval`:

```javascript
stagger([
  tween(),
  spring()
], 100)
```

When started, it outputs the values as an array. Actions that haven't yet started will output `undefined`, and you can define a default.

```javascript
stagger([
  tween(),
  spring()
], 100).start((values) => values.forEach((v = 0, i) => {
  console.log(v);
}))
```

## Methods

### Action methods

`stagger()` returns:

- `filter((v: any) => boolean)`: Returns a new action that filters out values when the provided function returns `false`.
- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the tween and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.

### Subscription methods

`stagger().start()` returns:

- `stop(): void`

