/*
    Rubix modules
    ----------------------------------------
    
    Rubix modules are used to process an action based on its .rubix property.
    
    Available rubix:
        'Time'
        'Pointer'
        'Speed'
        
    Processing functions:
        calcProgress
        hasEnded
        updateInput
        easeValue
*/
"use strict";

var calc = require('../utils/calc.js'),
	utils = require('../utils/utils.js'),
    Easing = require('../utils/easingFunctions.js'),
	defaults = require('../opts/defaults.js'),
	KEY = require('../opts/keys.js'),
    ActionManager = require('./actionManager.js'),
    PointerTracker = require('./pointerTracker.js'),
    Rubix = function () {},
    rubixController;

Rubix.prototype = {
    Time: {
	
        /*
    	    Calc progress
    	    
        	Calc action's progress through timelimit
            
            @param [Action]: action to measure
            @param [timestamp]: framestart timestamp
            @return [number]: 0 to 1 value representing how much time has passed
        */
        calcProgress: function (action, frameStart) {
        	action.elapsed += calc.difference(action.framestamp, frameStart) * action.timeDilation;
        	
        	return calc.progress(action.elapsed, action.duration + action.delay);
        },
        
        /*
            Has action ended
            
            True if progress is equal to or higher than 1. If looping is enabled
            we restart the action
            
            @param [Action]: action to analyse
            @return [boolean]: has action ended
        */
        hasEnded: function (action) {
        	return action.progress >= 1 ? true : false;
        },
        
        /*
            Update pointer
        */
        updateInput: function () {
            return false;
        },
        
        /*
            Ease value in action with provided key
            
            @param [string]: key of value
            @param [Action]
            @param [object]: Progress in timeline
        */
        easeValue: function (key, action, progress) {
            var value = action.values[key],
            	restrictedProgress = calc.restricted(progress, 0, 1),
            	easedValue;
            	
            if (value.steps) {
                restrictedProgress = utils.stepProgress(restrictedProgress, 1, value.steps);
            }

            easedValue = Easing.withinRange(restrictedProgress, value.from, value.to, value.ease);

            return easedValue;
        }
    },
    
    Input: {
    
    	/*
    	    Calc progress
    	    
    	    Calc the progress of each input metric. 
        	
        	@param [Action]: action to measure
        	@return [object]: Object of all progresses
    	*/
        calcProgress: function (action, frameStart) {
        	var progress = {},
        		input = action.input;
        		
        	for (var key in input) {
	        	if (input.hasOwnProperty(key)) {
		        	progress[key] = calc.progress(val, min, max);
	        	}
        	}
        	
        	return progress;
        
        
        /*
            var progress = {},
                input = action.input;

            for (var key in input) {
                // Check we're tracking this property
                if (input.hasOwnProperty(key) && action.values.hasOwnProperty(key)) {
                    progress[key] = calc.progress(input[key] + action.origin[key], action.values[key].min, action.values[key].max);
                }
            }

            return progress;
           */
        },
        
        /*
            Has function ended?
            
            Tracking currently needs manually ending
        */
        hasEnded: function (action) {
            return false;
        },
        
        /*
            Update pointer
            
            @param [Action]: 
            @return [boolean]: Latest pointer, or previous pointer if stopped tracking
        */
        updateInput: function (action) {
        	action.input.onFrame();
        
            //var currentPointer = action.input;

            //action.input = PointerTracker.get(action.pointerOffset) || currentPointer;
            
            return action.input;
        },
        
        /*
            Ease value in action with provided key
            
            @param [string]: key of value
            @param [Action]
            @param [object]: Progress of pointer props
        */
        easeValue: function (key, action, progress) {
        
        
        /*
            var value = action.values[key],
                easedValue = value.current,
                inputProgress;
                
            // If we've already calculated the progress for this property
            if (utils.isNum(progress[key])) {
                inputProgress = progress[key];
            
            // Or we've chosen a property to link to
            } else if (value.link && utils.isNum(progress[value.link])) {
                inputProgress = progress[value.link];
            }

            if (inputProgress !== undefined) {
                easedValue = Easing.withinRange(inputProgress, value.min, value.max, defaults.trackEase, value.escapeAmp);
            }

            return easedValue;
            */
        }
    },
    
    Speed: {
    
    	/*
	    	Convert x per second to per frame speed based on fps
    	*/
    	frameSpeed: function (xps, fps) {
    		var speedPerFrame = 0;

    		if (xps && utils.isNum(xps)) {
	    		speedPerFrame = xps/fps;
    		}
    	
	    	return speedPerFrame;
    	},
    
    	/*
    	    Calc new speed
    	    
    	    Calc the new speed based on the formula speed = (speed - friction + thrust)
        	
        	@param [Action]: action to measure
        	@return [object]: Object of all speeds
    	*/
	    calcProgress: function (action, frameStart, fps) {
		    var progress = {},
		    	point,
		    	value;
		    	
		    for (var key in action.values) {
			    if (action.values.hasOwnProperty(key)) {
			    	value = action.values[key];
			    	value.speed = value.speed - this.frameSpeed(value.friction, fps) + this.frameSpeed(value.thrust, fps);
				    progress[key] = this.frameSpeed(value.speed, fps);
			    }
		    }
		    
		    if (action.values.angle && action.values.distance) {
		    	point = calc.point(action.origin, action.values.angle.current, action.values.distance.current);
			    progress.x = point.x;
			    progress.y = point.y;
		    }
		    
		    return progress;
	    },
	    
	    /*
    	    Has this action ended?
    	    
    	    @return [boolean]: False for now - TODO create better default
	    */
	    hasEnded: function (action) {
	    	return false;
	    },
	    
	    /*
    	    Add the speed to the current value
            
            @param [string]: key of value
            @param [Action]
            @param [object]: Progress of pointer props
	    */
	    easeValue: function (key, action, progress) {
	    	var value = action.values[key],
	    		newValue = value.current + progress[key];

	    	if (value.min) {
		    	newValue = Math.max(value.min, newValue);
	    	}
	    	
	    	if (value.max) {
		    	newValue = Math.min(value.max, newValue);
	    	}

	     	return newValue;
	    },
	    
	    updateInput: function () {}
    },

};

rubixController = new Rubix();

module.exports = rubixController;