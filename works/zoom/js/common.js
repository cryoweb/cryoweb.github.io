$(document).ready(function(){
  $('.carousel').owlCarousel({
    loop:true,
    items:4,
    margin:15,
    dots:true
})

  $('.testimonial-carousel').owlCarousel({
    loop:true,
    dots:true,
    items:1
})

  $('.company-carousel').owlCarousel({
    loop:true,
    margin:80,
    items:5,
    autoWidth:true,
    dots:false
})
});

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 1000) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
            }
    });

    $('#toTop').click(function() {

    $('body,html').animate({scrollTop:0},800);

    });
});


$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});