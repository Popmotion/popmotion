import sync from 'framesync';
import { ChangedValues, Config, Props, State, Styler } from './types';

const createStyler = ({
  onRead,
  onRender,
  uncachedValues = new Set(),
  useCache = true
}: Config) => ({ ...props }: Props = {}): Styler => {
  const state: State = {};
  const changedValues: ChangedValues = [];
  let hasChanged: boolean = false;

  function setValue(key: string, value: any) {
    if (key.startsWith('--')) {
      props.hasCSSVariable = true;
    }
    const currentValue = state[key];
    state[key] = value;

    if (state[key] === currentValue) return;

    if (changedValues.indexOf(key) === -1) {
      changedValues.push(key);
    }

    if (!hasChanged) {
      hasChanged = true;
      sync.render(styler.render);
    }
  }

  const styler = {
    get(key: string, forceRead: boolean = false) {
      const useCached =
        !forceRead &&
        useCache &&
        !uncachedValues.has(key) &&
        state[key] !== undefined;

      return useCached ? state[key] : onRead(key, props);
    },
    set(values: string | State, value?: any) {
      if (typeof values === 'string') {
        setValue(values, value);
      } else {
        for (const key in values) {
          setValue(key, values[key]);
        }
      }

      return this;
    },
    render(forceRender: any = false) {
      if (hasChanged || forceRender === true) {
        onRender(state, props, changedValues);
        hasChanged = false;
        changedValues.length = 0;
      }

      return this;
    }
  };

  return styler;
};

export default createStyler;
