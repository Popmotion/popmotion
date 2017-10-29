import { BaseReaction } from './base';
import { ObserverProps } from '../chainable/types';

type ValueProps = ObserverProps & {
  value: number
};

class ValueReaction extends BaseReaction<ValueReaction> {
  private prev: number;
  private current: number;
  private lastUpdated: number;

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
    return 0;
    //return speedPerFrame(this.current - this.prev);
  }

  update(v: number) {
    super.update(v);
    this.prev = this.current;
    this.current = v;
    // record timestamp
  }
}

export default (value: number) => new ValueReaction({ value });
