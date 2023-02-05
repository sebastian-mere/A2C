$(".logoSlider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    variableWidth: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    infinite: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 5
        
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3
          }
        },
      ]
  });