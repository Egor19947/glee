$(function(){

  $('.detalis__input').styler();

  $('.detalis-slide__small').slick({
    asNavFor: '.detalis-slide__big',
    vertical: true,
    draggable: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true
  });
  $('.detalis-slide__big').slick({
    asNavFor: '.detalis-slide__small',
    arrows: false,
    draggable: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    step: 0.01,
    type: "double",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });

  $('.slider-top__inner').slick({
    dots: true,
    arrows: false,
    fade: true
  });

  $(".stars").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "7px"
  });

  $(".shop-list__stars").rateYo({
    starWidth: "16px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "11px"
  });






  var mixer = mixitup('.product__items');
  var mixer = mixitup('.design__items');
    
});