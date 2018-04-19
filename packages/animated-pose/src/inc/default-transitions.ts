import { Animated } from 'react-native';
import { eachValue } from '../../../pose-core/src/inc/transition-composers';

const intelligentTransition = eachValue({
  default: ({ value, to }) => Animated.spring(value, { toValue: to })
});

export default new Map([
  ['default', intelligentTransition]
]);
