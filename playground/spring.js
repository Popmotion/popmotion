import React from 'react';
import { BaseAnimation } from './inc';
import { spring } from '../packages/popmotion/lib/';

export class Spring extends BaseAnimation {
  getAnimation = styler =>
    spring({
      to: 300
    }).start(v => styler.set('x', v));
}

export class SpringVelocity extends BaseAnimation {
  getAnimation = styler =>
    spring({
      from: 0,
      to: 500,
      velocity: -10000
    }).start(v => styler.set('x', v));
}

export class SpringHeavier extends BaseAnimation {
  getAnimation = styler =>
    spring({
      to: 300,
      velocity: 10000,
      mass: 3
    }).start(v => styler.set('x', v));
}

export class SpringStiffer extends BaseAnimation {
  getAnimation = styler =>
    spring({
      to: 300,
      velocity: 10000,
      stiffness: 500
    }).start(v => styler.set('x', v));
}

export class SpringStifferDamping extends BaseAnimation {
  getAnimation = styler =>
    spring({
      to: 300,
      velocity: 10000,
      stiffness: 500,
      damping: 100
    }).start(v => styler.set('x', v));
}

export class SpringDuration extends BaseAnimation {
  getAnimation = styler => {
    const start = performance.now();
    return spring({
      duration: 2000,
      dampingRatio: 3,
      to: 300,
      restDelta: 1,
      restSpeed: 10
    }).start({
      update: v => styler.set('x', v),
      complete: () => console.log(performance.now() - start)
    });
  };
}
