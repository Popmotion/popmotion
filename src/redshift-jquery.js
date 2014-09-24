(function ($) {

	var KEY = {
			ELEMENT: '_jQueryElement',
			RS: 'redshift'
		},
		launch = function () {
			var $e = arguments[1];
			
			$e.each(function () {
				var $this = $(this),
					rs = $this.data(KEY.RS);
					
				if (!rs) {
					$this.data(KEY.RS, rs);
					rs.data(KEY.ELEMENT, $this);
				}
				
				rs[arguments[0]](arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
			});
		};
	
	$.fn.play = function() {
		launch('play', this, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
		
		return this;
	};
	
	$.fn.track = function () {
		launch('track', this, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
		
		return this;
	};
	
})(jQuery);