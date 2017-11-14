"use strict";

function handleContactEvent(event) {

	let environment = 'dev'

	if (window.location && window.location.host && window.location.host === 'kistek.consulting') {
		environment = 'prod'
	}

	const eventCategory =  'contact'
	const eventAction = $(event.srcElement).attr('data-contact-source')
	const eventLabel = environment

	ga('send', 'event', eventCategory, eventAction, eventLabel)
}

$(document).ready(function () {

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});


	$('#services .contact').on('click', (event) => {

		$('#contact .section-title').addClass('animated lightSpeedIn').delay(1000).queue(function() {
			$(this).removeClass('animated lightSpeedIn').dequeue()
		})

		handleContactEvent(event)
	})

	$('#contact .contact').on('click', (event) => {
		handleContactEvent(event)
	})
});

/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(30).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(30).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

	// google analytics - why can't this go in head?
	ga('create', 'UA-107053932-1', 'auto')

});
