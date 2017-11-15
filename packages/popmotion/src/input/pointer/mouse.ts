import { cancelOnFrameUpdate, onFrameUpdate } from 'framesync';
import action, { Action } from '../../action';
import { defaultPointerPos, eventToPoint } from '../pointer/utils';
import { PointerPoint, PointerProps } from './types';

const point: PointerPoint = defaultPointerPos();
let isMouseDevice = false;

if (typeof document !== 'undefined') {
  const updatePointLocation = (e: MouseEvent) => {
    isMouseDevice = true;
    eventToPoint(e, point);
  };

  document.addEventListener('mousedown', updatePointLocation, true);
  document.addEventListener('mousemove', updatePointLocation, true);
}

const mouse = ({ preventDefault = true }: PointerProps = {}): Action => action(({ update }) => {
  const updatePoint = () => update(point);

  const onMove = (e: MouseEvent) => {
    if (preventDefault) e.preventDefault();
    onFrameUpdate(updatePoint);
  };

  document.addEventListener('mousemove', onMove);

  if (isMouseDevice) onFrameUpdate(updatePoint);

  return {
    stop: () => {
      cancelOnFrameUpdate(updatePoint);
      document.removeEventListener('mousemove', onMove);
    }
  };
});

export default mouse;
