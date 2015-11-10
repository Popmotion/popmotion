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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvSGlzdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBRW5CLE9BQU87Ozs7Ozs7OztBQVFULGFBUkUsT0FBTyxDQVFHLEdBQUcsRUFBd0I7WUFBdEIsR0FBRyx5REFBRyxjQUFjOzs4QkFSbkMsT0FBTzs7QUFTTCxZQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNmLFlBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLFlBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakI7Ozs7Ozs7OztBQUFBO2lCQVpDLE9BQU87OzRCQXFCTCxHQUFHLEVBQUU7QUFDTCxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXZCLGdCQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO0FBQzVCLG9CQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hCO1NBQ0o7Ozs7Ozs7Ozs7OEJBUTJCO2dCQUF4QixDQUFDLHlEQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDOztBQUN0QixtQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCOzs7Ozs7Ozs7O3NDQU9hO0FBQ1YsbUJBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkM7Ozs7Ozs7Ozs7a0NBT1M7QUFDTixtQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUM5Qjs7O1dBdkRDLE9BQU87OztBQTBEYixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyIsImZpbGUiOiJIaXN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWF4SGlzdG9yeVNpemUgPSAzO1xuXG5jbGFzcyBIaXN0b3J5IHtcblxuICAgIC8qXG4gICAgICAgIEhpc3RvcnkgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdmFyXTogVmFyaWFibGUgdG8gc3RvcmUgaW4gZmlyc3QgaGlzdG9yeSBzbG90XG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpOiBNYXhpbXVtIHNpemUgb2YgaGlzdG9yeVxuICAgICovXG4gICAgY29uc3RydWN0b3Iob2JqLCBtYXggPSBtYXhIaXN0b3J5U2l6ZSkge1xuICAgICAgICB0aGlzLm1heCA9IG1heDtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuYWRkKG9iaik7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUHVzaCBuZXcgdmFyIHRvIGhpc3RvcnlcbiAgICAgICAgXG4gICAgICAgIFNoaWZ0IG91dCBvbGRlc3QgZW50cnkgaWYgd2UndmUgcmVhY2hlZCBtYXhpbXVtIGNhcGFjaXR5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3Zhcl06IFZhcmlhYmxlIHRvIHB1c2ggaW50byBoaXN0b3J5LmVudHJpZXNcbiAgICAqL1xuICAgIGFkZChvYmopIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2gob2JqKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmdldFNpemUoKSA+PSB0aGlzLm1heCkge1xuICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHZhcmlhYmxlIGF0IHNwZWNpZmllZCBpbmRleFxuXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXhcbiAgICAgICAgQHJldHVybiBbdmFyXTogVmFyIGZvdW5kIGF0IHNwZWNpZmllZCBpbmRleFxuICAgICovXG4gICAgZ2V0KGkgPSB0aGlzLmdldFNpemUoKSAtIDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc1tpXTtcbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBzZWNvbmQgbmV3ZXN0IGhpc3RvcnkgZW50cnlcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3Zhcl06IEVudHJ5IGZvdW5kIGF0IGluZGV4IHNpemUgLSAyXG4gICAgKi9cbiAgICBnZXRQcmV2aW91cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuZ2V0U2l6ZSgpIC0gMik7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBjdXJyZW50IGhpc3Rvcnkgc2l6ZVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogQ3VycmVudCBsZW5ndGggb2YgZW50cmllcy5sZW5ndGhcbiAgICAqL1xuICAgIGdldFNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXMubGVuZ3RoO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5OyJdfQ==