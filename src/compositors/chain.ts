const chain = (...actions) => action(({ update, complete }) => {
  let i = 0;

  const playCurrent = () => {
    actions[i].start({
      update,
      complete: () => {
        i++;
        (i >= actions.length) ? complete() : playCurrent();
      }
    });
  };

  return {
    stop: () => actions[i].stop()
  };
});

export default chain;

chain(
  tween(),
  physics()
).start()
