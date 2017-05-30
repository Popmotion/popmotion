export const PINK = '#FF4493';
export const PINK_FADE = '#FB9A9A';
export const BLACK = '#333';

export const MAIN = PINK;
export const MAIN_FADE = PINK_FADE;

export const LINK = MAIN;

export const verticalGradient = (from, to, start=0, end=100) =>
  `linear-gradient(to bottom, ${to} ${start}%, ${from} ${end}%)`;
