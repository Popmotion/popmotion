import { axes } from '../../value-types/settings/dictionary';

let transformProps = {};

const SCALE = 'scale';
const ROTATE = 'rotate';
const TRANSFORM_PERSPECTIVE = 'transformPerspective';
const TERMS = ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE];

transformProps[ROTATE] = transformProps[SCALE] = transformProps[TRANSFORM_PERSPECTIVE] = true;

TERMS.forEach((term) => axes.forEach((axis) => transformProps[term + position] = true));

export default transformProps;