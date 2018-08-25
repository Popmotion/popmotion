import { Poser, PoserConfig } from 'pose-core';
import { convertUnitToPoints, unitConverters } from './inc/unit-conversion';
import animatedPoseFactory from './factory';

const nativePose = animatedPoseFactory({ convertUnitToPoints, unitConverters });

const vrPose = animatedPoseFactory({
  convertUnitToPoints: (v: string) => parseFloat(v),
  unitConverters: {}
});

export default nativePose;
export { vrPose };

// Export types
export * from './types';
export { Poser, PoserConfig };

