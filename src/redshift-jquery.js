(function ($) {

	var KEY = {
			ELEMENT: '_jQueryElement',
			RS: 'redshift'
		},
		launch = function (run, $e) {
			$e.each(function () {
				var $this = $(this);
					
				if (!$this.redshift) {
					$this.redshift = Redshift.get();
					$this.redshift.data(KEY.ELEMENT, $this);
				}
				
				$this.redshift[run](arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
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