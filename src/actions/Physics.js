import Action from './Action';
import { speedPerFrame } from '../inc/calc';
import { isNum } from '../inc/utils';

class Physics extends Action {
  constructor(...args) {
    super(...args);
    this.inactiveFrames = 0;
    this.calculatesVelocity = true;
  }

  onUpdate(physics, frameStamp, elapsed) {
    this.hasChanged = false;

    for (let i = 0; i < this.numValueKeys; i++) {
      const key = this.valueKeys[i];
      const value = this.values[key];
      const previousValue = value.prev;

      // Apply acceleration
      value.velocity += speedPerFrame(value.acceleration, elapsed);

      // Apply friction
      value.velocity *= (1 - value.friction) ** (elapsed / 100);

      // Apply spring
      if (value.spring && isNum(value.to)) {
        const distanceToTarget = value.to - value.current;
        value.velocity += distanceToTarget * speedPerFrame(value.spring, elapsed);
      }

      // Apply latest velocity
      value.current += speedPerFrame(value.velocity, elapsed);

      // Detect bounce
      if ((value.min !== undefined && value.current < value.min) || (value.max !== undefined && value.current > value.max)) {
        value.velocity *= - value.bounce;
      }
      
      // Check if value has changed
      if (value.current !== previousValue || Math.abs(value.velocity) >= value.stopSpeed || (value.spring && value.current !== value.to)) {
        this.hasChanged = true;
      }
    }
  }

  onFrameEnd() {
    if (this.maxInactiveFrames !== Infinity) {
      this.inactiveFrames = this.hasChanged ? 1 : this.inactiveFrames + 1;

      if (this.inactiveFrames >= this.maxInactiveFrames) {
        this.complete();
      }
    }
  }
}

Physics.prototype.defaultValueProp = 'velocity';
Physics.prototype.defaultValue = Action.extendDefaultValue({
  acceleration: 0, // [number]: Acceleration to apply to value, in units per second
  bounce: 0, // [number]: Factor to multiply velocity by on bounce
  spring: 0, // [number]: Spring strength during 'string'
  stopSpeed: 0.001, // [number]: Stop simulation under this speed
  friction: 0 // [number]: Friction to apply per frame, 0-1
});
Physics.prototype.defaultProps = Action.extendDefaultProps({
  maxInactiveFrames: 3
});

export default Physics;
