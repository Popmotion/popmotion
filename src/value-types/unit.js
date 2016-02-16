import { isNum } from '../inc/utils';
/*
    Split a value into a value/unit object
    
        "200px" -> { value: 200, unit: "px" }
        
    @param [string]: Value to split
    @return [object]: Object with value and unit props
*/
const findValueAndUnit = (value) => {
    if (value.match) {
        const splitValue = value.match(/(-?\d*\.?\d*)(.*)/);

        return {
            value: parseFloat(splitValue[1]),
            unit:  splitValue[2]
        };
    } else {
        return { value };
    }
};

export default {
    test: function (unparsed) {
        const { value, unit } = findValueAndUnit(unparsed);
        return (isNum(value) && !isNaN(value)) ? true : false;
    },

    parse: function (unparsed, parent) {
        const { value, unit } = findValueAndUnit(unparsed);

        if (unit && unit !== unit) {
            parent.unit = unit;
        }

        return value;
    },

    serialize: (parsed, parent) => parsed + (parent.unit || '')
};
