import Vue from 'vue';
import poserFactory from 'popmotion-pose';
import PoserMap from '../utils/poser-map';
import { PosedComponent } from '../types';

const defaultConfig = {
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  preEnter: { opacity: 0, y: 20 },
  initialPose: 'exit'
};

const setPoserTo = (pose: string) => (
  el: HTMLElement | SVGElement,
  done: () => void
) =>
  PoserMap.get(el)
    .set(pose)
    .then(done);

const initPoser = (initialPose: string) => (el: HTMLElement | SVGElement) =>
  !PoserMap.has(el) &&
  PoserMap.set(el, poserFactory(el, { ...defaultConfig, initialPose }));

const PoseTransition: PosedComponent = Vue.extend({
  props: {
    group: {
      type: Boolean,
      default: false
    },
    preEnterPose: {
      type: String,
      default: 'preEnter'
    },
    enterPose: {
      type: String,
      default: 'enter'
    },
    exitPose: {
      type: String,
      default: 'exit'
    }
  },
  render(createElement) {
    const { group, preEnterPose, enterPose, exitPose } = this.$props;

    return createElement(
      group ? 'transition-group' : 'transition',
      {
        props: { css: false, ...this.$attrs },
        on: {
          beforeAppear: this.$attrs.appear
            ? initPoser(preEnterPose)
            : undefined,
          beforeEnter: initPoser(exitPose),
          beforeLeave: initPoser(enterPose),
          appear: this.$attrs.appear ? setPoserTo(enterPose) : undefined,
          enter: setPoserTo(enterPose),
          leave: setPoserTo(exitPose)
        }
      },
      [this.$slots.default]
    );
  }
});

export default PoseTransition;
