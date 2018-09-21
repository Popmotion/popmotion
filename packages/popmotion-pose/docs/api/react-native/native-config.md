---
title: Config
description: Options to create a posed component
category: react-native
---

# Config

Every posed component is created via a config object:

```javascript
const PosedComponent = posed.View(config)
```

<TOC />

## Available options

### draggable

`draggable?: true | x | y`

If `true`, will make the component draggable on both axis. Setting to either `'x'` or `'y'` will restrict movement to that axis.

If defined, will allow the use of a special `dragging` and `dragEnd` poses.

### passive

`passive?: { [key: string]: PassiveValue }`

```typescript
type PassiveValue = [
  bindKey: string,
  interpolate: InterpolateConfig,
  fromParent?: true | string
]
```

Map of values that are passively changed when other values, either on this Poser or an ancestor, change.

`bindKey` is the name of the value to interpolate from.

`InterpolateConfig` is an object with any [valid `Animated.Value.interpolate` props](https://facebook.github.io/react-native/docs/animations.html#interpolation).

`fromParent` can be set either as `true` or as a `string`:
  - `true`: Link to value from immediate parent.
  - `string`: Link to the nearest ancestor with this `label` prop.

### label

`label?: string`

Set a label on this poser. Currently, this allows a `passive` value on a child poser to refer to this ancestor value.

### props

`props?: { [key: string]: any }`

Props to provide to the `transition` method and dynamic props of entered poses.

### ...poses

`...poses: { [key: string]: Pose }`

Remaining keys will be treated as poses:

## Poses

You can call a pose anything, and animate to it by providing its name to the posed component's `pose` property:

```javascript
<PosedComponent pose="poseName" />
<PosedComponent pose={['poseName', /* Multiple poses allowed */]}>
```

A pose is defined by style attributes like `x` or `opacity`, and the following optional props:

### transition

`transition?`

The `transition` prop can be used to create custom transitions.

It can be set as transition definition:

```javascript
transition: { type: 'spring' }
```

A function that returns a transition definition **or** a React Animated animation:

```javascript
transition: ({ value, ...props }) => spring(value, props)
transition: (props) => ({ type: 'spring' })
```

Or finally, a named map, where a separate `transition` is defined for each animating value. `default` can be used to define a transition for all remaining values. 

```javascript
visible: {
  x: 0,
  opacity: 1,
  transition: {
    x: { type: 'spring' },
    default: ({ value, ...props }) =>
      Animated.timing(value, props)
  }
}
```

#### Transition definitions

A transition definition describes the type of animation Pose should use to transition to the value defined in the Pose.

There are many types, and each has its own specific configuration props available.

##### Tween (default)

Transitions between one value and another over a set duration of time.

- `duration?: number = 300`: Total duration of animation, in milliseconds.
- `ease?: string | number[] | Function`: The name of an easing function, a cubic bezier definition (as an array of numbers), or an easing function. The following easings are included with Pose:
  - 'linear'
  - 'easeIn', 'easeOut', 'easeInOut'
  - 'circIn', 'circOut', 'circInOut'
  - 'backIn', 'backOut', 'backInOut'
  - 'anticipate'

##### Spring

A spring animation based on `stiffness`, `damping` and `mass`.

- `type: 'spring'`: Set transition to spring.
- `stiffness?: number = 100`: Spring stiffness.
- `damping?: number = 10`: Strength of opposing force.
- `mass?: number = 1.0`: Mass of the moving object.
- `velocity?: number = 0`: Initial velocity.
- `restDelta?: number = 0.01`: End animation if distance to `to` is below this value **and** `restSpeed` is `true`.
- `restSpeed?: number = 0.01`: End animation if speed drops below this value **and** `restDelta` is `true`.
- `overshootClamping?: boolean = false`: Clamps any overshoot beyond the target value.

##### Keyframes

Keyframes accepts an array of `values` and will animate to each, in sequence.

Timing is defined with a combination of `duration`, `easings` and `times` properties.

- `type: 'keyframes'`: Set transition to keyframes.
- `values: number[]`: An array of numbers to animate between. To use the value defined in the Pose as the final target value, set `transition` as a function: `transition: ({ toValue }) => { type: 'keyframes', values: [0, toValue] }`. To use the current value as the current value as the initial value, skip definition that value: `values: [, 45, 90]`
- `duration?: number = 300`: Total duration of animation, in milliseconds.
- `easings?: Easing | Easing[]`: An array of easings (see tween for options) to provide to each generated tween, or a single easing applied to all tweens. This array should be `values.length - 1`. Defaults to `'easeOut'`.
- `times?: number[]`: An array of numbers between `0` and `1`, representing `0` to `duration`, that represent at which point each number should be hit. Defaults to an array of evenly-spread durations will be calculated.

##### General transition props

The following props can be set on any transition:

- `loop?: number = 0`: If set, defines how many times transition will replay.
- `delay?: number = 0`: Delay the execution of the transition by this amount of time (in milliseconds).
- `isInteraction?: boolean = true`: Defines whether this animation creates an "interaction handle" on React Native's `InteractionManager`.

#### Transition props

If set as a function, `transition` receives the same user-defined props as other dynamic pose properties, with some generated by Pose:

```javascript
type Props = {
  value: Animated.Value,
  toValue: number,
  key: string,
  prevPoseKey: string,
  useNativeDriver: boolean,
  ...props: any
}
```

- `value`: The React Animated `Value` being animated.
- `toValue`: The state we're animating to, as defined in the current pose. **Note:** You're under no obligation to actually animate to this value (for instance for non-deterministic animations)
- `key`: The name of the value.
- `prevPoseKey`: The name of the pose this value was previously in.
- `useNativeDriver`: Whether to use the native animation driver for better performance. If returning an Animated animation (rather than a transition definition), this **must** be passed to that animation.

### delay

`delay?: number | (props: Props) => number`

A duration, in milliseconds, to delay this transition. Does **not** affect children.

### delayChildren

`delayChildren?: number | (props: Props) => number`

A duration, in milliseconds, to delay the transition of direct children.

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

### ...values

`...values: any | (props: TransitionProps) => any`

Any remaining properties are treated as stylistic values and will be animated.
