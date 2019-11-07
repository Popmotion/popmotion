import { ValueType } from 'style-value-types';
import {
  Action,
  ValueReaction,
  ColdSubscription,
  TweenProps,
  PhysicsProps,
  SpringProps,
  DecayProps,
  KeyframesProps
} from 'popmotion';
import { Poser, PoserConfig } from 'pose-core';
import {
  Pose as PoseCore,
  PoseMap as PoseMapCore,
  PoserState as PoserStateCore,
  ExtendAPI,
  TransformPose,
  ReadValueFromSource
} from 'pose-core';
import { Styler } from 'stylefire';
import { Merge } from 'ts-essentials';
import { easingLookup } from './inc/lookups';

export type Value = {
  raw: ValueReaction;
  type?: ValueType;
};

export type Pose = PoseCore<Action, TransitionDefinition>;
export type PoseMap = PoseMapCore<Action, TransitionDefinition>;

export type PoserState = PoserStateCore<
  Value,
  Action,
  ColdSubscription,
  DomPopmotionPoser
>;

export type Transformer = (v: any) => any;

export type TransitionProps = {
  from: string | number;
  velocity: number;
  to: string | number;
  key: string;
  prevPoseKey: string;
  dimensions: Dimensions;
};

export type ResolverProps = TransitionProps & { [key: string]: any };

export type Transition = (props: ResolverProps) => Action | false;

export interface DomPopmotionPoser
  extends Poser<Value, Action, ColdSubscription, DomPopmotionPoser> {
  addChild: (element: Element, config: PoserConfig<Value>) => DomPopmotionPoser;
  flip: (op: Function) => Promise<any>;
  measure: () => BoundingBox;
}

export type DragBounds = { [key in BoundingBoxDimension]?: number | string };

export type DomPopmotionConfig = {
  onDragStart?: (e: MouseEvent | TouchEvent) => any;
  onDragEnd?: (e: MouseEvent | TouchEvent) => any;
  onPressStart?: (e: MouseEvent | TouchEvent) => any;
  onPressEnd?: (e: MouseEvent | TouchEvent) => any;
  draggable?: Draggable;
  hoverable?: boolean;
  dragBounds?: DragBounds | ((props: ResolverProps) => DragBounds);
  props?: { [key: string]: any };
  [key: string]: any;
};

export type Draggable = boolean | 'x' | 'y';

export type PopmotionPoserFactoryConfig<P, TD> = {
  extendAPI: ExtendAPI<Value, Action, ColdSubscription, P>;
  transformPose: TransformPose<Value, Action, ColdSubscription, P, TD>;
  addListenerToValue: (key: string, styler: Styler) => (v: any) => void;
  readValueFromSource?: ReadValueFromSource;
  posePriority?: string[];
  setValueNative: (
    key: string,
    to: any,
    props: { elementStyler: Styler }
  ) => void;
  forceRender: (props: { elementStyler: Styler }) => void;
};

export type Dimensions = {
  get: (measurement?: BoundingBoxDimension) => BoundingBox | number;
  measurementAsPixels: (
    measurement: BoundingBoxDimension,
    value: string | number,
    type?: ValueType
  ) => number;
  measure: () => BoundingBox;
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

// it's needed in order to destructure `ease` property in `getAction`
type NoEase = { ease?: undefined };

export type CubicBezierArgs = [number, number, number, number];

type TransitionDefinitionCommonProps = {
  delay?: number;
  min?: number;
  max?: number;
  round?: boolean;
};

export type DecayDefinition = {
  type: 'decay';
} & TransitionDefinitionCommonProps &
  DecayProps &
  NoEase;
export type KeyframesDefinition = {
  type: 'keyframes';
} & TransitionDefinitionCommonProps &
  KeyframesProps;
export type PhysicsDefinition = {
  type: 'physics';
} & TransitionDefinitionCommonProps &
  PhysicsProps &
  NoEase;
export type SpringDefinition = {
  type: 'spring';
} & TransitionDefinitionCommonProps &
  SpringProps &
  NoEase;
export type TweenDefinition = Merge<
  { type: 'tween' } & TransitionDefinitionCommonProps & TweenProps,
  {
    ease: TweenProps['ease'] | keyof typeof easingLookup | CubicBezierArgs;
  }
>;

export type TransitionDefinition =
  | TweenDefinition
  | PhysicsDefinition
  | SpringDefinition
  | DecayDefinition
  | KeyframesDefinition;

/**
 * @deprecated Use TransitionDefinition
 */
export type AnimationDef = TransitionDefinition;
