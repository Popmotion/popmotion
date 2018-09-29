const identity = (v: any): any => v;

export const generateSpringForce = (alterDisplacement: Function = identity) => (
  constant: number,
  origin: number
) => (v: number) => {
  const displacement = origin - v;
  const springModifiedDisplacement =
    -constant * (0 - alterDisplacement(Math.abs(displacement)));
  return displacement <= 0
    ? origin + springModifiedDisplacement
    : origin - springModifiedDisplacement;
};

export const springForceLinear = generateSpringForce();
export const springForceExpo = generateSpringForce(Math.sqrt);
