/*
    # Adapter class
    ## Provides a getter/setter wrapper and property cache for different element types

    Override `getter` and `setter` to reimplement the interface for new element types.

    Set `Extended.prototype.stateMap` as an object key/value map to translate incoming keys to
    API-specific keys. For instance, { x: 'translateX' }. 

    Set `Extended.prototype.valueTypeMap` as an object key/value map to return a value type with
    `getValueType(key)` (key will be mapped according to `stateMap`)
*/
class Adapter {
    constructor(props) {
        this.element = props.element;
        this.cache = {};

        if (props.getter) {
            this.getter = props.getter;
        }

        if (props.setter) {
            this.setter = props.setter;
        }

        if (props.stateMap) {
            this.stateMap = props.stateMap;
        }

        if (props.valueTypeMap) {
            this.valueTypeMap = props.valueTypeMap;
        }
    }

    /*
        Get element property

        @param [string]: Key to read
        @param [boolean]: If `true`, will override cached property
    */
    get(key, refresh) {
        const mappedKey = this.mapStateKey(key);

        if (refresh || !this.cache.hasOwnProperty(key)) {
            return this.cache[key] = this.getter(mappedKey);
        } else {
            return this.cache[key];
        }
    }

    /*
        Set element properties

        @param [object]: Key/value properties to set
    */
    set(props) {
        const translatedProps = {};

        // Translate props
        for (let key in props) {
            if (props.hasOwnProperty(key)) {
                const mappedKey = this.mapStateKey(key);
                this.cache[key] = translatedProps[mappedKey] = props[key];
            }
        }

        return this.setter(translatedProps);
    }

    /*
        Overridable element getter - default for plain object 
    */
    getter(key) {
        return this.element[key];
    }

    /*
        Overridable element setter - default for plain object
    */
    setter(props) {
        for (let key in props) {
            if (props.hasOwnProperty(key)) {
                this.element[key] = props[key];
            }
        }
    }

    /*
        Map state key as per `stateMap`, if present

        @param [string]: Key to map
        @return [string]: Mapped key, or original key if none found
    */
    mapStateKey(key) {
        return (this.stateMap) ? this.stateMap[key] || key : key;
    }

    /*
        Get valueType of provided key

        @param [string]: Name of property to map
        @return [valueType]: Value type of property
    */
    getValueType(key) {
        return (this.valueTypeMap) ? this.valueTypeMap[this.mapStateKey(key)] : false;
    }
}

export default (props) => new Adapter(props);