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

## Available options

### `draggable?: true | x | y`

If `true`, will make the component draggable on both axis. Setting to either `'x'` or `'y'` will restrict movement to that axis.

If defined, will allow the use of a special `dragging` and `dragEnd` poses.

### `passive?: { [key: string]: PassiveValue }`

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

### `label?: string`

Set a label on this poser. Currently, this allows a `passive` value on a child poser to refer to this ancestor value.

### `props?: { [key: string]: any }`

Props to provide to the `transition` method and dynamic props of entered poses.

### `...poses: { [key: string]: Pose }`

Remaining keys will be treated as poses:

## Poses

You can call a pose anything, and animate to it by providing its name to the posed component's `pose` property:

```javascript
<PosedComponent pose="poseName" />
<PosedComponent pose={['poseName', /* Multiple poses allowed */]}>
```

A pose is defined by style attributes like `x` or `opacity`, and the following optional props:

### `transition?: (props: Props) => Animated.CompositeAnimation | false`

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

This is an optional function that can be used to create custom transitions.

The function is run **once for every style property in the pose**.

It must return a React Animated animation like `timing`, `sequence` or `spring`.

It can also return `false`, for an instant transition.

The animation **must** use the provided `value` prop. It **must** use the provided `useNativeDriver` prop if `dragging` is set to `true` or an axis.

You can use `key` to return a different animation depending on the value being animated.

`poseKey` can be used to return a different animation depending on pose this specific value was previously in.

### `delay?: number | (props: Props) => number`

A duration, in milliseconds, to delay this transition. Does **not** affect children.

### `delayChildren?: number | (props: Props) => number`

A duration, in milliseconds, to delay the transition of direct children.

### `staggerChildren?: number | (props: Props) => number`

A duration, in milliseconds, between transitioning each children.

### `staggerDirection?: 1 | -1 | (props: Props) => 1 | -1`

If `1`, staggers from the first child to the last. If `-1`, from last to first.

### `beforeChildren?: boolean | (props: Props) => boolean`

If `true`, will ensure this animation completes before firing any child animations.

### `afterChildren?: boolean | (props: Props) => boolean`

If `true`, will ensure this animation only fires after all child animations have completed.

### `...values: any | (props: TransitionProps) => any`

Any remaining properties are treated as stylistic values and will be animated.
