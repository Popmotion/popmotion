/*
    R E D S H I F T
    ----------------------------------------
    
    
*/
"use strict";

var KEY = require('./opts/keys.js'),
    ActionManager = require('./bobs/actionManager.js'),
    InputManager = require('./bobs/inputManager.js'),
    Chronos = require('./bobs/chronos.js'),
    Easing = require('./utils/easingFunctions.js'),
    calc = require('./utils/calc.js'),
    utils = require('./utils/utils.js'),
    Redshift = function () {
        this.init();
    },
    redshift,
    Instance = function (token) {
        this.token = token;
    };
    
Instance.prototype = {
    
    /*
        Read or bind data to this Redshift object
        
        Read
            @param [string]: Key of data value to read
            @return [any]: The data stored under that key
            
        Write syntax A
            @param [string]: Key of data value to write
            @param [any]: The data to store under that key
            
        Write syntax B
            @param [object]: Object of key/value pairs to attach to this object
    */
    data: function () {
        var returnValue = this,
            arg0 = arguments[0],
            arg0IsString = utils.isString(arg0),
            dataToSet = {};
        
        // If this is a get request
        if (arg0IsString && !arguments[1]) {
            returnValue = ActionManager.getData(this.token, arg0);
        
        // Else this is a set request
        } else {
            if (arg0IsString) {
                dataToSet[arg0] = arguments[1];
            } else {
                dataToSet = arg0;
            }

            ActionManager.setData(this.token, dataToSet);
        }

        return returnValue;
    },
    
    /*
        Play the provided actions as animations
        
        @param [string || array]: Space deliminated string or array of defined action keys in order of execution
        @param [object]: Override action defaults with those defined here
    */
    play: function (defs, override) {
        return redshift.ignite(this.token, KEY.RUBIX.TIME, ActionManager.createBase(defs, override));
    },

    /*
        Track pointer
        
        @param [string]: Key of the action to process
        @param [event]: Initiating pointer event
    */
    track: function (defs) {
        var hasAllArgs = (arguments[2] !== undefined),
            toTrack = hasAllArgs ? arguments[2] : arguments[1],
            override = hasAllArgs ? arguments[1] : {};

        return redshift.ignite(this.token, KEY.RUBIX.INPUT, ActionManager.createBase(defs, override), toTrack);
    },
    
    /*
        Run process
        
        @param [string]: Key of action to run
        @param [object]: Override action defaults with those defined here
    */
    run: function (defs, override) {
        return redshift.ignite(this.token, KEY.RUBIX.RUN, ActionManager.createBase(defs, override));
    },
    
    /*
        Start specified action
        
        Activate the action and fire up Chronos animation loop
    */
    start: function () {
        redshift.start(this.token);
        return this;
    },
    
    
    /*
        Stop specified action
    */
    stop: function () {
        redshift.stop(this.token);
        return this;
    },
    
    getToken: function () {
        return this.token;
    },
    
    isActive: function () {
        return ActionManager.isActive(this.token);
    }
    
};

Redshift.prototype = {

    newAction: function () {
        return this.get();
    },
    
    newInput: function () {
        return InputManager.create(arguments[0], arguments[1]);
    },

    /*
        Create a Instance with the specified token
    */
    get: function (token) {
        var action = ActionManager.get(token) || ActionManager.create();

        return new Instance(action.token);
    },
    
    
    define: function (actions) {
        ActionManager.define(actions);
        return this;
    },
    
    start: function (token) {
        ActionManager.activate(token);
        Chronos.start();
    },
    
    stop: function (token) {
        ActionManager.deactivate(token);
    },
    
    /*
        Ignite Redshift
        
        Get the specified action (or create if none), update its properties
        and then start
        
        @param [object]: Properties to manipulate
        @param [object]: Options for track
        @param [event || Input]: Initiating pointer event or Input object
        @return [int]: ID token for action
    */
    ignite: function (token, rubix, changes, input) {
        var action = ActionManager.get(token);
        
        changes.rubix = rubix;

        ActionManager.change(token, changes, input);

        this.start(token);

        return action;
    },

    /*
        Add bezier curve function
        
        Add the specified bezier curve the EasingFunction's available easings
        My favourite bezier curve generator is Lea Verou's excellent http://cubic-bezier.com/
        
        @param [string]: Name of the new easing function 
        @param [number]: x coordinate of point 1
        @param [number]: y coordinate of point 1
        @param [number]: x coordinate of point 2
        @param [number]: y coordinate of point 2
    */
    addBezier: function (name, x1, y1, x2, y2) {
        Easing.addBezier(name, x1, y1, x2, y2);
        
        return this;
    },
    
    Calc: calc,
    
    run: function () {
        
    },
    
    /*
        Init Redshift
    */
    init: function () {
        // Check and load feature shims
        require('./utils/shims.js').featureCheck();
        
        // Check and load jQuery plugins
        require('./utils/rQuery.js').featureCheck(this);
    }
};

redshift = new Redshift();

module.exports = redshift;
