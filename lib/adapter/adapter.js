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

var Adapter = function () {
    function Adapter(props) {
        _classCallCheck(this, Adapter);

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
}();

exports.default = Adapter;

exports.default = function (props) {
    return new Adapter(props);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlxQjtBQUNqQixhQURpQixPQUNqQixDQUFZLEtBQVosRUFBbUI7OEJBREYsU0FDRTs7QUFDZixhQUFLLE9BQUwsR0FBZSxNQUFNLE9BQU4sQ0FEQTtBQUVmLGFBQUssS0FBTCxHQUFhLEVBQWIsQ0FGZTs7QUFJZixZQUFJLE1BQU0sTUFBTixFQUFjO0FBQ2QsaUJBQUssTUFBTCxHQUFjLE1BQU0sTUFBTixDQURBO1NBQWxCOztBQUlBLFlBQUksTUFBTSxNQUFOLEVBQWM7QUFDZCxpQkFBSyxNQUFMLEdBQWMsTUFBTSxNQUFOLENBREE7U0FBbEI7O0FBSUEsWUFBSSxNQUFNLFFBQU4sRUFBZ0I7QUFDaEIsaUJBQUssUUFBTCxHQUFnQixNQUFNLFFBQU4sQ0FEQTtTQUFwQjs7QUFJQSxZQUFJLE1BQU0sWUFBTixFQUFvQjtBQUNwQixpQkFBSyxZQUFMLEdBQW9CLE1BQU0sWUFBTixDQURBO1NBQXhCO0tBaEJKOzs7Ozs7OztBQURpQixzQkE0QmpCLG1CQUFJLEtBQUssU0FBUztBQUNkLFlBQU0sWUFBWSxLQUFLLFdBQUwsQ0FBaUIsR0FBakIsQ0FBWixDQURROztBQUdkLFlBQUksV0FBVyxDQUFDLEtBQUssS0FBTCxDQUFXLGNBQVgsQ0FBMEIsR0FBMUIsQ0FBRCxFQUFpQztBQUM1QyxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxHQUFYLElBQWtCLEtBQUssTUFBTCxDQUFZLFNBQVosQ0FBbEIsQ0FEcUM7U0FBaEQsTUFFTztBQUNILG1CQUFPLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBUCxDQURHO1NBRlA7Ozs7Ozs7O0FBL0JhLHNCQTJDakIsbUJBQUksT0FBTztBQUNQLFlBQU0sa0JBQWtCLEVBQWxCOzs7QUFEQyxhQUlGLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLGdCQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLG9CQUFNLFlBQVksS0FBSyxXQUFMLENBQWlCLEdBQWpCLENBQVosQ0FEcUI7QUFFM0IscUJBQUssS0FBTCxDQUFXLEdBQVgsSUFBa0IsZ0JBQWdCLFNBQWhCLElBQTZCLE1BQU0sR0FBTixDQUE3QixDQUZTO2FBQS9CO1NBREo7O0FBT0EsZUFBTyxLQUFLLE1BQUwsQ0FBWSxlQUFaLENBQVAsQ0FYTzs7Ozs7OztBQTNDTSxzQkE0RGpCLHlCQUFPLEtBQUs7QUFDUixlQUFPLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBUCxDQURROzs7Ozs7O0FBNURLLHNCQW1FakIseUJBQU8sT0FBTztBQUNWLGFBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDbkIsZ0JBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDM0IscUJBQUssT0FBTCxDQUFhLEdBQWIsSUFBb0IsTUFBTSxHQUFOLENBQXBCLENBRDJCO2FBQS9CO1NBREo7Ozs7Ozs7OztBQXBFYSxzQkFpRmpCLG1DQUFZLEtBQUs7QUFDYixlQUFPLElBQUMsQ0FBSyxRQUFMLEdBQWlCLEtBQUssUUFBTCxDQUFjLEdBQWQsS0FBc0IsR0FBdEIsR0FBNEIsR0FBOUMsQ0FETTs7Ozs7Ozs7O0FBakZBLHNCQTJGakIscUNBQWEsS0FBSztBQUNkLGVBQU8sSUFBQyxDQUFLLFlBQUwsR0FBcUIsS0FBSyxZQUFMLENBQWtCLEtBQUssV0FBTCxDQUFpQixHQUFqQixDQUFsQixDQUF0QixHQUFpRSxLQUFqRSxDQURPOzs7V0EzRkQ7Ozs7O2tCQWdHTixVQUFDLEtBQUQ7V0FBVyxJQUFJLE9BQUosQ0FBWSxLQUFaO0NBQVgiLCJmaWxlIjoiYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgIyBBZGFwdGVyIGNsYXNzXG4gICAgIyMgUHJvdmlkZXMgYSBnZXR0ZXIvc2V0dGVyIHdyYXBwZXIgYW5kIHByb3BlcnR5IGNhY2hlIGZvciBkaWZmZXJlbnQgZWxlbWVudCB0eXBlc1xuXG4gICAgT3ZlcnJpZGUgYGdldHRlcmAgYW5kIGBzZXR0ZXJgIHRvIHJlaW1wbGVtZW50IHRoZSBpbnRlcmZhY2UgZm9yIG5ldyBlbGVtZW50IHR5cGVzLlxuXG4gICAgU2V0IGBFeHRlbmRlZC5wcm90b3R5cGUuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gICAgQVBJLXNwZWNpZmljIGtleXMuIEZvciBpbnN0YW5jZSwgeyB4OiAndHJhbnNsYXRlWCcgfS4gXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS52YWx1ZVR5cGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHJldHVybiBhIHZhbHVlIHR5cGUgd2l0aFxuICAgIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBwcm9wcy5lbGVtZW50O1xuICAgICAgICB0aGlzLmNhY2hlID0ge307XG5cbiAgICAgICAgaWYgKHByb3BzLmdldHRlcikge1xuICAgICAgICAgICAgdGhpcy5nZXR0ZXIgPSBwcm9wcy5nZXR0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuc2V0dGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRlciA9IHByb3BzLnNldHRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZU1hcCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZU1hcCA9IHByb3BzLnN0YXRlTWFwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnZhbHVlVHlwZU1hcCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZVR5cGVNYXAgPSBwcm9wcy52YWx1ZVR5cGVNYXA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBHZXQgZWxlbWVudCBwcm9wZXJ0eVxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIHJlYWRcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogSWYgYHRydWVgLCB3aWxsIG92ZXJyaWRlIGNhY2hlZCBwcm9wZXJ0eVxuICAgICovXG4gICAgZ2V0KGtleSwgcmVmcmVzaCkge1xuICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSB0aGlzLm1hcFN0YXRlS2V5KGtleSk7XG5cbiAgICAgICAgaWYgKHJlZnJlc2ggfHwgIXRoaXMuY2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSA9IHRoaXMuZ2V0dGVyKG1hcHBlZEtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU2V0IGVsZW1lbnQgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogS2V5L3ZhbHVlIHByb3BlcnRpZXMgdG8gc2V0XG4gICAgKi9cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZFByb3BzID0ge307XG5cbiAgICAgICAgLy8gVHJhbnNsYXRlIHByb3BzXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSB0aGlzLm1hcFN0YXRlS2V5KGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gdHJhbnNsYXRlZFByb3BzW21hcHBlZEtleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGVyKHRyYW5zbGF0ZWRQcm9wcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBnZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3QgXG4gICAgKi9cbiAgICBnZXR0ZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRba2V5XTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBPdmVycmlkYWJsZSBlbGVtZW50IHNldHRlciAtIGRlZmF1bHQgZm9yIHBsYWluIG9iamVjdFxuICAgICovXG4gICAgc2V0dGVyKHByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBNYXAgc3RhdGUga2V5IGFzIHBlciBgc3RhdGVNYXBgLCBpZiBwcmVzZW50XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gbWFwXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ106IE1hcHBlZCBrZXksIG9yIG9yaWdpbmFsIGtleSBpZiBub25lIGZvdW5kXG4gICAgKi9cbiAgICBtYXBTdGF0ZUtleShrZXkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnN0YXRlTWFwKSA/IHRoaXMuc3RhdGVNYXBba2V5XSB8fCBrZXkgOiBrZXk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgR2V0IHZhbHVlVHlwZSBvZiBwcm92aWRlZCBrZXlcblxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgcHJvcGVydHkgdG8gbWFwXG4gICAgICAgIEByZXR1cm4gW3ZhbHVlVHlwZV06IFZhbHVlIHR5cGUgb2YgcHJvcGVydHlcbiAgICAqL1xuICAgIGdldFZhbHVlVHlwZShrZXkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlVHlwZU1hcCkgPyB0aGlzLnZhbHVlVHlwZU1hcFt0aGlzLm1hcFN0YXRlS2V5KGtleSldIDogZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBBZGFwdGVyKHByb3BzKTsiXX0=