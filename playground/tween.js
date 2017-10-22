import React from 'react';
import { BaseAnimation } from './inc';
import styler from 'stylefire';
import tween from '../lib/animations/tween';
import animatedValue from '../lib/observers/animated-value';

export class TweenBasic extends BaseAnimation {
  getAnimation = (styler) => tween({
    loop: Infinity,
    duration: 3000
  }).start((v) => styler.set('opacity', v));
}

export class TweenLoop extends BaseAnimation {
  getAnimation = (styler) => tween({
    from: 50,
    to: 300,
    loop: Infinity,
    duration: 1000
  }).start((v) => styler.set('x', v));
}

export class TweenFlip extends BaseAnimation {
  getAnimation = (styler) => tween({
    from: 50,
    to: 300,
    flip: Infinity,
    duration: 1000
  }).start((v) => styler.set('x', v));
}

export class TweenYoyo extends BaseAnimation {
  getAnimation = (styler) => tween({
    from: 50,
    to: 300,
    yoyo: Infinity,
    duration: 1000
  }).start((v) => styler.set('x', v));
}

export class TweenWithVelocity extends BaseAnimation {
  getAnimation = (styler) => {
    const value = animatedValue(0, (v) => {
      styler.set('x', v)
    });
    return tween({
      loop: Infinity,
      to: 300,
      duration: 3000
    }).start(value);
  }
}

