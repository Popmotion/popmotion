---
title: Reaction
description: A collection of update, complete and error functions that are subscribable.
category: reactions
---

# Reaction

A **reaction** is a collection of `update`, `complete` and `error` functions that can also be subscribed to.

## Import

```javascript
import { reaction } from 'popmotion';
// or stand-alone:
import reaction from 'popmotion/reactions';
```

## Methods

### Reaction methods

`value()` returns:

- `pipe(...funcs: Array<(v) => v)`: Returns a new reaction that will run `update` values through this sequence of functions.
- `subscribe(update | { update, complete, error })`: Returns a subscription.
- `while((v: any) => boolean)`: Returns a new reaction that will `complete` when the provided function returns `false`.

### Subscription methods

`value().subscribe()` returns:

- `unsubscribe()`

#### Chainable modifiers

Reactions share the same chainable modifiers as `action`.

See: [Action - Methods](/api/action#methods).