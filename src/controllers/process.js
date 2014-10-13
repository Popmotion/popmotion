/*
    Process actions
*/
"use strict";

var ActionManager = require('./actionManager.js'),
    Rubix = require('./rubix.js'),
	utils = require('../utils/utils.js'),
    Process = function () {},
    process;
    
Process.prototype = {

    /*
        Process actions
        
        Loop through all active actions and process each
        
        @param [array]: Tokens of active actions at time of framestart
        @param [timestamp]: Timestamp of framestart
    */
	actions: function (tokens, frameStart, fps) {
		var i = 0,
			active = tokens.length;

		for (i; i < active; i++) {
			this.singleAction(ActionManager.get(tokens[i]), frameStart, fps);
		}
	},
	
	
	/*
    	Process a single action
    	
    	@param [Action]
    	@param [timestamp]
	*/
	singleAction: function (action, frameStart, fps) {
    	var output = {},
    	    rubix = Rubix[action.link],
    	    hasChanged = false;
    	    
        if (action.firstFrame) {
            action.onStart(output, action.data);
            action.firstFrame = false;
        }

        output.pointer = rubix.updatePointer(action);
        action.progress = rubix.calcProgress(action, frameStart, fps);
        
    	// Loop over all values 
    	for (var key in action.values) {
        	if (action.values.hasOwnProperty(key)) {
        		output[key] = rubix.easeValue(key, action, action.progress);
        		
            	// Apply Math. function if one defined
            	output[key] = action.values[key].math ? Math[action.values[key].math](output[key]) : output[key];

            	if (action.values[key].current !== output[key]) {
                	hasChanged = true;
                	action.values[key].current = output[key];
            	}
        	}
    	}

    	// If output has changed, fire onFrame
    	if (hasChanged) {
        	action.onFrame(output, action.data);
    	}

    	// If process is at its end, fire onEnd and deactivate action
    	if (rubix.hasEnded(action)) {
        	action.onEnd(output, action.data);
        	ActionManager.queueDeactivate(action.token);
    	}
	},
	
	/*
	easeValue: function (key, value, origin, progress) {
	    var easedValue,
	        progressIsObj = util.isObj(progress);

	    // If we're basing this value of the results of another
	    if (value.link && progressIsObj) {
	        // If we're using exact pixel offset
    	    if (progress[value.link].direct) {
        	    easedValue = this.easeDirect(progress[value.link].value, origin, value.amp);
        	    
            // If we're using 0 to 1
    	    } else {
        	    easedValue = this.easeRange(progress[value.link].value, value.from, value.to, value.ease, value.escapeAmp);
    	    }
    	    
        // Or we're not linking into anything but theres a matching key in progress
	    } else if (progress[key]) {
    	    easedValue = this.easeRange(progress[key].value, value.from, value.to, value.ease, value.escapeAmp);
    	    
        // If we're not and the progress is a pointer object we still need to
        // link this bad boy into something - swap x with default or something
	    } else {
	        progress = progressIsObj ? progress.x.value : progress;
	    
	        easedValue = this.easeRange(progress, value.from, value.to, value.ease, value.escapeAmp);
	    }
	    
	    return easedValue;
	},
	
	
	easeRange: function (progress, from, to, ease, escapeAmp) {
	    var newProg,
	        inRange = (progress >= 0 && progress <= 1);

	    ease = inRange ? ease : KEY.EASING.LINEAR;
	    
	    newProg = calc.restricted(progress, 0, 1);

	    if (!inRange) {
	        newProg = newProg + (calc.difference(newProg, progress) * escapeAmp);
	    }

    	return calc.valueEased(newProg, from, to, easingFunctions.get(ease));
	},
	
	
	easeDirect: function (offset, originalValue, amp) {
    	return originalValue + (offset * amp);
	},
	
	*/
	
    /*
        Process interval
        
        @param [Action]: Action to process
        @param [timestamp]: Time process was instigated
    
    interval: function (action, processStart) {
        var index;
        
        action.progress = calc.elapsed(action.time.started, action.tick, processStart);
        
        if (action.progress >= 1) {
            index = action.valueIndex;
            
            if (index >= action.valueCount - 1) {
                action.valueIndex = 0;
            } else {
                action.valueIndex++;
            }
            
            action.output = action.values[index];
            action.onFrame(action.output);
            
            action.start();
        }
    } 
    */
};

process = new Process();

module.exports = process;