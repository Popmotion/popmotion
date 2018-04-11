import { Action } from 'popmotion/action';
import { ColdSubscription } from 'popmotion/action/types';
import { ValueReaction } from 'popmotion/reactions/value';
import { ValueType } from 'style-value-types';
import { Styler } from 'stylefire';
import { HotSubscription } from 'popmotion/reactions/types';

export type NumberPropFactory = (props: PoseSetterProps) => number;
export type BooleanPropFactory = (props: PoseSetterProps) => boolean;
export type StaggerDirectionPropFactory = (props: PoseSetterProps) => 1 | -1;

export type Pose = {
  transition?: Transition;
  delay?: number | NumberPropFactory;
  delayChildren?: number | NumberPropFactory;
  staggerChildren?: number | NumberPropFactory;
  staggerDirection?: 1 | -1 | StaggerDirectionPropFactory;
  beforeChildren?: boolean | BooleanPropFactory;
  afterChildren?: boolean | BooleanPropFactory;
  [key: string]: any;
};

export type StateMap = {
  [key: string]: any;
};

export interface Poser {
  set: (poseName: string, props?: PoseSetterProps) => Promise<any>;
  setTransitionProps: (props: PoseSetterProps) => PoseSetterProps;
  has: (poseName: string) => boolean;
  get: () => StateMap;
  measure: () => void;
  flip: (op?: Function) => Promise<any>;
  addChild: (element: Element, props: PoserProps) => Poser;
  removeChild: (poser: Poser) => void;
  clearChildren: () => void;
  destroy: () => void;
  subscribe: (key: string, onChange: Function) => HotSubscription | false;
}

export type PoserFactory = (element: Element, props: PoserProps) => Poser;

export type PoseMap = {
  [key: string]: Pose;
};

export type Transformer = (v: any) => any;

export type PassiveMap = {
  [key: string]: [string, Transformer, boolean | string | undefined];
};

export type OnChangeMap = {
  [key: string]: Transformer;
};

export type Bounds2D = {
  [key: string]: number;
};

export interface Dimensions {
  get: (measurement?: BoundingBoxDimension) => BoundingBox | number;
  measurementAsPixels: (
    measurement: BoundingBoxDimension,
    value: string | number,
    type?: ValueType
  ) => number;
  measure: () => void;
  has: () => boolean;
}

export type Draggable = boolean | 'x' | 'y';

export type PointerCallback = (e: MouseEvent | TouchEvent) => any;

export type PoserProps = {
  initialPose?: string | string[];
  passive?: PassiveMap;
  onChange?: OnChangeMap;
  ancestorValues?: AncestorValue[];
  label?: string;
  draggable?: Draggable;
  transitionProps?: PoseSetterProps;
  values?: { [key: string]: ValueReaction };
} & DragProps & { [key: string]: any };

export type RawValue = string | number;

export type TransitionProps = {
  from: RawValue;
  velocity: RawValue;
  to: RawValue;
  key: string;
  prevPoseKey: string;
  dimensions: Dimensions;
};

export type Transition = (
  props: TransitionProps & PoseSetterProps
) => Action | false;

export type AncestorValue = { label: string; values: ValueMap };
export type ValueMap = Map<string, ValueReaction>;
export type TypesMap = Map<string, ValueType>;

export type ValuesFactoryProps = {
  poses: PoseMap;
  styler: Styler;
  initialPose: string | string[];
  passive: PassiveMap;
  ancestorValues: AncestorValue[];
  userSetValues?: { [key: string]: ValueReaction };
  onChange: OnChangeMap;
  getTransitionProps: () => PoseSetterProps;
};

export type ValuesAndTypes = {
  values: ValueMap;
  types: TypesMap;
};

export type PoseSetterFactoryProps = {
  activeActions: ActiveActions;
  activePoses: ActivePoses;
  children: ChildPoses;
  dragProps: DragProps;
  values: ValueMap;
  types: TypesMap;
  poses: PoseMap;
  elementStyler: Styler;
  element: Element;
  dimensions: Dimensions;
  getTransitionProps: () => PoseSetterProps;
  flipEnabled: boolean;
};

export type PoseSetterProps = {
  [key: string]: any;
  delay?: number;
};

export type PoseSetter = (
  next: string,
  props?: PoseSetterProps
) => Promise<any>;

export type ActiveActions = Map<string, ColdSubscription>;
export type ActivePoses = Map<string, string>;

export type ChildPoses = Set<Poser>;

export type DragProps = {
  dragBounds?: Bounds2D;
  onDragStart?: PointerCallback;
  onDragEnd?: PointerCallback;
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
