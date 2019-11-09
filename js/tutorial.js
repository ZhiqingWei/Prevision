// JavaScript Document
(function($) {
	"use strict"

	$('.back-button').on('click', function () {
		window.history.back();
	});

	// Search Nav
	$('.search-btn').click(function() {
		$('.search-form').addClass('active');
	});

	$('.search-close').click(function() {
		$('.search-input').val("");
		$('.search-form').removeClass('active');
	});
	
	$('.search-submit').click(function() {
		$('.search-tag').text($("[name=search]")[0].value);
		$('.search-input').val("");
		$('.search-form').removeClass('active');
	})
	
})(jQuery);