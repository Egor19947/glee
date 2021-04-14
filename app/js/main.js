$(function(){

  $('.shop-filter__btn').on('click', function () {
    $('.shop-filter').toggleClass('shop-filter--active')
  })

  $('.footer-top__title--slide').on('click', function(){
    $(this).next().slideToggle();
  })

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  })

  $('.related-products__slide').slick({
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3
        }
      }, 
      {
        breakpoint: 881,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.detalis-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.detalis-tabs__top-item').removeClass('detalis-tabs__top-item--active');
    $(this).addClass('detalis-tabs__top-item--active');
    $('.detalis-tabs__content-item').removeClass('detalis-tabs__content-item--active');
    $($(this).attr('href')).addClass('detalis-tabs__content-item--active');
  });

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
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 651,
        settings: {
          draggable: true
        }
      }
    ]
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






  // var mixer = mixitup('.product__items');
  // var mixer = mixitup('.design__items');

  const mixin1 = document.querySelector(".product__items");
  const mixin2 = document.querySelector(".design__items");

  if (mixin1) {
    mixitup('.product__items', {
      selectors: {
        control: '.filter'
      }
    })
  }

  if (mixin1) {
    mixitup('.design__items', {
      selectors: {
        control: '.filter2'
      }
    })
  }

});