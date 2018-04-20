# Animated Pose

## Pose for the React Animated animation library

[![npm version](https://img.shields.io/npm/v/animated-pose.svg?style=flat-square)](https://www.npmjs.com/package/animated-pose)
[![npm downloads](https://img.shields.io/npm/dm/animated-pose.svg?style=flat-square)](https://www.npmjs.com/package/animated-pose)
[![Twitter Follow](https://img.shields.io/twitter/follow/popmotionjs.svg?style=social&label=Follow)](http://twitter.com/popmotionjs)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/popmotion)

Animated Pose is a flavour of the [Pose](https://popmotion.io/pose) animation system for React's Animated library.

It can be used in a low-level way with both [React Native](https://facebook.github.io/react-native/) and [React VR](https://facebook.github.io/react-vr/).

High-level libraries for both, with a similar API to [React Pose](https://popmotion.io/pose), will be available soon.

## Features

- Declarative API for animation logic
- Intelligent default animations
- Automatically handles unit types without manual `Animated.interpolate` binding
- Create parent-child relationships to seamlessly coordinate animations throughout component trees using props like `staggerChildren`.

## Example

```javascript
import { Animated } from 'react-native';
import pose from 'animated-pose';

class FadeExample extends React.Component {
  this.poser = pose({
    visible: { opacity: 1, rotate: '0deg' },
    hidden: { opacity: 0, rotate: '10deg' },
    initialPose: this.props.isVisible ? 'visible' : 'hidden'
  })

  componentDidReceiveProps(prevProps) {
    const { isVisible } = this.props;

    if (prevProps.isVisible !== isVisible) {
      this.poser.set(isVisible ? 'visible' : 'hidden');
    }
  }

  render() {
    const { children, style } = this.props;

    return (
      <Animated.View style={[style, {
        opacity: this.poser.get('opacity'),
        transform: [{ rotate: this.poser.get('rotate') }]
      }]}>
        {children}
      </Animated.View>
    )
  }
}
```

## Install

```javascript
npm install animated-pose
```

## Import

```javascript
import pose from 'animated-pose';
```

## Usage

A poser is created with the `pose` function:

```javascript
class Example extends React.Component {
  this.poser = pose(config)
}
```

The provided `config` object defines a series of states that the poser can animate between:

```javascript
const config = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  initialPose: 'hidden'
};
```

The poser contains `Animated.Value`s which can be passed to your `Animated` component:

```javascript
class Example extends React.Component {
  this.poser = pose(config)

  render() {
    const { children, styles } = this.props;

    return (
      <Animated.View style={[style, {
        opacity: this.poser.get('opacity')
      }]}>
        {children}
      </Animated.View>
    );
  }
}
```

We can now change the poser in response to incoming props using its `set` method:

```javascript
componentDidUpdate(prevProps) {
  const { isVisible } = this.props;

  if (isVisible !== prevProps.isVisible) {
    this.poser.set(isVisible ? 'visible' : 'hidden');
  }
}
```

## Custom transitions

Each pose property can define a `transition` prop to override Pose's default animations:

```javascript
const config = {
  visible: {
    opacity: 1,
    transition: (props) => // return animation
  }
}
```

It's provided a single argument, `props`, and must return an animation like `Animated.spring` (or `false`, for instant transition).

`props` contains `value` and `toValue`. `value` **must** be passed to the animation, and `toValue` may optionally be used:

```javascript
transition: ({ value, toValue }) => Animated.timing(value, {
  toValue,
  duration: 1000
})
```

`props` also contains:

- All props set on the `prop` property on the `pose` `config` object.
- All props sent through as the second argument of `poser.set()`

## Values with units

Animated doesn't allow you to animate non-numerical values without using an intermediate `Value.interpolate`, but Animated Pose automates that process.

Simply define a value as a string:

```javascript
const config = {
  upsideDown: { rotate: '180deg' },
  rightWayUp: { rotate: '0deg' }
}
```

`poser.get('rotate')` will return the value **with** the unit appended to use in your Animated components, while the `transition` method will work with the raw number.

## Children

A key feature of Pose is the ability to orchestrate animations throughout a hierarchy. We can add children to a poser using `poser.addChild`:

```javascript
const childPoser = poser.addChild(childConfig)
```

Now when a pose is set on the parent, this change will propagate through children:

```javascript
poser.set('open') // Will set `childPoser` to 'open'
```

By default this animation will play on all children immediately. We can use props like `delay` and `staggerChildren` to declaratively sequence these:

```javascript
const config = {
  open: {
    x: 0,
    staggerChildren: 50
  }
}
```

In React, managing children can be a little unwieldy, necessitating passing `poser` down to children as a prop:

```javascript
<Child parentPoser={this.poser} />

// In `Child`:
componentDidMount() {
  this.poser = this.props.parentPoser.addChild(config)
}
```

With the posed component interface of React Native Pose, this will be handled automatically, like [React Pose](https://popmotion.io/pose/learn/animating-children/).

## Passive values

Using the `passive` property, we can define a list of values that will change whenever the values they're bound to change by using `Value.interpolate`.

```javascript
const config = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  initialPose: 'hidden',
  passive: {
    scale: ['opacity', {
      inputRange: [0, 1],
      outputRange: [0.5, 1]
    }]
  }
}
```

Each passive value is defined as a tuple. It accepts three properties:

- `valueToBind`: This is the name of the value we'll interpolate from.
- `interpolateProps`: The [props](https://facebook.github.io/react-native/docs/animations.html#interpolation) to pass to `Value.interpolate`.
- `fromParent`: **Optional**. Use this to look up the poser's ancestor tree and bind to a parent `Animated.Value`. `true` is the poser's immediate parent, or a string to match to a parent's `label` property.

## Config

`pose` accepts a single argument, `config`, that can contain the following properties:

### `initialPose: string | string[]`

Pose, or list of poses, to use as the initial values.

### `label?: string`

Set a label on this poser. Can be used by children posers to find a specific parent up the ancestor chain.

### `passive?: { [key: string]: PassiveValue }`

```typescript
type PassiveValue = [
  valueToBind: string,
  interpolateProps: InterpolateProps,
  fromParent?: true | string
];
```

- `valueToBind`: The name of the value to interpolate from.
- `interpolateProps`: Props to pass to `Animated.interpolate` to convert from the binded value to this one.
- `fromParent`: If `true`, will bind to the value in the poser's immediate parent. If a `string`, will look up the ancestor chain and bind to the value in the poser's ancestor with this `label`.

### `props?: { [key: string]: any }`

An object of properties that will be sent to a pose's dynamic props and `transition` function when that pose is entered.

### `...poses: { [key: string]: Pose }`

Any remaining properties will be treated as poses, which can be activated using `poser.set(poseName)`.

## Pose config

Each pose is an object that can consist of the following props:

 pose is defined by style attributes like `x` or `backgroundColor`, and the following optional props:

### `transition?: (props: Props) => Action | false`

```typescript
type Props = {
  value: Animated.Value,
  toValue: number,
  key: string,
  prevPoseKey: string,
  ...props: any
}
```

This is an optional function that can be used to create custom transitions.

The function is run **once for every style property in the pose**.

It must return an Animated animation like `Animated.spring` or `Animated.decay`.

The function is provided some properties about the currently animating value:

- `value`: The current `Animated.Value`.
- `toValue`: The value we're animating to, as defined by the pose.
- `key`: The name of the value
- `prevPoseKey`: The name of the pose this value was previously in.
- `...props`: If using `pose`, the properties passed as the second argument of `set`, set statefully as `transitionProps` or with `setTransitionProps`. If a React component, the props passed to that component.

You can return different animations based on your own custom logic or use Pose's included [transition compositors](https://popmotion.io/pose/api/transition-compositors) to easily split animations by `key` and `prevPoseKey`.

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

### `...values: any | (props: Props) => any`

Any remaining properties are treated as stylistic values and will be animated.

## Methods

`pose` returns a poser with the following methods:

### `set(name: string, props?: { [key: string]: any })`

The name of a pose to set. Optionally, some props can be passed that will be sent to the pose's `transition` function and any dynamic props.

### `get(key: string): Animated.Value | Animated.AnimatedInterpolation`

Get the `Animated.Value` or `Animated.AnimatedInterpolation` to pass along to the Animated component.

### `has(key: string): boolean`

Returns `true` if a `pose` is available on the current poser.

### `addChild(config: PoseConfig): Poser`

Creates a new poser as a child of this one, and returns the poser.

### `removeChild(child: Poser)`

Removes the provided poser as a child of this one.

### `clearChildren()`

Removes all children posers.

### `destroy()`

Destroys the current poser and all bound children.
