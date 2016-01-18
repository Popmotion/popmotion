import popmotion from './module';

const UIref = window.ui;

popmotion.noConflict = function () {
    window.ui = UIref;
};

window.ui = window.popmotion = popmotion;