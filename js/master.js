// js-carousel
$('.js-item').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
});
// end js-carousel

// js-search
$('.js-btn-search').click(function () {
  $(".js-input_search").toggle();
  $(this).children().toggleClass('fa-times');
});
// end-js-search

// js-tab
function activeTab(obj) {
  $('.js-nav-main-product ul li').removeClass('active');
  $(obj).addClass('active');
  var id = $(obj).find('a').attr('href');
  $('.js-main-item').hide();
  $(id).show();
}

$('.js-tab li').click(function () {
  activeTab(this);
  return false;
});

activeTab($('.js-tab li:first-child'));
// end-js-tab

$('.js-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  appendDots: $('.slide-controls'),
  dotsClass: 'custom-dots',
  customPaging: function (slider, i) {
    return '<span class="dot" role="button"></span>';
  }
});
