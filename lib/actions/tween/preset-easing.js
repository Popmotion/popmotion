'use strict';

exports.__esModule = true;

var _createEasing = require('./create-easing');

var _createEasing2 = _interopRequireDefault(_createEasing);

var _uiUtils = require('ui-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Values
/*
    Easing functions
    ----------------------------------------
    
    Generates and provides easing functions based on baseFunction definitions
    
    A call to easingFunction.get('functionName') returns a function that can be passed:
        @param [number]: Progress 0-1
        @param [number] (optional): Amp modifier, only accepted in some easing functions
                                    and is used to adjust overall strength
        @return [number]: Eased progress
        
    We can generate new functions by sending an easing function through easingFunction.extend(name, method).
    Which will make nameIn, nameOut and nameInOut functions available to use.
        
    Easing functions from Robert Penner
    http://www.robertpenner.com/easing/
        
    Bezier curve interpretor created from Gaëtan Renaudeau's original BezierEasing  
    https://github.com/gre/bezier-easing/blob/master/index.js  
    https://github.com/gre/bezier-easing/blob/master/LICENSE

    Anticipate easing created by Elliot Gino
    https://twitter.com/ElliotGeno
*/
// Imports
var DEFAULT_BACK_STRENGTH = 1.525;
var DEFAULT_POW_STRENGTH = 2;

// Utility functions
var generatePowerEasing = function (strength) {
    return function (progress, strength) {
        return baseEasing.ease(progress, strength);
    };
};

/*
    Each of these base functions is an easeIn
    
    On init, we use .mirror and .reverse to generate easeInOut and
    easeOut functions respectively.
*/
var baseEasing = {
    ease: function (progress) {
        var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_POW_STRENGTH : arguments[1];
        return Math.pow(progress, strength);
    },
    circ: function (progress) {
        return 1 - Math.sin(Math.acos(progress));
    },
    back: function (progress) {
        var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_BACK_STRENGTH : arguments[1];
        return progress * progress * ((strength + 1) * progress - strength);
    }
};

['cubic', 'quart', 'quint'].forEach(function (easingName, i) {
    baseEasing[easingName] = generatePowerEasing(i + 3);
});

// Generate in/out/inOut variations
(0, _uiUtils.each)(baseEasing, function (baseEase, key) {
    var easingFunction = (0, _createEasing2.default)(baseEase);
    baseEasing[key + 'In'] = easingFunction.in;
    baseEasing[key + 'Out'] = easingFunction.out;
    baseEasing[key + 'InOut'] = easingFunction.inOut;
});

baseEasing.linear = function (progress) {
    return progress;
};
baseEasing.anticipate = function (progress) {
    var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_BACK_STRENGTH : arguments[1];
    return (progress *= 2) < 1 ? 0.5 * baseEasing.backIn(progress, strength) : 0.5 * (2 - Math.pow(2, -10 * (progress - 1)));
};

exports.default = baseEasing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL3ByZXNldC1lYXNpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLElBQU0scUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBQ3BDLElBQU0sb0JBQW9CLEdBQUcsQ0FBQzs7O0FBQUMsQUFHL0IsSUFBTSxtQkFBbUIsR0FBRyxVQUFBLFFBQVE7V0FBSSxVQUFDLFFBQVEsRUFBRSxRQUFRO2VBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQUE7Q0FBQTs7Ozs7Ozs7QUFBQyxBQVFwRyxJQUFJLFVBQVUsR0FBRztBQUNiLFFBQUksRUFBRSxVQUFDLFFBQVE7WUFBRSxRQUFRLHlEQUFHLG9CQUFvQjt3QkFBSyxRQUFRLEVBQUksUUFBUTtLQUFBO0FBQ3pFLFFBQUksRUFBRSxVQUFBLFFBQVE7ZUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQUE7QUFDbkQsUUFBSSxFQUFFLFVBQUMsUUFBUTtZQUFFLFFBQVEseURBQUcscUJBQXFCO2VBQUssQUFBQyxRQUFRLEdBQUcsUUFBUSxJQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQSxHQUFJLFFBQVEsR0FBRyxRQUFRLENBQUEsQUFBQztLQUFBO0NBQ3ZILENBQUM7O0FBRUYsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLFVBQVUsRUFBRSxDQUFDLEVBQUU7QUFDekQsY0FBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUN2RCxDQUFDOzs7QUFBQyxBQUdILGFBMUJTLElBQUksRUEwQlIsVUFBVSxFQUFFLFVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBSztBQUNoQyxRQUFJLGNBQWMsR0FBRyw0QkFBYSxRQUFRLENBQUMsQ0FBQztBQUM1QyxjQUFVLENBQUksR0FBRyxRQUFLLEdBQUcsY0FBYyxDQUFDLEVBQUUsQ0FBQztBQUMzQyxjQUFVLENBQUksR0FBRyxTQUFNLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUM3QyxjQUFVLENBQUksR0FBRyxXQUFRLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztDQUNwRCxDQUFDLENBQUM7O0FBRUgsVUFBVSxDQUFDLE1BQU0sR0FBRyxVQUFBLFFBQVE7V0FBSSxRQUFRO0NBQUEsQ0FBQztBQUN6QyxVQUFVLENBQUMsVUFBVSxHQUFHLFVBQUMsUUFBUTtRQUFFLFFBQVEseURBQUcscUJBQXFCO1dBQy9ELEFBQUMsQ0FBQyxRQUFRLElBQUUsQ0FBQyxDQUFBLEdBQUksQ0FBQyxHQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBSSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUEsQUFBQyxDQUFDLENBQUEsQUFBQztDQUFBLENBQUM7O2tCQUV4RyxVQUFVIiwiZmlsZSI6InByZXNldC1lYXNpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiAgICBBbnRpY2lwYXRlIGVhc2luZyBjcmVhdGVkIGJ5IEVsbGlvdCBHaW5vXG4gICAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4qL1xuLy8gSW1wb3J0c1xuaW1wb3J0IGNyZWF0ZUVhc2luZyBmcm9tICcuL2NyZWF0ZS1lYXNpbmcnO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ3VpLXV0aWxzJztcblxuLy8gVmFsdWVzXG5jb25zdCBERUZBVUxUX0JBQ0tfU1RSRU5HVEggPSAxLjUyNTtcbmNvbnN0IERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbmNvbnN0IGdlbmVyYXRlUG93ZXJFYXNpbmcgPSBzdHJlbmd0aCA9PiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBiYXNlRWFzaW5nLmVhc2UocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuLypcbiAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFxuICAgIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbmxldCBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX1BPV19TVFJFTkdUSCkgPT4gcHJvZ3Jlc3MgKiogc3RyZW5ndGgsXG4gICAgY2lyYzogcHJvZ3Jlc3MgPT4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpLFxuICAgIGJhY2s6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+IChwcm9ncmVzcyAqIHByb2dyZXNzKSAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpXG59O1xuXG5bJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaChmdW5jdGlvbiAoZWFzaW5nTmFtZSwgaSkge1xuICAgIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZWFjaChiYXNlRWFzaW5nLCAoYmFzZUVhc2UsIGtleSkgPT4ge1xuICAgIGxldCBlYXNpbmdGdW5jdGlvbiA9IGNyZWF0ZUVhc2luZyhiYXNlRWFzZSk7XG4gICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5gXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fU91dGBdID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fUluT3V0YF0gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbn0pO1xuXG5iYXNlRWFzaW5nLmxpbmVhciA9IHByb2dyZXNzID0+IHByb2dyZXNzO1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfQkFDS19TVFJFTkdUSCkgPT5cbiAgICAoKHByb2dyZXNzKj0yKSA8IDEpID8gMC41ICogYmFzZUVhc2luZy5iYWNrSW4ocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA6ICAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwcm9ncmVzcyAtIDEpKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VFYXNpbmc7Il19