$(function(){

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