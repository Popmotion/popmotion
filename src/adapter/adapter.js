/*
    Override `getter` and `setter` to reimplement the interface for new element types.

    Set `.stateMap` as an object key/value map to translate incoming keys to
    API-specific keys. For instance, { x: 'translateX' }. 

    Set `.valueTypeMap` as an object key/value map to return a value type with
    `getValueType(key)` (key will be mapped according to `stateMap`)
*/

const mapKey = (key, map) => map ? map[key] || key : key;

export default (options) => {
    /*
        Adapter is setter function

        @param [object]: Object to set properties on
        @param [object]: Key/value properties to set
    */
    const adapter = (element, props, data) => {
        if (options.stateMap) {
            // Translate props
            for (let key in props) {
                if (props.hasOwnProperty(key)) {
                    const mappedKey = mapKey(key, options.stateMap);
                    
                    if (mappedKey !== key) {
                        props[mappedKey] = props[key];
                        delete props[key];
                    }
                }
            }
        }

        return options.setter(element, props, data);
    };

    adapter.get = (element, key) => options.getter(element, mapKey(key, options.stateMap));
    adapter.checkValueType = (key) => options.valueTypeMap ? options.valueTypeMap[mapKey(key, options.stateMap)] : false;
    adapter.getElementData = options.getElementData;

    return adapter;
};