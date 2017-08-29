import { onFrameRender } from 'framesync';
import { isArray, isObj, isNum, isString } from '../inc/utils';

class Renderer {
  constructor(props) {
    this.render = this.render.bind(this);

    this.props = {
      ...this.constructor.defaultProps,
      ...props
    };

    this.state = {};
    this.changedValues = [];
  }

  /**
   * Get current state.
   * If `key` is not defined, return entire cached state.
   * If `key` is defined, return cached value if present.
   * If `key` is defined and cached value is not present, read and return.
   * @param  {string} (optional) key of value
   * @return {value}
   */
  get(key) {
    if (key) {
      if (this.state[key] !== undefined) {
        return this.state[key];
      } else {
        return this.read(key);
      }
    } else {
      return this.state;
    }
  }

  /**
   * Read value according to `onRead`
   * @param  {string} Name of property to read
   * @return {[type]}
   */
  read(key) {
    if (this.onRead) {
      return this.onRead(key);
    }
  }

  /**
   * Update `state` with new values and schedule `render`.
   * @param {object} values
   * @param {value} value toset
   */
  set(...args) {
    if (typeof args[1] === 'undefined') {
      const [ values ] = args;
      // Set multiple values
      for (const key in values) {
        this.setValue(key, values[key]);
      }
    } else {
      const [ key, value ] = args;
      this.setValue(key, value);
    }

    if (this.hasChanged) {
      onFrameRender(this.render);
    }

    return this;
  }

  // > Wiley - 6 in the Morning
  /**
   * Set a single value
   * If a string or number, set directly.
   * If an object or array, create new object or array
   * if it doesn't already exist. Then shallow compare
   * to set and compare individual values.
   * One of the clearer drawbacks and annoyances with
   * using mutable instead of immutable states.
   * @param {[type]} key
   * @param {[type]} value
   */
  setValue(key, value) {
    const currentValue = this.state[key];

    // If number or string, set directly
    if (isNum(value) || isString(value)) {
      if (currentValue !== value) {
        this.state[key] = value;
        this.hasChanged = true;
      }
    } else if (isArray(value)) {
      if (!currentValue) {
        this.state[key] = [];
      }

      const numValues = value.length;
      for (let i = 0; i < numValues; i++) {
        if (this.state[key][i] !== value[i]) {
          this.state[key][i] = value[i];
          this.hasChanged = true;
        }
      }
    } else if (isObj(value)) {
      if (!currentValue) {
        this.state[key] = {};
      }

      for (let valueKey in value) {
        if (this.state[key][valueKey] !== value[valueKey]) {
          this.state[key][valueKey] = value[valueKey];
          this.hasChanged = true;
        }
      }
    }

    if (this.hasChanged && this.changedValues.indexOf(key) === -1) {
      this.changedValues.push(key);
    }
  }

  /**
   * Fires `onRender` if values have changed or `forceRender`
   * is set to true.
   * @return {this}
   */
  render(forceRender = false) {
    if ((forceRender || this.hasChanged) && this.onRender) {
      this.onRender();
    }

    this.changedValues.length = 0;
    this.hasChanged = false;

    return this;
  }
}

export default Renderer;
