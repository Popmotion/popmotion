export declare const mixLinearColor: (
  from: number,
  to: number,
  v: number
) => number;
export declare const mixColor: (
  from:
    | string
    | import('../../../style-value-types/lib').HSLA
    | import('../../../style-value-types/lib').RGBA,
  to:
    | string
    | import('../../../style-value-types/lib').HSLA
    | import('../../../style-value-types/lib').RGBA
) => (v: number) => any;
