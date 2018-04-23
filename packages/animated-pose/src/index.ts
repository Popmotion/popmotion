import { Animated } from 'react-native';
import { Poser, PoserConfig } from 'pose-core';
import { convertUnitToPoints, unitConverters } from './inc/unit-conversion';
import animatedPoseFactory from './factory';
import { AnimatedPoser, AnimatedPoseConfig } from './types';

const nativePose = animatedPoseFactory({ convertUnitToPoints, unitConverters });

const vrPose = animatedPoseFactory({
  convertUnitToPoints: (v: string) => parseFloat(v),
  unitConverters: {}
});

export default nativePose;
export { vrPose };

// Export types
Animated; //tslint:disable-line
export { Poser, PoserConfig, AnimatedPoser, AnimatedPoseConfig };
