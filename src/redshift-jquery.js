/*
    Redshift jQuery plugin
    
    Provides access to .play, .move and .track properties on an jQuery object.
    Uses that jQuery object to store a unqiue Redshift instance.
    
    .redshift() method used for other Redshift functions, ie $('#element').redshift('stop')
*/

require('./redshift.js');

(function ($) {

	var KEY = {
			ELEMENT: '_jQueryElement',
			RS: 'redshift'
		},
		execute = function ($element, action, arg1, arg2, arg3) {
			$element.each(function () {
				var $this = $(this),
					thisRedshift = $this.data(KEY.RS);
				
				// If we haven't stored a Redshift instance on this element, make one
				if (!thisRedshift) {
					thisRedshift = Redshift.get();
					thisRedshift.data(KEY.ELEMENT, $this);
					$this.data(KEY.RS, thisRedshift);
				}
				thisRedshift[action](arg1, arg2, arg3);
			});
		};
		
	$.fn.play = function () {
		execute(this, 'play', arguments[0], arguments[1]);
		
		return this;
	};
	
	$.fn.move = function () {
		execute(this, 'move', arguments[0], arguments[1]);

		return this;
	};
	
	$.fn.track = function () {
		execute(this, 'track', arguments[0], arguments[1]);
		
		return this;
	};
	
	$.fn.redshift = function (action) {
		execute(this, action, arguments[2], arguments[3]);
		
		return this;
	};
})(jQuery);