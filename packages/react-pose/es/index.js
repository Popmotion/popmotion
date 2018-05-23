import posed from './base.js';
export { PoseGroup } from './base.js';
import 'tslib';
import 'react';
import 'popmotion-pose';
import 'hey-listen';

var supportedElements = ['a', 'article', 'aside', 'audio', 'b', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dialog', 'div', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'i', 'iframe', 'img', 'input', 'label', 'legend', 'li', 'nav', 'object', 'ol', 'option', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'section', 'select', 'span', 'strong', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'ul', 'video', 'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var index = /*#__PURE__*/supportedElements.reduce(function (acc, key) {
    acc[key] = posed(key);
    return acc;
}, posed);

export default index;