const fontWeight = (weight) => `font-weight: ${weight};`;

export const bodyFont = `
  font-family: 'Source Sans Pro', sans-serif;
  ${fontWeight(400)}
`;

export const codeFont = `
  font-family: 'Inconsolata', monospace;
  ${fontWeight(400)}
`;

export const fontSize = (size) => `
  font-size: ${size}px;
`;

export const lineHeight = (height) => `line-height: ${height}px;`;
