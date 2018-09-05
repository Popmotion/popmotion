import { DomPopmotionConfig, DomPopmotionPoser } from 'popmotion-pose';
import Vue, { VueConstructor } from 'vue';

export type PosedComponent = VueConstructor<{ [x: string]: any } & Vue>;

export type PropsDefinition = {
  [key: string]: {
    type: any;
    default: any;
  };
};

export type PosedComponentFactory = (
  config: DomPopmotionConfig
) => PosedComponent;

export type PosedComponentFactoryMap = { [key: string]: PosedComponentFactory };

export type PosedComponentFactoryFactory = (
  el: string
) => PosedComponentFactory;

export type ChildRegistration = {
  element: HTMLElement | SVGElement;
  config: DomPopmotionConfig;
  onRegistered: (poser: DomPopmotionPoser) => void;
};
