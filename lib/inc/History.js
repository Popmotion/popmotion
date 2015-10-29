"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

    _createClass(History, [{
        key: "add",
        value: function add(obj) {
            this.entries.push(obj);

            if (this.getSize() >= this.max) {
                this.entries.shift();
            }
        }

        /*
            Get variable at specified index
             @param [int]: Index
            @return [var]: Var found at specified index
        */
    }, {
        key: "get",
        value: function get() {
            var i = arguments.length <= 0 || arguments[0] === undefined ? this.getSize() - 1 : arguments[0];

            return this.entries[i];
        }

        /*
            Get the second newest history entry
            
            @return [var]: Entry found at index size - 2
        */
    }, {
        key: "getPrevious",
        value: function getPrevious() {
            return this.get(this.getSize() - 2);
        }

        /*
            Get current history size
            
            @return [int]: Current length of entries.length
        */
    }, {
        key: "getSize",
        value: function getSize() {
            return this.entries.length;
        }
    }]);

    return History;
})();

module.exports = History;