import { Dimensions } from 'react-native';
import { DimensionConverterFactory, UnitConverterMap } from '../types';

export const getUnit = (str: string): string =>
  str.replace(str.match(/\d+/)[0], '').replace('-', '');

const dimensionConverter: DimensionConverterFactory = (viewport, axis) => (
  target: number
) => target / 100 * Dimensions.get(viewport)[axis];

export const unitConverters: UnitConverterMap = {
  vh: dimensionConverter('window', 'height'),
  vw: dimensionConverter('window', 'width'),
  sh: dimensionConverter('screen', 'height'),
  sw: dimensionConverter('screen', 'width')
};

export const convertUnitToPoints = (target: string) => {
  const unit = getUnit(target);
  const num = parseFloat(target);

  return unitConverters[unit] ? unitConverters[unit](num) : num;
};
