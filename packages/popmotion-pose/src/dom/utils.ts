export const measureWithoutTransform = (element: HTMLElement) => {
  const transform = element.style.transform;
  element.style.transform = '';
  const bbox = element.getBoundingClientRect();
  element.style.transform = transform;

  return bbox;
};
