import { number } from 'style-value-types';
import action, { Action } from '../../action';
import vectorAction from '../../action/vector';
import value from '../../reactions/value';
import spring from '../spring';
import decay from '../decay';
import { ColdSubscription } from '../../';

type Props = {
  from: number;
  velocity: number;
  min?: number;
  max?: number;
  stiffness: number;
  damping: number;
};

type SpringProps = {
  from: number;
  velocity: number;
};

const inertia = ({
  from,
  velocity,
  min,
  max,
  damping = 10,
  stiffness = 500
}: Props) =>
  action(({ update, complete }) => {
    let isSpring = false;

    const isLessThanMin = (v: number) => min !== undefined && v <= min;
    const isMoreThanMax = (v: number) => max !== undefined && v >= max;
    const isOutOfBounds = (v: number) => isLessThanMin(v) || isMoreThanMax(v);
    const isTravellingAwayFromBounds = (v: number, currentVelocity: number) => {
      return (
        (isLessThanMin(v) && currentVelocity < 0) ||
        (isMoreThanMax(v) && currentVelocity > 0)
      );
    };

    const current = value(from);

    let activeAnimation: ColdSubscription;
    const startAnimation = (animation: Action, onComplete?: Function) => {
      activeAnimation && activeAnimation.stop();

      activeAnimation = animation.start({
        update: (v: number) => current.update(v),
        complete: () => {
          complete();
          onComplete && onComplete();
        }
      });
    };

    const startSpring = (props: SpringProps) => {
      isSpring = true;
      startAnimation(
        spring({
          ...props,
          to: isLessThanMin(props.from) ? min : max,
          stiffness,
          damping
        })
      );
    };

    current.subscribe((v: number) => {
      update(v);

      const currentVelocity = current.getVelocity();

      if (
        activeAnimation &&
        !isSpring &&
        isTravellingAwayFromBounds(v, currentVelocity)
      ) {
        startSpring({ from: v, velocity: currentVelocity });
      }
    });

    const startAsSpring =
      (isOutOfBounds(from) && velocity === 0) ||
      isTravellingAwayFromBounds(from, velocity);

    if (startAsSpring) {
      startSpring({ from, velocity });
    } else {
      const animation = decay({
        from,
        velocity,
        timeConstant: 700,
        restDelta: isOutOfBounds(from) ? 20 : 1
      });

      startAnimation(animation, () => {
        const v = current.get() as number;
        if (isOutOfBounds(v)) {
          startSpring({ from: v, velocity: current.getVelocity() });
        }
      });
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
  stiffness: number.test
});
