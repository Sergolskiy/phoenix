var iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
var iPad = /iPad/.test(navigator.userAgent) && !window.MSStream;
var UAString = navigator.userAgent;
if(iPhone){
    $('body').addClass('iphone');
}
if(iPad){
    $('body').addClass('ipad');
}

if (UAString.toLowerCase().indexOf('safari') != -1) {
  if (UAString.toLowerCase().indexOf('chrome') > -1) {
    // alert("1") // Chrome
  } else {
    // alert("2") // Safari
    $('body').addClass('safari');
  }
}

if(UAString.indexOf("Edge") > -1) {
  $('body').addClass('edge');
}

if (UAString.indexOf("Trident") !== -1 && UAString.indexOf("rv:11") !== -1)
{
  $('body').addClass('ie');
}
if (UAString.indexOf("Trident") !== -1 && UAString.indexOf("rv:10") !== -1)
{
  $('body').addClass('ie');
}



$(document).ready(function(){

  // checking browser for WEBP
  hasWebP().then(function () {
    $('.webp-img').each(function () {
      var webp = $(this).data('webp');
      $(this).attr('data-blazy', webp);
    });

    var bLazy = new Blazy({
      src: 'data-blazy'
    });

  }, function () {
    $('.webp-img').each(function () {
      var img = $(this).data('img');
      $(this).attr('data-blazy',  img );
    });

    var bLazy = new Blazy({
      src: 'data-blazy'
    });

  });

  var bLazy = new Blazy({
    src: 'data-blazy'
  });

  if($(document).width() > 992){
    $('.header__menu-item').hover(function () {
      $(this).addClass('open');
    }, function () {
      $(this).removeClass('open');
    });
  } else {
    $('.header__menu-item').click(function (e) {
      if($(this).find('.header__submenu').length > 0){
        e.preventDefault();
        $(this).addClass('open');
      }
      if($(e.target).hasClass('mobile-back-link')){
        e.preventDefault();
        $(this).removeClass('open');
      }
    });
  }



  $('.header__menu-btn').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('fixed');
    $(this).closest('header').toggleClass('menu-open');
    $('.header__menu').toggleClass('open');
    $(this).toggleClass('open');
  });

  $('.site-form__btn-i').click(function () {
    if($(this).closest('form').find('input[type="tel"]').val().indexOf('_') === -1  && $(this).closest('form').find('input[type="text"]').val().length > 0){
      $(this).closest('form').addClass('submitted');
    } else {
      if($(this).closest('form').find('input[type="tel"]').val().length === 0 || $(this).closest('form').find('input[type="tel"]').val().indexOf('_') > 0){
        $(this).closest('form').find('input[type="tel"]').parent().addClass('error-field');
      }
      if($(this).closest('form').find('input[type="text"]').val().length === 0){
        $(this).closest('form').find('input[type="text"]').parent().addClass('error-field');
      }
    }
  });

  $(document).on('click', '.error-field', function () {
    $(this).removeClass('error-field');
  });

  $('input[data-valid="phone"]').click(function () {
    console.log(213);
    if($(this).parent().hasClass('error-field')){
      $(this).parent().removeClass('error-field');
    }
  })




  // $('.owl-carousel').owlCarousel({
  //   margin: 20,
  //   loop:true,
  //   nav:true,
  //   dots: true,
  //   items: 1
  // });


  var mySwiper = new Swiper ('#reviews-slider', {
    slidesPerView: 1.05,
    spaceBetween: 15,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 2.45,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },

      992: {
        slidesPerView: 1.45,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },

      550: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    }
  });

  var mySwiper = new Swiper ('#sertificate-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    breakpoints: {
      992: {
        slidesPerView: 4
      },
      800: {
        slidesPerView: 3
      },
      550: {
        slidesPerView: 2
      },
    }
  });

  $('#sertificate-slider').magnificPopup({
    delegate: 'a:not(.slick-cloned)',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300
    },
    removalDelay: 300,
    disableOn: 0,
    midClick: true,

  });


  if($(window).width() < 1120) {
    var mySwiper = new Swiper ('#course-slider', {
      slidesPerView: 1.15,
      spaceBetween: 15,
      loop: true,
      breakpoints: {
        800: {
          slidesPerView: 2.15,
        },

        550: {
          slidesPerView: 1.75,
        },
      }
    });

    var mySwiper = new Swiper ('#servise-slider', {
      slidesPerView: 1.2,
      spaceBetween: 15,
      loop: true,
      breakpoints: {

        1050:{
          slidesPerView: 4.2,
        },

        800: {
          slidesPerView: 3.2,
        },

        550: {
          slidesPerView: 2.2,
        },
      }
    });

  }


  var phoneMask = $('input[data-valid="phone"]');
  $(phoneMask).inputmask('+7(999)999-99-99');


  /*popups start*/
  $(document).on('click', 'a[data-modal-class]', function (e) {
    e.preventDefault();
    $('body').toggleClass('fixed');
    var dataModalId = $(this).attr('data-modal-class');
    $('.popup.' + dataModalId + '').addClass('open');
  });

  $(document).on('click', '.popup__close', function (e) {
    $('.popup ').removeClass('open');
    $('body').toggleClass('fixed');
  });

  $(document).on('click', '.popup', function (e) {

    if(e.target.classList[0] == "popup") {
      $('.popup ').removeClass('open');
      $('body').toggleClass('fixed');
    }
  });
  /*popups end*/

  $('.site-tabs__item').click(function (e) {
    $('.site-tabs__item').removeClass('active');
    $(this).addClass('active');
    var dataTabId = $(this).attr('data-tab-id');

    $('.tabs-block-i').removeClass('active');
    $('#'+ dataTabId +'').addClass('active');
  });

});


//script fro webp img and background
var hasWebP = (function () {
  // some small (2x1 px) test images for each feature
  var images = {
    basic: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
    lossless: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="
  };

  return function (feature) {
    var deferred = $.Deferred();

    $("<img>").on("load", function () {
      // the images should have these dimensions
      if (this.width === 2 && this.height === 1) {
        deferred.resolve();
      } else {
        deferred.reject();
      }
    }).on("error", function () {
      deferred.reject();
    }).attr("src", images[feature || "basic"]);

    return deferred.promise();
  }
})();
