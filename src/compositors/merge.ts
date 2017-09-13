import action from '../rx/action';

const merge = (...actions) => action(({ update }) => {
  const subs = actions.map((thisAction) => thisAction.start((v: any) => update(v)));
  return {
    stop: () => subs.forEach((sub) => sub.stop())
  };
});

export default merge;