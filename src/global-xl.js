import * as popmotion from './popmotion';
import draggable from '../packages/popmotion-draggable/src';
import inertia from '../packages/popmotion-inertia/src';
import scroll from '../packages/popmotion-scroll/src';
import spinnable from '../packages/popmotion-spinnable/src';
import timeline from '../packages/popmotion-timeline/src';

window.popmotionXL = {
  ...popmotion,
  draggable,
  inertia,
  scroll,
  spinnable,
  timeline
};
