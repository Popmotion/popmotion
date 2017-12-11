import React from 'react';
import { BaseAnimation } from './inc';
import physics from '../packages/popmotion/lib/animations/physics';
import tween from '../packages/popmotion/lib/animations/tween';

export class PhysicsVelocity extends BaseAnimation {
  getAnimation = (styler) => physics({
    velocity: 1000
  }).start((v) => styler.set('x', v));
}
export class PhysicsAcceleration extends BaseAnimation {
  getAnimation = (styler) => physics({
    velocity: 1000,
    acceleration: 1000
  }).start((v) => styler.set('x', v));
}
export class PhysicsFriction extends BaseAnimation {
  getAnimation = (styler) => physics({
    velocity: 1000,
    friction: 0.5
  }).start((v) => styler.set('x', v));
}
export class PhysicsSpring extends BaseAnimation {
  getAnimation = (styler) => physics({
    velocity: 1000,
    friction: 0.9,
    springStrength: 300,
    to: 500
  }).start((v) => styler.set('x', v));
}
export class PhysicsChangeSpringTarget extends BaseAnimation {
  getAnimation = (styler) => {
    const simulation = physics({
      velocity: 1000,
      friction: 0.5,
      springStrength: 300,
      to: 500
    }).start((v) => styler.set('x', v));

    tween({ from: 500, to: 0, yoyo: Infinity })
      .start((v) => simulation.setSpringTarget(v))

    return simulation;
  }
}