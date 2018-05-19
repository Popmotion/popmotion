---
title: Multicast
description: A reaction that multiple reactions can subscribe to.
category: reactions
---

# Multicast

The multicast reaction provides a reaction that many other reactions can `subscribe` to.

It also helps manage actions: if a `multicast` reaction is passed to another `action`, the first `action` will automatically `stop`.

## Import

```javascript
import { multicast } from 'popmotion';
```

## Usage

### Subscription

Provide a reactions to `mulitcast.subscribe()`:

```javascript
const foo = multicast();
foo.subscribe((v) => console.log('first subscriber', v));
foo.subscribe((v) => console.log('second subscriber', v));
```

When the multicast reaction is `update`d, all listeners will fire:

```javascript
foo.update(5);
// first subscriber, 5
// second subscriber, 5
```

### Automatically stop previous action

Passing the multicast reaction to a new action will stop the previous one:

```javascript
tween().start(foo);
spring().start(foo); // This will stop `tween`
```

### Chain methods

`multicast` can be chained in the same way as [actions](/api/action).

```javascript
const double = (v) => v * 2;
const px = (v) => v + 'px';

const foo = multicast().pipe(double, px);

foo.update(5); // 10px
```

### Unsubscribe

`subscribe` returns an `unsubscribe` method:

```javascript
const foo = multicast();
const sub = foo.subcribe(console.log);

sub.unsubscribe();
```

## Methods

### Multicast methods

`multicast()` returns:

- `filter((v: any) => boolean)`: Returns a new action that filters out values when the provided function returns `false`.
- `pipe(...funcs: Array<(v) => v)`: Returns a new reaction that will run `update` values through this sequence of functions.
- `subscribe(update | { update, complete, error })`: Returns a subscription.
- `stop()`: Stops current parent action.
- `while((v: any) => boolean)`: Returns a new reaction that will `complete` when the provided function returns `false`.

### Subscription methods

`multicast().subscribe()` returns:

- `unsubscribe()`
