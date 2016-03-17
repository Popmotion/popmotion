import Flow from '../Flow';

const SAVE_PROP = '__pm_flow';

export default (element) => {
    if (element[SAVE_PROP]) {
        return element[SAVE_PROP];
    } else {
        const flow = new Flow({ adapter: element });

        // Bind adapter to element
        Object.defineProperty(element, SAVE_PROP, {
            enumerable: false,
            writable: false,
            value: flow
        });

        return flow;
    }
};


