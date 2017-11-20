---
title: Reaction
description: A collection of update, complete and error functions that are subscribable.
category: reactions
---

# Reaction

A **reaction** is a collection of `update`, `complete` and `error` functions. 

The `reaction` and [`value`](/api/value) functions create reactions that can also be subscribed to by multiple other reactions, creating a **chain reaction**.

They also help manage actions: if a `reaction` or `value` is passed to a second `action`, the first one will automatically `stop`.

## Import

```javascript
import { reaction } from 'popmotion';
// or stand-alone:
import reaction from 'popmotion/reactions';
```

## Usage

```javascript
const foo = reaction();
foo.subscribe((v) => console.log(v));

tween().start(foo);
spring().start(foo); // This will stop `tween`
```

## Methods

### Reaction methods

`value()` returns:

- `filter((v: any) => boolean)`: Returns a new action that filters out values when the provided function returns `false`.
- `pipe(...funcs: Array<(v) => v)`: Returns a new reaction that will run `update` values through this sequence of functions.
- `subscribe(update | { update, complete, error })`: Returns a subscription.
- `stop()`: Stops current parent action.
- `while((v: any) => boolean)`: Returns a new reaction that will `complete` when the provided function returns `false`.

### Subscription methods

`value().subscribe()` returns:

- `unsubscribe()`
