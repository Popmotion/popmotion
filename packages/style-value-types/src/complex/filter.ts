import { complex } from '.';
import { floatRegex } from '../utils';

/**
 * Properties that should default to 1 or 100%
 */
const maxDefaults = new Set(['brightness', 'contrast', 'saturate', 'opacity']);

function applyDefaultFilter(v: string) {
  let [name, value] = v.slice(0, -1).split('(');

  if (name === 'drop-shadow') {
    return v;
  } else {
    const number = value.match(floatRegex)?.[0] ?? '0';
    const unit = value.replace(number, '');
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number === value) defaultValue *= 100;

    return `${name}(${defaultValue}${unit})`;
  }
}

const functionRegex = /([a-z-]*)\(.*?\)/g;

export const filter = {
  ...complex,
  getAnimatableNone: (v: string) => {
    const functions = v.match(functionRegex) || [];
    return functions.map(applyDefaultFilter).join(' ');
  },
};
