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
      if($(e.target).hasClass('header__menu-link')){
        e.preventDefault();
        $(this).addClass('open');
      }
      if($(e.target).hasClass('mobile-back-link')){
        e.preventDefault();
        $(this).removeClass('open');
      }
    });
  }



  $('.header__menu-btn').click(function () {
    $(this).closest('header').toggleClass('menu-open');
    $('.header__menu').toggleClass('open');
    $(this).toggleClass('open');
  });



  // $('.owl-carousel').owlCarousel({
  //   margin: 20,
  //   loop:true,
  //   nav:true,
  //   dots: true,
  //   items: 1
  // });


  var mySwiper = new Swiper ('#reviews-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2.45
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
      768: {
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


  var phoneMask = $('input[data-valid="phone"]');
  $(phoneMask).inputmask('+7(999)999-99-99');

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
