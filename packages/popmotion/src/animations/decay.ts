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
  let amplitude = power * velocity;
  const idealTarget = from + amplitude;
  const target =
    typeof modifyTarget === 'undefined'
      ? idealTarget
      : modifyTarget(idealTarget);
  if (target !== idealTarget) amplitude = target - from;

  return t => target + -amplitude * Math.exp(-t / timeConstant);
};
