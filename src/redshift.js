/*
    R E D S H I F T
    ----------------------------------------
    
    
*/
"use strict";

var KEY = require('./opts/keys.js'),
	ActionManager = require('./controllers/actionManager.js'),
	Chronos = require('./controllers/chronos.js'),
	Easing = require('./utils/easingFunctions.js'),
	utils = require('./utils/utils.js'),
	Redshift = function () {},
    redshift,
    Facade = function (token) {
        this.token = token;
    };
    
Facade.prototype = {

	/*
    	Animate values
        
        @param [object]: Properties to manipulate
        
        Syntax A
            @param [object]: Options for track
            
        Syntax B
            @param [number]: Duration
            @param [string] (optional): Easing
            @param [function] (optional): onFrame callback
            @param [function] (optional): onEnd callback
        
        @return [int]: ID token for action
	*/
	animate: function (props) {
	    var opts = utils.isObj(arguments[1]) ? arguments[1] : {};

        // Set duration
        if (utils.isNum(arguments[1])) {
            opts.duration = arguments[1];
        }
        
        // Set onFrame
        if (utils.isFunc(arguments[2])) {
            opts.onFrame = arguments[2];
        }
        
        // Set onEnd
        if (utils.isFunc(arguments[3])) {
            opts.onEnd = arguments[3];
        }
	
		return redshift.ignite(this.token, KEY.LINK.TIME, props, opts);
	},
	
	
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
	*/
	play: function (actions) {
		var actionList = utils.isArray(actions) ? actions : actions.split(" "),
			baseAction = ActionManager.getDefined(actionList[0]),
			props = baseAction.values,
			opts = baseAction.options;
			
		opts.playlist = actionList;
		opts.playCurrent = 0;
	
		return redshift.ignite(this.token, KEY.LINK.TIME, props, opts);
	},
	
	/*
    	Run the provided action based on property speed
    	
    	@param [string]: Key of the action to process
	*/
	speed: function (action) {
		var baseAction = ActionManager.getDefined(action),
			props = baseAction.values,
			opts = baseAction.options;

		return redshift.ignite(this.token, KEY.LINK.SPEED, props, opts);
	},
	

    /*
        Track pointer
        
        @param [object]: Properties to manipulate
        @param [object]: Options for track
        @param [event]: Initiating pointer event
        @return [int]: ID token for action
    */
	track: function (props, opts, e) {
		return redshift.ignite(this.token, KEY.LINK.POINTER, props, opts, e);
	},
    
    
    /*
        Start specified action
        
        Activate the action and fire up Chronos animation loop
    */
    start: function () {
        redshift.start(this.token);
    },
    
    
    /*
        Stop specified action
    */
    stop: function () {
        redshift.stop(this.token);
    },
    
    getToken: function () {
        return this.token;
    }
    
};

Redshift.prototype = {

    /*
        Create a facade with the specified token
    */
    get: function (token) {
        var action = ActionManager.get(token) || ActionManager.create();

        return new Facade(action.token);
    },
    
    
    define: function (actions) {
	    ActionManager.define(actions);
	    return this;
    },
	
	animate: function (props, opts) {
    	var action = ActionManager.create();
    	
		return redshift.ignite(action.token, KEY.LINK.TIME, props, opts);
	},
	
	
	/*
    	Ignite Redshift
    	
    	Get the specified action (or create if none), update its properties
    	and then start
        
        @param [object]: Properties to manipulate
        @param [object]: Options for track
        @param [event]: Initiating pointer event
        @return [int]: ID token for action
	*/
	ignite: function (token, link, props, opts, e) {
		var action = ActionManager.get(token);
		
		opts.link = link;

		ActionManager.change(action.token, props, opts, e);

		this.start(action.token);

		return action.token;
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
	},
	
	start: function (token) {
        ActionManager.activate(token);
        Chronos.start();
	},
	
	stop: function (token) {
    	Actions.deactivate(token);
	},
	
	run: function () {
    	
	},
	
	updatePointer: function (x, y, z) {
    	
	}
};

redshift = new Redshift();

window.Redshift = redshift;
module.exports = redshift;