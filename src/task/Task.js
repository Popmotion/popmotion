/*
    Base Task class for creating a task on the main render loop.
*/
import * as loop from './loop';

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

    _onActivate() {
        this.onCleanup = this._onCleanup;
    }

    _onCleanup() {
        this.onCleanup = undefined;
        loop.deactivate(this.id);
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

        this.onCleanup = this.onActivateOnce = undefined;
        this.isComplete = false;

        if (this.onStart) {
            this.onStart(this);
        }

        return this;
    }

    stop() {
        console.log('test')
        loop.deactivate(this.id);
        
        if (this.onStop) {
            this.onStop(this);
        }

        return this;
    }

    once() {
        loop.activate(this.id, this);
        this.onActivateOnce = this._onActivate;
        this.onCleanup = undefined;
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