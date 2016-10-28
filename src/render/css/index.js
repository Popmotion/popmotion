import Render from '../';
import compositeValue from '../../value/composite-value';
import { onFrameRender } from '../../framesync';
import createRenderer from './render';
import types from './value-types';

export default (element, values, disableHardwareAcceleration) => {
  const renderer = createRenderer(element, disableHardwareAcceleration);
  
  const groupedValues = compositeValue(values, types)
    .addListener((v) => {
      onFrameRender(() => renderer(v));
    });

  groupedValues.__fireListeners();

  return groupedValues;
};
