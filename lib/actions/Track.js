'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Action = require('./Action'),
    Pointer = require('../input/Pointer'),
    calc = require('../inc/calc');

var Track = (function (_Action) {
    _inherits(Track, _Action);

    function Track() {
        _classCallCheck(this, Track);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Track).apply(this, arguments));
    }

    _createClass(Track, [{
        key: 'onFrameStart',

        /*
            Update input offset
        */
        value: function onFrameStart(actor, frameDuration, framestamp) {
            actor.state.input = this.input.onFrame(framestamp);
            this.inputOffset = calc.offset(this.inputOrigin, this.input.current);
            this.frameDuration = frameDuration;
        }

        /*
            Move Value relative to Input movement
            
            @param [Value]: Current value
            @param [string]: Key of current value
            @return [number]: Calculated value
        */

    }, {
        key: 'process',
        value: function process(actor, value, key) {
            var newValue = value.current,
                unmapped = value.unmapped !== undefined ? value.unmapped : value.current;

            if (this.inputOffset.hasOwnProperty(key)) {
                newValue = value.direct ? this.input.current[key] : value.origin + this.inputOffset[key] * value.amp;
                newValue = value.smooth ? calc.smooth(newValue, unmapped, this.frameDuration, value.smooth) : newValue;
            }

            return newValue;
        }

        /*
            Has this Action ended? 
            
            @return [boolean]: False to make user manually finish .track()
        */

    }, {
        key: 'hasEnded',
        value: function hasEnded() {
            return false;
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            _get(Object.getPrototypeOf(Track.prototype), 'deactivate', this).call(this);

            if (this.input && this.input.stop) {
                this.input.stop();
            }

            return this;
        }
    }, {
        key: 'bindInput',
        value: function bindInput(input) {
            this.input = !input.current ? new Pointer(input) : input;
            this.inputOrigin = this.input.get();
        }
    }, {
        key: 'getDefaultValue',
        value: function getDefaultValue() {
            return {
                amp: 1,
                direct: false,
                smooth: 0
            };
        }
    }]);

    return Track;
})(Action);

module.exports = Track;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDNUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUNyQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztJQUU1QixLQUFLO2NBQUwsS0FBSzs7YUFBTCxLQUFLOzhCQUFMLEtBQUs7O3NFQUFMLEtBQUs7OztpQkFBTCxLQUFLOzs7Ozs7cUNBSU0sS0FBSyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUU7QUFDM0MsaUJBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25ELGdCQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JFLGdCQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUN0Qzs7Ozs7Ozs7Ozs7O2dDQVNPLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0FBQ3ZCLGdCQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTztnQkFDeEIsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEtBQUssU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7QUFFN0UsZ0JBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDdEMsd0JBQVEsR0FBRyxBQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEFBQUMsQ0FBQztBQUN6Ryx3QkFBUSxHQUFHLEFBQUMsS0FBSyxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQzVHOztBQUVELG1CQUFPLFFBQVEsQ0FBQztTQUNuQjs7Ozs7Ozs7OzttQ0FPVTtBQUNQLG1CQUFPLEtBQUssQ0FBQztTQUNoQjs7O3FDQUVZO0FBQ1QsdUNBdkNGLEtBQUssNENBdUNnQjs7QUFFbkIsZ0JBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtBQUMvQixvQkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQjs7QUFFRCxtQkFBTyxJQUFJLENBQUM7U0FDZjs7O2tDQUVTLEtBQUssRUFBRTtBQUNiLGdCQUFJLENBQUMsS0FBSyxHQUFHLEFBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFJLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUMzRCxnQkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3ZDOzs7MENBRWlCO0FBQ2QsbUJBQU87QUFDSCxtQkFBRyxFQUFFLENBQUM7QUFDTixzQkFBTSxFQUFFLEtBQUs7QUFDYixzQkFBTSxFQUFFLENBQUM7YUFDWixDQUFDO1NBQ0w7OztXQTNEQyxLQUFLO0dBQVMsTUFBTTs7QUE4RDFCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6IlRyYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEFjdGlvbiA9IHJlcXVpcmUoJy4vQWN0aW9uJyksXG4gICAgUG9pbnRlciA9IHJlcXVpcmUoJy4uL2lucHV0L1BvaW50ZXInKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBpbnB1dCBvZmZzZXRcbiAgICAqL1xuICAgIG9uRnJhbWVTdGFydChhY3RvciwgZnJhbWVEdXJhdGlvbiwgZnJhbWVzdGFtcCkge1xuICAgICAgICBhY3Rvci5zdGF0ZS5pbnB1dCA9IHRoaXMuaW5wdXQub25GcmFtZShmcmFtZXN0YW1wKTtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IGNhbGMub2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuY3VycmVudCk7XG4gICAgICAgIHRoaXMuZnJhbWVEdXJhdGlvbiA9IGZyYW1lRHVyYXRpb247XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTW92ZSBWYWx1ZSByZWxhdGl2ZSB0byBJbnB1dCBtb3ZlbWVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQsXG4gICAgICAgICAgICB1bm1hcHBlZCA9IHZhbHVlLnVubWFwcGVkICE9PSB1bmRlZmluZWQgPyB2YWx1ZS51bm1hcHBlZCA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSAodmFsdWUuZGlyZWN0KSA/IHRoaXMuaW5wdXQuY3VycmVudFtrZXldIDogdmFsdWUub3JpZ2luICsgKHRoaXMuaW5wdXRPZmZzZXRba2V5XSAqIHZhbHVlLmFtcCk7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9ICh2YWx1ZS5zbW9vdGgpID8gY2FsYy5zbW9vdGgobmV3VmFsdWUsIHVubWFwcGVkLCB0aGlzLmZyYW1lRHVyYXRpb24sIHZhbHVlLnNtb290aCkgOiBuZXdWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBIYXMgdGhpcyBBY3Rpb24gZW5kZWQ/IFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IEZhbHNlIHRvIG1ha2UgdXNlciBtYW51YWxseSBmaW5pc2ggLnRyYWNrKClcbiAgICAqL1xuICAgIGhhc0VuZGVkKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgc3VwZXIuZGVhY3RpdmF0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQuc3RvcCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBiaW5kSW5wdXQoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9ICghaW5wdXQuY3VycmVudCkgPyBuZXcgUG9pbnRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IHRoaXMuaW5wdXQuZ2V0KCk7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIHNtb290aDogMFxuICAgICAgICB9O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFjazsiXX0=