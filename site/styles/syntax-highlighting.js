import { BLACK, BRAND, ENTITY, ACTION, cols } from './vars';

export const theme = {
  'hljs': {
    display: 'block',
    overflowX: 'auto',
    padding: cols(1),
    color: BLACK,
    fontSize: '14px',
    lineHeight: '20px'
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
};
