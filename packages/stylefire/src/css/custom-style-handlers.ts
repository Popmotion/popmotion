import { ResolvedState } from '../styler/types';

interface CustomStyleHandler {
  get?: string;
  set: (output: ResolvedState, value: any) => void;
}

export const customStyleHandlers: { [key: string]: CustomStyleHandler } = {
  radius: {
    get: 'borderRadius',
    set: (output, value) => (output.borderRadius = value)
  },
  size: {
    get: 'width',
    set: (output, value) => (output.width = output.height = value)
  }
};
