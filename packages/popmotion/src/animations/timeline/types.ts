import { ObserverCandidate } from '../../observer/types';
import { Value } from '../../reactions/value';
import { ScrubberSubscription } from '../tween/scrubber';
import { Easing } from '../../easing';

export type Chunk = {
  on: ObserverCandidate,
  from: Value,
  to: Value,
  duration: number,
  ease?: Easing
};

export type Segment = number | string | Chunk | Chunk[];

export type TimelineFragment = {
  scrubber: ScrubberSubscription
};

export type Timeline = TimelineFragment[];
