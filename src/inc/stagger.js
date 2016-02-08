import Tween from '../actions/Tween';
import easing from '../actions/easing/preset-easing';
import { isNum } from './utils';

const DEFAULT_INTERVAL = 100;

export default function stagger(array, callback, props) {
    const arrayLength = array.length;
    const propsIsInterval = isNum(props);
    const interval = propsIsInterval ? props : props.interval || DEFAULT_INTERVAL;
    let prevIndex = -1;

    const staggerTween = new Tween({
        duration: interval * arrayLength,
        values: {
            i: {
                from: 0,
                to: arrayLength - 1,
                round: true,
                ease: propsIsInterval ? easing.linear : props.ease || easing.linear
            }
        },
        onRender: (tween) => {
            const i = tween.state.i;
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