$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  $('.lazy').Lazy({
    scrollDirection: 'vertical',
    effect: 'fadeIn',
    effectTime: 1500,
    visibleOnly: true,
    onError: function (element) {
      console.log('error loading ' + element.data('src'));
    }
  });

  $(window).scroll(function () {
    $('section:not(section:first-child)').find('.container').each(function (e) {
      var bottomElement = $(this).offset().top + $(this).outerHeight();
      var bottomWindow = $(window).scrollTop() + $(window).height();
      if (bottomWindow > bottomElement - 150) {
        $(this).animate({ "opacity": "1" }, 500);
      }
    });
  });

});