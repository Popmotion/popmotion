export type PointerPoint = {
  clientX: number,
  clientY: number,
  pageX: number,
  pageY: number,
  x: number,
  y: number
};

export type PointerProps = {
  x?: number,
  y?: number,
  preventDefault?: boolean,
  scale?: number,
  rotate?: number
};
