'use strict';

var utils = require('../inc/utils');
var each = utils.each;

/*
    Role class constructor

    @param [object]: Optional methods and props to add:
        name [string]:      Name of generated getter/setter method on Actor
        _map [object]:      Map Actor values to these values for this Role
        _typeMap [object]:  Map values to value types
        init [function]:    Callback to run when this Role is added to an Actor
        start [function]:   Callback to run when host Actor starts an action
        complete [function]: Callback to run when action completes
        frame [function]:   Callback to fire once per frame
        update [function]:  Callback to fire when values change
        get [function]:     Read value from actual element
        set [function]:     Set value on actual element
*/
var Role = function (methods) {
    var role = function (element, opts, prop) {
        var typeOfOpts = typeof opts;

        // Set single, if this is a string and we have a property
        if (typeOfOpts === 'string' && prop) {
            role.set(element, opts, prop);

            // Set multi, if this is an object
        } else if (typeOfOpts === 'object') {
                each(opts, function (key, value) {
                    role.set(element, key, value);
                });

                // Or this is a get if we have a string and no props
            } else {
                    return role.get(element, opts);
                }

        return role;
    };

    role._map = {};

    each(methods, function (name, method) {
        role[name] = !utils.isObj(method) ? method : utils.copy(method);
    });

    /*
        Map value keys or generate new Role with updated map
         Getter:
            @param [string]: Key to map
            @return [string]: Mapped key, or key if no mapped key found
         Setter: 
            @param [object]: Map of Actor keys -> Role keys
            @return [Role]: New Role with unique map
    */
    role.map = function (values) {
        // If this is a string, get mapped value
        // Otherwise this is a map, duplicated role with updated map
        return utils.isString(values) ? this._map[values] || values : createRole(this, values);
    };

    return role;
};

/*
    Create a new role

    @param [object]: Optional methods and props to add
    @param [valuesToMap]: Override existing map with these values
    @return [Role]: New Role
*/
var createRole = function (methods, values) {
    var newRole = new Role(methods);

    each(values, function (key, value) {
        newRole._map[key] = value;
    });

    return newRole;
};

module.exports = Role;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb2xlcy9Sb2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFDLEFBaUJ0QixJQUFJLElBQUksR0FBRyxVQUFVLE9BQU8sRUFBRTtBQUMxQixRQUFJLElBQUksR0FBRyxVQUFVLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3RDLFlBQUksVUFBVSxHQUFHLE9BQU8sSUFBSTs7O0FBQUMsQUFHN0IsWUFBSSxVQUFVLEtBQUssUUFBUSxJQUFJLElBQUksRUFBRTtBQUNqQyxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7O0FBQUMsU0FHakMsTUFBTSxJQUFJLFVBQVUsS0FBSyxRQUFRLEVBQUU7QUFDaEMsb0JBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ3ZCLHdCQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ2pDLENBQUM7OztBQUFDLGFBR04sTUFBTTtBQUNILDJCQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNsQzs7QUFFRCxlQUFPLElBQUksQ0FBQztLQUNmLENBQUM7O0FBRUYsUUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7O0FBRWYsUUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxNQUFNLEVBQUU7QUFDbEMsWUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEFBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3JFLENBQUM7Ozs7Ozs7Ozs7O0FBQUMsQUFjSCxRQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsTUFBTSxFQUFFOzs7QUFHekIsZUFBTyxBQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM1RixDQUFDOztBQUVGLFdBQU8sSUFBSSxDQUFDO0NBQ2Y7Ozs7Ozs7OztBQUFDLEFBU0YsSUFBSSxVQUFVLEdBQUcsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ3hDLFFBQUksT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVoQyxRQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUMvQixlQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUM3QixDQUFDLENBQUM7O0FBRUgsV0FBTyxPQUFPLENBQUM7Q0FDbEIsQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyIsImZpbGUiOiJSb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG52YXIgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbi8qXG4gICAgUm9sZSBjbGFzcyBjb25zdHJ1Y3RvclxuXG4gICAgQHBhcmFtIFtvYmplY3RdOiBPcHRpb25hbCBtZXRob2RzIGFuZCBwcm9wcyB0byBhZGQ6XG4gICAgICAgIG5hbWUgW3N0cmluZ106ICAgICAgTmFtZSBvZiBnZW5lcmF0ZWQgZ2V0dGVyL3NldHRlciBtZXRob2Qgb24gQWN0b3JcbiAgICAgICAgX21hcCBbb2JqZWN0XTogICAgICBNYXAgQWN0b3IgdmFsdWVzIHRvIHRoZXNlIHZhbHVlcyBmb3IgdGhpcyBSb2xlXG4gICAgICAgIF90eXBlTWFwIFtvYmplY3RdOiAgTWFwIHZhbHVlcyB0byB2YWx1ZSB0eXBlc1xuICAgICAgICBpbml0IFtmdW5jdGlvbl06ICAgIENhbGxiYWNrIHRvIHJ1biB3aGVuIHRoaXMgUm9sZSBpcyBhZGRlZCB0byBhbiBBY3RvclxuICAgICAgICBzdGFydCBbZnVuY3Rpb25dOiAgIENhbGxiYWNrIHRvIHJ1biB3aGVuIGhvc3QgQWN0b3Igc3RhcnRzIGFuIGFjdGlvblxuICAgICAgICBjb21wbGV0ZSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBydW4gd2hlbiBhY3Rpb24gY29tcGxldGVzXG4gICAgICAgIGZyYW1lIFtmdW5jdGlvbl06ICAgQ2FsbGJhY2sgdG8gZmlyZSBvbmNlIHBlciBmcmFtZVxuICAgICAgICB1cGRhdGUgW2Z1bmN0aW9uXTogIENhbGxiYWNrIHRvIGZpcmUgd2hlbiB2YWx1ZXMgY2hhbmdlXG4gICAgICAgIGdldCBbZnVuY3Rpb25dOiAgICAgUmVhZCB2YWx1ZSBmcm9tIGFjdHVhbCBlbGVtZW50XG4gICAgICAgIHNldCBbZnVuY3Rpb25dOiAgICAgU2V0IHZhbHVlIG9uIGFjdHVhbCBlbGVtZW50XG4qL1xudmFyIFJvbGUgPSBmdW5jdGlvbiAobWV0aG9kcykge1xuICAgIHZhciByb2xlID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdHMsIHByb3ApIHtcbiAgICAgICAgdmFyIHR5cGVPZk9wdHMgPSB0eXBlb2Ygb3B0cztcblxuICAgICAgICAvLyBTZXQgc2luZ2xlLCBpZiB0aGlzIGlzIGEgc3RyaW5nIGFuZCB3ZSBoYXZlIGEgcHJvcGVydHlcbiAgICAgICAgaWYgKHR5cGVPZk9wdHMgPT09ICdzdHJpbmcnICYmIHByb3ApIHtcbiAgICAgICAgICAgIHJvbGUuc2V0KGVsZW1lbnQsIG9wdHMsIHByb3ApO1xuICAgICAgICBcbiAgICAgICAgLy8gU2V0IG11bHRpLCBpZiB0aGlzIGlzIGFuIG9iamVjdFxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVPZk9wdHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBlYWNoKG9wdHMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcm9sZS5zZXQoZWxlbWVudCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIHRoaXMgaXMgYSBnZXQgaWYgd2UgaGF2ZSBhIHN0cmluZyBhbmQgbm8gcHJvcHNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByb2xlLmdldChlbGVtZW50LCBvcHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByb2xlO1xuICAgIH07XG5cbiAgICByb2xlLl9tYXAgPSB7fTtcblxuICAgIGVhY2gobWV0aG9kcywgZnVuY3Rpb24gKG5hbWUsIG1ldGhvZCkge1xuICAgICAgICByb2xlW25hbWVdID0gKCF1dGlscy5pc09iaihtZXRob2QpKSA/IG1ldGhvZCA6IHV0aWxzLmNvcHkobWV0aG9kKTtcbiAgICB9KTtcblxuXG4gICAgLypcbiAgICAgICAgTWFwIHZhbHVlIGtleXMgb3IgZ2VuZXJhdGUgbmV3IFJvbGUgd2l0aCB1cGRhdGVkIG1hcFxuXG4gICAgICAgIEdldHRlcjpcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIG1hcFxuICAgICAgICAgICAgQHJldHVybiBbc3RyaW5nXTogTWFwcGVkIGtleSwgb3Iga2V5IGlmIG5vIG1hcHBlZCBrZXkgZm91bmRcblxuICAgICAgICBTZXR0ZXI6IFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBNYXAgb2YgQWN0b3Iga2V5cyAtPiBSb2xlIGtleXNcbiAgICAgICAgICAgIEByZXR1cm4gW1JvbGVdOiBOZXcgUm9sZSB3aXRoIHVuaXF1ZSBtYXBcbiAgICAqL1xuICAgIHJvbGUubWFwID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgc3RyaW5nLCBnZXQgbWFwcGVkIHZhbHVlXG4gICAgICAgIC8vIE90aGVyd2lzZSB0aGlzIGlzIGEgbWFwLCBkdXBsaWNhdGVkIHJvbGUgd2l0aCB1cGRhdGVkIG1hcFxuICAgICAgICByZXR1cm4gKHV0aWxzLmlzU3RyaW5nKHZhbHVlcykpID8gdGhpcy5fbWFwW3ZhbHVlc10gfHwgdmFsdWVzIDogY3JlYXRlUm9sZSh0aGlzLCB2YWx1ZXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9sZTtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgbmV3IHJvbGVcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT3B0aW9uYWwgbWV0aG9kcyBhbmQgcHJvcHMgdG8gYWRkXG4gICAgQHBhcmFtIFt2YWx1ZXNUb01hcF06IE92ZXJyaWRlIGV4aXN0aW5nIG1hcCB3aXRoIHRoZXNlIHZhbHVlc1xuICAgIEByZXR1cm4gW1JvbGVdOiBOZXcgUm9sZVxuKi9cbnZhciBjcmVhdGVSb2xlID0gZnVuY3Rpb24gKG1ldGhvZHMsIHZhbHVlcykge1xuICAgIHZhciBuZXdSb2xlID0gbmV3IFJvbGUobWV0aG9kcyk7XG5cbiAgICBlYWNoKHZhbHVlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbmV3Um9sZS5fbWFwW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdSb2xlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb2xlOyJdfQ==