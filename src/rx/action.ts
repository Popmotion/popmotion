import { pipe } from '../inc/transformers';

const action = (init, updatePipe) => ({
  start: function (observerCandidate) {
    const observer = (typeof observerCandidate === 'function')
      ? { update: observerCandidate }
      : observerCandidate;

    if (updatePipe) {
      observer.update = (v) => observer.update(updatePipe(v));
    }

    const api = init(observer);

    return api;
  },
  bind: function (observer) {
    return {
      start: () => this.start(observer)
    };
  },
  pipe: function (...funcs) {
    return action(init, pipe(funcs));
  }
});

export default action;


const tween = ({ from, to, duration, ease }) => action(({ update, complete }) => {

});
