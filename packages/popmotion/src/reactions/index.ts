import { ObserverProps } from '../observer/types';
import { BaseReaction } from './base';

export class Reaction extends BaseReaction<Reaction> {
  create(props: ObserverProps) {
    return new Reaction(props);
  }
}

export default () => new Reaction();
