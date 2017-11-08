---
title: Stagger
description: Stagger the execution of actions or functions.
category: compositors
---

# Stagger

Stagger the execution of actions or functions.

## Import

```javascript
import { stagger } from 'popmotion';
// or stand-alone:
import stagger from 'popmotion/compositors/stagger';
```

## Usage

```typescript
type ActionStarter = () => { stop: Function } | void;
type Interval = number | (i: number) => number;

stagger(actionStarters: ActionStarter[], interval: Interval): Action
```

`stagger` accepts two arguments, an array of functions, and an `interval`:

```javascript
stagger([
  () => tween().start(reaction),
  () => tween().start(reaction)
], 100).start();
```

Each function in the array can optionally return an action subscription. When the `stagger` is `start`ed and then `stopped`, it will loop through and `stop` any returned subscriptions:

```javascript
const staggeredTweens = stagger([
  () => tween().start(reaction),
  () => tween().start(reaction)
], 100).start();

staggeredTweens.stop();
```

`interval` either as a number, or a function that accepts an `index` and returns a number for non-uniform stagger durations.
