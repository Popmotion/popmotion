/*
    Chronos
*/
"use strict";

var utils = require('../utils/utils.js'),
    ActionManager = require('./actionManager.js'),
    PointerTracker = require('./pointerTracker.js'),
    Process = require('./process.js'),
    Chronos = function () {},
    chronos,
    isRunning = false; // is animation loop running? - prevents multiple rAF loops from running
    
Chronos.prototype = {

    /*
        Start chronos if not already running
    */
    start: function () {
        if (!isRunning) {
            isRunning = true;
            this.frame();
        }
    },
    
    
    /*
        Stop chronos
    */
    stop: function () {
        isRunning = false;
    },
    
    
    /*
        Frame
        
        Check if there are active actions to process, then callback
    */
    frame: function () {
        var self = this,
            activeActionTokens = ActionManager.getActiveTokens();
        
        if (activeActionTokens.length) {
            requestAnimationFrame(function () {
                var activeActionTokens = ActionManager.getActiveTokens(); // recheck incase stuff has been deactivated since
    
                if (activeActionTokens.length) {
                	PointerTracker.frame();
                	Process.actions(activeActionTokens, utils.currentTime());
                    ActionManager.purge();
                    self.frame();
                } else {
                    self.stop();
                }
            });
        } else {
            self.stop();
        }
    }
};

chronos = new Chronos();

module.exports = chronos;