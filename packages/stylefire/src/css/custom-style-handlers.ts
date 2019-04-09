import { ResolvedState, Config } from '../styler/types';
import { CssStylerOptions } from './';

interface CustomStyleHandler {
  get: (read: Config['onRead'], options: CssStylerOptions) => any;
  set: (styles: ResolvedState, value: any) => void;
}

export const customStyleHandlers: { [key: string]: CustomStyleHandler } = {
  radius: {
    get: (read, options) => read('borderRadius', options),
    set: (styles, value) => (styles.borderRadius = value)
  },
  size: {
    get: (read, options) => read('width', options),
    set: (styles, value) => (styles.width = styles.height = value)
  }
};
