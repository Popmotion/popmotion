export const sortByReversePriority = (priorityOrder: string[]) => (
  a: string,
  b: string
) => {
  const aP = priorityOrder.indexOf(a);
  const bP = priorityOrder.indexOf(b);

  if (aP === -1 && bP !== -1) return -1;
  if (aP !== -1 && bP === -1) return 1;

  return aP - bP;
};
