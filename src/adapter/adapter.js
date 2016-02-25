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
    constructor(element) {
        this.element = element;
        this.cache = {};
    }

    /*
        Get element property

        @param [string]: Key to read
        @param [boolean]: If `true`, will override cached property
    */
    get(key, refresh) {
        const mappedKey = this.mapStateKey(key);

        if (refresh || !this.cache.hasOwnProperty(key)) {
            return this.cache[mappedKey] = this.getter(mappedKey);
        } else {
            return this.cache[mappedKey];
        }
    }

    /*
        Set element properties

        @param [object]: Key/value properties to set
    */
    set(props) {
        // Translate props
        for (let key in props) {
            if (props.hasOwnProperty(key)) {
                const mappedKey = this.mapStateKey(key);
                this.cache[mappedKey] = props[key];
            }
        }

        return this.setter(this.cache);
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

export default (element) => new Adapter(element);