/*
  Base Task class for creating a task on the main render loop.
*/
import * as loop from './loop';

function cleanup() {
  this.onCleanup = undefined;
  loop.deactivate(this.id);
}

function activate() {
  this.onCleanup = cleanup;
}

export default class Task {
  constructor(props) {
    this.id = loop.getTaskId();
    this.isActive = false;

    if (this.defaultProps) {
      for (let key in this.defaultProps) {
        if (this.defaultProps.hasOwnProperty(key)) {
          this[key] = this.defaultProps[key];
        }
      }
    }

    this.set(props);
  }

  set(props) {
    for (let key in props) {
      if (props.hasOwnProperty(key)) {
        this[key] = props[key];
      }
    }

    return this;
  }

  start() {
    loop.activate(this.id, this);

    this.onActivateLoop = this.onCleanup = undefined;
    this.isComplete = false;

    if (this.onStart) {
      this.onStart(this);
    }

    return this;
  }

  stop() {
    loop.deactivate(this.id);
    
    if (this.onStop) {
      this.onStop(this);
    }

    return this;
  }

  once() {
    loop.activate(this.id, this);
    this.onCleanup = undefined;
    this.onActivateLoop = activate;

    return this;
  }

  complete() {
    this.stop();

    if (this.onComplete) {
      this.onComplete(this);
    }
  }

  /*
    # Extend this Process with new properties
    ## Returns new instance of this Process's `prototype` with existing and new properties

    @param [object] (optional)
    @return [Process]
  */
  inherit(props) {
    const { id, ...inheritedProps } = this;
    return new this.constructor({ ...inheritedProps, ...props });
  }
}