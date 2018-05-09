import { ValueType } from 'style-value-types';
import { Action } from 'popmotion/action';
import { Poser, PoserConfig } from 'pose-core';
import { ValueReaction } from 'popmotion/reactions/value';
import { ColdSubscription } from 'popmotion/action/types';
import {
  Pose,
  PoseMap,
  PoserState,
  ExtendAPI,
  TransformPose
} from 'pose-core/lib/types';
import { Styler } from 'stylefire';

export type Value = {
  raw: ValueReaction;
  type?: ValueType;
};

export type Pose = Pose<Action>;
export type PoseMap = PoseMap<Action>;

export type PoserState = PoserState<
  Value,
  Action,
  ColdSubscription,
  DomPopmotionPoser
>;

export type Transformer = (v: any) => any;

export interface DomPopmotionPoser
  extends Poser<Value, Action, ColdSubscription, DomPopmotionPoser> {
  addChild: (element: Element, config: PoserConfig<Value>) => DomPopmotionPoser;
}

export type DomPopmotionConfig = {
  onDragStart?: (e: MouseEvent | TouchEvent) => any;
  onDragEnd?: (e: MouseEvent | TouchEvent) => any;
  draggable?: boolean;
  dragBounds?: BoundingBox;
  props?: { [key: string]: any };
  [key: string]: any;
};

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

export type PopmotionPoserFactoryConfig<P> = {
  extendAPI: ExtendAPI<Value, Action, ColdSubscription, P>;
  transformPose: TransformPose<Value, Action, ColdSubscription, P>;
  addListenerToValue: (key: string, styler: Styler) => (v: any) => void;
};

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
