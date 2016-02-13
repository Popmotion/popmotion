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
})();

exports.default = Adapter;

exports.default = function (props) {
    return new Adapter(props);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlxQixPQUFPO0FBQ3hCLGFBRGlCLE9BQU8sQ0FDWixLQUFLLEVBQUU7OEJBREYsT0FBTzs7QUFFcEIsWUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQzdCLFlBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUVoQixZQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDZCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQzlCOztBQUVELFlBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNkLGdCQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDOUI7O0FBRUQsWUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ2hCLGdCQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDbEM7O0FBRUQsWUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO0FBQ3BCLGdCQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7U0FDMUM7S0FDSjs7Ozs7OztBQUFBO0FBcEJnQixXQUFPLFdBNEJ4QixHQUFHLGdCQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7QUFDZCxZQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV4QyxZQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzVDLG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuRCxNQUFNO0FBQ0gsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtLQUNKOzs7Ozs7O0FBcENnQixXQUFPLFdBMkN4QixHQUFHLGdCQUFDLEtBQUssRUFBRTtBQUNQLFlBQU0sZUFBZSxHQUFHLEVBQUU7OztBQUFDLEFBRzNCLGFBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO0FBQ25CLGdCQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDM0Isb0JBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsb0JBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM3RDtTQUNKOztBQUVELGVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUN2Qzs7Ozs7O0FBdkRnQixXQUFPLFdBNER4QixNQUFNLG1CQUFDLEdBQUcsRUFBRTtBQUNSLGVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM1Qjs7Ozs7O0FBOURnQixXQUFPLFdBbUV4QixNQUFNLG1CQUFDLEtBQUssRUFBRTtBQUNWLGFBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO0FBQ25CLGdCQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDM0Isb0JBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7S0FDSjs7Ozs7Ozs7QUF6RWdCLFdBQU8sV0FpRnhCLFdBQVcsd0JBQUMsR0FBRyxFQUFFO0FBQ2IsZUFBTyxBQUFDLElBQUksQ0FBQyxRQUFRLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQzVEOzs7Ozs7OztBQW5GZ0IsV0FBTyxXQTJGeEIsWUFBWSx5QkFBQyxHQUFHLEVBQUU7QUFDZCxlQUFPLEFBQUMsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDakY7O1dBN0ZnQixPQUFPOzs7a0JBQVAsT0FBTzs7a0JBZ0diLFVBQUMsS0FBSztXQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztDQUFBIiwiZmlsZSI6ImFkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgICMgQWRhcHRlciBjbGFzc1xuICAgICMjIFByb3ZpZGVzIGEgZ2V0dGVyL3NldHRlciB3cmFwcGVyIGFuZCBwcm9wZXJ0eSBjYWNoZSBmb3IgZGlmZmVyZW50IGVsZW1lbnQgdHlwZXNcblxuICAgIE92ZXJyaWRlIGBnZXR0ZXJgIGFuZCBgc2V0dGVyYCB0byByZWltcGxlbWVudCB0aGUgaW50ZXJmYWNlIGZvciBuZXcgZWxlbWVudCB0eXBlcy5cblxuICAgIFNldCBgRXh0ZW5kZWQucHJvdG90eXBlLnN0YXRlTWFwYCBhcyBhbiBvYmplY3Qga2V5L3ZhbHVlIG1hcCB0byB0cmFuc2xhdGUgaW5jb21pbmcga2V5cyB0b1xuICAgIEFQSS1zcGVjaWZpYyBrZXlzLiBGb3IgaW5zdGFuY2UsIHsgeDogJ3RyYW5zbGF0ZVgnIH0uIFxuXG4gICAgU2V0IGBFeHRlbmRlZC5wcm90b3R5cGUudmFsdWVUeXBlTWFwYCBhcyBhbiBvYmplY3Qga2V5L3ZhbHVlIG1hcCB0byByZXR1cm4gYSB2YWx1ZSB0eXBlIHdpdGhcbiAgICBgZ2V0VmFsdWVUeXBlKGtleSlgIChrZXkgd2lsbCBiZSBtYXBwZWQgYWNjb3JkaW5nIHRvIGBzdGF0ZU1hcGApXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gcHJvcHMuZWxlbWVudDtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xuXG4gICAgICAgIGlmIChwcm9wcy5nZXR0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0dGVyID0gcHJvcHMuZ2V0dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnNldHRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXR0ZXIgPSBwcm9wcy5zZXR0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuc3RhdGVNYXApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVNYXAgPSBwcm9wcy5zdGF0ZU1hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy52YWx1ZVR5cGVNYXApIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVUeXBlTWFwID0gcHJvcHMudmFsdWVUeXBlTWFwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgR2V0IGVsZW1lbnQgcHJvcGVydHlcblxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byByZWFkXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IElmIGB0cnVlYCwgd2lsbCBvdmVycmlkZSBjYWNoZWQgcHJvcGVydHlcbiAgICAqL1xuICAgIGdldChrZXksIHJlZnJlc2gpIHtcbiAgICAgICAgY29uc3QgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuXG4gICAgICAgIGlmIChyZWZyZXNoIHx8ICF0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gPSB0aGlzLmdldHRlcihtYXBwZWRLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFNldCBlbGVtZW50IHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEtleS92YWx1ZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG4gICAgc2V0KHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRQcm9wcyA9IHt9O1xuXG4gICAgICAgIC8vIFRyYW5zbGF0ZSBwcm9wc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVba2V5XSA9IHRyYW5zbGF0ZWRQcm9wc1ttYXBwZWRLZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRlcih0cmFuc2xhdGVkUHJvcHMpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE92ZXJyaWRhYmxlIGVsZW1lbnQgZ2V0dGVyIC0gZGVmYXVsdCBmb3IgcGxhaW4gb2JqZWN0IFxuICAgICovXG4gICAgZ2V0dGVyKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50W2tleV07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBzZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3RcbiAgICAqL1xuICAgIHNldHRlcihwcm9wcykge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50W2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFwIHN0YXRlIGtleSBhcyBwZXIgYHN0YXRlTWFwYCwgaWYgcHJlc2VudFxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBNYXBwZWQga2V5LCBvciBvcmlnaW5hbCBrZXkgaWYgbm9uZSBmb3VuZFxuICAgICovXG4gICAgbWFwU3RhdGVLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zdGF0ZU1hcCkgPyB0aGlzLnN0YXRlTWFwW2tleV0gfHwga2V5IDoga2V5O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCB2YWx1ZVR5cGUgb2YgcHJvdmlkZWQga2V5XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHByb3BlcnR5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFt2YWx1ZVR5cGVdOiBWYWx1ZSB0eXBlIG9mIHByb3BlcnR5XG4gICAgKi9cbiAgICBnZXRWYWx1ZVR5cGUoa2V5KSB7XG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZVR5cGVNYXApID8gdGhpcy52YWx1ZVR5cGVNYXBbdGhpcy5tYXBTdGF0ZUtleShrZXkpXSA6IGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgQWRhcHRlcihwcm9wcyk7Il19