import { Easing, EasingModifier } from './types';
export declare const reverseEasing: EasingModifier;
export declare const mirrorEasing: EasingModifier;
export declare const createExpoIn: (power: number) => Easing;
export declare const createBackIn: (power: number) => Easing;
export declare const createAnticipate: (power: number) => Easing;
