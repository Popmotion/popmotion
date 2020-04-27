export type Props = {
  from: number;
  velocity: number;
  min?: number;
  max?: number;
  bounceStiffness: number;
  bounceDamping: number;
  power: number;
  timeConstant: number;
  restDelta: number;
  modifyTarget: (v: number) => number;
};

export type SpringProps = {
  to: number;
  from: number;
  velocity: number;
};
