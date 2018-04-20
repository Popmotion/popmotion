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
- Create parent-child relationships to seamlessly coordinate animations throughout component trees.

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
    const { poser } = this.state;

    return (
      <Animated.View style={[style, {
        opacity: poser.get('opacity'),
        transform: [{ rotate: poser.get('rotate') }]
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

## Config

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
