import { Easing } from './easing';
export declare const appendUnit: (unit: string) => (v: number) => string;
export declare const applyOffset: (from: number, to?: number) => (v: number) => number;
export declare const clampMax: (max: number) => (v: number) => number;
export declare const clampMin: (min: number) => (v: number) => number;
export declare const clamp: (min: number, max: number) => (v: number) => number;
export declare const pipe: (...transformers: Function[]) => (acc: any, ...args: any[]) => any;
export declare const interpolate: (input: number[], output: number[], rangeEasing: Easing[]) => (v: number) => number;
export declare const generateNonIntegratedSpring: (alterDisplacement?: Function) => (constant: number, origin: number) => (v: number) => number;
export declare const linearSpring: (constant: number, origin: number) => (v: number) => number;
export declare const nonlinearSpring: (constant: number, origin: number) => (v: number) => number;
export declare const wrap: (min: number, max: number) => (v: number) => number;
export declare const smooth: (strength?: number) => (v: number) => number;
export declare const snap: (points: number | number[]) => (v: number) => number;
export declare const steps: (steps: number, min?: number, max?: number) => (v: number) => number;
export declare const transformChildValues: (childTransformers: {
    [key: string]: Function;
}) => (v: any) => {
    [key: string]: any;
};
export declare const bezier: (...points: number[]) => (t: number) => number;
