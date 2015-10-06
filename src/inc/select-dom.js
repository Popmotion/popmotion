/*
    @param [string || NodeList || jQuery object]:
        If string, treated as selector.
        If not, treated as preexisting NodeList || jQuery object.
*/
module.exports = function (selector) {
    var nodes = (typeof selector === 'string') ? document.querySelectorAll(selector) : selector,
        elements = [];

    // If jQuery selection, get array of Elements
    if (nodes.get) {
        elements = nodes.get();

    // Or convert NodeList to array
    } else if (nodes.length) {
        elements = [].slice.call(nodes);

    // Or if it's just an Element, put into array
    } else {
        elements.push(nodes);
    }

    return elements;
};