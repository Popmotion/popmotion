export class Value {
  constructor(initialValue, type) {
    this.current = initialValue;
    this.type = type;
    this.action = null;
  }

  update(newValue) {
    this.current = newValue;
    this.__fireListeners();
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

    return this;
  }

  registerAction(action) {
    if (this.action) {
      this.action.stop();
    }

    this.action = action;

    // Potential todo: Check if source action is this.action
    return (v) => this.update(v);
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

  __fireListeners() {
    if (this.listeners) {
      const numListeners = this.listeners.length;
      for (let i = 0; i < numListeners; i++) {
        this.listeners[i](this.current, this);
      }
    }
  }
}

export default (initialValue) => new Value(initialValue);
