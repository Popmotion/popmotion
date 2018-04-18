import { ColdSubscription } from 'popmotion/action/types';
import { HotSubscription } from 'popmotion/reactions/types';

import poseFactory from '../../pose-core/src';
import createDimensions from './factories/dimensions';
import defaultTransitions from './inc/default-transitions';
import { PopmotionPoserConfig } from './types';
import { Pose } from '../../pose-core/src/types';

const pose = poseFactory<ColdSubscription, HotSubscription>({
  getDefaultProps: ({ element }: PopmotionPoserConfig) => ({
    dimensions: createDimensions(element)
  }),
  defaultTransitions
});

export default (element: Element, config: PoserConfig) => {
  return pose({
    element,
    ...config
  });
};
