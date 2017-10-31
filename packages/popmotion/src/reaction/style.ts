import styler, { Styler } from 'stylefire';

const noop = (): void => undefined;

const nodesToArray = (nodes: NodeListOf<Element>): Element[] => [].slice.call(nodes);
const createStyler = (node: HTMLElement | (SVGGraphicsElement & SVGPathElement)): Styler => styler(node);

const singlePropSetter = (propName: string) => (s: Styler) => s.set(propName);
const multiPropSetter = (s: Styler) => (v: any) => s.set(v);
const createSetStyleFunc = (propName?: string) => (typeof propName === 'string')
  ? singlePropSetter(propName)
  : multiPropSetter;

export default (selector: string | NodeListOf<Element>, propName?: string) => {
  const nodes = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
  const setStyleFuncs = nodesToArray(nodes)
    .map(createStyler)
    .map(createSetStyleFunc(propName));

  const numNodes = nodes.length;
  return numNodes === 0
    ? noop
    : numNodes === 1
      ? setStyleFuncs[0]
      : (v: any) => {
        for (let i = 0; i < numNodes; i++) {
          setStyleFuncs[i](v);
        }
      };
};
