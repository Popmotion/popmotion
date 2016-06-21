import Input from './Pointer';

const DEVICE_MOTION = 'devicemotion';

/*
  Scrape x/y coordinates from provided event

  @param [event]
  @return [object]
*/
const eventToPoint = (e) => ({
  x: e.accelerationIncludingGravity.x,
  y: e.accelerationIncludingGravity.y,
  z: e.accelerationIncludingGravity.z,
  yaw: e.alpha,
  pitch: e.beta,
  roll: event.gamma
});

export default class Gyro extends Input {
  constructor() {
    super();
    this.bindEvents();
  }

  latest(e) {
    super.latest(eventToPoint(e));
    e.preventDefault();
  }

  start() {
    super.start();
    document.documentElement.addEventListener(DEVICE_MOTION, this.onMove);
  }

  stop() {
    super.stop();
    document.documentElement.removeEventListener(DEVICE_MOTION, this.onMove);
  }
}