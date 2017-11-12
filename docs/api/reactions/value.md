---
title: Value
description: Track value state and query velocity
category: reactions
---

# Value

A [reaction](/api/reactions) that tracks the state of a number and allows velocity queries.

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

setTimeout(() => console.log(() => {
  physics({
    velocity: divX.getVelocity()
  }).start(divX); // This will automatically `stop` the tween
}), 150);
```

`value` can also handle objects and arrays:

```javascript
const foo = value({ x: 0, y: 0 });
const bar = value([0, 0]);

foo.getVelocity(); // { x: 0, y: 0 }
bar.getVelocity(); // [0, 0]
```

## Methods

### Reaction methods

`value()` returns:

- `get(): number`: Returns the current value state.
- `getVelocity: number`: Returns the current value velocity.
- `pipe(...funcs: Array<(v) => v)`: Returns a new reaction that will run `update` values through this sequence of functions.
- `stop()`: Stops parent action.
- `subscribe(update | { update, complete })`: Returns a subscription.
- `while((v: any) => boolean)`: Returns a new reaction that will `complete` when the provided function returns `false`.

### Subscription methods

`value().subscribe()` returns:

- `unsubscribe(): void`
