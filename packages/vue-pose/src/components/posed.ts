import Vue from 'vue';
import poseFactory, { DomPopmotionPoser } from 'popmotion-pose';
import { invariant } from 'hey-listen';
import supportedElements from '../utils/supported-elements';
import {
  PosedComponentFactoryMap,
  PosedComponentFactoryFactory,
  PropsDefinition,
  ChildRegistration
} from '../types';
import PoserMap from '../utils/poser-map';

const props: PropsDefinition = {
  pose: {
    type: String,
    default: 'init'
  },
  preEnterPose: {
    type: String,
    default: undefined
  },
  poseKey: {
    type: [String, Number],
    default: undefined
  },
  onValueChange: {
    type: Object,
    default: undefined
  },
  onPoseComplete: {
    type: Function,
    default: undefined
  },
  withParent: {
    type: Boolean,
    default: true
  }
};

const watch = {
  $attrs(newAttrs: any) {
    this.poser.setProps(newAttrs);
  },
  pose(newPose: string, oldPose: string) {
    if (newPose !== oldPose) this.setPose(newPose);
  },
  poseKey(newPoseKey: string | number, oldPoseKey: string | number) {
    if (newPoseKey !== oldPoseKey) this.setPose(this.pose);
  }
};

function destroyed() {
  if (!this.poser || !this._poseDestroyOnUnmount) return;
  if (this._poseOnChildUnmount) this._poseOnChildUnmount(this.poser);
  PoserMap.delete(this.$el);
  this.poser.destroy();
}

const methods = {
  getInitialPose() {
    const { preEnterPose, pose } = this.$props;
    return this._poseGetInitialPoseFromParent
      ? this._poseGetInitialPoseFromParent()
      : preEnterPose || pose;
  },
  getFirstPoseToSet() {
    const { preEnterPose, pose } = this.$props;

    return preEnterPose ? pose : false;
  },
  initPoser(poser: DomPopmotionPoser) {
    this.poser = poser;
    this.flushChildren();

    PoserMap.set(this.$el, poser);

    const firstPose = this.getFirstPoseToSet();
    if (firstPose) this.setPose(firstPose);
  },
  setPose(pose: string) {
    this.poser.set(pose).then(() => this.$emit('poseComplete', pose));
  },
  flushChildren() {
    if (!this.children) return;
    this.children.forEach(
      ({ element, config, onRegistered }: ChildRegistration) => {
        onRegistered(
          this.poser.addChild(element, {
            ...config,
            initialPose: this.getInitialPose()
          })
        );
      }
    );
    this.children.clear();
  },
  getPoserProps() {
    return { ...this.$attrs };
  }
};

function provide() {
  const parent = this;

  return {
    _poseRegisterChild(child: ChildRegistration) {
      parent.children = parent.children || new Set();
      parent.children.add(child);
      if (parent.poser) parent.flushChildren();
    },
    _poseOnChildUnmount(poser: DomPopmotionPoser) {
      parent.poser.removeChild(poser);
    }
  };
}

const inject = {
  _poseRegisterChild: { default: false },
  _poseOnChildUnmount: { default: false },
  _poseGetInitialPoseFromParent: { default: false },
  _poseDestroyOnUnmount: { default: true }
};

const createPosedComponentFactory: PosedComponentFactoryFactory = el => (
  config = {}
) =>
  Vue.extend({
    props,
    provide,
    inject,
    mounted() {
      invariant(typeof this.$el !== 'undefined', `No DOM element found.`);

      const poserConfig = {
        ...config,
        initialPose: this.getInitialPose(),
        onDragStart: this.$listeners['drag-start']
          ? (e: any) => this.$emit('drag-start', e)
          : undefined,
        onDragEnd: this.$listeners['drag-end']
          ? (e: any) => this.$emit('drag-end', e)
          : undefined,
        onPressStart: this.$listeners['press-start']
          ? (e: any) => this.$emit('press-start', e)
          : undefined,
        onPressEnd: this.$listeners['press-end']
          ? (e: any) => this.$emit('press-end', e)
          : undefined,
        onChange: this.$props.onValueChange,
        props: this.getPoserProps()
      };

      // First posed component in tree
      if (!this.$props.withParent || !this._poseRegisterChild) {
        this.initPoser(poseFactory(this.$el, poserConfig));
      } else {
        this._poseRegisterChild({
          element: this.$el,
          config: poserConfig,
          onRegistered: poser => this.initPoser(poser)
        } as ChildRegistration);
      }
    },
    watch,
    methods,
    destroyed,
    render(createElement) {
      return createElement(el, {}, [this.$slots.default]);
    }
  });

const posed: PosedComponentFactoryMap = supportedElements.reduce(
  (acc: PosedComponentFactoryMap, el) => {
    acc[el] = createPosedComponentFactory(el);

    return acc;
  },
  {}
);

export default posed;
