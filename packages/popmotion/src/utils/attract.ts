const identity = (v: any): any => v;

export const attract = (alterDisplacement: Function = identity) => (
  constant: number,
  origin: number,
  v: number
) => {
  const displacement = origin - v;
  const springModifiedDisplacement =
    -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
  return displacement <= 0
    ? origin + springModifiedDisplacement
    : origin - springModifiedDisplacement;
};

export const attractLinear = attract();
export const attractExpo = attract(Math.sqrt);
