import action from '../action';
import listenerManager from './listener-manager';

import { PointerProps, Point2D } from './types';

let point: Point2D = { x: 0, y: 0 };

const mouseEvents = listenerManager({
  onEvent: (e: MouseEvent) => {
    point = {
      x: e.clientX,
      y: e.clientY
    };
  },
  onListenersEmpty: (listener: EventListener) =>
    document.documentElement.removeEventListener('mousemove', listener),
  onFirstListener: (listener: EventListener) =>
    document.documentElement.addEventListener('mousemove', listener)
});

const mouse = ({ preventDefault = true }: PointerProps = {}) => action(({ update }) => {
  const updatePoint = () => update(point);
  mouseEvents.add(updatePoint);

  return {
    stop: () => mouseEvents.remove(updatePoint)
  };
});

export default mouse;