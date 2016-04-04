'use strict';

exports.__esModule = true;

var _popmotion = require('popmotion');

exports.default = function (callback) {
    var wait = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
    var renderStep = arguments.length <= 2 || arguments[2] === undefined ? 'onFrameStart' : arguments[2];

    var timer = undefined;
    var definition = {};

    definition[renderStep] = callback;

    var callbackTask = (0, _popmotion.task)(definition);

    return function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            return callbackTask.once();
        }, wait);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWJvdW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWUsVUFBQyxRQUFRLEVBQThDO1FBQTVDLElBQUkseURBQUcsR0FBRztRQUFFLFVBQVUseURBQUcsY0FBYzs7QUFDN0QsUUFBSSxLQUFLLFlBQUEsQ0FBQztBQUNWLFFBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFdEIsY0FBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQzs7QUFFbEMsUUFBTSxZQUFZLEdBQUcscUJBQUssVUFBVSxDQUFDLENBQUM7O0FBRXRDLFdBQU8sWUFBTTtBQUNULG9CQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRXBCLGFBQUssR0FBRyxVQUFVLENBQUM7bUJBQU0sWUFBWSxDQUFDLElBQUksRUFBRTtTQUFBLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDdkQsQ0FBQztDQUNMIiwiZmlsZSI6ImRlYm91bmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFzayB9IGZyb20gJ3BvcG1vdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IChjYWxsYmFjaywgd2FpdCA9IDIwMCwgcmVuZGVyU3RlcCA9ICdvbkZyYW1lU3RhcnQnKSA9PiB7XG4gICAgbGV0IHRpbWVyO1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSB7fTtcblxuICAgIGRlZmluaXRpb25bcmVuZGVyU3RlcF0gPSBjYWxsYmFjaztcblxuICAgIGNvbnN0IGNhbGxiYWNrVGFzayA9IHRhc2soZGVmaW5pdGlvbik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBjYWxsYmFja1Rhc2sub25jZSgpLCB3YWl0KTtcbiAgICB9O1xufTtcbiJdfQ==