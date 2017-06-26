---
title: Velocity and physics
description: Query the velocity of any action and apply to spring or momentum physics.
category: basics
---

# Velocity and physics

A core feature of Popmotion is the ability to query the `velocity` of **any** action.

We can pass this `velocity` value to the `physics` action, to create smooth transitions from one action into either a momentum or spring-based physics-driven animation. 

## Getting velocity

The first step is to get our velocity. Every action offers the `getVelocity` method, which returns the velocity as measured in **units per second**.

Why units per second, instead of units per frame? Although 60fps is the current common framerate, VR devices support 90+ fps and the iPad Pro delivers a silky 120 frames per second!

To future-proof our code, we decouple velocity from the device framerate, otherwise our animations would run at 1.5x or even 2x the speed.

So for instance, if we make a `tween` that uses `linear` easing over the course of a second, and get its velocity, we will receive its `to` value (because that is its speed per second):

```javascript
const myTween = tween({
  to: 500,
  duration: 1000
}).start();

setTimeout(
  () => console.log(myTween.getVelocity()), // 500
  500
);
```

## Applying velocity to physics

Now, let's apply that velocity to our ball from the input tracking tutorial. Let's first create a single `value` to [manage our actions](/learn/action-management).

```javascript
const ballRenderer = css(document.querySelector('#a .ball'));
const ballX = value(0, (v) => ballRenderer.set('x', v));
```

Next, we'll use the position and velocity of the ball, at the moment the pointer is released, and provide that to `physics`. It'll look something like this:

```javascript
physics({
  from: ballX.get(),
  velocity: ballX.getVelocity(),
  onUpdate: ballX
}).start();
```

The full, live, editable demo (click start and then throw the ball):

```marksy
<Example template="Ball" id="a">{`
const ballDom = document.querySelector('#a .ball');
const ballRenderer = css(ballDom);
const ballX = value(0, (v) => ballRenderer.set('x', v));

let pointerTracker;

// Start tracking
function startTracking(e) {
  pointerTracker = pointer(e).start();
  trackOffset(pointerTracker.x, {
    from: ballX.get(),
    onUpdate: ballX
  }).start();
}

// Finish tracking
function stopTracking() {
  if (pointerTracker && pointerTracker.isActive()) {
    pointerTracker.stop();

    physics({
      from: ballX.get(),
      velocity: ballX.getVelocity(),
      onUpdate: ballX
    }).start();
  }
}

ballDom.addEventListener('mousedown', startTracking);
ballDom.addEventListener('touchstart', startTracking);
document.addEventListener('mouseup', stopTracking);
document.addEventListener('touchend', stopTracking);
`}</Example>
```

Notice how with this code you can both throw the ball and catch it, then throw it off again. We're pretty close to getting scrolling behaviour.

## Friction

However, outside of space, objects in motion usually come to a rest because of an opposing force. In making UIs, one of the forces we use is friction.

The physics `friction` property can be set as a value from `0` to `1`, where `0` applies no force over time, and `1` provides so much force that the object in motion stops immediately.

A nice, light-feeling range to use for scrolling is `0.15` - `0.3`:

```javascript
physics({
  from: ballXAction.get(),
  velocity: ballXAction.getVelocity(),
  friction: 0.2,
  onUpdate: setBallX
}).start();
```

```marksy
<Example template="Ball" id="b">{`
const ballDom = document.querySelector('#b .ball');
const ballRenderer = css(ballDom);
const ballX = value(0, (v) => ballRenderer.set('x', v));

let pointerTracker;

// Start tracking
function startTracking(e) {
  pointerTracker = pointer(e).start();
  trackOffset(pointerTracker.x, {
    from: ballX.get(),
    onUpdate: ballX
  }).start();
}

// Finish tracking
function stopTracking() {
  if (pointerTracker && pointerTracker.isActive()) {
    pointerTracker.stop();

    physics({
      from: ballX.get(),
      velocity: ballX.getVelocity(),
      friction: 0.2,
      onUpdate: ballX
    }).start();
  }
}

ballDom.addEventListener('mousedown', startTracking);
ballDom.addEventListener('touchstart', startTracking);
document.addEventListener('mouseup', stopTracking);
document.addEventListener('touchend', stopTracking);
`}</Example>
```

## Spring
