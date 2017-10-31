---
title: Value Reaction
description: Track value state and query velocity
category: reactions
---

# Value Reaction

Tracks the state of a number and allows .

## Import

```javascript
import { value } from 'popmotion';
// or stand-alone:
import value from 'popmotion/reaction/value';
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

### `get`

```typescript
get(): number
```

Returns the current value state.

### `getVelocity`

```typescript
getVelocity(): number
```

Returns the current value velocity.

### `subscribe`

```typescript
subscribe(update: (v: any) => void)
subscribe({
  complete? () => void,
  error?: (err: any) => void,
  update?: (v: any) => void
})
subscribe(reaction)
```

Returns a subscription object with an `unsubscribe` method.
