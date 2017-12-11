---
title: Introducing Popmotion 8
description: Popmotion 8 is a functional, reactive approach to animation.
published: 20171211
author: Matt Perry
---

# Introducing Popmotion 8

Popmotion 8 is a functional, reactive animation library.

It introduces `decay`, `everyFrame`, `keyframes` and `timeline` animations and makes input dragging a breeze with our revamped `pointer` and `multitouch` actions.

Crucially, there's a new streamlined, reactive API.

This new API reflects our gradual shift towards functional programming and adopts it as a core part of the design philosophy.

The result is a small, flexible and composable library that all started because I wanted to add a `pipe` method and instead fell down the rabbit hole.

Let's take a look at what's new.

## Animations

### `decay`

`decay` models a form of exponential deceleration to create motion like momentum scrolling on smartphones.

Just provide it `velocity` and `from` properties:

```javascript
decay({
  velocity: 1000,
  from: 0
}).start((v) => ...)
```

<CodePen id="Kyewbv" />

It also exposes a `modifyTarget` option that provides a functional API for adding features like snap-to-grid.

### `everyFrame`

`everyFrame`, as you might imagine, fires once per frame. It provides the amount of time since it started:

```javascript
everyFrame().start((timeSinceStart) => ...);
```

It's the fundamental driver of every Popmotion animation. We've exposed it because we reckon this kind low-level action will be useful in animations, like porting After Effects expressions:

<CodePen id="XzYJvP" />

### `keyframes`

`keyframes` transitions through a number of states over a set duration of time.

Its API is inspired by Apple's `CAKeyframeAnimation`, which makes it trivial to resize the overall animation:

```javascript
keyframes({
  values: [
    { x: 0, y: 0 },
    { x: 100, y: 0 },
    { x: 100, y: 100 }
  ],
  times: [0, 0.3, 1],
  duration: 1000
})
```

<CodePen id="JOZGdp" />

### `timeline`

`timeline` is used to orchestrate more complicated patterns of tweens.

It supports absolute and relative timestamps, as well as parallel and staggered motion. The output action has all the same playback methods as `tween`, making it fully scrubbable.

In most animation libraries, the timeline function is a bit of a black box that we chuck setters or selectors into.

As Popmotion is a reactive library, we label each segment with a `track` property, and that then the latest state gets output as an object with those labels:

```javascript
timeline([
  { track: 'shade', from: 0, to: 1 },
  '-100',
  {
    track: 'modal',
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 }
  }
]).start(({ shade, modal }) => ...)
```

This means we can pass the output of timeline through the chainable methods `pipe`, `while` and `filter` (more on those later).

As timelines become more complicated, maintaining the link between labels and setters can become increasingly difficult, but the trade-off is a timeline that is immutable, composable, pure, and testable.

We're also experimenting with functions that can take a timeline definition and automatically generate the output reaction.

<CodePen id="aEoqEG" height={400} />

## Input

### `pointer`

The `pointer` action has been in Popmotion since before it was called Popmotion. But, its API has always been confused making simple tasks like dragging more convoluted than they needed to be.

In Popmotion 7, `pointer` output its absolute position and it was up to a second action, `trackOffset`, to get the **movement** of `pointer` relative to another point (say, a DOM element).

Popmotion 8 scraps the `trackOffset` action entirely. Now, `pointer` will output its absolute position when used like this:

```javascript
pointer().start(({ x, y }) => ...)
```

(Also notice how we no longer need to provide `pointer` with a `MouseEvent` or `TouchEvent`.)

To output that pointer's movement **applied to another point**, we simply need to provide that point as our initial argument:

```javascript
pointer({ x: 0, y: 0 }).start(({ x, y }) => ...)
```

<CodePen id="RjBZoe" />

### `multitouch`

Thanks to the efforts of [Mars](https://twitter.com/marsi), Popmotion has had multitouch support since version 6.

There are two major changes coming in 8. The first and most apparant is we've changed the name of the action from `touches` to `multitouch` to highlight the second change:

It no longer outputs just an array of touches. `touches` is joined by `scale` and `rotate` properties:

```javascript
multitouch().start(({ touches, scale, rotate }) => ...)
```

<CodePen id="LOBjxQ" />

Like `pointer`, `multitouch` accepts `scale` and `rotate` arguments and, if defined, will output the **change** in those properties as applied to the given values.

## Reactive API

At the heart of all these new features is a change in the core building block of all animations, the **action**.

The `action` function is used to create streams of reactive values. Think of it as an animation-focused, tiny alternative to Rx Observables.

It looks like this:

```javascript
action(({ update, complete, error }) => {})
```

For a practical example of how `action` works, let's define an function called `just`. It'll return an action that, when started, will fire `update` with the provided value and then `complete`:

```javascript
const just = (v) => action(({ update, complete }) => {
  update(v);
  complete();
});

just(2).start(console.log); // 2
```

Every time we `start` an action, its initialision function runs anew, creating a new instance of the action. Because all animations are actions, we can define an animation once:

```javascript
const moveRight = tween({ to: 300 });
```

And use it multiple times:

```javascript
moveRight.start(console.log); // 0 - 300
moveRight.start(console.log); // 0 - 300
```

Actions offer a number of chainable methods (currently `filter`, `pipe` and `while`, with an API for adding more on the way). Each returns a brand new version of the action with the added functionality:

```javascript
const double = v => v * 2;
const px = v => v + 'px';

const justTwo = just(2);

justTwo.start(console.log); // 2

justTwo
  .pipe(double, px)
  .start(console.log); // '4px'
```

## And the rest...

### File size and individual imports

Popmotion has always tried to respect your bytes. One of the reasons I wrote it in the first place was a dissatisfaction with the size of existing libraries in comparison to the benefits they provided.

Popmotion 8 is a little bigger than 7 (11.5kb vs 10kb). Though, as such a radical rewrite with so many new features, I think there are efficiencies to be made over the coming months.

In the meantime, everything in Popmotion is **now available as an individual import**. Which means, if you only want to use (for instance) `spring`, you can import and use that for roughly 2kb. 

### Colours and multi-prop animations

In Popmotion 7, we exposed the ability to animate colours with `colorTween`. Multi-property animations could be composed with the `composite` and `parallel` compositors.

This has all been streamlined in 8. Every animation can now animate colors, objects, arrays (and objects and arrays of colors!).

It's as simple as this:

```javascript
tween({
  from: { x: 0, color: '#f00' },
  to: { x: 100, color: '#fff' }
}).start(({ x, color }) => ...)
```

## Conclusion

That's most of what's new in Popmotion 8. Existing users should check out our [upgrade guide](/blog/20171210-popmotion-8-upgrade-guide) to handle breaking changes.

After three years of development I'm **finally** happy with the API. I think the reactive model works incredibly well for neatly and declaratively handling streams of values and fits perfectly with the functional approach I was moving towards.

The next logical step is to build a layer on top of these solid foundations that allows developers to **describe** the kinds of behaviours they want their UIs to exhibit. Kind of like a React and/or CSS for interactive motion.

Once more down the rabbit hole.
