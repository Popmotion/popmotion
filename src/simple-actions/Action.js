class Action {
  start() {

  }

  stop() {

  }

  update() {
    const current = this.current;

    if (this.onUpdate) {
      this.onUpdate(this.input);
    }
  }

  get() {
    if (this.transform) {
      this.current = this.transform(this.current);
    }

    return this.current;
  }
}

Action.defaultProps = {
  current: 0,
  velocity: 0
};

export default Action;
