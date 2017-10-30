import { Action } from '../../action';
import { PointerProps } from '../pointer/types';
declare const touch: ({preventDefault}?: PointerProps) => Action;
export default touch;
export declare const getIsTouchDevice: () => boolean;
