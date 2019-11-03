




$(document).ready(function() {

	// Smooth Scroll num 1

	// $(function(){
	// 	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
	// 		let target = $(this).attr("href");
	// 		bl_top = $(target).offset().top;
	// 		$('body, html').animate({ scrollTop: bl_top}, 1000);
	// 		return false;
	// 	})
	// });

	let header = $('#header');
	let intro = $('#intro');
	let scrollPos = $(window).scrollTop();

	$(window).on('scroll load resize', function() {
		let introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		if( scrollPos > introH){
			header.addClass('fixed');
		}
		else{
			header.removeClass('fixed');
		}
	})



	let nav = $('#nav');
	let navToggle = $('#navToggle');

	// Smooth scroll 2

	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		nav.removeClass('show');

		$('html, body').animate({
			scrollTop: elementOffset - 55
		}, 800);
	});



	//  Nav Toggle
	navToggle.on('click', (event)=> {
		event.preventDefault();

		nav.toggleClass('show');
	})


	//  Reviews     https://kenwheeler.github.io/slick/

	let slider = $('#reviewsSlider');

	slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows: false,
	  dots: true
	});
});