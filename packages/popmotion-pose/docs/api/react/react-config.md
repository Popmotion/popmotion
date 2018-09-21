---
title: Config
description: Configure a posed component
category: react
---

# Config options

Options to configure [posed components](/pose/api/posed) in React Pose.

<TOC />

## Options

### draggable

`draggable?: true | 'x' | 'y'`

If `true`, will make the element draggable on both axis. Setting to either `'x'` or `'y'` will restrict movement to that axis.

If defined, allows use of the special `drag` pose for styling the element while dragging is active.

A `dragEnd` pose can be **optionally** set for animating on drag end.

```javascript
const config = {
  draggable: 'x',
  init: { scale: 1 },
  drag: { scale: 1.2 }
}
```

The `drag` and `dragEnd` poses will travel through any posed children.

### dragBounds

`dragBounds?: { [key: string]: number } | (props: Props) => { [key: string]: number }`

An object that defines `top`, `right`, `bottom` and/or `left` drag boundaries in pixels.

Currently, these boundaries are enforced by a hard clamp.

### hoverable

`hoverable?: boolean`

If `true`, this element will receive `hover` poses when a pointer hovers over it.

There's also an **optional** `hoverEnd` pose, for providing a different pose when hovering ends.

```javascript
const config = {
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 }
}
```

The `hover` and `hoverEnd` poses will travel through any posed children.

### focusable

`focusable?: boolean`

If `true`, this element will receive `focus` poses when the element receives focus, and `blur` poses when it loses focus.

```javascript
const config = {
  focusable: true,
  init: { scale: 1 },
  focus: { scale: 1.2 },
  blur: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 800
    }
  }
};
```

### pressable

`pressable?: boolean`

If `true`, this element will receive `press` poses when the element is pressed, and **optionally** `pressEnd` when pressing stops.

```javascript
const config = {
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
};
```

### passive

`passive: { [key: string]: PassiveValue }`

```typescript
type PassiveValue = [
  subscribedKey: string,
  transform: (subscribedValue: any) => any,
  fromParent?: true | string
]
```

Map of values that are passively changed when other values, either on this Poser or an ancestor, change.

`fromParent` can be set either as `true` or as a `string`:
  - `true`: Link to value from immediate parent.
  - `string`: Link to the nearest ancestor with this `label` prop.

#### Example

The `transform` function here is composed with Popmotion [transformers](/api/transformers):

```javascript
const config = {
  draggable: 'x',
  passive: {
    backgroundColor: ['x', pipe(
      clamp(0, 300),
      interpolate([0, 300], [0, 1]),
      blendColor('#f00', '#0f0')
    )]
  }
}
```

### label

`label: string`

Set a label on this poser. Currently, this allows a `passive` value on a child poser to refer to this ancestor value.

### props

`props: { [key: string]: any }`

Default properties to provide to entered pose `transition` methods and dynamic pose props. These can be overridden by providing props to the posed component.

### ...poses

`...poses: { [key: string]: Pose }`

Any other config props will be treated as poses (see [Pose config](#pose-config)).

## Poses

You can call a pose anything, and animate to it by setting `<PosedComponent pose="poseName" />` (or multiple poses with an array).

A pose is defined by style attributes like `x` or `backgroundColor`, and the following optional props:

### delay

`delay?: number | (props: Props) => number`

A duration, in milliseconds, to delay this transition. Does **not** affect children.

### delayChildren

`delayChildren?: number | (props: Props) => number`

A duration, in milliseconds, to delay the transition of direct children.

### flip

`flip?: boolean = false`

If `true`, will convert this animation to a [FLIP animation](https://aerotwist.com/blog/flip-your-animations/).

### staggerChildren

`staggerChildren?: number | (props: Props) => number`

A duration, in milliseconds, between transitioning each children.

### staggerDirection

`staggerDirection?: 1 | -1 | (props: Props) => 1 | -1`

If `1`, staggers from the first child to the last. If `-1`, from last to first.

### beforeChildren

`beforeChildren?: boolean | (props: Props) => boolean`

If `true`, will ensure this animation completes before firing any child animations.

### afterChildren

`afterChildren?: boolean | (props: Props) => boolean`

If `true`, will ensure this animation only fires after all child animations have completed.

### applyAtStart/applyAtEnd

`applyAtStart/applyAtEnd?: { [string]: any | (props: Props) => any }`

`applyAtStart` and `applyAtEnd` accept style properties to apply either at the start or end of an animation.

For instance, you might have an element that you want to flip between `display: block` before it fades in, and `display: none` after it fades out:

```javascript
const config = {
  visible: {
    applyAtStart: { display: 'block' },
    opacity: 1
  },
  hidden: {
    applyAtEnd: { display: 'none' },
    opacity: 0
  }
};
```

### transition

`transition?`

The `transition` prop can be used to create custom transitions.

It can be set as a transition definition:

```javascript
transition: { type: 'spring' }
```

A function that returns a transition definition **or** a Popmotion animation:

```javascript
transition: (props) => spring({...props})
transition: (props) => ({ type: 'spring' })
```

Or finally, a named map, where a separate `transition` is defined for each animating value. `default` can be used to define a transition for all remaining values. 

```javascript
visible: {
  x: 0,
  opacity: 1,
  transition: {
    x: { type: 'spring' },
    default: (props) => tween(props)
  }
}
```

#### Transition definitions

A transition definition describes the type of animation Pose should use to transition to the value defined in the Pose.

There are many types, and each has its own specific configuration props available.

##### Tween (default)

Transitions between one value and another over a set duration of time.

- `duration?: number = 300`: Total duration of animation, in milliseconds.
- `elapsed?: number = 0`: Duration of animation already elapsed, in milliseconds.
- `ease?: string | number[] | Function`: The name of an easing function, a cubic bezier definition (as an array of numbers), or an easing function. The following easings are included with Pose:
  - 'linear'
  - 'easeIn', 'easeOut', 'easeInOut'
  - 'circIn', 'circOut', 'circInOut'
  - 'backIn', 'backOut', 'backInOut'
  - 'anticipate'
- `loop?: number = 0`: Number of times to loop animation.
- `flip?: number = 0`: Number of times to flip animation.
- `yoyo?: number = 0`: Number of times to reverse tween.

##### Spring

A spring animation based on `stiffness`, `damping` and `mass`.

- `type: 'spring'`: Set transition to spring.
- `stiffness?: number = 100`: Spring stiffness.
- `damping?: number = 10`: Strength of opposing force.
- `mass?: number = 1.0`: Mass of the moving object.
- `restDelta?: number = 0.01`: End animation if distance to `to` is below this value **and** `restSpeed` is `true`.
- `restSpeed?: number = 0.01`: End animation if speed drops below this value **and** `restDelta` is `true`.

##### Physics

Integrated simulation of velocity, acceleration, friction and springs.

- `type: 'physics'`: Set transition to physics.
- `acceleration?: number = 0`: Increase `velocity` by this amount every second.
- `restSpeed?: number = 0.001`: When absolute speed drops below this value, `complete` is fired.
- `friction?: number = 0`: Amount of friction to apply per frame, from `0` to `1`.
- `springStrength?: number = 0`: If set with `to`, will spring towards target with this strength.

##### Keyframes

Keyframes accepts an array of `values` and will animate between each in sequence.

Timing is defined with a combination of `duration`, `easings` and `times` properties.

- `type: 'keyframes'`: Set transition to keyframes.
- `values: number[]`: An array of numbers to animate between. To use the value defined in the Pose as the final target value, set `transition` as a function: `transition: ({ to }) => { type: 'keyframes', values: [0, to] }`
- `duration?: number = 300`: Total duration of animation, in milliseconds.
- `easings?: Easing | Easing[]`: An array of easing functions for each generated tween, or a single easing function applied to all tweens. This array should be `values.length - 1`. Defaults to `easeOut`. (This doesn't yet support named easings)
- `times?: number[]`: An array of numbers between `0` and `1`, representing `0` to `duration`, that represent at which point each number should be hit. Defaults to an array of evenly-spread durations will be calculated.
- `elapsed?: number = 0`: Duration of animation already elapsed, in milliseconds.
- `ease?: Easing = easeOut`: A function, given a progress between `0` and `1`, that returns a new progress value. Used to affect the rate of playback across the duration of the animation. (This doesn't yet support named easings)
- `loop?: number = 0`: Number of times to loop animation.
- `flip?: number = 0`: Number of times to flip animation.
- `yoyo?: number = 0`: Number of times to reverse tween.

##### Decay

`decay` exponentially decelerates a number and velocity to an automatically generated target value. This target can be modified by the user.

This animation is particularly useful for implementing momentum scrolling.

- `type: 'decay'`: Set transition to decay.
- `power?: number = 0.8`: A constant with which to calculate a target value. Higher power = further target. `0.8` should be okay.
- `timeConstant?: number = 350`: Adjusting the time constant will change the duration of the deceleration, thereby affecting its feel.
- `restDelta?: number = 0.5`: Automatically completes the action when the calculated value is this far away from the target.
- `modifyTarget?: (v: number) => number`: A function that receives the calculated target and returns a new one. Useful for snapping the target to a grid, for example.

##### General transition props

The following props can be set on any transition:

- `from?: number | Color`: Start value of animation (overrides Pose-generated value).
- `to?: number | Color`: End value of animation (overrides Pose-generated value).
- `velocity?: number`: Initial velocity of animation (overrides Pose-generated value).
- `delay?: number`: Delay the execution of the transition by this amount of time (in milliseconds).
- `min?: number`: Restrict output to numbers larger than this.
- `max?: number`: Restrict output to numbers smaller than this.
- `round?: boolean`: If `true`, output numbers will be rounded.

#### Transition props

If set as a function, `transition` receives the same user-defined props as other dynamic pose properties, with some generated by Pose:

```typescript
type TransitionsProps = {
  from: any,
  to: any,
  velocity: number,
  key: string,
  prevPoseKey: string
}
```

- `from`: The current state of the value
- `velocity`: The current velocity of the value, if it's a number
- `to`: The state we're animating to, as defined in the current pose. **Note:** You're under no obligation to actually animate to this value (for instance for non-deterministic animations)
- `key`: The name of the value
- `prevPoseKey`: The name of the pose this value was previously in.

### values

`...values: any | (props: Props) => any`

Any remaining properties are treated as stylistic values and will be animated.


