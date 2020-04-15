import { number } from 'style-value-types';
import action, { Action } from '../../action';
import vectorAction, { ActionFactory } from '../../action/vector';
import { springSole } from '../spring';
import { decaySole } from '../decay';
import { ColdSubscription } from '../../action/types';
import { Props, SpringProps } from './types';
import { velocityPerSecond } from '@popmotion/popcorn';
import { getFrameData } from 'framesync';

const inertia = ({
  from = 0,
  velocity = 0,
  min,
  max,
  power = 0.8,
  timeConstant = 700,
  bounceStiffness = 500,
  bounceDamping = 10,
  restDelta = 1,
  modifyTarget
}: Props) =>
  action(({ update, complete }) => {
    let prev = from;
    let current = from;
    let activeAnimation: ColdSubscription;

    const isOutOfBounds = (v: number) => {
      return (min !== undefined && v < min) || (max !== undefined && v > max);
    };
    const boundaryNearest = (v: number) => {
      return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };

    const startAnimation = (animation: Action, next?: Function) => {
      activeAnimation && activeAnimation.stop();

      activeAnimation = animation.start({
        update,
        complete: () => {
          if (next) {
            next();
            return;
          }
          complete();
        }
      });
    };

    const startSpring = (props: SpringProps) => {
      startAnimation(
        springSole({
          ...props,
          stiffness: bounceStiffness,
          damping: bounceDamping,
          restDelta
        })
      );
    };

    // Start the animation with spring if outside the defined boundaries
    if (isOutOfBounds(from)) {
      startSpring({ from, velocity, to: boundaryNearest(from) });

      // Otherwise simulate inertial movement with decay. If target is beyond
      // bounds switch from decay to spring upon boundary encounter
    } else {
      let to = power * velocity + from;
      if (typeof modifyTarget !== 'undefined') {
        // get the modified target, prevent decay doing so a second time and
        // resolve velocity so decay will produce the modified target
        to = modifyTarget(to);
        modifyTarget = void 0;
        velocity = (to - from) / power;
      }
      let animation = decaySole({
        from,
        velocity,
        timeConstant,
        power,
        restDelta,
        modifyTarget
      });
      let next;
      if (isOutOfBounds(to)) {
        const boundary = boundaryNearest(to);
        const heading = boundary == min ? -1 : 1;
        animation = animation.while(v => {
          prev = current;
          velocity = velocityPerSecond(v - prev, getFrameData().delta);
          current = v;
          return boundary - v * heading > 0;
        });
        next = () => startSpring({ from: current, to: boundary, velocity });
      }
      startAnimation(animation, next);
    }

    return {
      stop: () => activeAnimation && activeAnimation.stop()
    };
  });

export default vectorAction(inertia, {
  from: number.test,
  velocity: number.test,
  min: number.test,
  max: number.test,
  damping: number.test,
  stiffness: number.test,
  modifyTarget: (func: any) => typeof func === 'function'
}) as ActionFactory;
