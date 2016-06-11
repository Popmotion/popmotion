import * as popmotion from '../popmotion';

const UIref = window.motion;

popmotion.noConflict = function () {
  window.motion = UIref;
};

window.motion = window.popmotion = popmotion;