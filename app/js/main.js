$(function(){

  $('.user-nav__link4').on('click', function() {
    $('.shop-content__items').toggleClass('shop-content__items--list')
  })



  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    step: 0.01,
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

  $(".product__stars").rateYo({
    starWidth: "16px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "10px"
  });






  var mixer = mixitup('.product__items');
  var mixer = mixitup('.design__items');
    
});