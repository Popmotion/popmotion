// Core
import action from './action';
import multicast from './reactions/multicast';
import value from './reactions/value';

export { action, multicast, value };

// Animations
import decay from './animations/decay';
import everyFrame from './animations/every-frame';
import keyframes from './animations/keyframes';
import physics from './animations/physics';
import spring from './animations/spring';
import timeline from './animations/timeline';
import tween from './animations/tween';

export { decay, keyframes, everyFrame, physics, spring, timeline, tween };

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

// Includes
import * as calc from './calc';
import * as easing from '@popmotion/easing';
import * as transform from './transformers';

export { calc, easing, transform };

// Stylefire
import styler, { Styler } from 'stylefire';
import { warning } from 'hey-listen';
const css = (element: HTMLElement, props: Object): Styler => {
  warning(false, 'css() is deprecated, use styler instead');
  return styler(element, props);
};
const svg = (element: HTMLElement, props: Object): Styler => {
  warning(false, 'svg() is deprecated, use styler instead');
  return styler(element, props);
};
export { styler, css, svg };

// Value types
import * as valueTypes from 'style-value-types';
export { valueTypes };

// Types
import { Action } from './action';
import { ColdSubscription } from './action/types';
import { ValueReaction } from './reactions/value';
export { Action, ColdSubscription, ValueReaction };
