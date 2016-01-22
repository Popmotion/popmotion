import { each } from '../../inc/utils';
import transformProps from './transform-props';

const TRANSLATE_Z = 'translateZ';

export default buildPropertyString = (state, disableHardwareAcceleration) => {
    let propertyString = '';
    let transformString = '';
    let transformHasZ = false;

    each(state, (value, key) => {
        if (transformProps[key]) {
            transformString += key + '(' + value + ') ';
            transformHasZ = (key === TRANSLATE_Z) ? true : transformHasZ;

        } else {
            propertyString += ';' + key + ':' + value;
        }
    });

    if (transformString !== '') {
        if (!transformHasZ && !disableHardwareAcceleration) {
            transformString += TRANSLATE_Z + '(0px)';
        }

        propertyString += ';transform:' + transformString;
    }

    return propertyString;
} 