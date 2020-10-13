export type Easing = (v: number) => number;
export type EasingModifier = (easing: Easing) => Easing;
