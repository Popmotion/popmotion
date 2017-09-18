import { onFrameUpdate } from 'framesync';

type ListenerConifg = {
  onEvent: (e: MouseEvent | TouchEvent) => void,
  onListenersEmpty: (listener: EventListener) => void,
  onFirstListener: (listener: EventListener) => void 
};

const listenerManager = ({ onEvent, onListenersEmpty, onFirstListener }: ListenerConifg) => {
  let listeners = Function[];
  const getNumListeners = () => listeners.length;
  const fireListener = (listener: Function) => listener();

  const eventListener = (e: MouseEvent | TouchEvent) => onFrameUpdate(() => {
    onEvent(e);
    listeners.forEach(fireListener);
  });

  return {
    add: (listener: Function) => {
      listeners.push(listener);
      if (getNumListeners() === 1) onFirstListener(eventListener);
    },
    remove: (listener: Function) => {
      listeners = listeners.filter((thisListener: Function) => thisListener !== listener);
      if (getNumListeners() === 0) onListenersEmpty(eventListener);
    }
  };
};

export default listenerManager;