(function ($) {

    $(window).scroll(function(e) {


	if ($(this).width() < 500) {
	    $('.navbar')[$(window).scrollTop() >= 0 ? 'addClass' : 'removeClass']('bg-light');
            $('.nav-text')[$(window).scrollTop() >= 0  ? 'addClass' : 'removeClass']('black-text');
	    $('.nav-text')[$(window).scrollTop() >= 0  ? 'removeClass' : 'addClass']('white-text');
	} else {
	    $('.navbar')[$(window).scrollTop() >= 0 ? 'addClass' : 'removeClass']('bg-light');
            $('.nav-text')[$(window).scrollTop() >= 0 ? 'addClass' : 'removeClass']('black-text');
	    $('.nav-text')[$(window).scrollTop() >= 0 ? 'removeClass' : 'addClass']('white-text');
	}

	
	

    });

    $(document).ready(function(){
	$(".navbar-menubutton").click(function(){
	    $('.navbar')[$(window).scrollTop() >= 0 ? 'addClass' : 'toggleClass']('bg-light');
	    $('.nav-text')[$(window).scrollTop() >= 0 ? '' : 'toggleClass']('white-text');
	    $('.nav-text')[$(window).scrollTop() >= 0 ? 'addClass' : 'toggleClass']('black-text');
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
