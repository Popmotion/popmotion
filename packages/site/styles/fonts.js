const fontWeight = weight => `font-weight: ${weight};`;

export const bodyFont = `
  font-family: 'PT Sans', sans-serif;
  ${fontWeight(400)}
`;

export const codeFont = `
  font-family: 'Inconsolata', monospace;
  ${fontWeight(400)}
`;

export const fontSize = size => `
  font-size: ${size}px;
`;

export const fontBold = `font-weight: 700;`;

export const lineHeight = height => `line-height: ${height}px;`;

export const font = {
  body: bodyFont,
  bold: fontBold
};
