import * as loop from './loop';

export default class Process {
    /*
        [object]: Properties
        [boolean] (optional): Is Process lazy?
    */
    constructor(props, isLazy) {
        this.id = loop.getProcessId();

        this._onCleanup = () => {
            this.stop();
            this.onCleanup = undefined;
        };

        this._onActivate = () => this.onCleanup = this._onCleanup;

        this.set(this.getDefaultProps());
        this.set(props);

        this.isLazy = isLazy || false;
        this.isActive = false;
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

        this.onCleanup = this.onActivate = undefined;

        // Public `onStart`
        if (this.onStart) {
            this.onStart(this);
        }

        // Private `onStart`
        if (this._onStart) {
            this._onStart(this);
        }

        return this;
    }

    stop() {
        loop.deactivate(this.id);

        // Public `onStop`
        if (this.onStop) {
            this.onStop(this);
        }

        // Private `onStop`
        if (this._onStop) {
            this._onStop(this);
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