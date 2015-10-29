var createDelimited = require('./manipulators/create-delimited'),
    getColorValues = require('./manipulators/get-color-values'),
    functionCreate = require('./manipulators/function-create'),
    defaultProps = require('./settings/default-props'),
    colorDefaults = defaultProps.color,
    terms = require('./settings/dictionary').colors;

module.exports = {

    defaultProps: {
        Red: colorDefaults,
        Green: colorDefaults,
        Blue: colorDefaults,
        Alpha: defaultProps.opacity
    },

    test: value => (value && value.indexOf('rgb') > -1),
    
    split: value => getColorValues(value, terms),

    combine: values => functionCreate(createDelimited(values, terms, ', ', 2), 'rgba')
};