import Action from './';
import { timeSinceLastFrame } from 'framesync';
import { clamp } from '../inc/transformers';
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
    const { duration, playDirection } = this.props;

    this.elapsed = (playDirection === 1) ? 0 : duration;
    this.progress = 0;
  }

  update() {
    const { duration, ease, from, to, playDirection } = this.props;

    if (!this.isManualUpdate) {
      this.elapsed += timeSinceLastFrame() * playDirection;
    }

    this.isManualUpdate = false;
    this.progress = clampProgress(getProgressFromValue(0, duration, this.elapsed));

    return getValueFromProgress(from, to, ease(this.progress));
  }

  isActionComplete() {
    const { duration, playDirection, yoyo, loop, flip } = this.props;
    let isComplete = (playDirection === 1) ? (this.elapsed >= duration) : (this.elapsed <= 0);

    if (isComplete && (yoyo || loop || flip)) {
      let isStepTaken = false;

      for (let key in NEXT_STEPS) {
        const nextStep = NEXT_STEPS[key];
        const countProp = key + 'Count';
        const stepMax = this.getProp(key);
        const stepCount = this.getProp(countProp);

        if (stepMax > stepCount) {
          this.setProps({
            [countProp]: stepCount + 1
          });
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

  seek(progress) {
    const { duration } = this.props;
    this.elapsed = getValueFromProgress(0, duration, progress);
    this.isManualUpdate = true;
    if (!this.isActive()) this.scheduledUpdate();
  }
}

export default (props) => new Tween(props);
