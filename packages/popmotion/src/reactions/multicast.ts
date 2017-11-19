import { ObserverProps } from '../observer/types';
import { BaseMulticast } from './';

export class Multicast extends BaseMulticast<Multicast> {
  create(props: ObserverProps) {
    return new Multicast(props);
  }
}

export default () => new Multicast();
