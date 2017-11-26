---
title: Popmotion 8 upgrade guide
description: How to upgrade Popmotion 7 to 8
published: 20180101
author: Matt Perry
---

# Popmotion 8 upgrade guide

This guide will explain the big changes in Popmotion 8 and how to upgrade your project.

## `onUpdate` and `onComplete`

The biggest change, from a practical point of view, is the way animations are initialised.

Previously, a `tween` might have been defined like this:

```javascript
tween({
  from: 0,
  to: 1,
  onUpdate: (v) => console.log(v)
}).start();
```

Now, that `onUpdate` is instead provided to `start`:

```javascript
tween({
  from: 0,
  to: 1
}).start((v) => console.log(v))
```

Likewise, `onComplete` also provided to `start`:

```javascript
tween({
  from: 0,
  to: 1
}).start({
  update: (v) => console.log(v),
  complete: () => console.log('complete!')
})
```

## Immutable

Each animation, once defined, is immutable. Once `start` is called, a **new instance** of that animation is run. Which means you can define an animation once:

```javascript
const foo = tween({ from: 0, to: 1 });
```

And use that definition to power multiple animations:

```javascript
foo.start((v) => console.log('first animation', v));
foo.start((v) => console.log('second animation', v));
```

## Playback controls

This means that `stop`, and other playback controls, aren't returned by `tween`, they're returned from `start`:

```javascript
const myTween = foo.start(console.log);
myTween.stop();
```

## `transform`



## `value.set`

`value` is now a **reaction**. Which means you can still pass one to an action like this:

```javascript
const foo = value(0, console.log);
spring({ to: 300 }).start(foo);
```

As `start` accepts reactions either as a function or an object with an `update` function, `value.set()` becomes `value.update()`.

## `getVelocity`

## `stagger`

As the `update` method is bound to an animation only when `start` is called, `stagger` now accepts functions that can **optionally** return a started action. So this:

```javascript
stagger([
  tween({ onUpdate: (v) => console.log('1st', v) }),
  tween({ onUpdate: (v) => console.log('2nd', v) })
], 50).start();
```

Becomes: 

```javascript
stagger([
  () => tween().start((v) => console.log('1st', v)),
  () => tween().start((v) => console.log('2nd', v))
], 50).start();
```

This also means that `stagger` can iterate over any function, not just animations.





The biggest change **behind the scenes** is the `action` model. In Popmotion, all animations have historically inherited from an `Action` class.

This would revolve around the `update` method, which would run once per frame:

```javascript
class Tick extends Action {
  current = 0;

  update() {
    this.current++;
  }
}
```

`Action` was exposed for developers to create new animations. But this wasn't particulary useful generally.

In Popmotion 8, `action` is now an Rx-inspired source of observable events.



```javascript
const tick = (current = 0) => action(({ update }) => {

});
```
