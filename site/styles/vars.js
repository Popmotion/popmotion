export const PINK = '#ED2754';
export const PINK_BURN = '#FF44D1';

export const PURPLE = '#6127ED';
export const PURPLE_BURN = '#4496FF';

export const BLACK = '#333';
export const WHITE = '#fff';

export const MAIN = PINK;
export const MAIN_FADE = PINK_BURN;

export const LINK = MAIN;

const COL_WIDTH = 15;

export const verticalGradient = (from, to, start=0, end=100) =>
  `linear-gradient(to bottom, ${to} ${start}%, ${from} ${end}%)`;

export const cols = (num) => `${num * COL_WIDTH}px`;
