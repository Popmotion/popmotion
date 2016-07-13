import Action from './Action';

class Tween extends Action {
  onStart() {
    this.elapsed = 0;
  }

  onUpdate({ elapsed }) {
    let progress = restrict(getProgressFromValue(elapsed - this.delay, 0, this.duration), 0, 1);

    // Step progress if we're stepping
    if (this.steps) {
      progress = stepProgress(progress, this.steps);
    }

    // Ease progress
    this.current = ease(progress, this.from, this.stop, this.ease);
  }
}

Tween.defaultProps = {
  ease: Easing.easeOut,
  elapsed: 0,
  steps: 0,
  from: 0,
  to: 0
};

export default function tween(props) {
  return new Tween({

  });
};

