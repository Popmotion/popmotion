import css from './css';
import svg from './svg';
import viewport from './viewport';
import createStylerFactory from './styler';
import { buildStyleProperty } from './css/build-styles';
import { buildSVGAttrs } from './svg/build';
import { transformProps, isTransformProp } from './css/transform-props';
import { invariant } from 'hey-listen';
import { Styler, Props } from './styler/types';

const cache = new WeakMap<Element | Window, Styler>();

const isHTMLElement = (node: Element): node is HTMLElement => {
  return (
    node instanceof HTMLElement ||
    // Cross-origin safe check
    typeof (node as HTMLElement).click === 'function'
  );
};
const isSVGElement = (node: Element): node is SVGElement => {
  return node instanceof SVGElement || 'ownerSVGElement' in node;
};

const createDOMStyler = (node: Element | Window, props?: Props) => {
  let styler: Styler;

  if (node === window) {
    styler = viewport(node);
  } else if (isHTMLElement(node)) {
    styler = css(node, props);
  } else if (isSVGElement(node)) {
    styler = svg(node);
  }

  invariant(
    styler !== undefined,
    'No valid node provided. Node must be HTMLElement, SVGElement or window.'
  );

  cache.set(node, styler);
  return styler;
};

const getStyler = (node: Element | Window, props?: Props) =>
  cache.has(node) ? cache.get(node) : createDOMStyler(node, props);

export default function(
  nodeOrSelector: Element | string | Window,
  props?: Props
): Styler {
  const node: Element | Window =
    typeof nodeOrSelector === 'string'
      ? document.querySelector(nodeOrSelector)
      : nodeOrSelector;

  return getStyler(node, props);
}

export {
  createStylerFactory,
  Styler,
  buildStyleProperty,
  buildSVGAttrs,
  transformProps,
  isTransformProp
};
