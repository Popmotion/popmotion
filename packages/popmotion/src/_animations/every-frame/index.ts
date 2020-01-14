import sync, { cancelSync } from 'framesync';
import action, { Action } from '../../action';

const frame = (): Action =>
  action(({ update }) => {
    let initialTime = 0;

    const process = sync.update(
      ({ timestamp }) => {
        if (!initialTime) initialTime = timestamp;
        update(timestamp - initialTime);
      },
      true,
      true
    );

    return {
      stop: () => cancelSync.update(process)
    };
  });

export default frame;
