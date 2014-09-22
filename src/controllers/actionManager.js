/*
	ActionManager
*/
"use strict";

var KEY = require('../opts/keys.js'),
	PointerTracker = require('./pointerTracker.js'),
	Action = require('../models/action.js'),
	ActionManager = function () {},
	actionManager,
	allActions = [],
	activeTokens = [],
	deactivateQueue = [],
	baseActions = {};

ActionManager.prototype = {
	
	/*
		Create action
		
		@return [Action]
	*/
	create: function () {
		var action = new Action();

		this.register(action);
		
		return action;
	},
	
	
	/*
		Change action
		
		@param [Token]: Token for the action
		@param [object]: Value properties
		@param [object]: Action options
	*/
	change: function (token, props, opts, e) {
		var action = this.get(token);
        
        if (opts.link === KEY.LINK.POINTER) {
			opts.pointerOffset = PointerTracker.start(e);
        }
        
        opts.values = props;
			
		action.set(opts);
	},
	
	/*
		Define a base action
		
		Can be called later with .play()
		
		@param [object]
	*/
	define: function (actions) {
		var key;

		for (key in actions) {
			if (actions.hasOwnProperty(key)) {
				baseActions[key] = actions[key];
			}
		}
	},
	
	
	getDefined: function (key) {
		return baseActions[key];
	},
	
	
	/*
		Register action
		
		@param [Action]: Add action to sotrage array
	*/
	register: function (action) {
		allActions[action.token] = action;
	},
	
	
	/*
		Get the specified action
		
		@param [Token]: Token
		@return [Action || boolean]: Action with specified token, false if none found
	*/
	get: function (token) {
		return allActions[token] || false;
	},
	
	
	/*
    	Get tokens of all active actions
    	
    	@return [array]: Array of active tokens
	*/
	getActiveTokens: function () {
    	return activeTokens;
	},
	
	
	/*
    	Activate specified action
    	
    	Activates action and adds to activeTokens array
    	
    	@param [Token]: Token
	*/
	activate: function (token) {
    	var action = this.get(token),
	        index = activeTokens.indexOf(token),
	        deactivateIndex = deactivateQueue.indexOf(token);
    	
    	action.start();
    	
    	if (index === -1) {
            activeTokens.push(token);
        }

        // Remove from deactivate queue if it's been placed there
        if (deactivateIndex >= 0) {
            deactivateQueue.splice(deactivateIndex, 1);
        }
	},
	
	
	/*
    	Deactivate specified action
    	
    	Activates action and removes from activeTokens array
    	
    	@param [Token]: Token
	*/
	deactivate: function (token) {
    	var action = this.get(token),
	        index = activeTokens.indexOf(token);

	    action.stop();
	    
    	if (index > -1) {
    	    activeTokens.splice(index, 1);
    	}
	},
	
	purge: function () {
		var action, defined,
			queueLength = deactivateQueue.length,
			i = 0;

		for (i; i < queueLength; i++) {
			action = this.get(i);
			
			if (action.link === KEY.LINK.TIME && action.playCurrent <= action.playList.length - 1) {
				action.playCurrent++;
				defined = this.getDefined(action.playList[action.playCurrent]);
				this.change(i, defined.values, defined.options);
				action.start();
			} else {
				this.deactivate(deactivateQueue[i]);
			}
		}

		deactivateQueue = [];
	},
	
	queueDeactivate: function (token) {
		deactivateQueue.push(token);
	}
	
};

actionManager = new ActionManager();

module.exports = actionManager;