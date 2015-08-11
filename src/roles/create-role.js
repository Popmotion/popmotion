var Role = require('./Role');

/*
    Create new Role
*/
module.exports = function (opts) {
    var NewRole = function () {
            Role.call(this);
        },
        methodName = '';

    NewRole.prototype = Object.create(Role.prototype);

    for (methodName in opts) {
        if (opts.hasOwnProperty(methodName)) {
            NewRole.prototype[methodName] = opts[methodName];
        }
    }

    NewRole.prototype.constructor = NewRole;

    return NewRole;
};