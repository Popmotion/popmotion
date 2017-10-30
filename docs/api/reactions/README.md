---
title: Reaction
description: A special ob
category: reactions
---

# Reaction

A **reaction** is a collection of `update`, `complete` and `error` functions that can also be subscribed to.

## Import

```javascript
import { reaction } from 'popmotion';
// or stand-alone:
import reaction from 'popmotion/reaction';
```

## Methods

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

#### Chainable modifiers

Reactions share the same chainable modifiers as `action`.

See: [Action - Methods](/api/action#methods).