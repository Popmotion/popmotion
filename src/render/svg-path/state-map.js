import cssStateMap from '../css/state-map';

const STROKE = 'stroke-';

export default {
    ...cssStateMap,
    opacity: `${STROKE}opacity`,
    width: `${STROKE}width`,
    miterlimit: `${STROKE}miterlimit`
};