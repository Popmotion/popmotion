import { css } from 'styled-components';

export const PINK = '#ED2754';
export const PINK_BURN = '#FF44D1';

export const PURPLE = '#6127ED';
export const PURPLE_BURN = '#4496FF';

export const BLUE = '#27E5ED';
export const BLUE_BURN = '#44FF65';

export const YELLOW = '#EAFF33';
export const YELLOW_BURN = '#FFAD44';

export const BLACK = '#333';
export const WHITE = '#fff';
export const LIGHT_GREY = '#eee';

export const MAIN = PINK;
export const MAIN_FADE = PINK_BURN;

export const LINK = PURPLE_BURN;

const COL_WIDTH = 15;

export const verticalGradient = (from, to, start=0, end=100) =>
  `linear-gradient(to bottom, ${to} ${start}%, ${from} ${end}%)`;

export const cols = (num) => `${num * COL_WIDTH}px`;

const breakpoints = {
  medium: cols(52),
  small: cols(26)
};

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
