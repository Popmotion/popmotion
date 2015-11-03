"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var maxHistorySize = 3;

var History = (function () {

    /*
        History constructor
        
        @param [var]: Variable to store in first history slot
        @param [int] (optional): Maximum size of history
    */

    function History(obj) {
        var max = arguments.length <= 1 || arguments[1] === undefined ? maxHistorySize : arguments[1];

        _classCallCheck(this, History);

        this.max = max;
        this.entries = [];
        this.add(obj);
    }

    /*
        Push new var to history
        
        Shift out oldest entry if we've reached maximum capacity
        
        @param [var]: Variable to push into history.entries
    */

    History.prototype.add = function add(obj) {
        this.entries.push(obj);

        if (this.getSize() >= this.max) {
            this.entries.shift();
        }
    };

    /*
        Get variable at specified index
         @param [int]: Index
        @return [var]: Var found at specified index
    */

    History.prototype.get = function get() {
        var i = arguments.length <= 0 || arguments[0] === undefined ? this.getSize() - 1 : arguments[0];

        return this.entries[i];
    };

    /*
        Get the second newest history entry
        
        @return [var]: Entry found at index size - 2
    */

    History.prototype.getPrevious = function getPrevious() {
        return this.get(this.getSize() - 2);
    };

    /*
        Get current history size
        
        @return [int]: Current length of entries.length
    */

    History.prototype.getSize = function getSize() {
        return this.entries.length;
    };

    return History;
})();

module.exports = History;