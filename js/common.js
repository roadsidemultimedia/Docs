!function ($) {

	// Load After Page Load
	$(document).ready(function() {
	
		$.plNavigation.init()
		$.plCodeStyle.init()
		
	})
	
	// Load After Images
	$(window).load(function() {
	
	})
	
	$.plNavigation = {
		
		init: function(){
			
			this.navDetection()
			this.header()
			
		}
		, header: function(){
			$("section h1").wrap('<div class="page-header" />')
			$("section p:first-child").addClass('lead')
		}
		, navDetection: function(){
			
			var url = window.location;
			
			console.log(url)
			
			if(url == 'http://docs.pagelines.com' || url == 'http://docs.pagelines.com/'){
				
				$('.nav-list').addClass('active-menu')
				
			}
			
			// Will also work for relative and absolute hrefs
			$('.nav-detect a').filter(function() {
				
			    return this.href == url
			
			}).addClass('active-page').closest('.nav-list').addClass('active-menu')
			
			$('.nav-detect .lead a').filter(function() {
				
			    return this.href == url
			
			}).closest('.nav-list').addClass('menu-active')
			
		}
		
	}
	$.plCodeStyle = {
		
		init: function(){
			this.StyleCode()
		}
		, StyleCode: function() {

		    var a = false;

		    $("pre code").parent().each(function() 
		    {
		        if (!$(this).hasClass("prettyprint")) 
		        {
		            $(this).addClass("prettyprint linenums");
		            a = true
		        }
		    });

		    if (a) { prettyPrint() }
		}
	}
	
}(window.jQuery);