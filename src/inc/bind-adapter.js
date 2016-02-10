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
        let adapter;

        // If HTMLElement load CSS
        if (element instanceof HTMLElement || element.tagName === 'svg') {
            adapter = cssAdapter;

        // Or SVG
        } else if (element instanceof SVGElement) {
            if (element.tagName === 'path') {
                adapter = svgPathAdapter;
            } else {
                adapter = svgAdapter;
            }
        }

        // Bind adapter to element
        Object.defineProperty(element, SAVE_PROP, {
            enumerable: false,
            value: adapter
        });

        return adapter(element);
    }
};
