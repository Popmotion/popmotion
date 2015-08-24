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
    var role = this;

    role._map = {};

    each(methods, function (name, method) {
        role[name] = (!utils.isObj(method)) ? method : utils.copy(method);
    });
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

Role.prototype = {

    /*
        Map value keys or generate new Role with updated map

        Getter:
            @param [string]: Key to map
            @return [string]: Mapped key, or key if no mapped key found

        Setter: 
            @param [object]: Map of Actor keys -> Role keys
            @return [Role]: New Role with unique map
    */
    map: function (values) {
        // If this is a string, get mapped value
        // Otherwise this is a map, duplicated role with updated map
        return (utils.isString(values)) ? this._map[values] || values : createRole(this, values);
    }
};

module.exports = Role;