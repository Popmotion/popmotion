'use strict';

exports.__esModule = true;
var cache = {};
var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var testElement = undefined;

/*
    Test style property for prefixed version
    
    @param [string]: Style property
    @return [string]: Cached property name
*/
var testPrefix = function (key) {
    testElement = testElement || document.createElement('div');

    if (cache[key] === false) {
        return false;
    } else {
        cache[key] = false;
    }

    for (var i = 0; i < numPrefixes; i++) {
        var prefix = prefixes[i],
            prefixed = prefix === '' ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);

        if (prefixed in testElement.style) {
            cache[key] = prefixed;
        }
    }

    return cache[key];
};

exports.default = function (key) {
    return cache[key] || testPrefix(key);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvY3NzL3ByZWZpeGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sUUFBUSxFQUFSO0FBQ04sSUFBTSxXQUFXLENBQUMsUUFBRCxFQUFVLEtBQVYsRUFBZ0IsR0FBaEIsRUFBb0IsSUFBcEIsRUFBMEIsRUFBMUIsQ0FBWDtBQUNOLElBQU0sY0FBYyxTQUFTLE1BQVQ7QUFDcEIsSUFBSSx1QkFBSjs7Ozs7Ozs7QUFRQSxJQUFNLGFBQWEsVUFBQyxHQUFELEVBQVM7QUFDeEIsa0JBQWMsZUFBZSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZixDQURVOztBQUd4QixRQUFJLE1BQU0sR0FBTixNQUFlLEtBQWYsRUFBc0I7QUFDdEIsZUFBTyxLQUFQLENBRHNCO0tBQTFCLE1BRU87QUFDSCxjQUFNLEdBQU4sSUFBYSxLQUFiLENBREc7S0FGUDs7QUFNQSxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxXQUFKLEVBQWlCLEdBQWpDLEVBQXNDO0FBQ2xDLFlBQUksU0FBUyxTQUFTLENBQVQsQ0FBVDtZQUNBLFdBQVcsTUFBQyxLQUFXLEVBQVgsR0FBaUIsR0FBbEIsR0FBd0IsU0FBUyxJQUFJLE1BQUosQ0FBVyxDQUFYLEVBQWMsV0FBZCxFQUFULEdBQXVDLElBQUksS0FBSixDQUFVLENBQVYsQ0FBdkMsQ0FGTDs7QUFJbEMsWUFBSSxZQUFZLFlBQVksS0FBWixFQUFtQjtBQUMvQixrQkFBTSxHQUFOLElBQWEsUUFBYixDQUQrQjtTQUFuQztLQUpKOztBQVNBLFdBQU8sTUFBTSxHQUFOLENBQVAsQ0FsQndCO0NBQVQ7O2tCQXFCSixVQUFDLEdBQUQ7V0FBUyxNQUFNLEdBQU4sS0FBYyxXQUFXLEdBQVgsQ0FBZDtDQUFUIiwiZmlsZSI6InByZWZpeGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FjaGUgPSB7fTtcbmNvbnN0IHByZWZpeGVzID0gWydXZWJraXQnLCdNb3onLCdPJywnbXMnLCAnJ107XG5jb25zdCBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbmxldCB0ZXN0RWxlbWVudDtcblxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xuY29uc3QgdGVzdFByZWZpeCA9IChrZXkpID0+IHtcbiAgICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaWYgKGNhY2hlW2tleV0gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXSxcbiAgICAgICAgICAgIHByZWZpeGVkID0gKHByZWZpeCA9PT0gJycpID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgICAgIGlmIChwcmVmaXhlZCBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgICAgICAgY2FjaGVba2V5XSA9IHByZWZpeGVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjYWNoZVtrZXldO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKGtleSkgPT4gY2FjaGVba2V5XSB8fCB0ZXN0UHJlZml4KGtleSk7Il19