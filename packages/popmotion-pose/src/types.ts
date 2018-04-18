import { ValueType } from 'style-value-types';
import { PoserConfig } from '../../pose-core/src';
import { ColdSubscription } from 'popmotion/action/types';
import { HotSubscription } from 'popmotion/reactions/types';

export type PopmotionPoserConfig = {
  draggable: boolean | 'x' | 'y';
  element: Element;
} & PoserConfig<ColdSubscription, HotSubscription>;

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
