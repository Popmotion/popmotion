---
title: Value
description: Track value state and query velocity
category: reactions
---

# Value

Tracks the state of a number and allows velocity queries.

## Import

```javascript
import { value } from 'popmotion';
// or stand-alone:
import value from 'popmotion/reactions/value';
```

## Usage

```javascript
import { tween, value } from 'popmotion';
import styler from 'stylefire';

const div = styler(document.querySelector('div'));
const divX = value(0);
myVal.subscribe(div.set('x'));

tween({ to: 500 }).start(divX);

setTimeout(() => console.log(divX.getVelocity()), 150);
```

## Methods

### Reaction methods

`value()` returns:

- `get(): number`: Returns the current value state.
- `getVelocity: number`: Returns the current value velocity.
- `pipe(...funcs: Array<(v) => v)`: Returns a new reaction that will run `update` values through this sequence of functions.
- `subscribe(update | { update, complete })`: Returns a subscription.
- `while((v: any) => boolean)`: Returns a new reaction that will `complete` when the provided function returns `false`.

### Subscription methods

`value().subscribe()` returns:

- `unsubscribe(): void`
