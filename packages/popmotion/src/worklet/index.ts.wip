//import { tween } from '../animations/tween';
import { ForT } from '../types';
import { spring } from '../animations/spring';

interface WorkletAnimationEffect {
  localTime: number;
}

// extends StatelessAnimator when browsers implement the spec
class StatelessPopmotionAnimator {
  animation: ForT;
  a: any;
  documentTimeline: DocumentTimeline;

  constructor(animation: ForT) {
    this.animation = animation;
    // this.state = state;
    //console.log('constructor');
  }

  animate(currentTime: number, effect: WorkletAnimationEffect) {
    // TODO: Why does this snap back once the duration is reached?
    effect.localTime = this.animation(currentTime);
    // this.a = { velocity: 'localTime ' };
  }

  // state() {
  //   return this.a;
  // }
}

// interface TweenOptions {
//   documentTimeline: DocumentTimeline;
// }

// class Tween extends StatelessPopmotionAnimator {
//   constructor(options: TweenOptions) {
//     super(tween({ from: 0, to: 3000, duration: 3000 }));
//   }
// }

interface SpringOptions {}

class Spring extends StatelessPopmotionAnimator {
  constructor(options: SpringOptions) {
    super(spring({}));
  }
}

// @ts-ignore
registerAnimator(
  'tween',
  class {
    constructor() {
      console.log('made');
    }

    animate(currentTime: number, effect: WorkletAnimationEffect) {
      effect.localTime = currentTime;
    }
  }
);

// @ts-ignore
registerAnimator('spring', Spring);

interface ParallaxOptions {
  factor: number;
}

class Parallax {
  factor = 0.5;

  constructor(options: ParallaxOptions) {
    this.factor = options.factor;
  }

  animate(currentTime: number, effect: WorkletAnimationEffect) {
    if (isNaN(currentTime)) return;
    effect.localTime = this.factor * currentTime;
  }
}

// @ts-ignore
registerAnimator('parallax', Parallax);
