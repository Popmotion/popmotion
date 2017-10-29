import { BaseReaction } from './base';
import { ObserverProps } from '../chainable/types';

export class Reaction extends BaseReaction<Reaction> {
  create(props: ObserverProps) {
    return new Reaction(props);
  }
}

export default () => new Reaction();
