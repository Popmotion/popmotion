import { createAdapter, valueType, utils } from 'popmotion';
import build from './inc/build';
import dictionary from './inc/dictionary';
import { POSITION, ROTATION } from './inc/type-keys';

export default createAdapter({
  setter: (element, props) => {
    const builtProps = build(props);

    for (let key in builtProps) {
      if (builtProps.hasOwnProperty(key)) {
        element.setAttribute(key, builtProps[key]);
      }
    }
  },

  getter: (element, key) => {
    if (!dictionary[key]) {
      return element.getAttribute(key);
    } else {
      const prop = element.getAttribute(dictionary[key].prop);
      return prop[dictionary[key].unit];
    }
  },

  stateMap: {
    x: POSITION + 'X',
    y: POSITION + 'Y',
    z: POSITION + 'Z',
    rotateX: ROTATION + 'X',
    rotateY: ROTATION + 'Y',
    rotateZ: ROTATION + 'Z'
  },

  valueTypeMap: {
    scale: valueType.scale,
    scaleX: valueType.scale,
    scaleY: valueType.scale,
    scaleZ: valueType.scale,
    color: valueType.color
  }
});