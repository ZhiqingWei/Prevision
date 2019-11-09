// JavaScript Document

(function($) {
	"use strict"
	
	// Search Nav
	$('.search-btn').click(function() {
		$('.search-form').addClass('active');
	});

	$('.search-close').click(function() {
		$('.search-input').val("");
		$('.search-form').removeClass('active');
	});
	
	$('.search-submit').click(function() {
		window.sessionStorage.setItem("searchword", $("[name=search]")[0].value);
		$('.search-input').val("");
		$('.search-form').removeClass('active');
		window.location = "search_result.html";
	})
})(jQuery);