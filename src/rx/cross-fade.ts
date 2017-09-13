import action from './action';
import parallel from './parallel';

const crossFade = (...actions) =>
  parallel(...actions)
    .start((v: number[]) => );



import { Observerable } from './types';

type CrossFadeProps = {
  ease?: (v: number) => number,
  from: 
};

const crossFade = ({
  ease: linear,
  from,
  to
}: CrossFadeProps = {}) => action(({ update }) => {
  return {
    stop: ()
  }
});

export default crossFade;