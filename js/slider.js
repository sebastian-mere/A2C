$(".logoSlider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  variableWidth: true,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
  mobileFirst: true,
  infinite: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
  ],
});

$(".carrouselRobots").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  variableWidth: false,
  autoplay: true,
  arrows: true,
  dots: true,
  autoplaySpeed: 10000,
  mobileFirst: false,
  infinite: true,
});

$(".carrouselVideos").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  variableWidth: false,
  autoplay: false,
  arrows: false,
  dots: true,
  mobileFirst: true,
  infinite: true,
});

$(".robotsHome").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  variableWidth: false,
  autoplay: true,
  arrows: false,
  dots: true,
  autoplaySpeed: 4000,
  mobileFirst: true,
  infinite: true,
});
