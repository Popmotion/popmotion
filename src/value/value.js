class Value {
  constructor(current = 0, type) {
    this.type = type;
    this.listeners = [];
    this.numListeners = 0;
    this.action = undefined;

    this.set(current);

    this.onUpdate = this.onUpdate.bind(this);
  }

  set(current) {
    this.current = current;
    this.onUpdate();

    return this;
  }

  getRaw() {
    return this.current;
  }

  get() {
    if (this.type && this.type.output) {
      return this.type.output(this.current);
    } else {
      return this.current;
    }
  }

  onUpdate() {
    for (let i = 0; i < this.numListeners; i++) {
      this.listeners[i](this);
    }

    return this;
  }

  addListener(callback) {
    this.listeners.push(callback);
    this.numListeners++;
    return this;
  }

  removeListener(callback) {
    const listenerIndex = this.listeners.indexOf(callback);
    if (listenerIndex > -1) {
      this.listeners.splice(listenerIndex, 1);
      this.numListeners--;
    }
    return this;
  }
}


function value(current, type) {

}


class ValueGroup {
  constructor(values) {
    this.set(values);
    this.state = {};
  }

  set(values) {
    for (let key in values) {
      this[key] = this[key] ? this[key].set(values[key]) : new Value(values[key]);
      // add listener
    }
  }

  get() {
    for () {
      this.state[key] = value.get();
    }

    return this.state;
  }
}

export default (values) => new ValueGroup(values);


class CompositeValue extends Value {
  constructor(current, type) {




    super(current, type);

    this.valueProps = {};
    this.valueKeys = [];
    this.numValueKeys = 0;

    const valueProps = type.parse(current);

    for (let key in valueProps) {
      const prop = valueProps[key];
      this[key] = new Value(prop, type.childTypes[key])
        .addListener(this.hasUpdated);
      this.valueKeys.push(key);
      this.numValueKeys++;
    }
  }

  get() {
    for (let i = 0; i < this.numValueKeys; i++) {
      const key = this.valueKeys[i];
      const value = this[key];
      this.current[key] = value.get();
    }

    return (this.type && this.type.output) ? this.type.output(this.current) : this.current;
  }

  set(value) {
    const valueProps = this.type.parse(value);

    this.current = value;
    
    for (let key in valueProps) {
      value.set(valueProps[key]);
    }

    return this;
  }
}
