import { currentFrameTime, timeSinceLastFrame } from 'framesync';
import { speedPerFrame } from '../calc';
import { ObserverCandidate, ObserverProps } from '../observer/types';
import { BaseReaction } from './base';
import { HotSubscription } from './types';

export type ValueProps = ObserverProps & {
  value: number
};

export class ValueReaction extends BaseReaction<ValueReaction> {
  private prev: number;
  private current: number;
  private lastUpdated: number;
  private timeDelta: number;

  constructor(props: ValueProps) {
    super(props);
    this.prev = this.current = props.value || 0;
  }

  create(props: ValueProps) {
    return new ValueReaction(props);
  }

  get() {
    return this.current;
  }

  getVelocity() {
    return speedPerFrame(this.current - this.prev, this.timeDelta);
  }

  // TODO: Schedule a velocity check on the next frame
  update(v: number) {
    super.update(v);
    this.prev = this.current;
    this.current = v;
    this.lastUpdated = currentFrameTime();
    this.timeDelta = timeSinceLastFrame();
  }

  subscribe(observerCandidate: ObserverCandidate): HotSubscription {
    const sub = super.subscribe(observerCandidate);
    this.update(this.current);

    return sub;
  }
}

export default (value: number) => new ValueReaction({ value });
