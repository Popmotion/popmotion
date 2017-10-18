export type SpringProps = {
  from?: number,
  to?: number,
  stiffness?: number,
  damping?: number,
  mass?: number,
  velocity?: number,
  restSpeed?: number,
  restDisplacement?: number
};

export type SpringInterface = {
  stop: () => void
};
