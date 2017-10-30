import React from 'react';
import { BaseAnimation } from './inc';
import decay from '../package/popmotion/lib/animations/decay';

export class Decay extends BaseAnimation {
  getAnimation = (styler) => decay({
    velocity: 1000
  }).start((v) => styler.set('x', v));
}

export class DecayModifyTarget extends BaseAnimation {
  getAnimation = (styler) => decay({
    velocity: 1000,
    modifyTarget: (v) => Math.ceil(v / 100) * 100
  }).start((v) => styler.set('x', v));
}

export class DecayTimeConstant extends BaseAnimation {
  getAnimation = (styler) => decay({
    velocity: 1000,
    timeConstant: 1000
  }).start((v) => styler.set('x', v));
}

export class DecayPower extends BaseAnimation {
  getAnimation = (styler) => decay({
    velocity: 1000,
    power: 2
  }).start((v) => styler.set('x', v));
}