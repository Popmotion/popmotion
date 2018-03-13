import action, { Action } from '../action';

const schedule = (scheduler: Action, schedulee: Action) => action(({ update, complete }) => {
  let latest: any;

  const schedulerSub = scheduler.start({
    update: () => latest !== undefined && update(latest),
    complete
  });

  const scheduleeSub = schedulee.start({
    update: (v: any) => latest = v,
    complete
  });

  return {
    stop: () => {
      schedulerSub.stop();
      scheduleeSub.stop();
    }
  };
});

export default schedule;
