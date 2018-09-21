const CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
const REPLACE_TEMPLATE = '$1-$2';

export const camelToDash = (str: string) => str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();

export const setDomAttrs = (element: Element, attrs: { [key: string]: any }) => {
  for (const key in attrs) {
    if (attrs.hasOwnProperty(key)) {
      element.setAttribute(key, attrs[key]);
    }
  }
};
