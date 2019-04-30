import { Color } from '../types';
import { color } from './color';
import { number } from './numbers';
import { sanitize } from '../utils';

const floatRegex = /(-)?(\d[\d\.]*)/g;
const colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;

const COLOR_TOKEN = '${c}';
const NUMBER_TOKEN = '${n}';

const convertNumbersToZero = (v: number | Color) => {
  return typeof v === 'number' ? 0 : v;
};

export const complex = {
  test: (v: any) => {
    if (typeof v !== 'string' || !isNaN(v as any)) return false;

    let numValues = 0;
    const foundNumbers = v.match(floatRegex);
    const foundColors = v.match(colorRegex);
    if (foundNumbers) numValues += foundNumbers.length;
    if (foundColors) numValues += foundColors.length;

    return numValues > 0;
  },
  parse: (v: any) => {
    let input = v;
    const parsed = [];

    const foundColors = input.match(colorRegex);
    if (foundColors) {
      // Strip colors from input so they're not picked up by number regex.
      // There's a better way to combine these regex searches, but its beyond my regex skills
      input = input.replace(colorRegex, COLOR_TOKEN);
      parsed.push(...foundColors.map(color.parse));
    }

    const foundNumbers = input.match(floatRegex);
    if (foundNumbers) {
      parsed.push(...foundNumbers.map(number.parse));
    }

    return parsed;
  },
  createTransformer: (prop: string) => {
    let template = prop;
    let token = 0;

    const foundColors = prop.match(colorRegex);
    const numColors = foundColors ? foundColors.length : 0;
    if (foundColors) {
      for (let i = 0; i < numColors; i++) {
        template = template.replace(foundColors[i], COLOR_TOKEN);
        token++;
      }
    }

    const foundNumbers = template.match(floatRegex);
    const numNumbers = foundNumbers ? foundNumbers.length : 0;
    if (foundNumbers) {
      for (let i = 0; i < numNumbers; i++) {
        template = template.replace(foundNumbers[i], NUMBER_TOKEN);
        token++;
      }
    }

    return (v: Array<Color | number>) => {
      let output = template;

      for (let i = 0; i < token; i++) {
        output = output.replace(
          i < numColors ? COLOR_TOKEN : NUMBER_TOKEN,
          i < numColors ? color.transform(v[i]) : sanitize(v[i] as number)
        );
      }

      return output;
    };
  },
  // Strategy here is to keep colors the same as the target to prevent
  // weird color transitions but make all numbers `0`
  getAnimatableNone: (target: string) => {
    const parsedTarget = complex.parse(target);
    const targetTransformer = complex.createTransformer(target);
    return targetTransformer(parsedTarget.map(convertNumbersToZero));
  }
};
