import Action from './';
import { timeSinceLastFrame } from '../framesync';
import { flow, clamp } from '../inc/transformers';
import { getProgressFromValue, getValueFromProgress } from '../inc/calc';
import { easeOut } from '../inc/easing';

const clampProgress = clamp(0, 1);

const NEXT_STEPS = {
  loop: (tween) => tween.start(),
  yoyo: (tween) => tween.reverse().start(),
  flip: (tween) => tween.flip().start()
};

class Tween extends Action {
  static defaultProps = {
    duration: 300,
    ease: easeOut,
    from: 0,
    to: 1,
    flip: 0,
    flipCount: 0,
    yoyo: 0,
    yoyoCount: 0,
    loop: 0,
    loopCount: 0,
    playDirection: 1
  };

  onStart() {
    const { duration, ease, from, to, playDirection } = this.props;

    this.elapsed = 0;

    this.update = flow(
      () => this.elapsed += timeSinceLastFrame() * playDirection,
      (v) => getProgressFromValue(0, duration, v),
      clampProgress,
      ease,
      (v) => getValueFromProgress(from, to, v)
    );
  }

  isActionComplete() {
    let isComplete = (this.elapsed >= this.props.duration);

    if (isComplete) {
      let isStepTaken = false;

      for (let key in NEXT_STEPS) {
        const nextStep = NEXT_STEPS[key];
        const countProp = key + 'Count';
        const stepMax = this.getProp(key);
        const stepCount = this.getProp(countProp);

        if (stepMax > stepCount) {
          this.setProp(countProp, stepCount + 1);
          nextStep(this);
          isStepTaken = true;
        }
      }

      if (isStepTaken) isComplete = false;
    }

    return isComplete;
  }

  getElapsed() {
    return this.elapsed;
  }

  flip() {
    this.elapsed = this.props.duration - this.elapsed;
    [this.props.from, this.props.to] = [this.props.to, this.props.from];
    return this;
  }

  reverse() {
    this.props.playDirection *= -1;
    return this;
  }
}

export default (...args) => {
  if (args.length === 1) {
    const [ props ] = args;
    return new Tween(props);
  } else {
    const [ from, to, duration, ease, props ] = args;
    return new Tween({ from, to, duration, ease, ...props });
  }
};
