import adapter from '../adapter/adapter';
import cssAdapter from '../adapter/css-adapter';
import svgAdapter from '../adapter/svg-adapter';
import svgPathAdapter from '../adapter/svg-path-adapter';

export default (element) => {
    let detectedAdapter = adapter;

    // If HTMLElement load CSS
    if (element instanceof HTMLElement || element.tagName === 'svg') {
        detectedAdapter = cssAdapter;

    // Or SVG
    } else if (element instanceof SVGElement) {
        if (element.tagName === 'path') {
            detectedAdapter = svgPathAdapter;
        } else {
            detectedAdapter = svgAdapter;
        }
    }

    return detectedAdapter(element);
};
