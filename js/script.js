(function($) {

	$('.swipebox').swipebox();

} )(jQuery);

(function($) {
  var controller = new slidebars();
  controller.init();
  
  $('#menu').click(function(event) {
    event.stopPropagation();
    event.preventDefault();

    controller.toggle('mobile-menu');
  });
})(jQuery);