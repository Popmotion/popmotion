export const cosh = (x: number) => {
  const y = Math.exp(x);
  return (y + 1 / y) / 2;
};

export const sinh = (x: number) => {
  const y = Math.exp(x);
  return (y - 1 / y) / 2;
};
