---
title: Action
description: A process that changes a value over time.
category: action
---

# Action

`Action` is the base class of Popmotion's included actions, like [`tween`](/docs/actions/tween.md) and [`physics`](/docs/actions/physics.md).

New actions can be created by extending `Action` and providing an `update` function that takes a value and returns a new one. `onStart`, `onStop` and `onComplete` methods can also be provided, both as `class` methods and `Action` properties.

## Example

```javascript
import { Action } from 'popmotion';

class CustomAction extends Action {
  update(current) {
    const { increment } = this.props;
    return current + increment;
  }
}

const customAction = new CustomAction({
  increment: 10,
  onUpdate: (v) => console.log(v)
});

customAction.start();
```

## Methods

- `start`: Start an action. Fires any set `onStart` callbacks.
- `stop`: Stop an action. Fires `onStop` callback.
- `get`: Get the current value.
- `getVelocity`: Get the action's current velocity, in units per second.
- `getBeforeTransform`: Returns the current value, without passing through `transform` if a `transform` function is defined.
- `complete`: Stop an action and mark as complete. Fires `onStop` and `onComplete` callbacks.
- `setProps(<Object>)`: Updates `props`.
- `getProp(<String>)`: Returns the named property.
- `output(<Function>)`: Shorthand for updating the `onUpdate` property.

## Props

- `onUpdate <Function>`: Fires every frame the value is updated.
- `onStart <Function>`: Fires when an action starts.
- `onStop <Function>`: Fires when an action is stopped.
- `onComplete <Function>`: Fires when an action is completed.
- `transform <Function>`: If defined, `get` and `onUpdate` will pass the `current` value through this function before returning.
