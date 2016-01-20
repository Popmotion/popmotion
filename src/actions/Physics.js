import Action from './Action';
import { speedPerFrame, speedPerSecond } from '../inc/calc';
import { each, isNum } from '../inc/utils';

export default class Physics extends Action {

    constructor(...args) {
        super(...args);
        this.inactiveFrames = 0;
    }

    update(physics, frameStamp, elapsed) {
        this.hasChanged = false;

        each(this.values, (value, key) => {
            const previousValue = value.current;

            // Apply acceleration
            value.velocity += speedPerFrame(value.force, elapsed);

            // Apply friction
            value.velocity *= (1 - value.friction) ** (elapsed / 10);

            // Apply spring
            if (value.spring && isNum(value.to)) {
                const distanceToTarget = value.to - value.current;
                value.velocity += distanceToTarget * speedPerFrame(value.spring, elapsed);
            }

            // Apply latest velocity
            value.current += speedPerFrame(value.velocity, elapsed);
            
            // Check if value has changed
            if (value.current !== previousValue || Math.abs(value.velocity) >= value.stopSpeed) {
                this.hasChanged = true;
            }
        });
    }

    frameEnd() {
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
