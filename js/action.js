$(document).ready(function(){

	$('.user-toggle').click(function(e) {
		e.preventDefault();
		e.stopPropagation();

		// if($('#nav').length>0) {
		// 	$('#nav').removeClass().addClass('.account');
		// }
		// 找找slide
		
		$('.account').fadeToggle();
	});

	$('.menu-toggle').click(function(e) {
		e.preventDefault();
		e.stopPropagation();

		// if($('.account').length>0) {
		// 	$('.account').removeClass().addClass('#nav');
		// }
		
		$('#nav').fadeToggle();
	});
});