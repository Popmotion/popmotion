import { currentTime } from '../inc/utils';

/**
 * Maximum permitted ms since last frame
 * @type {Number}
 */
const MAX_ELAPSED = 20;

export default {
  /**
   * Current framestamp
   * @type {Number}
   */
  current: 0,

  /**
   * Factor to multiply `elapsed` by - 
   * 0.5 would be slow motion, 2 would be fast
   * @type {Number}
   */
  dilation: 1,

  /** @type {Number} Time since last frame */
  elapsed: 0,

  /**
   * Update `elapsed` based on latest framestamp
   * @param  {Number} framestamp
   * @return {void}
   */
  update: function update(framestamp) {
    this.elapsed = Math.max(Math.min(framestamp - this.current, MAX_ELAPSED), 1) * this.dilation;
    this.current = framestamp;
  },

  /**
   * Set base framestamp
   * @return {[type]} [description]
   */
  start: function () {
    this.current = currentTime();
  }
}
