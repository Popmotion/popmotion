import { Action } from '../../action';
import { KeyframeProps } from './types';
declare const keyframes: ({values, loop, yoyo, flip, ...props}: KeyframeProps) => Action;
export default keyframes;
