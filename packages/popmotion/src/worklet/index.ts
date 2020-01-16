import { tween } from '../animations/tween';
import { ForT } from '../types';

interface WorkletAnimationEffect {
  localTime: number;
}

// extends StatelessAnimator when browsers implement the spec
class StatelessPopmotionAnimator {
  animation: ForT;

  constructor(animation: ForT) {
    this.animation = animation;
  }

  animate(currentTime: number, effect: WorkletAnimationEffect) {
    // TODO: Why does this snap back once the duration is reached?
    effect.localTime = this.animation(currentTime);
  }
}

export interface TweenOptions {}

class Tween extends StatelessPopmotionAnimator {
  constructor(options: TweenOptions) {
    super(tween({ from: 0, to: 3000, duration: 3000 }));
  }
}

// @ts-ignore
registerAnimator('tween', Tween);
