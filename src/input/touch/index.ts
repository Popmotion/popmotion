import { cancelOnFrameUpdate, onFrameUpdate } from 'framesync';
import action from '../../action';
import { Point2D, PointerProps } from '../pointer/types';

interface WhatWGEventListenerArgs {
  capture?: boolean;
}

interface WhatWGAddEventListenerArgs extends WhatWGEventListenerArgs {
  passive?: boolean;
  once?: boolean;
}

type WhatWGAddEventListener = (
  type: string,
  listener: (event: Event) => void,
  options?: WhatWGAddEventListenerArgs
) => void;

const touchToPoint = ({ clientX, clientY }: Touch) => ({
  x: clientX,
  y: clientY
});

const touch = ({ preventDefault = true }: PointerProps = {}) => action(({ update }) => {
  let points: Point2D[] = [{ x: 0, y: 0 }];
  const updatePoint = () => update(points);

  const onMove = ({ touches }: TouchEvent) => {
    const numTouches = touches.length;
    const newPoints: Point2D[] = [];

    for (let i = 0; i < numTouches; i++) {
      const thisTouch = touches[i];
      newPoints.push(touchToPoint(thisTouch));
    }

    points = newPoints;
    onFrameUpdate(updatePoint);
  };

  (document.addEventListener as WhatWGAddEventListener)('touchmove', onMove, { passive: !preventDefault });

  return {
    stop: () => {
      cancelOnFrameUpdate(updatePoint);
      document.removeEventListener('touchmove', onMove);
    }
  };
});

export default touch;
