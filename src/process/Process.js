import { each } from '../inc/utils';
import * as loop from './loop';

export default class Process {
    /*
        [object]: Properties
        [boolean] (optional): Is Process lazy?
    */
    constructor(props, isLazy) {
        this.set(this.getDefaultProps());
        this.set(props);

        this.isLazy = isLazy || false;
        this.id = loop.getProcessId();
        this.isActive = false;
        this._onCleanup = () => {
            this.stop();
            this.onCleanup = undefined;
        };
        this._onActivate = () => this.onCleanup = this._onCleanup;
    }

    set(props) {
        each(props, (value, key) => this[key] = value);
        return this;
    }

    start() {
        this.isActive = true;
        loop.activate(this.id, this);

        this.onCleanup = this.onActivate = undefined;

        if (this.onStart) {
            this.onStart(this);
        }

        return this;
    }

    stop() {
        this.isActive = false;
        loop.deactivate(this.id);

        if (this.onStop) {
            this.onStop(this);
        }

        return this;
    }

    once() {
        this.start();
        this.onActivate = this._onActivate;
        return this;
    }

    /*
        # Get default Action properties

        @return [object]
    */
    getDefaultProps() {
        return {};
    }

    /*
        # Extend this Process with new properties
        ## Returns new instance of this Process's `prototype` with existing and new properties

        @param [object] (optional)
        @return [Process]
    */
    inherit(props) {
        const { id, ...inheritedProps } = this;
        const newProcess = new this.constructor(inheritedProps);
        return newProcess.set(props);
    }
}