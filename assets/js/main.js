


$(function () {
"use strict";


	//===== Preloader

	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	// data - background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
	});


	// testimonial-active slider 
	$('.testimonial-active').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<i class="lni lni-chevron-left"></i>',
		nextArrow: '<i class="lni lni-chevron-right"></i>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	//===== Sticky

	$(window).on('scroll', function (event) {
		var scroll = $(window).scrollTop();
		if (scroll < 20) {
			$(".header-area").removeClass("sticky");
		} else {
			$(".header-area").addClass("sticky");
		}
	});

	//===== close navbar-collapse when a  clicked

	$(".menu-btn").on('click', function () {
		$(".header-bottom").toggleClass("show");
	});

	$(".navbar-area nav ul li a").on('click', function () {
		$(".header-bottom").removeClass('show');
	});



	//Scroll top 
	$(".scroll-top").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 1000);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 180) { $(".scroll-top").fadeIn(); }
		else {
			$(".scroll-top").fadeOut();
		}
	});

	// WOW active
	new WOW().init();

});	

