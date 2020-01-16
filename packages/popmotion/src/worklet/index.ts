import { tween } from '../animations/tween';
import { ForT } from '../types';

interface WorkletAnimationEffect {
  localTime: number;
}

class StatelessPopmotionAnimator extends StatelessAnimator {
  animation: ForT;

  constructor(animation: ForT) {
    super();
    this.animation = animation;
  }

  animate(currentTime: number, effect: WorkletAnimationEffect) {
    effect.localTime = this.animation(currentTime);
  }
}

export interface TweenOptions {}

class Tween extends StatelessPopmotionAnimator {
  constructor(options: TweenOptions) {
    super(tween(options));
  }
}

(window as any).registerAnimator('tween', Tween);
