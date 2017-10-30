---
title: Value Reaction
description: Track value state and query velocity
category: reactions
---

# Value Reaction

## Import

```javascript
import { value } from 'popmotion';
// or stand-alone:
import value from 'popmotion/reaction/value';
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
