(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });
	
	//Add link between subpages example!!!! very important!!!!
	$('#post-1-tab').on('click', function() {
		window.location = "1.html";
	});
	
	
	$('#post-2-tab').on('click', function() {
		window.location = "2.html";
	});
	
	$('#post-3-tab').on('click', function() {
		window.location = "3.html";
	});
	
	$('#post-4-tab').on('click', function() {
		window.location = "4.html";
	});
	
	$('#post-5-tab').on('click', function() {
		window.location = "5.html";
	});
	
	$('#post-6-tab').on('click', function() {
		window.location = "6.html";
	});
	
	$('#post-7-tab').on('click', function() {
		window.location = "7.html";
	});
	
	$('#post-8-tab').on('click', function() {
		window.location = "8.html";
	});
	
	
	//Back-button
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
		window.sessionStorage.setItem("searchword", $("[name=search]")[0].value);
		$('.search-input').val("");
		$('.search-form').removeClass('active');
		window.location = "search_result.html";
	})
	
	//Join click
	$('.join').click(function() {
		alert("Thank you for your participation!");
	})
	//Recommend click
	$('.recommend').click(function() {
		window.location = "tutorial.html";
	})


})(jQuery); // End of use strict
