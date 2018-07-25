---
title: Delay
description: Fires complete after the defined interval.
category: compositors
---

# Delay

Fires `complete` after the defined interval.

<TOC />

## Import

```javascript
import { delay } from 'popmotion';
```

## Usage

```javascript
delay(100).start({
  complete: () => console.log('complete!')
});
```

Useful for delaying actions in a `chain`.

```javascript
chain(
  delay(100),
  tween({ to: 400, duration: 500 })
);
```

### Action methods

`delay()` returns:

- `start(update | { update, complete })`: Starts the action and returns a subscription.

### Subscription methods

`delay().start()` returns:

- `stop(): void`
