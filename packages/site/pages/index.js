
import marksy from 'marksy/jsx';
import Homepage from '~/components/template';
import { Code } from '~/templates/global/styled';
import { createElement } from 'react';

const convertMarkdown = marksy({
  createElement,
  elements: {
    code: Code
  }
});

const Page = ({ section }) => (
  <Homepage>
    {content.tree}
  </Homepage>
);

const content = convertMarkdown(`

## Quick start

\`\`\`bash
npm install popmotion
\`\`\`

\`\`\`javascript
import { animate } from "popmotion"

animate({
  from: 0,
  to: 100,
  onUpdate: latest => console.log(latest)
})
\`\`\`

## Animation

### \`animate\`

\`animate\` performs a keyframes, spring, or decay animation.

\`\`\`javascript
import { animate } from "popmotion"

animate({
  from: 0, 
  to: 100,
  onUpdate: latest => console.log(latest)
})
\`\`\`

It can animate numbers:

\`\`\`javascript
animate({ from: 0, to: 100 })
\`\`\`

Or strings of the same type:

\`\`\`javascript
animate({ from: "0px", to: "100px" })
animate({ from: "#fff", to: "#000" })
\`\`\`

<!--
Arrays of the above:

\`\`\`javascript
animate({
  from: [0, "#fff"],
  to: [100, "#000"]
})
\`\`\`

And objects of the above:

\`\`\`javascript
animate({
  from: { x: 0, backgroundColor: "#fff" },
  to: { x: 100, backgroundColor: "#000" }
})
\`\`\`
-->

The type of animation performed will be automatically detected from the provided options, or can be chosen manually by defining \`type\` as \`"keyframes"\`, \`"spring"\` or \`"decay"\`.

### Options

These options can be set for **all animations**:

#### \`from\`

An initial value to start the animation from.

Defaults to \`0\`

\`\`\`javascript
animate({
  from: "linear-gradient(#e66465, #9198e5)",
  to: "linear-gradient(#9198e5, #e66465)"
})
\`\`\`

#### \`elapsed\`

Sets an initial elapsed time, in milliseconds. Set to a negative value for a delay.

\`\`\`javascript
animate({
  to: 100,
  elapsed: -300
})
\`\`\`

#### \`repeat\`

The number of times to repeat the animation. Set to \`Infinity\` to repeat forever.

\`\`\`javascript
animate({
  to: 100,
  repeat: 2
})
\`\`\`

#### \`repeatDelay\`

The duration, in milliseconds, to wait before repeating the animation.

\`\`\`javascript
animate({
  to: 100,
  repeat: 2,
  repeatDelay: 200
})
\`\`\`

#### \`repeatType\`

Either \`"loop"\`, \`"mirror"\` or \`"reverse"\`. Defaults to \`"loop"\`.

- \`"loop"\`: Repeats the animation from \`0\`.
- \`"mirror":\` Swaps the \`from\`/\`to\` values alternately.
- \`"reverse":\` Reverses the animation alternately.

\`\`\`javascript
animate({
  to: 100,
  repeat: 2,
  repeatType: "reverse"
})
\`\`\`

#### \`driver\`

By default, the animation will be driven by a \`requestAnimationFrame\` loop. \`driver\` can specify a different source.

A \`Driver\` is a function that accepts the animations \`update\` function. This is a function that can be called with a time delta from the previous frame. The \`Driver\` must return a function that will be called when the animation is stopped.

\`\`\`javascript
const xrDriver = session => update => {
  let latestRequestId = 0
  let prevTimestamp = performance.now()
  
  const step = timestamp => {
    const delta = timestamp - prevTimestamp
    prevTimestamp = timestamp

    update(delta)

    latestRequestId = session.requestAnimationFrame(step)
  }

  let latestRequestId = session.requestAnimationFrame(step)

  return () => session.cancelRequestAnimationFrame(latestRequestId)
}

animate({
  to: 100,
  driver: xrDriver(xrSession)
})
\`\`\`

### \`type\`

\`animate\` will automatically detect the type of animation to use based on the options provided. But a specific type can be chosen manually by defining \`type\` as \`"keyframes"\`, \`"spring"\` or \`"decay"\`.

\`\`\`jsx
animate({
  to: 100,
  type: "spring"
})
\`\`\`

### Callbacks

#### \`onUpdate\`

This is called every frame the animation fires with the latest computed value.

\`\`\`javascript
animate({
  to: 100,
  onUpdate: latest => console.log(latest)
})
\`\`\`

#### \`onPlay\`

This is called when the animation starts. Currently this automatically when \`animate\` is called.

\`\`\`javascript
animate({
  to: 100,
  onPlay: () => {}
})
\`\`\`

#### \`onComplete\`

This is called when the animation successfully completes.

\`\`\`javascript
animate({
  to: 100,
  onComplete:() => {}
})
\`\`\`

#### \`onRepeat\`

This is called when an animation repeats.

\`\`\`javascript
animate({
  to: 100,
  repeat: 2,
  onRepeat: () => {}
})
\`\`\`

#### \`onStop\`

This is called when the animation is stopped by the \`stop\` control.

\`\`\`javascript
const animation = animate({
  to: 100,
  onStop: () => {}
})

animation.stop()
\`\`\`

### Keyframes options

A keyframes animation is the default animation and it can be defined either with a \`from\` and \`to\` option:

\`\`\`javascript
animate({ from: 0, to: 100 })
\`\`\`

Or as a series of keyframes provided to the \`to\` option:

\`\`\`javascript
animate({ to: [0, 100, 200] })
\`\`\`

#### \`to\`

A single value to animate to, or an array of values to animate through.

\`\`\`javascript
animate({
  to: ["#0ff", "#f00", "#0f0"]
})
\`\`\`

If \`to\` is an array, any defined \`from\` will be ignored.

#### \`duration\`

This defines the duration of the animation, in milliseconds.

\`\`\`javascript
animate({
  to: 100,
  duration: 300
})
\`\`\`

#### \`ease\`

This is an easing function, or array of functions, to use when easing between each keyframe.

\`\`\`javascript
import { animate, linear, easeInOut } from "popmotion"

animate({
  to: 100,
  ease: linear
})

animate({
  to: ["#fff", "#000", "#f00"],
  ease: [linear, easeInOut]
})
\`\`\`

If set as any array, the length of this array must be one shorter than the number of values being animated between.

#### \`offset\`

This is an array of values between \`0\` and \`1\` that defines at which point throughout the animation each keyframe should be reached.

This array should be the same length as the number of defined keyframes.

\`\`\`javascript
animate({
  to: ["#fff", "#000", "#f00"],
  offset: [0, 0.2, 1]
})
\`\`\`

### Spring options

Springs are great for creating natural-feeling interfaces and dynamic interruptable animations.

A spring animation will be used if any of the \`stiffness\`, \`damping\` or \`mass\` options are detected.

**Note:** A spring simulation is inherently numerical so if it's given a color, array or object, it runs the animation from \`0\` to \`100\` and interpolates that to the given values. This strategy is likely to be tweaked before the official release so animations made this way may change in feel.

#### \`to\`

A single value to animate to.

\`\`\`javascript
animate({
  to: 100,
  type: "spring"
})
\`\`\`

If \`to\` is an array, any defined \`from\` will be ignored.

#### \`stiffness\`

This defines the stiffness of the spring. A higher stiffness will result in a snappier animation.

Defaults to \`100\`

\`\`\`javascript
animate({
  to: 100,
  stiffness: 1000
})
\`\`\`

#### \`damping\`

This is the opposing force to \`stiffness\`. As you reduce this value, relative to \`stiffness\`, the spring will become bouncier and the animation will last longer. Likewise, higher relative values will have less bounciness and result in shorter animations.

Defaults to \`10\`

\`\`\`javascript
animate({
  to: 100,
  damping: 50
})
\`\`\`

#### \`mass\`

This is the mass of the animating object. Heavier objects will take longer to speed up and slow down.

Defaults to \`1\`.

\`\`\`javascript
animate({
  to: 100,
  mass: 2
})
\`\`\`

#### \`velocity\`

The initial velocity, in units per second, of the animation.

\`\`\`javascript
animate({
  to: 100,
  velocity: 1000
})
\`\`\`

#### \`restDelta\`

The distance from the animation target at which the animation can be considered complete. When both \`restDelta\` and \`restSpeed\` are met, the animation completes.

\`\`\`javascript
animate({
  to: 100,
  restDelta: 0.5
})
\`\`\`

#### \`restSpeed\`

The absolute velocity, in units per second, below which the animation can be considered complete. When both \`restDelta\` and \`restSpeed\` are met, the animation completes. Defaults to \`10\`.

\`\`\`javascript
animate({
  to: 100,
  restSpeed: 5
})
\`\`\`

### Controls

\`animate\` returns \`PlaybackControls\`, which can be used to control the playback of the animation.

Currently this only includes a \`stop\` method, but will expand with more.

#### \`stop()\`

Stops the animation.

\`\`\`javascript
const playback = animate({ from: 0, to: 100 })
playback.stop()
\`\`\`

### \`inertia\`

The \`inertia\` animation is used to gradually decelerate a number. Think smartphone scroll momentum.



#### Options

In addition to \`animate\`'s \`from\`, \`onUpdate\` and \`onComplete\` options, \`inertia\` also supports the following:

#### \`velocity\`

The initial velocity, in units per second, of the animation.

\`\`\`javascript
inertia({
  from: 0,
  velocity: 100
})
\`\`\`

#### \`power\`

A constant with which to calculate a target value. Higher power = further target.

Defaults to \`0.8\`.

\`\`\`javascript
inertia({
  from: 0,
  power: 0.3
})
\`\`\`

#### \`timeConstant\`

Adjusting the time constant will change the duration of the deceleration, thereby affecting its feel.

Defaults to \`350\`.

\`\`\`javascript
inertia({
  from: 0,
  velocity: 100,
  timeConstant: 400
})
\`\`\`

#### \`modifyTarget\`

A function that receives the calculated target and returns a new one. Useful for snapping the target to a grid.

\`\`\`javascript
const roundToNearest = target => v => Math.ceil(v / target) * target

inertia({
  from: 0,
  velocity: 100,
  modifyTarget: roundToNearest(100)
})
\`\`\`

#### \`min\`

The minimum value at which the animation will switch from gradual deceleration and use a spring animation to snap to this point.

\`\`\`javascript
inertia({
  from: 50,
  velocity: -100,
  min: 0
})
\`\`\`

#### \`max\`

The maximum value at which the animation will switch from gradual deceleration and use a spring animation to snap to this point.

\`\`\`javascript
inertia({
  from: 50,
  velocity: 100,
  max: 100
})
\`\`\`

#### \`bounceStiffness\`

This defines the stiffness of the spring when the animation hits either \`min\` or \`max\`. A higher stiffness will result in a snappier animation.

Defaults to \`500\`

\`\`\`javascript
inertia({
  from: 0,
  velocity: 100,
  max: 50,
  bounceStiffness: 1000
})
\`\`\`

#### \`bounceDamping\`

This is the opposing force to \`bounceStiffness\`. As you reduce this value, relative to \`bounceStiffness\`, the spring will become bouncier and the animation will last longer. Likewise, higher relative values will have less bounciness and result in shorter animations.

Defaults to \`10\`

\`\`\`javascript
inertia({
  from: 0,
  velocity: 100,
  max: 50,
  bounceDamping: 300
})
\`\`\`

#### \`restDelta\`

The distance from the animation target at which the animation can be considered complete.

\`\`\`javascript
inertia({
  from: 0,
  velocity: 100,
  restDelta: 0.5
})
\`\`\`

## Easing

Popmotion includes a number of in-built easing functions, as well as factory functions to make entirely new ones.

### Functions

Each easing function can be imported like so:

\`\`\`javascript
import { linear } from "popmotion"
\`\`\`

Each function accepts a progress value between \`0\` and \`1\`, and returns a new one:

\`\`\`javascript
const progress = 0.5
const easedProgress = easeInOut(progress)
\`\`\`

 - \`linear\`
 - \`easeIn\`
 - \`easeInOut\`
 - \`easeOut\`
 - \`circIn\`
 - \`circInOut\`
 - \`circOut\`
 - \`backIn\`
 - \`backInOut\`
 - \`backOut\`
 - \`anticipate\`
 - \`bounceIn\`
 - \`bounceInOut\`
 - \`bounceOut\`

### Create

#### \`cubicBezier\`

\`\`\`javascript
import { cubicBezier } from "popmotion"

const easing = cubicBezier(0, .42, 0, 1)
\`\`\`

New cubic bezier definitions can be created in the [Framer](https://framer.com) animation editor and copy/pasted directly into this function.

#### \`steps\`

\`steps\` returns an easing function that will convert the animation into a discrete series of steps.

\`\`\`javascript
import { steps } from "popmotion"

const easing = steps(5)
\`\`\`

It optionally accepts a second parameter, either \`"start"\` or \`"end"\` (default)that decides whether the steps are aligned with the start or end of the animation.

\`\`\`javascript
steps(5, "start")
\`\`\`

#### \`mirrorEasing\`

Mirrors an existing easing function. 

#### \`reverseEasing\`

Reverses an existing easing function. For instance, providing it \`easeIn\` would return an \`easeOut\`.

\`\`\`javascript
import { reverseEasing, linear } from "popmotion"

const reversed = reverseEasing(linear)
reversed(1) // 0
reversed(0.5) // 0.5
reversed(0) // 1
\`\`\`

#### \`createExpoIn\`

Creates an easing function based on the exponent of the provided \`power\`. The higher the \`power\`, the stronger the easing.

\`\`\`javascript
import { createExpoIn } from "popmotion"

const expoIn = createExpoIn(4)
\`\`\`

The returned easing function is an ease in, which means it starts slow and finished fast. \`mirrorEasing\` and \`reverseEasing\` can be used to create ease in out, and ease out variations:

\`\`\`javascript
const expoIn = createExpoIn(4)
const expoOut = mirrorEasing(easeIn)
const expoInOut = reverseEasing(easeIn)
\`\`\`

#### \`createBackIn\`

Creates an easing function with an overshoot. It accepts a \`power\` value, the higher the \`power\` the stronger the overshoot.

\`\`\`javascript
import { createBackIn } from "popmotion"

const backIn = createBackIn(4)
\`\`\`

The returned easing function is an ease in, which means the overshoot happens at the start of the animation. \`mirrorEasing\` and \`reverseEasing\` can be used to create ease in out, and ease out variations:

\`\`\`javascript
const backIn = createBackIn(4)
const backOut = mirrorEasing(easeIn)
const backInOut = reverseEasing(easeIn)
\`\`\`

#### \`createAnticipate\`

Creates an easing that pulls back a little before animating out with an overshoot. The stronger the \`power\` the bigger the overshoot.

\`\`\`javascript
import { createAnticipate } from "popmotion"

const anticipate = createAnticipate(4)
\`\`\`

## Utils

#### \`angle\`

Returns an angle between two points, in degrees.

\`\`\`javascript
import { angle } from "popmotion"

angle(
  { x: 0, y: 0 },
  { x: 45, y: 100 }
)
\`\`\`

#### \`attract\`

TODO

\`\`\`javascript
import { attract } from "popmotion"

attract(5, 10, 12)
\`\`\`

#### \`attractExpo\`

TODO

\`\`\`javascript
import { attractExpo } from "popmotion"

attractExpo(5, 10, 12)
\`\`\`

#### \`clamp\`

Clamp a value to within the given range.

\`\`\`javascript
import { clamp } from "popmotion"

const min = 50
const max = 100
clamp(min, max, 150) // 100
\`\`\`

#### \`degreesToRadians\`

Converts degrees to radians.

\`\`\`javascript
import { degreesToRadians } from "popmotion"

degreesToRadians(45) // 0.785...
\`\`\`

#### \`distance\`

Returns the distance between two numbers, two 2D points, or two 3D points.

\`\`\`javascript
import { distance } from "popmotion"

distance(10, 50)
distance({ x: 0, y: 0 }, { x: 45, y: 100 })
distance({ x: 0, y: 0, z: 100 }, { x: 45, y: 100, z: 0 })
\`\`\`

#### \`interpolate\`

Creates a function that will interpolate from an linear series of numbers, to a non-linear series of numbers, strings of the same numerical format, colours, or arrays/objects of those.

\`\`\`javascript
import { interpolate } from "popmotion"

const mapXToOpacity = interpolate(
  [-100, 0, 100],
  [0, 1, 0]
)
mapXToOpacity(-50) // 0.5

const mapProgressToValues = interpolate(
  [0, 1],
  [
    { x: 0, color: "#fff" },
    { x: 100, color: "#000" }
  ]
)
mapProgressToValues(0.5) // { x: 50, color: "#888" }

const rescale = interpolate(
  [0, 1],
  [100, 200],
  { clamp: false }
)
rescale(2) // 300
\`\`\`

##### Options

\`interpolate\` accepts an optional third argument, an object of options.

- \`clamp\`: Clamps values to within given range. Defaults to \`true\`.
- \`ease\`: An \`Easing\` function, or array of easing functions, to ease the interpolation of each segment.
- \`mixer\`: A function that, when provided a \`from\` and \`to\` value, will return a new function that accepts a progress value between \`0\` and \`1\` to mix between those two values. For integration with libraries like Flubber.

#### \`isPoint\`

Returns \`true\` if the provided argument is a 2D point.

\`\`\`javascript
import { isPoint } from "popmotion"

isPoint({ x: 0 }) // false
isPoint({ x: 0, y: 0 }) // true
\`\`\`

#### \`isPoint3D\`

Returns \`true\` if the provided argument is a 3D point.

\`\`\`javascript
import { isPoint3D } from "popmotion"

isPoint3D({ x: 0 }) // false
isPoint3D({ x: 0, y: 0 }) // false
isPoint3D({ x: 0, y: 0, z: 0 }) // true
\`\`\`

#### \`mix\`

Will mix between two values, given \`progress\` as a third argument.

\`\`\`javascript
import { mix } from "popmotion"

mix(0, 100, 0.5) // 50
mix(0, 100, 2) // 200
\`\`\`

#### \`mixColor\`

Returns a function that, when provided a \`progress\` value, will mix between two colors. Accepts hex, rgba and hsla colors.

\`\`\`javascript
import { mixColor } from "popmotion"

mixColor("#000", "#fff")(0.5) // "rgba(125, 125, 125, 1)"
\`\`\`

#### \`mixComplex\`

Returns a function that, when provided a \`progress\` value, will mix between two strings with the same order of numbers and colors.

\`\`\`javascript
import { mixComplex } from "popmotion"

mixComplex("100px #fff", "0px #000")(0.5) // "50px rgba(125, 125, 125, 1)"
\`\`\`

#### \`pointFromVector\`

Given a point, angle in degrees, and distance, will return a new point.

\`\`\`javascript
import { pointFromVector } from "popmotion"

const point = { x: 0, y: 0 }
const angle = 45
const distance = 100

pointFromVector(point, angle, distance)
\`\`\`

#### \`progress\`

Given a min and a max range, and a value, will return the \`progress\` of the value within the range as normalised to a \`0\`-\`1\` range.

\`\`\`javascript
import { progress } from "popmotion"

const min = 100
const max = 200
progress(min, max, 150) // 0.5
\`\`\`

#### \`radiansToDegrees\`

Converts radians to degrees.

\`\`\`javascript
import { radiansToDegrees } from "popmotion"

radiansToDegrees(0.785) // 45
\`\`\`

#### \`snap\`

Creates a function that will snap numbers to the nearest in a provided array or to a regular interval.

\`\`\`javascript
import { snap } from "popmotion"

// Snap to regular intervals
const snapTo = snap(45);

snapTo(1); // 0
snapTo(40); // 45
snapTo(50); // 45
snapTo(80); // 90

// Snap to values in an array
const snapTo = snap([-100, -50, 100, 200]);

snapTo(-200); // -100
snapTo(-76); // -100
snapTo(-74); // -50
\`\`\`

#### \`toDecimal\`

Rounds a number to a specific decimal place.

\`\`\`javascript
import { toDecimal } from "popmotion"

toDecimal(3.3333); // 3.33
toDecimal(6.6666, 1); // 6.67
\`\`\`

#### \`velocityPerFrame\`

\`\`\`javascript
import { velocityPerFrame } from "popmotion"

velocityPerFrame(50, 16.7); // 0.835
\`\`\`

#### \`velocityPerSecond\`

\`\`\`javascript
import { velocityPerSecond } from "popmotion"

velocityPerSecond(1, 16.7); // 59.880...
\`\`\`

#### \`wrap\`

\`\`\`javascript
import { wrap } from "popmotion"

wrap(0, 1, 0.5); // 0.5
wrap(0, 1, 1.5); // 0.5
\`\`\`

`);

export default Page;
