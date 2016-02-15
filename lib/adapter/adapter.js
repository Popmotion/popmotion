"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
    # Adapter class
    ## Provides a getter/setter wrapper and property cache for different element types

    Override `getter` and `setter` to reimplement the interface for new element types.

    Set `Extended.prototype.stateMap` as an object key/value map to translate incoming keys to
    API-specific keys. For instance, { x: 'translateX' }. 

    Set `Extended.prototype.valueTypeMap` as an object key/value map to return a value type with
    `getValueType(key)` (key will be mapped according to `stateMap`)
*/

var Adapter = (function () {
    function Adapter(element) {
        _classCallCheck(this, Adapter);

        this.element = element;
        this.cache = {};
    }

    /*
        Get element property
         @param [string]: Key to read
        @param [boolean]: If `true`, will override cached property
    */

    Adapter.prototype.get = function get(key, refresh) {
        var mappedKey = this.mapStateKey(key);

        if (refresh || !this.cache.hasOwnProperty(key)) {
            return this.cache[key] = this.getter(mappedKey);
        } else {
            return this.cache[key];
        }
    };

    /*
        Set element properties
         @param [object]: Key/value properties to set
    */

    Adapter.prototype.set = function set(props) {
        var translatedProps = {};

        // Translate props
        for (var key in props) {
            if (props.hasOwnProperty(key)) {
                var mappedKey = this.mapStateKey(key);
                this.cache[key] = translatedProps[mappedKey] = props[key];
            }
        }

        return this.setter(translatedProps);
    };

    /*
        Overridable element getter - default for plain object 
    */

    Adapter.prototype.getter = function getter(key) {
        return this.element[key];
    };

    /*
        Overridable element setter - default for plain object
    */

    Adapter.prototype.setter = function setter(props) {
        for (var key in props) {
            if (props.hasOwnProperty(key)) {
                this.element[key] = props[key];
            }
        }
    };

    /*
        Map state key as per `stateMap`, if present
         @param [string]: Key to map
        @return [string]: Mapped key, or original key if none found
    */

    Adapter.prototype.mapStateKey = function mapStateKey(key) {
        return this.stateMap ? this.stateMap[key] || key : key;
    };

    /*
        Get valueType of provided key
         @param [string]: Name of property to map
        @return [valueType]: Value type of property
    */

    Adapter.prototype.getValueType = function getValueType(key) {
        return this.valueTypeMap ? this.valueTypeMap[this.mapStateKey(key)] : false;
    };

    return Adapter;
})();

exports.default = function (props) {
    return new Adapter(props);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlNLE9BQU87QUFDVCxhQURFLE9BQU8sQ0FDRyxPQUFPLEVBQUU7OEJBRG5CLE9BQU87O0FBRUwsWUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDbkI7Ozs7Ozs7QUFBQTtBQUpDLFdBQU8sV0FZVCxHQUFHLGdCQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7QUFDZCxZQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV4QyxZQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzVDLG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuRCxNQUFNO0FBQ0gsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtLQUNKOzs7Ozs7O0FBcEJDLFdBQU8sV0EyQlQsR0FBRyxnQkFBQyxLQUFLLEVBQUU7QUFDUCxZQUFNLGVBQWUsR0FBRyxFQUFFOzs7QUFBQyxBQUczQixhQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtBQUNuQixnQkFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzNCLG9CQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLG9CQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0Q7U0FDSjs7QUFFRCxlQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDdkM7Ozs7OztBQXZDQyxXQUFPLFdBNENULE1BQU0sbUJBQUMsR0FBRyxFQUFFO0FBQ1IsZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVCOzs7Ozs7QUE5Q0MsV0FBTyxXQW1EVCxNQUFNLG1CQUFDLEtBQUssRUFBRTtBQUNWLGFBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO0FBQ25CLGdCQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDM0Isb0JBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7S0FDSjs7Ozs7Ozs7QUF6REMsV0FBTyxXQWlFVCxXQUFXLHdCQUFDLEdBQUcsRUFBRTtBQUNiLGVBQU8sQUFBQyxJQUFJLENBQUMsUUFBUSxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUM1RDs7Ozs7Ozs7QUFuRUMsV0FBTyxXQTJFVCxZQUFZLHlCQUFDLEdBQUcsRUFBRTtBQUNkLGVBQU8sQUFBQyxJQUFJLENBQUMsWUFBWSxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUNqRjs7V0E3RUMsT0FBTzs7O2tCQWdGRSxVQUFDLEtBQUs7V0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7Q0FBQSIsImZpbGUiOiJhZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICAjIEFkYXB0ZXIgY2xhc3NcbiAgICAjIyBQcm92aWRlcyBhIGdldHRlci9zZXR0ZXIgd3JhcHBlciBhbmQgcHJvcGVydHkgY2FjaGUgZm9yIGRpZmZlcmVudCBlbGVtZW50IHR5cGVzXG5cbiAgICBPdmVycmlkZSBgZ2V0dGVyYCBhbmQgYHNldHRlcmAgdG8gcmVpbXBsZW1lbnQgdGhlIGludGVyZmFjZSBmb3IgbmV3IGVsZW1lbnQgdHlwZXMuXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS5zdGF0ZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gdHJhbnNsYXRlIGluY29taW5nIGtleXMgdG9cbiAgICBBUEktc3BlY2lmaWMga2V5cy4gRm9yIGluc3RhbmNlLCB7IHg6ICd0cmFuc2xhdGVYJyB9LiBcblxuICAgIFNldCBgRXh0ZW5kZWQucHJvdG90eXBlLnZhbHVlVHlwZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gcmV0dXJuIGEgdmFsdWUgdHlwZSB3aXRoXG4gICAgYGdldFZhbHVlVHlwZShrZXkpYCAoa2V5IHdpbGwgYmUgbWFwcGVkIGFjY29yZGluZyB0byBgc3RhdGVNYXBgKVxuKi9cbmNsYXNzIEFkYXB0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCBlbGVtZW50IHByb3BlcnR5XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gcmVhZFxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBJZiBgdHJ1ZWAsIHdpbGwgb3ZlcnJpZGUgY2FjaGVkIHByb3BlcnR5XG4gICAgKi9cbiAgICBnZXQoa2V5LCByZWZyZXNoKSB7XG4gICAgICAgIGNvbnN0IG1hcHBlZEtleSA9IHRoaXMubWFwU3RhdGVLZXkoa2V5KTtcblxuICAgICAgICBpZiAocmVmcmVzaCB8fCAhdGhpcy5jYWNoZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldID0gdGhpcy5nZXR0ZXIobWFwcGVkS2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTZXQgZWxlbWVudCBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBLZXkvdmFsdWUgcHJvcGVydGllcyB0byBzZXRcbiAgICAqL1xuICAgIHNldChwcm9wcykge1xuICAgICAgICBjb25zdCB0cmFuc2xhdGVkUHJvcHMgPSB7fTtcblxuICAgICAgICAvLyBUcmFuc2xhdGUgcHJvcHNcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcHBlZEtleSA9IHRoaXMubWFwU3RhdGVLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSB0cmFuc2xhdGVkUHJvcHNbbWFwcGVkS2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0ZXIodHJhbnNsYXRlZFByb3BzKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBPdmVycmlkYWJsZSBlbGVtZW50IGdldHRlciAtIGRlZmF1bHQgZm9yIHBsYWluIG9iamVjdCBcbiAgICAqL1xuICAgIGdldHRlcihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFtrZXldO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE92ZXJyaWRhYmxlIGVsZW1lbnQgc2V0dGVyIC0gZGVmYXVsdCBmb3IgcGxhaW4gb2JqZWN0XG4gICAgKi9cbiAgICBzZXR0ZXIocHJvcHMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE1hcCBzdGF0ZSBrZXkgYXMgcGVyIGBzdGF0ZU1hcGAsIGlmIHByZXNlbnRcblxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byBtYXBcbiAgICAgICAgQHJldHVybiBbc3RyaW5nXTogTWFwcGVkIGtleSwgb3Igb3JpZ2luYWwga2V5IGlmIG5vbmUgZm91bmRcbiAgICAqL1xuICAgIG1hcFN0YXRlS2V5KGtleSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuc3RhdGVNYXApID8gdGhpcy5zdGF0ZU1hcFtrZXldIHx8IGtleSA6IGtleTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBHZXQgdmFsdWVUeXBlIG9mIHByb3ZpZGVkIGtleVxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBwcm9wZXJ0eSB0byBtYXBcbiAgICAgICAgQHJldHVybiBbdmFsdWVUeXBlXTogVmFsdWUgdHlwZSBvZiBwcm9wZXJ0eVxuICAgICovXG4gICAgZ2V0VmFsdWVUeXBlKGtleSkge1xuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWVUeXBlTWFwKSA/IHRoaXMudmFsdWVUeXBlTWFwW3RoaXMubWFwU3RhdGVLZXkoa2V5KV0gOiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gbmV3IEFkYXB0ZXIocHJvcHMpOyJdfQ==