export type ModifyTarget = (v: number) => number;

export type DecayProps = {
  velocity?: number;
  from?: number;
  modifyTarget?: ModifyTarget;
  power?: number;
  timeConstant?: number;
  restDelta?: number;
};
