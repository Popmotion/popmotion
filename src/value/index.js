class Value {
  constructor(initialValue) {
    this.current = initialValue;
    this.action = null;
    this.listeners = [];
  }

  update(newValue) {
    this.current = newValue;

    const numListeners = this.listeners.length;
    for (let i = 0; i < numListeners; i++) {
      this.listeners[i](newValue, this);
    }
  }

  get() {
    return this.current;
  }

  getVelocity() {
    return (this.action) ? this.action.getVelocity : 0;
  }

  stop() {
    if (this.action) {
      this.action.stop();
      this.action = null;
    }
  }

  addListener(callback) {
    const listenerIndex = this.listeners.indexOf(callback);
    if (listenerIndex !== -1) {
      this.listeners.push(callback);
    }
    return this;
  }

  removeListener(callback) {
    const listenerIndex = this.listeners.indexOf(callback);
    if (listenerIndex > -1) {
      this.listeners.splice(listenerIndex, 1);
    }
    return this;
  }
}

export default (initialValue) => new Value(initialValue);
