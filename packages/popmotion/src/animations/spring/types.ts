// TODO: Split these into duration and stiffness props
export type SpringProps = {
  from?: number;
  to?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
  velocity?: number;
  restSpeed?: number;
  restDelta?: number;
  duration?: number;
  dampingRatio?: number;
};

export type SpringInterface = {
  stop: () => void;
};
