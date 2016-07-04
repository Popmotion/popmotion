import between from '../transformers/between';
import chain from '../transformers/chain';

export default {
  output: chain(
    between(0, 255),
    Math.round
  )
};
