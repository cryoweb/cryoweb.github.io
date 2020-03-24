$(function() {

	$('.burger').click(function(event){
		$(this).toggleClass('active');
		$('.mobil-menu').toggleClass('active');
		if($(this).hasClass('active')){
			$('body').data('scroll',$(window).scrollTop());
		}
		$('body').toggleClass('lock');
		if(!$(this).hasClass('active')){
			$('body,html').scrollTop(parseInt($('body').data('scroll')));
		}
	});

});
