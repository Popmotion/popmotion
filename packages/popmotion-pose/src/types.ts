import { ValueType } from 'style-value-types';
import { Action } from 'popmotion/action';
import { Poser, PoserConfig } from '../../pose-core/src';
import { ValueReaction } from 'popmotion/reactions/value';
import { ColdSubscription } from 'popmotion/action/types';

export type Value = {
  raw: ValueReaction;
  type?: ValueType;
};

export type Transformer = (v: any) => any;

export interface DomPopmotionPoser
  extends Poser<Value, Action, ColdSubscription, DomPopmotionPoser> {
  addChild: (element: Element, config: PoserConfig<Value>) => DomPopmotionPoser;
}

export type Draggable = true | 'x' | 'y';

export type TransitionProps = {
  from: string | number;
  velocity: number;
  to: string | number;
  key: string;
  prevPoseKey: string;
  dimensions: Dimensions;
};

export type Transition = (
  props: TransitionProps & { [key: string]: any }
) => Action | false;

export type PopmotionPoserFactoryConfig = {};

// export type PopmotionPoserConfig = {
//   draggable?: boolean | 'x' | 'y';
//   element: Element;
// } & PoserConfig<ValueReaction, ColdSubscription>;

export type Dimensions = {
  get: (measurement?: BoundingBoxDimension) => BoundingBox | number;
  measurementAsPixels: (
    measurement: BoundingBoxDimension,
    value: string | number,
    type?: ValueType
  ) => number;
  measure: () => void;
  has: () => boolean;
};

export type BoundingBox = { [key in BoundingBoxDimension]: number };

export enum BoundingBoxDimension {
  width = 'width',
  height = 'height',
  left = 'left',
  right = 'right',
  top = 'top',
  bottom = 'bottom'
}
