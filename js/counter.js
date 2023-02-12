var animated = false;
$(window).on('scroll', function() {
  var sectionPosition = $('.counter').offset().top;
  var screenPosition = $(window).scrollTop();

  if (screenPosition > sectionPosition - $(window).height() && !animated) {
    $('.value, .valueError').each(function () {
      var value = $(this).text();
      if ($(this).hasClass('valueError')) {
        value = 100;
      }
      else {
        value = 0;
      }
      $(this).prop('Counter', value).animate({
          Counter: $(this).text()
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          },
          complete: function() {
              $(this).stop();
          }
      });
    });
    animated = true;
  }
});
