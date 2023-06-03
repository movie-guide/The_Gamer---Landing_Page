// Slider

$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 2,
    speed: 400,
    autoplay: true,
    pauseOnFocus: true,
    draggable: true,
    swipe: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        }
      }
    ]
  });
  $('.header-burger').click(function(event) {
    $('.header-burger').toggleClass('active');
    $('.nav-menu').toggleClass('active');
  });
});


// Smooth Scroll

const anchors = document.querySelectorAll('.nav-link')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}