/*
    Rubix modules
    ----------------------------------------
    
    Rubix are collections of optional processors. Which rubix to
    use is decided programmatically. If [LINK] is defined, Link is used.
    Otherwise values use Time, Input and Run based on whether .play, 
    .track or .run are running.
*/

"use strict";

var calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    easing = require('../utils/easing.js'),
    simulate = require('./simulate.js'),
    
    // Commonly used properties
    CURRENT = 'current',
    HAS_ENDED = 'hasEnded',
    INPUT_OFFSET = 'inputOffset',
    LINK = 'link';

module.exports = {
    Fire: {
        /*
            Return set current
        */
        process: function (key, value) {
            return value[CURRENT];
        },
        
        /*
            Return true to fire for just one frame
            
            @return [boolean]: True
        */
        hasEnded: function () {
            return true;
        }
    },

    Play: {

        /*
            Update Action elapsed time
            
            @param [Action]
            @param [object]: Action properties
            @param [number]: Timestamp of current frame
        */
        updateInput: function (action, props, framestamp) {
            action.elapsed += ((framestamp - action.framestamp) * props.dilate) * action.playDirection;
            action[HAS_ENDED] = true;
        },

        /*
            Calculate progress of value based on time elapsed,
            value delay/duration/stagger properties

            @param [string]: Key of current value
            @param [Value]: Current value
            @param [object]: Collection of all Action values
            @param [object]: Action properties
            @param [Action]: Current Action
            @param [number]: Duration of frame in ms
            @return [number]: Calculated value
        */
        process: function (key, value, values, props, action) {
            var newValue = value[CURRENT],
                progress = calc.restricted(calc.progress(action.elapsed - value.delay, value.duration) - value.stagger, 0, 1),
                progressTarget = (action.playDirection === 1) ? 1 : 0;

            // Update hasEnded
            action[HAS_ENDED] = (progress !== progressTarget) ? false : action[HAS_ENDED];

            if (value.to !== undefined) {
                progress = (value.steps) ? utils.stepProgress(progress, 1, value.steps) : progress;
                newValue = easing.withinRange(progress, value.origin, value.to, value.ease);
            }

            return newValue;
        },
        
        /*
            Return hasEnded property
            
            @param [boolean]: Have all Values hit 1 progress?
        */
        hasEnded: function (action) {
            return action[HAS_ENDED];
        }
    },
    
    Track: {
    
        /*
            Update Input
            
            @param [Action]
            @param [object]: Action properties
        */
        updateInput: function (action, props) {
            action[INPUT_OFFSET] = calc.offset(props.inputOrigin, props.input[CURRENT]);
        },
        
        /*
            Move Value relative to Input movement
            
            @param [string]: Key of current value
            @param [Value]: Current value
            @param [object]: Collection of all Action values
            @param [object]: Action properties
            @param [Action]: Current Action
            @return [number]: Calculated value
        */
        process: function (key, value, values, props, action) {
            return (action[INPUT_OFFSET].hasOwnProperty(key)) ? value.origin + action[INPUT_OFFSET][key] : value[CURRENT];
        },
        
        /*
            Has this Action ended? 
            
            @return [boolean]: False to make user manually finish .track()
        */
        hasEnded: function () {
            return false;
        }
    },
    
    Run: {
    
        /*
            Simulate the Value's per-frame movement
            
            @param [string]: Key of current value
            @param [Value]: Current value
            @param [object]: Collection of all Action values
            @param [object]: Action properties
            @param [Action]: Current Action
            @param [number]: Duration of frame in ms
            @return [number]: Calculated value
        */
        process: function (key, value, values, props, action, frameDuration) {
            return value[CURRENT] + calc.speedPerFrame(simulate[value.simulate](value, frameDuration), frameDuration);
        },
        
        /*
            Has this action ended?
            
            Use a framecounter to see if Action has changed in the last x frames
            and declare ended if not
            
            @param [Action]
            @param [boolean]: Has Action changed?
            @return [boolean]: Has Action ended?
        */
        hasEnded: function (action, hasChanged) {
            action.inactiveFrames = hasChanged ? 0 : action.inactiveFrames + 1;
            return (action.inactiveFrames > action.getProp('maxInactiveFrames'));
        },
        
        /*
            Limit output to value range, if any
            
            If velocity is at or more than range, and value has a bounce property,
            run the bounce simulation
            
            @param [number]: Calculated output
            @param [Value]: Current Value
            @return [number]: Limit-adjusted output
        */
        limit: function (output, value) {
            output = calc.restricted(output, value.min, value.max);
            
            // Bounce if outside of range
            value.velocity = (value.bounce && (output <= value.min || output >= value.max))
                ? simulate.bounce(value) : value.velocity;
            
            return output;
        }
    },
    
    /*
        Link
        ---------------------------
        
        Link the calculations of one value into the output of another.
        
        Activate by setting the link property of one value with the name
        of another value or Input property.
        
        Map the linked value with mapLink and provide a corressponding mapTo
        to translate values from one into the other. For instance:
        
        {
            link: 'x'
            mapLink: [0, 100, 200]
            mapTo: [-100, 0, -100]
        }
        
        An output value of 50 for 'x' would translate to -50
    */
    Link: {
        
        /*
            Process linked value
            
            First check if link exists within Action values, if not check
            within Input (if exists)
            
            @param [string]: Key of current value
            @param [Value]: Current value
            @param [object]: Collection of all Action values
            @param [object]: Action properties
            @param [Action]: Current Action
            @return [number]: Calculated value
        */
        process: function (key, value, values, props, action) {
            var newValue = value[CURRENT],
                mapLink = value.mapLink,
                mapTo = value.mapTo,
                mapLength = (mapLink !== undefined) ? mapLink.length : 0,
                newValue;

            // First look at values in Action
            if (values[value[LINK]]) {
                newValue = values[value[LINK]][CURRENT];

            // Then check values in Input
            } else if (action[INPUT_OFFSET] && action[INPUT_OFFSET].hasOwnProperty(value[LINK])) {
                newValue = value.origin + action[INPUT_OFFSET][value[LINK]];
            }
            
            for (var i = 1; i < mapLength; i++) {
                if (newValue < mapLink[i] || i === mapLength - 1) {
                    newValue = calc.value( calc.restricted( calc.progress(newValue, mapLink[i - 1], mapLink[i]), 0, 1), mapTo[i - 1], mapTo[i]);
                    break;
                }
            }
            
            return newValue;
        }
    },
    
    /*
        Angle and Distance
    */
    AngleAndDistance: {
        /*
            Currently inefficient as this gets called once each for
            radialX and radialY, which could be cut down
            
            @param [string]: Key of current value
            @param [Value]: Current value
            @param [object]: Collection of all Action values
            @param [object]: Action properties
            @param [Action]: Current Action
            @return [number]: Calculated value
        */
        process: function (key, value, values) {
            var origin = {
                    x: (values.x) ? values.x.get(CURRENT) : 0,
                    y: (values.y) ? values.y.get(CURRENT) : 0
                },
                point = calc.pointFromAngleAndDistance(origin, values.angle.get(CURRENT), values.distance.get(CURRENT)),
                newValue = {
                    radialX: point.x,
                    radialY: point.y
                };
            
            return newValue[key];
        }
    }
};