import sync, { cancelSync } from 'framesync';
import action, { Action } from '../../action';
import listen from '../listen';
import { defaultPointerPos, eventToPoint } from '../pointer/utils';
import { PointerPoint, PointerProps } from './types';

const point: PointerPoint = defaultPointerPos();
let isMouseDevice = false;

if (typeof document !== 'undefined') {
  const updatePointLocation = (e: MouseEvent) => {
    isMouseDevice = true;
    eventToPoint(e, point);
  };

  listen(document, 'mousedown mousemove', true).start(updatePointLocation);
}

const mouse = ({ preventDefault = true }: PointerProps = {}): Action =>
  action(({ update }) => {
    const updatePoint = () => update(point);

    const onMove = (e: MouseEvent) => {
      if (preventDefault) e.preventDefault();
      sync.update(updatePoint);
    };

    const updateOnMove = listen(document, 'mousemove').start(onMove);

    if (isMouseDevice) sync.update(updatePoint);

    return {
      stop: () => {
        cancelSync.update(updatePoint);
        updateOnMove.stop();
      }
    };
  });

export default mouse;
