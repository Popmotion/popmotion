import { css } from 'styled-components';

export const verticalGradient = (from, to, start=0, end=100) =>
  `linear-gradient(to bottom, ${from} ${start}%, ${to} ${end}%)`;

export const WHITE = '#fff';
export const BLACK = '#222';
export const LIGHT_GREY = '#f2f2f2';

export const PINK = '#FF1C68';
export const PINK_BURN = '#DB0068';

export const BLUE = '#198FE3';
export const BLUE_BURN = '#064FB5';

const PURPLE = '#9B65DE';

export const BRAND = PINK;
export const BRAND_BURN = PINK_BURN;
export const BRAND_GRADIENT = verticalGradient(PINK, PINK_BURN);

export const ACTION = BLUE;
export const ACTION_BURN = BLUE_BURN;
export const ACTION_GRADIENT = verticalGradient(BLUE, BLUE_BURN);

export const ENTITY = PURPLE;

const COL_WIDTH = 15;

export const cols = (num) => `${num * COL_WIDTH}px`;

const breakpoints = {
  large: cols(72),
  medium: cols(50),
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
