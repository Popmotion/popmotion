import * as Popmotion from './popmotion';

const UIref = window.Motion;

Popmotion.noConflict = function () {
  window.Motion = UIref;
};

window.Motion = window.Popmotion = Popmotion;
