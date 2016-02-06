import Action from './Action';
import { speedPerFrame } from '../inc/calc';
import { isNum } from '../inc/utils';

export default class Physics extends Action {

    constructor(...args) {
        super(...args);
        this.inactiveFrames = 0;
        this.calculatesVelocity = true;
    }

    onUpdate(physics, frameStamp, elapsed) {
        this.hasChanged = false;

        for (let key in this.values) {
            if (this.values.hasOwnProperty(key)) {
                const value = this.values[key];
                const previousValue = value.current;

                // Apply acceleration
                value.velocity += speedPerFrame(value.force, elapsed);

                // Apply friction
                value.velocity *= (1 - value.friction) ** (elapsed / 100);

                // Apply spring
                if (value.spring && isNum(value.to)) {
                    const distanceToTarget = value.to - value.current;
                    value.velocity += distanceToTarget * speedPerFrame(value.spring, elapsed);
                }

                // Apply latest velocity
                value.current += speedPerFrame(value.velocity, elapsed);
                
                // Check if value has changed
                if (value.current !== previousValue || Math.abs(value.velocity) >= value.stopSpeed || (value.spring && value.current !== value.to)) {
                    this.hasChanged = true;
                }
            }
        }
    }

    onFrameEnd() {
        if (this.autoEnd) {
            this.inactiveFrames = this.hasChanged ? 1 : this.inactiveFrames + 1;

            if (this.inactiveFrames >= this.maxInactiveFrames) {
                this.stop();
            }
        }
    }

    /*
        # Get default Simulate props

        @return [object]
    */
    getDefaultProps() {
        return {
            ...super.getDefaultProps(),
            autoEnd: true,
            maxInactiveFrames: 3
        };
    }

    /*
        # Get default Simulate value props

        @return [object]
    */
    getDefaultValue() {
        return {
            ...super.getDefaultValue(),
            force: 0, // [number]: Acceleration to apply to value, in units per second
            bounce: 0, // [number]: Factor to multiply velocity by on bounce
            spring: 0, // [number]: Spring strength during 'string'
            stopSpeed: 0.0001, // [number]: Stop simulation under this speed
            friction: 0 // [number]: Friction to apply per frame, 0-1
        };
    }

    /*
        # Get default Simulate value property name
        ## Set values to this when a `value` is not provided as an object

        @return [string]
    */
    getDefaultValueProp() {
        return 'velocity';
    }
}
