$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true
    });
});

$('#slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('#slider .slick-dots li').removeClass('slick-active').attr('aria-hidden', 'true');
    $('#slider .slick-dots li button').focus(function () {
        this.blur();
    });
});