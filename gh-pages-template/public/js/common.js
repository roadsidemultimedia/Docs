!function ($) {

	// Load After Page Load
	$(document).ready(function() {
	
		$.plNavigation.init()
		
	})
	
	// Load After Images
	$(window).load(function() {
	
	})
	
	$.plNavigation = {
		
		init: function(){
			
			$(this).navDetection()
			
		}
		
		, navDetection: function(){
			
			var url = window.location;
			
			// Will also work for relative and absolute hrefs
			$('.nav-detect a').filter(function() {
				
			    return this.href == url
			
			}).addClass('page-active')
			
			$('.nav-detect .lead a').filter(function() {
				
			    return this.href == url
			
			}).closest('.nav-list').addClass('menu-active')
			
		}
		
	}
	
}(window.jQuery);