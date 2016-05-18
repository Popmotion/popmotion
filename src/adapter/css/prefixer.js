const cache = {};
const prefixes = ['Webkit','Moz','O','ms', ''];
const prefixesFind = ['Webkit','Moz','O','ms', ''];
const prefixesReplace = ['-webkit-','-moz-','-o-','-ms-', ''];
const numPrefixes = prefixesFind.length;
let testElement;

/*
    Test style property for prefixed version
    
    @param [string]: Style property
    @return [string]: Cached property name
*/
const testPrefix = (key) => {
    testElement = testElement || document.createElement('div');

    if (cache[key] === false) {
        return false;
    } else {
        cache[key] = false;
    }

    for (var i = 0; i < numPrefixes; i++) {
        var prefix = prefixesFind[i],
            prefixed = (prefix === '') ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1); //

        if (prefixed in testElement.style) {
            cache[key] = prefixesReplace[i] + key;
        }
    }
    
    return cache[key];
};

export default (key) => cache[key] || testPrefix(key);