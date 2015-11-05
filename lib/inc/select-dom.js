'use strict';

/*
    @param [string || NodeList || jQuery object]:
        If string, treated as selector.
        If not, treated as preexisting NodeList || jQuery object.
*/
module.exports = function (selector) {
    var nodes = typeof selector === 'string' ? document.querySelectorAll(selector) : selector,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc2VsZWN0LWRvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLFFBQVEsRUFBRTtBQUNqQyxRQUFJLEtBQUssR0FBRyxBQUFDLE9BQU8sUUFBUSxLQUFLLFFBQVEsR0FBSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUTtRQUN2RixRQUFRLEdBQUcsRUFBRTs7O0FBQUMsQUFHbEIsUUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFO0FBQ1gsZ0JBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFOzs7QUFBQyxLQUcxQixNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNyQixvQkFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7O0FBQUMsU0FHbkMsTUFBTTtBQUNILHdCQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCOztBQUVELFdBQU8sUUFBUSxDQUFDO0NBQ25CLENBQUMiLCJmaWxlIjoic2VsZWN0LWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3QgfHwgalF1ZXJ5IG9iamVjdF06XG4gICAgICAgIElmIHN0cmluZywgdHJlYXRlZCBhcyBzZWxlY3Rvci5cbiAgICAgICAgSWYgbm90LCB0cmVhdGVkIGFzIHByZWV4aXN0aW5nIE5vZGVMaXN0IHx8IGpRdWVyeSBvYmplY3QuXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgbm9kZXMgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yLFxuICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgLy8gSWYgalF1ZXJ5IHNlbGVjdGlvbiwgZ2V0IGFycmF5IG9mIEVsZW1lbnRzXG4gICAgaWYgKG5vZGVzLmdldCkge1xuICAgICAgICBlbGVtZW50cyA9IG5vZGVzLmdldCgpO1xuXG4gICAgLy8gT3IgY29udmVydCBOb2RlTGlzdCB0byBhcnJheVxuICAgIH0gZWxzZSBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChub2Rlcyk7XG5cbiAgICAvLyBPciBpZiBpdCdzIGp1c3QgYW4gRWxlbWVudCwgcHV0IGludG8gYXJyYXlcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG59OyJdfQ==