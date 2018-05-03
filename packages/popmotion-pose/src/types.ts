import { ValueType } from 'style-value-types';
import { PoserConfig } from '../../pose-core/src';
import { ValueReaction } from 'popmotion/reactions/value';
import { ColdSubscription } from 'popmotion/action/types';

export type Value = {
  raw: ValueReaction;
  type: ValueType;
};

// export type PopmotionPoserConfig = {
//   draggable?: boolean | 'x' | 'y';
//   element: Element;
// } & PoserConfig<ValueReaction, ColdSubscription>;

// export type Dimensions = {
//   get: (measurement?: BoundingBoxDimension) => BoundingBox | number;
//   measurementAsPixels: (
//     measurement: BoundingBoxDimension,
//     value: string | number,
//     type?: ValueType
//   ) => number;
//   measure: () => void;
//   has: () => boolean;
// };

// export type BoundingBox = { [key in BoundingBoxDimension]: number };

// export enum BoundingBoxDimension {
//   width = 'width',
//   height = 'height',
//   left = 'left',
//   right = 'right',
//   top = 'top',
//   bottom = 'bottom'
// }
