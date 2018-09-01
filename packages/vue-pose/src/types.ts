import { DomPopmotionConfig } from 'popmotion-pose/lib/types';
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
