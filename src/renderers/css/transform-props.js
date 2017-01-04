const axes = ['X', 'Y', 'Z'];

let transformProps = {
  x: true,
  y: true,
  z: true
};

const SCALE = 'scale';
const ROTATE = 'rotate';
const TRANSFORM_PERSPECTIVE = 'transformPerspective';
const TERMS = ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE];

transformProps[ROTATE] = transformProps[SCALE] = transformProps[TRANSFORM_PERSPECTIVE] = true;

TERMS.forEach((term) => axes.forEach((axis) => transformProps[term + axis] = true));

export default transformProps;