import { ForT } from '../types';

interface DecayConfig {
  from?: number;
  velocity?: number;
  power?: number;
  timeConstant?: number;
  modifyTarget?: (target: number) => number;
}

export const decay = ({
  velocity = 0,
  from = 0,
  power = 0.8,
  timeConstant = 350,
  modifyTarget
}: DecayConfig): ForT => {
  const amplitude = power * velocity;
  const idealTarget = Math.round(from + amplitude);
  const target =
    typeof modifyTarget === 'undefined'
      ? idealTarget
      : modifyTarget(idealTarget);

  return t => target + -amplitude * Math.exp(-t / timeConstant);
};
