'use strict';

exports.__esModule = true;

var _popmotion = require('popmotion');

exports.default = function (callback) {
    var limit = arguments.length <= 1 || arguments[1] === undefined ? 35 : arguments[1];
    var renderStep = arguments.length <= 2 || arguments[2] === undefined ? 'onFrameStart' : arguments[2];

    var wait = false;
    var definition = {};

    definition[renderStep] = callback;

    var callbackTask = (0, _popmotion.task)(definition);

    return function () {
        if (!wait) {
            callbackTask.once();
            wait = true;

            setTimeout(function () {
                return wait = false;
            }, limit);
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90aHJvdHRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWUsVUFBQyxRQUFRLEVBQThDO1FBQTVDLEtBQUsseURBQUcsRUFBRTtRQUFFLFVBQVUseURBQUcsY0FBYzs7QUFDN0QsUUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFFBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFdEIsY0FBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQzs7QUFFbEMsUUFBTSxZQUFZLEdBQUcscUJBQUssVUFBVSxDQUFDLENBQUM7O0FBRXRDLFdBQU8sWUFBTTtBQUNULFlBQUksQ0FBQyxJQUFJLEVBQUU7QUFDUCx3QkFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3BCLGdCQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVaLHNCQUFVLENBQUM7dUJBQU0sSUFBSSxHQUFHLEtBQUs7YUFBQSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO0tBQ0osQ0FBQztDQUNMIiwiZmlsZSI6InRocm90dGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFzayB9IGZyb20gJ3BvcG1vdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IChjYWxsYmFjaywgbGltaXQgPSAzNSwgcmVuZGVyU3RlcCA9ICdvbkZyYW1lU3RhcnQnKSA9PiB7XG4gICAgbGV0IHdhaXQgPSBmYWxzZTtcbiAgICBjb25zdCBkZWZpbml0aW9uID0ge307XG5cbiAgICBkZWZpbml0aW9uW3JlbmRlclN0ZXBdID0gY2FsbGJhY2s7XG5cbiAgICBjb25zdCBjYWxsYmFja1Rhc2sgPSB0YXNrKGRlZmluaXRpb24pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCF3YWl0KSB7XG4gICAgICAgICAgICBjYWxsYmFja1Rhc2sub25jZSgpO1xuICAgICAgICAgICAgd2FpdCA9IHRydWU7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2FpdCA9IGZhbHNlLCBsaW1pdCk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiJdfQ==