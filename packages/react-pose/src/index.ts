import posed from './base';
import supportedElements from './utils/supported-elements';

export * from './base';

export default supportedElements.reduce((acc, key) => {
  acc[key] = posed(key);
  return acc;
}, posed);


