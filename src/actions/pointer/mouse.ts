import action from '../action';
import { onFrameUpdate, cancelOnFrameUpdate } from 'framesync';
import { PointerProps, Point2D } from './types';

const mouse = ({ preventDefault = true }: PointerProps = {}) => action(({ update }) => {
  let point: Point2D = { x: 0, y: 0 };
  const updatePoint = () => update(point);

  const onMove = (e: MouseEvent) => {
    point.x = e.clientX;
    point.y = e.clientY;
    onFrameUpdate(updatePoint);
  };

  document.documentElement.addEventListener('mousemove', onMove);

  return {
    stop: () => {
      cancelOnFrameUpdate(updatePoint);
      document.removeEventListener('mousemove', onMove);
    }
  };
});

export default mouse;
