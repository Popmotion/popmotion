import { cancelOnFrameUpdate, onFrameUpdate } from 'framesync';
import action, { Action } from '../../action';
import { Point2D, PointerProps } from './types';

const point: Point2D = { x: 0, y: 0 };
let isMouseDevice = false;
if (typeof document !== 'undefined') {
  const updatePointLocation = (e: MouseEvent) => {
    isMouseDevice = true;
    point.x = e.clientX;
    point.y = e.clientY;
  };

  document.addEventListener('mousedown', updatePointLocation);
  document.addEventListener('mousemove', updatePointLocation);
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
