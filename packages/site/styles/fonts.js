const fontWeight = (weight) => `font-weight: ${weight};`;

export const bodyFont = `
  font-family: GT Walsheim,Neue Helvetica W02,Helvetica Neue,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  ${fontWeight(400)}
`;

export const codeFont = `
font-family: "IBM Plex Mono", "MonaLisa", "Dank Mono",
"Source Sans Pro", Courier, Monaco, monospace !important;
  ${fontWeight(400)}
`;

export const fontSize = (size) => `
  font-size: ${size}px;
`;

export const fontBold = `font-weight: 700;`;

export const lineHeight = (height) => `line-height: ${height}px;`;

export const font = {
  body: bodyFont,
  bold: fontBold,
};
