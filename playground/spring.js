import React from 'react';
import { BaseAnimation, Box } from './inc';
import spring from '../packages/popmotion/lib/animations/spring';

export class Spring extends BaseAnimation {
  getAnimation = (styler) => spring({
    to: 300
  }).start((v) => styler.set('x', v));
}

export class SpringVelocity extends BaseAnimation {
  getAnimation = (styler) => spring({
    from: 500,
    to: 0,
    velocity: -1000,
    stiffness: 1,
    damping: 10
  }).start((v) => styler.set('x', v));
}

export class SpringHeavier extends BaseAnimation {
  getAnimation = (styler) => spring({
    to: 300,
    velocity: 10000,
    mass: 3
  }).start((v) => styler.set('x', v));
}

export class SpringStiffer extends BaseAnimation {
  getAnimation = (styler) => spring({
    to: 300,
    velocity: 10000,
    stiffness: 500
  }).start((v) => styler.set('x', v));
}

export class SpringStifferDamping extends BaseAnimation {
  getAnimation = (styler) => spring({
    to: 300,
    velocity: 10000,
    stiffness: 500,
    damping: 100
  }).start((v) => styler.set('x', v));
}