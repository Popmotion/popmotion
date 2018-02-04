import action from '../../action';
import { EventListener, ListenFactory } from './types';

const listen: ListenFactory = (element, events, options) => action(({ update }) => {
  const eventNames = events.split(' ').map((eventName: string) => {
    (element.addEventListener as EventListener)(eventName, update, options);
    return eventName;
  });

  return {
    stop: () => eventNames.forEach((eventName) => (element.removeEventListener as EventListener)(eventName, update, options))
  };
});

export default listen;
