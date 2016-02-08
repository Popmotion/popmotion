import alpha from '../../value-types/alpha';
import axes from '../../value-types/axes';
import color from '../../value-types/color';
import complex from '../../value-types/complex';
import scale from '../../value-types/scale';

export default {
    fill: color,
    stroke: color,
    scale: scale,
    scaleX: scale,
    scaleY: scale,
    transformOrigin: axes,
    d: complex,
    opacity: alpha,
    fillOpacity: alpha,
    strokeOpacity: alpha
};