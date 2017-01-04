import { camelToDash } from '../../inc/utils';

const camelCache = {};
const dashCache = {};
const prefixes = ['Webkit','Moz','O','ms', ''];
const numPrefixes = prefixes.length;
let testElement;

/*
  Test style property for prefixed version
  
  @param [string]: Style property
  @return [string]: Cached property name
*/
const testPrefix = (key) => {
  testElement = testElement || document.createElement('div');

  for (let i = 0; i < numPrefixes; i++) {
    const prefix = prefixes[i];
    const noPrefix = (prefix === '');
    const prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);

    if (prefixedPropertyName in testElement.style) {
      camelCache[key] = prefixedPropertyName;
      dashCache[key] = `${(noPrefix ? '' : '-')}${camelToDash(prefixedPropertyName)}`;
    }
  }
};

export default (key, asDashCase) => {
  const cache = asDashCase ? dashCache : camelCache;

  if (!cache[key]) {
    testPrefix(key);
  }

  return cache[key];
};
