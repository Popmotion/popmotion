/*
    Redshift jQuery plugin
    
    TODO: Refactor to remove all this repeated code. Jeez it's a mess in here.
*/

require('./redshift.js');

(function ($) {

	var KEY = {
			ELEMENT: '_jQueryElement',
			RS: 'redshift'
		};
	
	$.fn.play = function(actions) {
	    
	    this.each(function () {
    	    var $this = $(this),
    	        thisRS = $this.data(KEY.RS);
    	    
    	    if (!thisRS) {
        	    thisRS = Redshift.get();
        	    thisRS.data(KEY.ELEMENT, $this);
        	    $this.data(KEY.RS, thisRS);
    	    }

    	    thisRS.play(actions);
	    });
		
		return this;
	};
	
	$.fn.speed = function(actions) {
	    
	    this.each(function () {
    	    var $this = $(this),
    	        thisRS = $this.data(KEY.RS);
    	    
    	    if (!thisRS) {
        	    thisRS = Redshift.get();
        	    thisRS.data(KEY.ELEMENT, $this);
        	    $this.data(KEY.RS, thisRS);
    	    }

    	    thisRS.speed(actions);
	    });
		
		return this;
	};
	
	$.fn.track = function(actions) {
	    
	    this.each(function () {
    	    var $this = $(this),
    	        thisRS = $this.data(KEY.RS);
    	    
    	    if (!thisRS) {
        	    thisRS = Redshift.get();
        	    thisRS.data(KEY.ELEMENT, $this);
        	    $this.data(KEY.RS, thisRS);
    	    }

    	    thisRS.track(actions);
	    });
		
		return this;
	};
	
	$.fn.redshift = function(action) {
	    
	    this.each(function () {
    	    var $this = $(this),
    	        thisRS = $this.data(KEY.RS);
    	    
    	    if (!thisRS) {
        	    thisRS = Redshift.get();
        	    thisRS.data(KEY.ELEMENT, $this);
        	    $this.data(KEY.RS, thisRS);
    	    }

    	    thisRS[action]();
	    });
		
		return this;
	};
	
})(jQuery);