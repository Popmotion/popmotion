import Vue from 'vue';
import pose from 'popmotion-pose';
import supportedElements from './utils/supported-elements';
import {
  PosedComponentFactoryMap,
  PosedComponentFactoryFactory,
  PropsDefinition
} from './types';

const props: PropsDefinition = {
  pose: {
    type: String,
    default: 'init'
  }
};

const watch = {
  pose(newPose: string, prevPose: string) {
    if (newPose !== prevPose) {
      this.poser.set(newPose);
    }
  }
};

function destroyed() {
  this.poser.destroy();
}

const createPosedComponentFactory: PosedComponentFactoryFactory = el => (
  config = {}
) =>
  Vue.extend({
    props,
    mounted() {
      this.poser = pose(this.$el, {
        ...config,
        initialPose: this.$props.pose
      });
    },
    watch,
    destroyed,
    template: `<${el}><slot /><${el}/>`
  });

const posed: PosedComponentFactoryMap = supportedElements.reduce(
  (acc: PosedComponentFactoryMap, el) => {
    acc[el] = createPosedComponentFactory(el);

    return acc;
  },
  {}
);

export default posed;
