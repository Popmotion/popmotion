---
title: Props
description: Configure a poser
---

# Props

### `initialPose?: string | string[]`

The name of the initial pose (or poses if provided as an array).

### `draggable?: true | 'x' | 'y'`

If `true`, will make the element draggable on both axis. Setting to either `'x'` or `'y'` will restrict movement to that axis.

If defined, will allow the use of a special `dragEnd` pose

### `dragBounds?: { [key: string]: number }`

An object that defines `top`, `right`, `bottom` and/or `left` drag boundaries in pixels.

Currently, these boundaries are enforced by a hard clamp.

### `onDragStart/onDragEnd: (e: MouseEvent | TouchEvent) => any`

Lifecycle callbacks for drag events.

### `onChange`

Map of callbacks, one for each animated value, that will fire whenever that value changes.

#### Example

```javascript
const props = {
  draggable: 'x',
  onChange: {
    x: (x) => // you do you 
  }
}
```

### `passive: { [key: string]: PassiveValue }`

```typescript
type PassiveValue = [
  subscribedKey: string,
  transform: (subscribedValue: any) => any,
  fromParent?: boolean
]
```

Map of values that are passively changed when other values, either on this Poser or its immediate parent, change.

#### Example

The `transform` function here is composed with Popmotion [transformers](/api/transformers):

```javascript
const props = {
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

### `...poses: { [key: string]: Pose }`

Any other props will be treated as [poses](#pose-props).

### Pose props

You can call a pose anything, and animate to it by calling `poser.set('poseName')`.

A pose is defined by style attributes like `x` or `backgroundColor`, and the following optional props:

### `transition?: (props: TransitionProps) => Action | false`

```typescript
type TransitionsProps = {
  from: any,
  to: any,
  velocity: number,
  key: string,
  prevPoseKey: string,
  ...props: any
}
```

This is an optional function that can be used to create custom transitions.

The function is run **once for every style property in the pose**.

It must return a Popmotion animation, like [tween](/api/tween) or [decay](/api/decay), or `false` to indicate no transition.

The function is provided some properties about the currently animating value:

- `from`: The current state of the value
- `velocity`: The current velocity of the value, if it's a number
- `to`: The state we're animating to, as defined in the current pose. **Note:** You're under no obligation to actually animate to this value (for instance for non-deterministic animations)
- `key`: The name of the value
- `prevPoseKey`: The name of the pose this value was previously in.
- `...props`: If using `pose`, the properties passed as the second argument of `set`. If a React component, the props passed to that component.

You can return different animations based on your own custom logic or use Pose's included [transition compositors](/pose/api/transition-compositors) to easily split animations by `key` and `prevPoseKey`.

### `delay?: number`

A duration, in milliseconds, to delay this transition. Does **not** affect children.

### `delayChildren?: number`

A duration, in milliseconds, to delay the transition of direct children.

### `staggerChildren?: number`

A duration, in milliseconds, between transitioning each children.

### `staggerDirection?: 1 | -1`

If `1`, staggers from the first child to the last. If `-1`, from last to first.

### `...values: { [key: string]: any }`

Any remaining properties are treated as stylistic values and will be animated.