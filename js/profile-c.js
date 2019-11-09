// JavaScript Document

(function($) {
	"use strict"
	
	window.onload = function() {
		$('.user').text(window.sessionStorage.getItem("username"));
		$('.pass').val(window.sessionStorage.getItem("pass"));
		$('.pass-change').hide();
	}
	
	$('#toggle').click(function() {
		$('.pass-change').show(1000);
	})
	
	$('#submit-close').click(function() {
		$('.pass-change').hide(1000);
		$('.new-pass').val("");
		$('.confirm-pass').val("");
	})
	
	$('.current-c').click(function() {
		if ($('.pass')[0].type == "password") {
			$('.pass')[0].type = "text";
		}
		else {
			$('.pass')[0].type = "password";
		}
	})
	
	$('.new-c').click(function() {
		if ($('.new-pass')[0].type == "password") {
			$('.new-pass')[0].type = "text";
		}
		else {
			$('.new-pass')[0].type = "password";
		}
	})
	
	$('.confirm-c').click(function() {
		if ($('.confirm-pass')[0].type == "password") {
			$('.confirm-pass')[0].type = "text";
		}
		else {
			$('.confirm-pass')[0].type = "password";
		}
	})
	
	$('#submit-pass').click(function() {
		if ($('.confirm-pass').val() == $('.new-pass').val()) {
			$('.pass-change').hide();
			$('.pass').val($('.confirm-pass').val());
			$('.confirm-pass').val("");
			$('.new-pass').val("");
			alert("新密码设置成功！");
		}
		else {
			alert("两次输入密码不匹配，请重试。")
		}
	})
	
	$('#eng').click(function() {
		window.location = "profile.html";
	})
	
	$('#chinese').click(function() {
		window.location = "profile-c.html";
	})
	
	$('#thai').click(function() {
		window.location = "profile-h.html";
	})
})(jQuery);