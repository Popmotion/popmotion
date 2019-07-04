import sync, { getFrameData, FrameData } from 'framesync';
import { velocityPerSecond } from '@popmotion/popcorn';
import { ObserverCandidate, ObserverProps, Update } from '../observer/types';
import { BaseMulticast } from './';
import { HotSubscription } from './types';

export type ValueMap = { [key: string]: number | string };
export type ValueList = Array<number | string>;
export type Value = number | string | ValueMap | ValueList;

export type ValueProps = ObserverProps & {
  value: Value;
  initialSubscription?: Update;
};

export class ValueReaction extends BaseMulticast<ValueReaction> {
  public updateCurrent: (v: any) => any;
  public getVelocityOfCurrent: () => any;

  private prev: Value;
  private current: Value;
  private timeDelta: number;
  private lastUpdated: number;

  constructor(props: ValueProps) {
    super(props);
    this.prev = this.current = props.value || 0;

    this.updateCurrent = (v: number | string) => (this.current = v);
    this.getVelocityOfCurrent = () =>
      this.getSingleVelocity(
        this.current as string | number,
        this.prev as string | number
      );

    if (props.initialSubscription) this.subscribe(props.initialSubscription);
  }

  create(props: ValueProps) {
    return new ValueReaction(props);
  }

  get() {
    return this.current;
  }

  getVelocity() {
    return this.getVelocityOfCurrent();
  }

  update(v: Value) {
    super.update(v);
    this.prev = this.current;
    this.updateCurrent(v);
    const { delta, timestamp } = getFrameData();
    this.timeDelta = delta;
    this.lastUpdated = timestamp;
    sync.postRender(this.scheduleVelocityCheck);
  }

  scheduleVelocityCheck = () => sync.postRender(this.velocityCheck);

  velocityCheck = ({ timestamp }: FrameData) => {
    if (timestamp !== this.lastUpdated) {
      this.prev = this.current;
    }
  };

  subscribe(observerCandidate: ObserverCandidate): HotSubscription {
    const sub = super.subscribe(observerCandidate);
    this.subscribers[this.subscribers.length - 1].update(this.current);

    return sub;
  }

  private getSingleVelocity(
    current: number | string,
    prev: number | string
  ): number {
    return typeof current === 'number' && typeof prev === 'number'
      ? velocityPerSecond(current - prev, this.timeDelta)
      : velocityPerSecond(
          parseFloat(current as string) - parseFloat(prev as string),
          this.timeDelta
        ) || 0;
  }
}

export default (value: Value, initialSubscription?: Update) =>
  new ValueReaction({ value, initialSubscription });
