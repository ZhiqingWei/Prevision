// JavaScript Document
(function($) {
	"use strict"

	$('.back-button').on('click', function () {
		window.history.back();
	});
	
	window.onload = function() {
		var textval = window.sessionStorage.getItem("searchword");
		$('.search-tag').text(textval);
	};
	
	
})(jQuery);