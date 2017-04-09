$(function() {
	smoothScroll(500);
	goToTop();
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

(function($) {

	$('.swipebox').swipebox();

} )(jQuery);

function goToTop () {
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scroll').fadeIn();
		} else {
			$('.scroll').fadeOut();
		}
	});
	$('.scroll').click(function(){
		$('html, body').animate({scrollTop : 0},500);
		return false;
	});
	
}