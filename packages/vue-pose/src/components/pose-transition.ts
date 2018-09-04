import Vue from 'vue';
import poserFactory from 'popmotion-pose';
import PoserMap from '../utils/poser-map';
import { PosedComponent } from '../types';

type BeforeTransitionHandler = (el: HTMLElement | SVGElement) => void;
type TransitionHandler = (
  el: HTMLElement | SVGElement,
  done: () => void
) => void;

const setPoserTo = (pose: string): TransitionHandler => (el, done) =>
  PoserMap.get(el)
    .set(pose)
    .then(done);

const initPoser = (
  setPrePose: (pose: string) => void,
  defaultConfig: Object,
  initialPose: string
): BeforeTransitionHandler => el => {
  setPrePose(initialPose);
  if (!PoserMap.has(el)) {
    PoserMap.set(el, poserFactory(el, { ...defaultConfig, initialPose }));
  }
};

const PoseTransition: PosedComponent = Vue.extend({
  props: {
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
  provide() {
    return {
      _poseGetInitialPoseFromParent() {
        return this.prePose;
      }
    };
  },
  created() {
    const { preEnterPose, enterPose, exitPose } = this.$props;
    const { appear } = this.$attrs;

    const defaultConfig = {
      [enterPose]: { opacity: 1, y: 0 },
      [exitPose]: { opacity: 0 },
      [preEnterPose]: { opacity: 0, y: 20 }
    };

    const setPrePose = (pose: string) => (this.prePose = pose);

    this.on = {
      beforeEnter: initPoser(setPrePose, defaultConfig, exitPose),
      beforeLeave: initPoser(setPrePose, defaultConfig, enterPose),
      enter: setPoserTo(enterPose),
      leave: setPoserTo(exitPose)
    };

    if (appear !== undefined) {
      this.on.appear = setPoserTo(enterPose);
      this.on.beforeAppear = initPoser(setPrePose, defaultConfig, preEnterPose);
    }
  },
  render(createElement) {
    return createElement(
      'transition',
      {
        props: { css: false, ...this.$attrs },
        on: this.on
      },
      [this.$slots.default]
    );
  }
});

export default PoseTransition;
