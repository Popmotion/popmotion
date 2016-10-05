class Value {
  constructor(initialValue) {
    this.current = initialValue;
    this.action = null;
  }

  update(newValue) {
    this.current = newValue;

    if (this.listeners) {
      const numListeners = this.listeners.length;
      for (let i = 0; i < numListeners; i++) {
        this.listeners[i](newValue, this);
      }
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
    if (!this.listeners) {
      this.listeners = [];
    }

    const listenerIndex = this.listeners.indexOf(callback);
    if (listenerIndex === -1) {
      this.listeners.push(callback);
    }

    return this;
  }

  removeListener(callback) {
    if (this.listeners) {
      const listenerIndex = this.listeners.indexOf(callback);
      if (listenerIndex > -1) {
        this.listeners.splice(listenerIndex, 1);
      }
    }

    return this;
  }
}

export default (initialValue) => new Value(initialValue);
