import { cancelOnFrameUpdate, onFrameUpdate } from 'framesync';
import action, { Action } from '../../action';
import { Point2D, PointerProps } from '../pointer/types';
import { WhatWGAddEventListener } from './types';

const touchToPoint = ({ clientX, clientY }: Touch) => ({
  x: clientX,
  y: clientY
});

const points: Point2D[] = [{ x: 0, y: 0 }];
let isTouchDevice = false;
if (typeof document !== 'undefined') {
  const updatePointsLocation = ({ touches }: TouchEvent) => {
    isTouchDevice = true;
    const numTouches = touches.length;
    points.length = 0;

    for (let i = 0; i < numTouches; i++) {
      const thisTouch = touches[i];
      points.push(touchToPoint(thisTouch));
    }
  };

  document.addEventListener('touchstart', updatePointsLocation);
  document.addEventListener('touchmove', updatePointsLocation);
}

const touch = ({ preventDefault = true }: PointerProps = {}): Action => action(({ update }) => {
  const updatePoint = () => update(points);
  const onMove = (e: TouchEvent) => {
    if (preventDefault) e.preventDefault();
    onFrameUpdate(updatePoint);
  };

  (document.addEventListener as WhatWGAddEventListener)('touchmove', onMove, { passive: !preventDefault });
  if (isTouchDevice) onFrameUpdate(updatePoint);

  return {
    stop: () => {
      cancelOnFrameUpdate(updatePoint);
      document.removeEventListener('touchmove', onMove);
    }
  };
});

export default touch;
export const getIsTouchDevice = () => isTouchDevice;
