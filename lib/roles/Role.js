'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

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
var Role = function Role(methods) {
    var role = function role(element, opts, prop) {
        var typeOfOpts = typeof opts === 'undefined' ? 'undefined' : _typeof(opts);

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
var createRole = function createRole(methods, values) {
    var newRole = new Role(methods);

    each(values, function (key, value) {
        newRole._map[key] = value;
    });

    return newRole;
};

module.exports = Role;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb2xlcy9Sb2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDcEMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUMsQUFpQnRCLElBQUksSUFBSSxHQUFHLFNBQVAsSUFBSSxDQUFhLE9BQU8sRUFBRTtBQUMxQixRQUFJLElBQUksR0FBRyxTQUFQLElBQUksQ0FBYSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUN0QyxZQUFJLFVBQVUsVUFBVSxJQUFJLHlDQUFKLElBQUksQ0FBQTs7O0FBQUMsQUFHN0IsWUFBSSxVQUFVLEtBQUssUUFBUSxJQUFJLElBQUksRUFBRTtBQUNqQyxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7O0FBQUMsU0FHakMsTUFBTSxJQUFJLFVBQVUsS0FBSyxRQUFRLEVBQUU7QUFDaEMsb0JBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ3ZCLHdCQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ2pDLENBQUM7OztBQUFDLGFBR04sTUFBTTtBQUNILDJCQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNsQzs7QUFFRCxlQUFPLElBQUksQ0FBQztLQUNmLENBQUM7O0FBRUYsUUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7O0FBRWYsUUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxNQUFNLEVBQUU7QUFDbEMsWUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEFBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3JFLENBQUM7Ozs7Ozs7Ozs7O0FBQUMsQUFjSCxRQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsTUFBTSxFQUFFOzs7QUFHekIsZUFBTyxBQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM1RixDQUFDOztBQUVGLFdBQU8sSUFBSSxDQUFDO0NBQ2Y7Ozs7Ozs7OztBQUFDLEFBU0YsSUFBSSxVQUFVLEdBQUcsU0FBYixVQUFVLENBQWEsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN4QyxRQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFaEMsUUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDL0IsZUFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDN0IsQ0FBQyxDQUFDOztBQUVILFdBQU8sT0FBTyxDQUFDO0NBQ2xCLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMiLCJmaWxlIjoiUm9sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xudmFyIGVhY2ggPSB1dGlscy5lYWNoO1xuXG4vKlxuICAgIFJvbGUgY2xhc3MgY29uc3RydWN0b3JcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT3B0aW9uYWwgbWV0aG9kcyBhbmQgcHJvcHMgdG8gYWRkOlxuICAgICAgICBuYW1lIFtzdHJpbmddOiAgICAgIE5hbWUgb2YgZ2VuZXJhdGVkIGdldHRlci9zZXR0ZXIgbWV0aG9kIG9uIEFjdG9yXG4gICAgICAgIF9tYXAgW29iamVjdF06ICAgICAgTWFwIEFjdG9yIHZhbHVlcyB0byB0aGVzZSB2YWx1ZXMgZm9yIHRoaXMgUm9sZVxuICAgICAgICBfdHlwZU1hcCBbb2JqZWN0XTogIE1hcCB2YWx1ZXMgdG8gdmFsdWUgdHlwZXNcbiAgICAgICAgaW5pdCBbZnVuY3Rpb25dOiAgICBDYWxsYmFjayB0byBydW4gd2hlbiB0aGlzIFJvbGUgaXMgYWRkZWQgdG8gYW4gQWN0b3JcbiAgICAgICAgc3RhcnQgW2Z1bmN0aW9uXTogICBDYWxsYmFjayB0byBydW4gd2hlbiBob3N0IEFjdG9yIHN0YXJ0cyBhbiBhY3Rpb25cbiAgICAgICAgY29tcGxldGUgW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gcnVuIHdoZW4gYWN0aW9uIGNvbXBsZXRlc1xuICAgICAgICBmcmFtZSBbZnVuY3Rpb25dOiAgIENhbGxiYWNrIHRvIGZpcmUgb25jZSBwZXIgZnJhbWVcbiAgICAgICAgdXBkYXRlIFtmdW5jdGlvbl06ICBDYWxsYmFjayB0byBmaXJlIHdoZW4gdmFsdWVzIGNoYW5nZVxuICAgICAgICBnZXQgW2Z1bmN0aW9uXTogICAgIFJlYWQgdmFsdWUgZnJvbSBhY3R1YWwgZWxlbWVudFxuICAgICAgICBzZXQgW2Z1bmN0aW9uXTogICAgIFNldCB2YWx1ZSBvbiBhY3R1YWwgZWxlbWVudFxuKi9cbnZhciBSb2xlID0gZnVuY3Rpb24gKG1ldGhvZHMpIHtcbiAgICB2YXIgcm9sZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRzLCBwcm9wKSB7XG4gICAgICAgIHZhciB0eXBlT2ZPcHRzID0gdHlwZW9mIG9wdHM7XG5cbiAgICAgICAgLy8gU2V0IHNpbmdsZSwgaWYgdGhpcyBpcyBhIHN0cmluZyBhbmQgd2UgaGF2ZSBhIHByb3BlcnR5XG4gICAgICAgIGlmICh0eXBlT2ZPcHRzID09PSAnc3RyaW5nJyAmJiBwcm9wKSB7XG4gICAgICAgICAgICByb2xlLnNldChlbGVtZW50LCBvcHRzLCBwcm9wKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNldCBtdWx0aSwgaWYgdGhpcyBpcyBhbiBvYmplY3RcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlT2ZPcHRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZWFjaChvcHRzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJvbGUuc2V0KGVsZW1lbnQsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBPciB0aGlzIGlzIGEgZ2V0IGlmIHdlIGhhdmUgYSBzdHJpbmcgYW5kIG5vIHByb3BzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcm9sZS5nZXQoZWxlbWVudCwgb3B0cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm9sZTtcbiAgICB9O1xuXG4gICAgcm9sZS5fbWFwID0ge307XG5cbiAgICBlYWNoKG1ldGhvZHMsIGZ1bmN0aW9uIChuYW1lLCBtZXRob2QpIHtcbiAgICAgICAgcm9sZVtuYW1lXSA9ICghdXRpbHMuaXNPYmoobWV0aG9kKSkgPyBtZXRob2QgOiB1dGlscy5jb3B5KG1ldGhvZCk7XG4gICAgfSk7XG5cblxuICAgIC8qXG4gICAgICAgIE1hcCB2YWx1ZSBrZXlzIG9yIGdlbmVyYXRlIG5ldyBSb2xlIHdpdGggdXBkYXRlZCBtYXBcblxuICAgICAgICBHZXR0ZXI6XG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byBtYXBcbiAgICAgICAgICAgIEByZXR1cm4gW3N0cmluZ106IE1hcHBlZCBrZXksIG9yIGtleSBpZiBubyBtYXBwZWQga2V5IGZvdW5kXG5cbiAgICAgICAgU2V0dGVyOiBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogTWFwIG9mIEFjdG9yIGtleXMgLT4gUm9sZSBrZXlzXG4gICAgICAgICAgICBAcmV0dXJuIFtSb2xlXTogTmV3IFJvbGUgd2l0aCB1bmlxdWUgbWFwXG4gICAgKi9cbiAgICByb2xlLm1hcCA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHN0cmluZywgZ2V0IG1hcHBlZCB2YWx1ZVxuICAgICAgICAvLyBPdGhlcndpc2UgdGhpcyBpcyBhIG1hcCwgZHVwbGljYXRlZCByb2xlIHdpdGggdXBkYXRlZCBtYXBcbiAgICAgICAgcmV0dXJuICh1dGlscy5pc1N0cmluZyh2YWx1ZXMpKSA/IHRoaXMuX21hcFt2YWx1ZXNdIHx8IHZhbHVlcyA6IGNyZWF0ZVJvbGUodGhpcywgdmFsdWVzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvbGU7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIG5ldyByb2xlXG5cbiAgICBAcGFyYW0gW29iamVjdF06IE9wdGlvbmFsIG1ldGhvZHMgYW5kIHByb3BzIHRvIGFkZFxuICAgIEBwYXJhbSBbdmFsdWVzVG9NYXBdOiBPdmVycmlkZSBleGlzdGluZyBtYXAgd2l0aCB0aGVzZSB2YWx1ZXNcbiAgICBAcmV0dXJuIFtSb2xlXTogTmV3IFJvbGVcbiovXG52YXIgY3JlYXRlUm9sZSA9IGZ1bmN0aW9uIChtZXRob2RzLCB2YWx1ZXMpIHtcbiAgICB2YXIgbmV3Um9sZSA9IG5ldyBSb2xlKG1ldGhvZHMpO1xuXG4gICAgZWFjaCh2YWx1ZXMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIG5ld1JvbGUuX21hcFtrZXldID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3Um9sZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUm9sZTsiXX0=