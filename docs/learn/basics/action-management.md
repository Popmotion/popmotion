---
title: Action management
description: Use the `value` action to prevent conflicts.
category: basics
---

# Action management

When creating simple animations, it's common to provide `onUpdate` a function:

```javascript
tween({
  onUpdate: (v) => console.log(v)
});
```

As our motion systems grow, and include actions that don't self-terminate (like `pointer` or `trackOffset`), multiple actions can potentially try and fire the same functions.

Likewise, it can sometimes become confusing the know which action is the "source of truth" - what do we query to get the true current velocity of an object, for instance?

## Value

To simplify this, Popmotion provides the `value` action. It's takes just two arguments, the initial numerical value and a function.

```javascript
const log = value(0, (v) => console.log(v));
```

Now, when we call this `value`'s `set` method, we'll log the provided value.

```javascript
log.set(2); // 2
```

In this instance, if we provide `log` as another action's `onUpdate`, that action will become the sole updater of `log`.

Any previous actions registered with `log` will be stopped automatically. For instance:

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

```javascript
log.getVelocity();
```

## Stop registered actions

`value` is a special type of action that doesn't need to be `start`ed to work. However we can `stop` the currently registered action simply by calling its `stop` method:

```javascript
tween({
  onUpdate: log
}).start();

log.stop(); // Will stop tween
```
