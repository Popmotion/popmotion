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
	
	
	/*
    	Get defined action
    	
    	@param [string]: The name of the predefined action
	*/
	getDefined: function (key) {
		return baseActions[key];
	},
	
	
	/*
		Register action
		
		@param [Action]: Add action to storage array
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
	
	/*
    	Purge deactivate queue
    	
    	Loops through the deactivate queue and decides whether to deactivate
    	or swap action parameters with the next in the action's playList
    	
    	We use a deactivate queue rather than deactivate as soon as we process it
    	because if we manipulate the list of activated Actions while it's being
    	looped through, well you can only imagine the fun that causes.
	*/
	purge: function () {
		var nextInPlaylist,
			queueLength = deactivateQueue.length;

		for (var i = 0; i < queueLength; i++) {
			nextInPlaylist = this.getNextInPlaylist(deactivateQueue[i]);

			if (!nextInPlaylist) {
    			this.deactivate(deactivateQueue[i]);
			} else {
    			this.change(deactivateQueue[i], nextInPlaylist.values, nextInPlaylist.options);
    			this.activate(deactivateQueue[i]);
			}
		}

		deactivateQueue = [];
	},
	
	
	/*
    	Add token to the deactivate queue
    	
    	Queue gets processed at the end of every frame
    	
    	@param [Token]: Token of action
	*/
	queueDeactivate: function (token) {
		deactivateQueue.push(token);
	},
	
	
	/*
    	Get next item in playlist, or return false if none
    	
    	@param [Token]: Token of action
	*/
	getNextInPlaylist: function (token) {
    	var nextInPlaylist = false,
    	    action = this.get(token),
    	    playlistLength = action.playlist ? action.playlist.length : 0;
    	
    	if (playlistLength && action.link === KEY.LINK.TIME) {
        	if (action.playCurrent <= playlistLength - 1) {
            	action.playCurrent++;
            	nextInPlaylist = this.getDefined(action.playlist[action.playCurrent]);
        	}
    	}
    	
    	return nextInPlaylist;
	},
	
	
	getData: function (token, key) {
	    var action = this.get(token);
    	
    	return action.data ? action.data[key] : undefined;
	},
	
	setData: function (token, data) {
    	var action = this.get(token);
    	
    	for (var key in data) {
        	if (data.hasOwnProperty(key)) {
            	action.data[key] = data[key];
        	}
    	}
	}
};

actionManager = new ActionManager();

module.exports = actionManager;