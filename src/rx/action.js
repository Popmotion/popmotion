const action = (init) => ({
  start: function (observer) {
    const api = init({
      complete: ,
      update: observer
    });

    return api;
  },
  bind: function (observer) {
    return {
      start: () => this.start(observer)
    };
  },
  pipe: function () {
    return action(init);
  }
});

export default action;


const tween = ({ from, to, duration, ease }) => action(({ update, complete }) => {

});
