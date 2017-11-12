import { ObserverCandidate } from '../../observer/types';
import { Value } from '../../reactions/value';
import { Easing } from '../../easing';

export type Chunk = {
  on: ObserverCandidate,
  from: Value,
  to: Value,
  duration: number,
  ease?: Easing
};

export type Segment = number | string | Chunk | Chunk[];
