import React from 'react';
import { BaseAnimation } from './inc';
import tween from '../package/popmotion/lib/animations/tween';
import value from '../package/popmotion/lib/reaction/value';

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
    const val = value(0, (v) => {
      styler.set('x', v);
    });
    return tween({
      loop: Infinity,
      to: 300,
      duration: 3000
    }).start(val);
  }
}

