import Tween from '../actions/Tween';
import { linear } from '../actions/easing/preset-easing';
import { isNum } from './utils';

const DEFAULT_INTERVAL = 100;

export default function stagger(array, props, callback) {
    const arrayLength = array.length;
    const propsIsInterval = isNum(props);
    const interval = propsIsInterval ? props : props.interval || DEFAULT_INTERVAL;
    let prevIndex = -1;

    const staggerTween = new Tween({
        duration: interval * arrayLength,
        values: {
            i: {
                from: 0,
                to: numMembers - 1,
                round: true,
                ease: propsIsInterval ? linear : props.ease || linear
            }
        },
        onRender: ({ i }) => {
            let gapIndex = prevIndex + 1;

            for (; gapIndex <= i; gapIndex++) {
                callback(array[gapIndex], gapIndex);
            }

            prevIndex = i;
        },
        onComplete: propsIsInterval ? undefined : props.onComplete
    });

    staggerTween.start();

    return staggerTween;
}