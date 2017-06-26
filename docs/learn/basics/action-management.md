---
title: Action management
description: Use the `value` action to prevent conflicts.
category: basics
---

# Action management

When creating simple animations, it's common to provide `onUpdate` a simple function:

```javascript
tween({
  onUpdate: (v) => console.log(v)
});
```

As our motion systems grow, and include actions that don't self-terminate (like `pointer` or `trackOffset`), multiple actions can potentially try and fire the same setters.

Likewise, it can become confusing the know which action is the "source of truth" - what do we query to get the true current velocity, for instance?

## Value

To simplify this, Popmotion provides the `value` action. It's takes just two arguments, the initial numerical value and a function.

```javascript
const log = value(0, (v) => console.log(v));
```

Now, when we call this `value`'s `set` method, we'll log the provided value.

```javascript
log.set(2); // 2
```

Great, but how does this simplify managing multiple actions?

Whenever we provide this `value` as another action's `onUpdate`, that action becomes the sole updater of the `value`. Any previous actions registered with the `value` are automatically stopped. For instance:

```javascript
const log = value(0, (v) => console.log(v));

tween({
  onUpdate: log
}).start();

// This will stop previous tween
setTimeout(() => tween({
  from: log.get(),
  to: 0,
  onUpdate: log
}).start(), 150);
```

## Single source of truth

This also means we don't have to decide which action to query for this `value`'s true value, or true velocity. We just have to call its `get` and `getVelocity` methods.
