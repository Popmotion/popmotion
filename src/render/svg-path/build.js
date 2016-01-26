import { each } from '../../inc/utils';

/*
    Convert percentage to pixels
    
    @param [number]: Percentage of total length
    @param [number]: Total length
*/
const percentToPixels = (percent, length) => (parseFloat(percent) / 100) * length + 'px';

export default function build(state, length) {
    const styles = {};
    const dashArrayStyles = {
        length: 0,
        spacing: length + 'px'
    };
    let hasDashArray = false;

    each(state, (value, key) => {
        switch (key) {
        case 'length':
        case 'spacing':
            hasDashArray = true;
            dashArrayStyles[key] = percentToPixels(value, length);
            break;
        case 'offset':
            styles['stroke-dashoffset'] = percentToPixels(-value, length);
            break;
        default:
            styles[key] = value;
        }
    });

    if (hasDashArray) {
        styles['stroke-dasharray'] = dashArrayStyles.length + ' ' + dashArrayStyles.spacing;
    }

    return styles;
}