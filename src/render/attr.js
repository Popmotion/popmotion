import { each } from '../inc/utils';

export default ({ element, state }) => each(state, (value, key) => element.setAttribute(key, value));