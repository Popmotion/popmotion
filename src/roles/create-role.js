var Role = require('./Role'),
    each = require('../inc/utils').each;

/*
    Create new Role
*/
module.exports = function (opts) {
    var NewRole = function () {
            Role.call(this, opts);
        };

    // Copy base Role prototype
    NewRole.prototype = Object.create(Role.prototype);

    // Add methods to new role prototype
    each(opts, function (key, value) {
        NewRole.prototype[key] = value;
    });

    // Assign new constructor
    NewRole.prototype.constructor = NewRole;

    return NewRole;
};