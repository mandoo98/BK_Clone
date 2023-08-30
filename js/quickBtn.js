$(document).ready(function(){
	$(".quickBtn").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 700) {
				$('.quickBtn').fadeIn();
			} else {
				$('.quickBtn').fadeOut();
			}
		});     
		$('.to_top').click(() => {$('body,html').animate({scrollTop: 0}, 500);
				return false;
		});
	});
});