import { currentFrameTime, timeSinceLastFrame } from 'framesync';
import { createDefaultObserver } from '../action/observer';
import { Observer, ObserverCandidate } from '../action/types';
import { speedPerSecond } from '../calc';

type AnimatedValueObserver = Observer & {
  get: () => number;
  getVelocity: () => number;
};

const animatedValue = (initialValue: number, observerCandidate: ObserverCandidate): AnimatedValueObserver => {
  let current = initialValue;
  let prev = current;
  let lastUpdateTimestamp = 0;

  const observer = createDefaultObserver(observerCandidate);
  observer.update(current);

  return {
    ...observer,
    get: () => current,
    getVelocity: () => {
      const frame = currentFrameTime();
      const frameDelta = timeSinceLastFrame();
      return (frame - lastUpdateTimestamp <= frameDelta)
        ? speedPerSecond(current - prev, frameDelta)
        : 0;
    },
    update: (v: number) => {
      prev = current;
      current = v;
      lastUpdateTimestamp = currentFrameTime();
      observer.update(v);
    }
  };
};

export default animatedValue;

const myTween = tween().start();

myTween.velocity.subscribe(() => {});
