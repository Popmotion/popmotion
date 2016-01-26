import { each, isArray } from '../inc/utils';

const FLOAT_REGEX = /(-)?(\d[\d\.]*)/g;
const generateToken = (token) => '${' + token + '}';

export default {

    test: (value) => {
        const matches = value.match(FLOAT_REGEX);
        return (isArray(matches) && matches.length > 1);
    },

    template: (value) => {
        let counter = 0;
        return value.replace(FLOAT_REGEX, () => generateToken(counter++));
    },

    split: (value) => {
        const splitValue = {};
        
        value.match(FLOAT_REGEX).forEach((value, i) => splitValue[i] = value);

        return splitValue;
    },

    combine: (values, template) => {
        each(values, (value, key) => template = template.replace(generateToken(key), value));
        return template;
    }

};