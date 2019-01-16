export type Props = {
  from: number;
  velocity: number;
  min?: number;
  max?: number;
  stiffness: number;
  damping: number;
};

export type SpringProps = {
  from: number;
  velocity: number;
};
