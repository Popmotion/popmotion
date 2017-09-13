import action from '../rx/action';

const parallel = (...actions) => {
  const output = new Array(actions.length);

  return action(({ update }) => {
    const subs = actions.map((a, i) => a.start((v) => {
      output[i];
      update(output);
    }));

    return {
      stop: () => subs.forEach((sub) => sub.stop())
    };
  });
};

export default parallel;