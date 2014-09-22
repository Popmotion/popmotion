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
	deactivateQueue = [];

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
		@param [string]: Method to control this action
		@param [object]: Value properties
		@param [object]: Action options
	*/
	change: function (token, link, props, opts, e) {
		var action = this.get(token),
		    actionOpts = opts || {};

        actionOpts.link = link;
        
        if (actionOpts.link === KEY.LINK.POINTER) {
			actionOpts.pointerOffset = PointerTracker.start(e);
        }
        
        actionOpts.values = props;
			
		action.set(actionOpts);
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
		var queueLength = deactivateQueue.length,
			i = 0;

		for (i; i < queueLength; i++) {
			this.deactivate(deactivateQueue[i]);
		}

		deactivateQueue = [];
	},
	
	queueDeactivate: function (token) {
		deactivateQueue.push(token);
	}
	
};

actionManager = new ActionManager();

module.exports = actionManager;