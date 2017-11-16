import action, { Action } from '../../action';

const listen = (element: Element, events: string): Action => action(({ update }) => {
  const eventNames = events.split(' ').map((eventName: string) => {
    element.addEventListener(eventName, update);
    return eventName;
  });

  return {
    stop: () => eventNames.forEach((eventName) => element.removeEventListener(eventName, update))
  };
});

export default listen;
