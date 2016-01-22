import Actor from '../actor/Actor';
import { selectDom } from '../inc/utils';

import renderCSS from '../render/css';
import renderSVG from '../render/svg';
import renderSVGPath from '../render/svg-path';

const SAVE_PROP = '__pm_actor_';

const detectRenderer = (element) => {
    // If HTMLElement load renderCSS
    if (element instanceof HTMLElement || element.tagName === 'svg') {
        return renderCSS;

    // Or SVG
    } else if (element instanceof SVGElement) {
        if (element.tagName === 'path') {
            return renderSVGPath;
        } else {
            return renderSVG;
        }
    }
};
