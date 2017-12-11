import React from 'react';
import { BaseAnimation } from './inc';
import keyframes from '../packages/popmotion/lib/animations/keyframes';
import { linear } from '../packages/popmotion/lib/easing';

export class Keyframes extends BaseAnimation {
  getAnimation = (styler) => keyframes({
    values: [0, 300, 150]
  }).start((v) => styler.set('x', v));
}

export class KeyframesDuration extends BaseAnimation {
  getAnimation = (styler) => keyframes({
    values: [0, 300, 150],
    duration: 1000
  }).start((v) => styler.set('x', v));
}

export class KeyframesLoop extends BaseAnimation {
  getAnimation = (styler) => keyframes({
    values: [0, 300, 150],
    duration: 1000,
    loop: Infinity
  }).start((v) => styler.set('x', v));
}

export class KeyframesLinear extends BaseAnimation {
  getAnimation = (styler) => keyframes({
    values: [0, 300, 150],
    duration: 1000,
    ease: [linear, linear]
  }).start((v) => styler.set('x', v));
}

export class KeyframesTimes extends BaseAnimation {
  getAnimation = (styler) => keyframes({
    values: [0, 300, 150],
    duration: 1000,
    times: [0, 0.2, 1]
  }).start((v) => styler.set('x', v));
}

