---
title: Listen
description: Creates a DOM event listener as an action stream.
category: input
---

# Listen

`listen` creates DOM event listeners as an action stream.

<TOC />

## Import

```javascript
import { listen } from 'popmotion';
```

## Usage

To listen to an event, provide a DOM element and an event name to `listen`:

```javascript
listen(document, 'mousemove')
  .start((e) => console.log(e));
```

### Multiple events

Multiple events can be subscribed to by providing a space-delimited string:

```javascript
listen(document, 'touchstart touchend')
```

### Chainable actions

The primary benefit of using `listen` is passing each event through the chainable actions like `filter`. For instance, here's an event listener that only fires when two or more touches are detected:

```javascript
const onMultitouch = listen(document, 'touchstart')
  .filter(({ touches }) => touches.length > 1);

onMultitouch.start((e) => ...);
```

### Options

`listen` optionally accepts a third argument of options:

```typescript
type EventOpts = boolean | {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
};

listen(element: Element, eventNames: string, opts?: EventOpts): Action
```

## Methods

### Action methods

`listen()` returns:

- `filter((v: any) => boolean)`: Returns a new action that filters out values when the provided function returns `false`.
- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the action and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.

### Subscription methods

`listen().start()` returns:

- `stop(): void`
