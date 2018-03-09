
import { buildStyles } from 'stylefire';
import { transform } from 'popmotion';
const { pipe } = transform;

// Consider mapping to stylefire
const cssAliasMap = {
  x: 'translateX',
  y: 'translateY',
  z: 'translateZ',
  originX: 'transformOriginX',
  originY: 'transformOriginY'
};

const nextCharToUppercase = m => m[1].toUpperCase();
const dashToCamel = str => str.replace(/-([a-z])/g, nextCharToUppercase);

const addRule = (map, rule) => {
  const [key, value] = rule.split(':');
  map[dashToCamel(key)] = value.trim();
  return map;
};

const cssStringToObject = css => css
  .split(';')
  .filter(Boolean)
  .reduce(addRule, {});

const mapAliased = css => {
  const aliased = {};
  const keys = Object.keys(css);
  const numKeys = keys.length;
  for (let i = 0; i < numKeys; i++) {
    const key = keys[i];
    const aliasedKey = cssAliasMap[key] ? cssAliasMap[key] : key;
    aliased[aliasedKey] = css[key];
  }
  return aliased;
};

export const posesToStyles = pipe(mapAliased, buildStyles, cssStringToObject);