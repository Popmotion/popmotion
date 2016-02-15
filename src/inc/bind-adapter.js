import adapter from '../adapter/adapter';
import cssAdapter from '../adapter/css-adapter';
import svgAdapter from '../adapter/svg-adapter';
import svgPathAdapter from '../adapter/svg-path-adapter';

const SAVE_PROP = '__pm_adapter';

export default (element) => {
    // Return bound adapter if present
    if (element[SAVE_PROP]) {
        return element[SAVE_PROP];

    // Or detect and bind adapter
    } else {
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

        const boundAdapter = detectedAdapter(element);

        // Bind adapter to element
        Object.defineProperty(element, SAVE_PROP, {
            enumerable: false,
            writable: false,
            value: boundAdapter
        });

        return boundAdapter;
    }
};
