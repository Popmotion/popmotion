import Vue from 'vue';
import poserFactory from 'popmotion-pose';
import PoserMap from '../utils/poser-map';
import { PosedComponent } from '../types';

type TransitionHandler = (
  el: HTMLElement | SVGElement,
  done: () => void
) => void;

const setPoserTo = (
  fromPose: string,
  toPose: string,
  defaultConfig: Object,
  that: Vue
): TransitionHandler => (el, done) => {
  if (!PoserMap.has(el)) {
    PoserMap.set(
      el,
      poserFactory(el, { ...defaultConfig, initialPose: fromPose })
    );
  }

  PoserMap.get(el)
    .set(toPose)
    .then(function(){
      that.$emit('poseComplete', toPose);
      done();
    });
};

const initPoser = (
  setPrePose: (pose: string) => void,
  initialPose: string
) => () => setPrePose(initialPose);

const PoseTransition: PosedComponent = Vue.extend({
  props: {
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
    const parent = this;

    return {
      _poseGetInitialPoseFromParent() {
        return parent.prePose;
      },
      _poseDestroyOnUnmount: false
    };
  },
  created() {
    const { enterPose, exitPose } = this.$props;
    const { appear } = this.$attrs;

    const defaultConfig = {
      [enterPose]: { opacity: 1 },
      [exitPose]: { opacity: 0 }
    };

    const setPrePose = (pose: string) => (this.prePose = pose);

    this.on = {
      beforeEnter: initPoser(setPrePose, exitPose),
      beforeLeave: initPoser(setPrePose, enterPose),
      enter: setPoserTo(exitPose, enterPose, defaultConfig, this),
      leave: setPoserTo(enterPose, exitPose, defaultConfig, this)
    };

    if (appear !== undefined) {
      this.on.appear = setPoserTo(exitPose, enterPose, defaultConfig, this);
      this.on.beforeAppear = initPoser(setPrePose, exitPose);
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
