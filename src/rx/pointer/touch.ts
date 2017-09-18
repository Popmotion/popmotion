import action from '../action';
import listenerManager from './listener-manager';

import { PointerProps, Point2D } from './types';

let points: Point2D[] = [{ x: 0, y: 0 }];

const touchToPoint = ({ clientX, clientY }: Touch) => ({
  x: clientX,
  y: clientY
});

const touchEvents = listenerManager({
  onEvent: ({ touches }: TouchEvent) => {
    const numTouches = touches.length;
    const newPoints: Point2D[] = [];

    for (let i = 0; i < numTouches; i++) {
      const touch = touches[i];
      newPoints.push(touchToPoint(touch));
    }

    points = newPoints;
  },
  onListenersEmpty: (listener: EventListener) =>
    document.documentElement.removeEventListener('touchmove', listener),
  onFirstListener: (listener: EventListener) =>
    document.documentElement.addEventListener('touchmove', listener)
});

const touch = ({ preventDefault = true }: PointerProps = {}) => action(({ update }) => {
  const updatePoint = () => update(points);
  touchEvents.add(updatePoint);

  return {
    stop: () => touchEvents.remove(updatePoint)
  };
});

export default touch;