/*
  Kinetic scrolling ala http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
*/
import { Action, utils } from 'popmotion';

const currentTime = utils.currentTime;

class Inertia extends Action {
  start() {
    super.start();
    this.started = currentTime();

    for (let i = 0; i < this.numValueKeys; i++) {
      const value = this.values[this.valueKeys[i]];

      value.targetDistance = value.amp * value.velocity;
      value.to = Math.round(value.current + value.targetDistance);
    }
  }

  onUpdate(i, frameStamp) {
    const totalElapsed = Math.max(frameStamp, this.started) - this.started;

    this.ended = true;

    for (let i = 0; i < this.numValueKeys; i++) {
      const value = this.values[this.valueKeys[i]];
      const delta = - value.targetDistance * Math.exp(- totalElapsed / value.timeConstant);

      if (delta > 0.1 || delta < -0.1) {
        this.ended = false;
        value.current = value.to + delta;
      } else {
        value.current = value.to;
      }
    }
  }

  onFrameEnd() {
    if (this.ended) {
      this.complete();
    }
  }
}

Inertia.prototype.defaultValueProp = 'velocity';
Inertia.prototype.defaultValue = Action.extendDefaultValue({
  amp: 0.8,
  timeConstant: 325
});

export default (props) => new Inertia(props);
