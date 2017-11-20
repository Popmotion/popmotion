import { BLACK, BRAND, ENTITY, ACTION, cols } from './vars';

const createTheme = ({ fontSize = 14, lineHeight = 20, width = '100%'}) => ({
  'hljs': {
    display: 'block',
    overflowX: 'auto',
    padding: cols(1),
    color: BLACK,
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
    width
  },
  'hljs-comment': {
    opacity: 0.5
  },
  'hljs-keyword': {
    color: ENTITY
  },
  'hljs-name': {
    color: ACTION
  },
  'hljs-number': {
    color: BRAND
  },
  'hljs-params': {
    color: ACTION
  },
  'hljs-string': {
    color: BRAND
  },
  'hljs-attribute': {
    color: BRAND
  }
});

export const codeTheme = createTheme({});
export const codeThemeLarge = createTheme({
  fontSize: 18,
  lineHeight: 26,
  width: '85%'
});
