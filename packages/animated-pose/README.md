# Animated Pose

## Pose for the Animated animation library

[![npm version](https://img.shields.io/npm/v/animated-pose.svg?style=flat-square)](https://www.npmjs.com/package/animated-pose)
[![npm downloads](https://img.shields.io/npm/dm/animated-pose.svg?style=flat-square)](https://www.npmjs.com/package/animated-pose)
[![Twitter Follow](https://img.shields.io/twitter/follow/popmotionjs.svg?style=social&label=Follow)](http://twitter.com/popmotionjs)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/popmotion)

Animated Pose is a flavour of the [Pose](https://popmotion.io/pose) animation system for React's Animated library.

It can be used in a low-level way with both [React Native](https://facebook.github.io/react-native/) and [React VR](https://facebook.github.io/react-vr/).

High-level libraries for both, with a similar API to [React Pose](https://popmotion.io/pose), will be available soon.

## Example

```javascript
import { Animated } from 'react-native';
import pose from 'animated-pose';

class FadeExample extends React.Component {
  this.poser = pose({
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
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
      <Animated.View style={{ ...style, opacity: poser.get('opacity') }}>
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


