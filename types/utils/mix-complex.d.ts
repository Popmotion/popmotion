import { RGBA, HSLA } from 'style-value-types';
declare type MixComplex = (p: number) => string;
declare type BlendableObject = {
  [key: string]: string | number | RGBA | HSLA;
};
export declare const mixArray: (
  from: (string | number | HSLA | RGBA)[],
  to: (string | number | HSLA | RGBA)[]
) => (v: number) => (string | number | HSLA | RGBA)[];
export declare const mixObject: (
  origin: BlendableObject,
  target: BlendableObject
) => (
  v: number
) => {
  [x: string]: string | number | HSLA | RGBA;
};
export declare const mixComplex: (origin: string, target: string) => MixComplex;
export {};
