import createValue, { Value } from './';
import { isNum, isString } from '../inc/utils';

const getChildCurrent = (child) => child.get();
const getChildVelocity = (child) => child.getVelocity();
const stopChild = (child) => child.stop();

class CompositeValue extends Value {
  constructor(values, types) {
    super();
    this.types = types;
    this.current = {};
    this.velocity = {};
    this.children = [];
    this.update(values);
  }

  update(values) {
    for (let key in values) {
      const value = values[key];

      if (!this.hasOwnProperty(key)) {
        this.createChild(key, value);
      } else {
        this[key].update(values[key]);
      }

      this.current[key] = this[key].get();
    }

    this.__fireListeners();
  }

  createChild(key, value) {
    if (isNum(value)) {
      const type = this.types[key];
      this[key] = createValue(value, type);
    } else if (isString(value)) {
      // Auto detect type?
    } else {
      this[key] = value;
    }

    this.children.push(key);
  }

  eachChild(func, acc = {}) {
    const numChildren = this.children.length;
    for (let i = 0; i < numChildren; i++) {
      const childKey = this.children[i];
      acc[childKey] = func(this[childKey]);
    }
    return acc;
  }

  get() {
    return this.eachChild(getChildCurrent, this.current);
  }

  getVelocity() {
    return this.eachChild(getChildVelocity, this.velocity);
  }

  stop() {
    this.eachChild(stopChild);
    return this;
  }
}

export default (values, types) => new CompositeValue(values, types);
