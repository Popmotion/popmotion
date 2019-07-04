// Core
import action from './action';
import multicast from './reactions/multicast';
import value from './reactions/value';

export { action, multicast, value };

// Animations
import decay from './animations/decay';
import inertia from './animations/inertia';
import everyFrame from './animations/every-frame';
import keyframes from './animations/keyframes';
import physics from './animations/physics';
import spring from './animations/spring';
import timeline from './animations/timeline';
import tween from './animations/tween';

export {
  decay,
  inertia,
  keyframes,
  everyFrame,
  physics,
  spring,
  timeline,
  tween
};

// Input
import listen from './input/listen';
import multitouch from './input/multitouch';
import pointer from './input/pointer';
import mouse from './input/pointer/mouse';

export { listen, pointer, mouse, multitouch };

// Compositors
import chain from './compositors/chain';
import composite from './compositors/composite';
import crossfade from './compositors/crossfade';
import delay from './compositors/delay';
import merge from './compositors/merge';
import parallel from './compositors/parallel';
import schedule from './compositors/schedule';
import stagger from './compositors/stagger';

export {
  chain,
  composite,
  crossfade,
  delay,
  merge,
  parallel,
  schedule,
  stagger
};

import { invariant } from 'hey-listen';
export const styler = () =>
  invariant(
    false,
    'styler has been removed from Popmotion in 9.0. Downgrade to 8.x or npm install stylefire'
  );

// Types
export { Action } from './action';
export { ColdSubscription } from './action/types';
export { DecayProps } from './animations/decay/types';
export { KeyframesProps } from './animations/keyframes/types';
export { PhysicsProps } from './animations/physics/types';
export { SpringProps } from './animations/spring/types';
export { TweenProps } from './animations/tween/types';
export { ValueReaction } from './reactions/value';
