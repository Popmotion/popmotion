const font = `font-family: 'Montserrat', sans-serif;`;

const fontWeight = (weight) => `font-weight: ${weight};`;
const uppercase = 'text-transform: uppercase;'

export const thickHeadline = `
  ${font}
  ${fontWeight(700)}
  ${uppercase}
`;

export const thinHeadline = `
  ${font}
  ${fontWeight(300)}
  ${uppercase}
`;

export const fontSize = (size) => `
  font-size: ${size}px;
`;

export const lineHeight = (height) => `line-height: ${height}px;`;
