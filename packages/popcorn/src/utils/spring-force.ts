import curryRange from './curry-range';

const identity = (v: any): any => v;

export const springForce = (alterDisplacement: Function = identity) =>
  curryRange((constant: number, origin: number, v: number) => {
    const displacement = origin - v;
    const springModifiedDisplacement =
      -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
    return displacement <= 0
      ? origin + springModifiedDisplacement
      : origin - springModifiedDisplacement;
  });

export const springForceLinear = springForce();
export const springForceExpo = springForce(Math.sqrt);
