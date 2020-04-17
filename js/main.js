(function ($) {

    $(window).scroll(function(e) {


	if ($(this).width() < 500) {
	    $('.navbar')[$(window).scrollTop() >= 700 ? 'addClass' : 'removeClass']('bg-light');
            $('.nav-text')[$(window).scrollTop() >= 700  ? 'addClass' : 'removeClass']('black-text');
	    $('.nav-text')[$(window).scrollTop() >= 700  ? 'removeClass' : 'addClass']('white-text');
	} else {
	    $('.navbar')[$(window).scrollTop() >= 1080 ? 'addClass' : 'removeClass']('bg-light');
            $('.nav-text')[$(window).scrollTop() >= 1080 ? 'addClass' : 'removeClass']('black-text');
	    $('.nav-text')[$(window).scrollTop() >= 1080 ? 'removeClass' : 'addClass']('white-text');
	}

	
	

    });

    $(document).ready(function(){
	$(".navbar-menubutton").click(function(){
	    $('.navbar')[$(window).scrollTop() >= 700 ? 'addClass' : 'toggleClass']('bg-light');
	    $('.nav-text')[$(window).scrollTop() >= 700 ? '' : 'toggleClass']('white-text');
	    $('.nav-text')[$(window).scrollTop() >= 700 ? 'addClass' : 'toggleClass']('black-text');
	});

	$(".personal-button").click(function(){
	    var element = document.querySelector("#personal-tag");
	    element.scrollIntoView({ behavior: 'smooth'});

	});

	
	$(".business-button").click(function(){
	    var element = document.querySelector("#business-tag");
	    element.scrollIntoView({ behavior: 'smooth'});

	});

	$(".register-button").click(function(){
	    var element = document.querySelector("#register-tag");
	    element.scrollIntoView({ behavior: 'smooth'});

	});
    });


    
    
})(jQuery);
