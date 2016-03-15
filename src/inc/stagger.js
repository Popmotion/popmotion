import timeline from './timeline';
import { isNum } from './utils';

const DEFAULT_INTERVAL = 100;

export default (tweens, props) => {
    const propsIsDuration = isNum(props);
    const interval = propsIsDuration ? props : props ? props.interval || DEFAULT_INTERVAL : DEFAULT_INTERVAL;
    const timelineDefinition = tweens.map((tween) => { tween, at: interval });

    return timeline(timelineDefinition, props);
};