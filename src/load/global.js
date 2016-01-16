var popmotion = require('./module.js'),
    UIref = window.ui;

popmotion.noConflict = function () {
    window.ui = UIref;
};

window.ui = window.popmotion = popmotion;

import React from 'react';
import ReactDOM from 'react-dom';
import Actor from '../react/Actor';

ReactDOM.render(
    <Actor>
        <div className="ball"></div>
        <div className="ball"></div>
    </Actor>,
    document.querySelector('.test-area')
);