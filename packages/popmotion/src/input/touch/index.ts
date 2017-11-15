import { cancelOnFrameUpdate, onFrameUpdate } from 'framesync';
import action, { Action } from '../../action';
import { PointerPoint, PointerProps } from '../pointer/types';
import { defaultPointerPos, eventToPoint } from '../pointer/utils';
import { WhatWGAddEventListener } from './types';

const points: PointerPoint[] = [defaultPointerPos()];
let isTouchDevice = false;

if (typeof document !== 'undefined') {
  const updatePointsLocation = ({ touches }: TouchEvent) => {
    isTouchDevice = true;
    const numTouches = touches.length;

    // TODO: Optimisation would be to provide existing points to `eventToPoint`
    points.length = 0;

    for (let i = 0; i < numTouches; i++) {
      const thisTouch = touches[i];
      points.push(eventToPoint(thisTouch));
    }
  };

  document.addEventListener('touchstart', updatePointsLocation, true);
  document.addEventListener('touchmove', updatePointsLocation, true);
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
