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
	
	
//Open url for each section of partners
	
	$('#FE').click(function() {
		window.sessionStorage.setItem("location",'<object data="https://futureearth.org/"/>');
		window.location = "partner_page.html";
		//$('.back-button').style.visibility = "visible";
	});
	
	$('#YC').click(function() {
		window.sessionStorage.setItem("location",'<object data="https://youthclimatemovement.wordpress.com/"/>');
		window.location = "partner_page.html";
	});
	
	$('#GN').click(function() {
		window.sessionStorage.setItem("location",'<object data="https://www.globalnet21.org/"/>');
		window.location = "partner_page.html";
	});
	
	$('#CA').click(function() {
		window.sessionStorage.setItem("location",'<object data="https://www.climatealliance.org/home.html"/>');
		window.location = "partner_page.html";
	}); 
	
	$('#GARP').click(function() {
		window.sessionStorage.setItem("location",'<object data="https://www.garp.org/#!/home?utm_source=google&utm_medium=cpc&utm_campaign=f19exams%20%20GARP&utm_term=global%20association%20of%20risk%20professionals"/>');
		window.location = "partner_page.html";
	}); 
	
	$('#CP').click(function() {
		window.sessionStorage.setItem("location",'<object data="https://www.coolplanet.com/"/>');
		window.location = "partner_page.html";
	}); 
	
	

	// Search Nav
//	$('.search-btn').on('click', function () {
//		$('.search-form').addClass('active');
//	});
//
//	$('.search-close').on('click', function () {
//		$('.search-form').removeClass('active');
//	});


})(jQuery); // End of use strict
