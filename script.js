// variables
var $header_top = $('.header-top');
var $nav = $('nav');
var $nav_main = $('nav.main-nav');

// toggle menu 
$header_top.find('a').on('click', function () {
  $(this).parent().toggleClass('open-menu');

});
$('body').find('.menu-mob li a').on('click', function () {
    $(this).parents('body').find('.header-top').toggleClass('open-menu');
});


$("body").addClass('addpause');

// fullpage customization
$('#fullpage').fullpage({
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: false,
  slidesNavigation: false,
  controlArrows: false,
  // anchors: ['firstSection', 'secondSection', 'thirdSection',  'fifthSection', 'fifthSection1', 'fifthSection2', 'fifthSection3'], //'fourthSection',
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection', 'seventhSection'],
  menu: '#menu',
  css3: true,
  responsiveWidth: 768,

  afterLoad: function (anchor, index) {
    if (index == 1) {
      $(".fp-viewing-firstSection").addClass('addpause');
      $(".space").removeClass('show-space');
      $(".section-1 form input").attr('id', 'email');
      $(".section-1 .note > div").attr('id', 'success');
      $(".section-1 .note > button").attr('id', 'email');
      $(".section-7 form input").removeAttr('id', 'email');
      $(".section-7 .note > div").removeAttr('id', 'success');
      $(".section-7 .note > button").removeAttr('id', 'email');
      // $(".section-1").addClass("visibility-block");
      $(".scroll-icon").addClass("visibility-block");
    } 
    else if (index == 2) {
      // setTimeout(function () {
        $(".section-2 .space").addClass("show-space");
      // }, 500);
      $(".scroll-icon").addClass("visibility-block");
      setTimeout(function () {
        $(".section-2 .our-games-block-wrapper").addClass("visibility-block");
      }, 1000);
    } else if (index == 3) {
      $(".section-3 .space").addClass("show-space");
         setTimeout(function () {
      $(".section-3 .section-wrapper").addClass("visibility-block");
        }, 500);
      $(".scroll-icon").addClass("visibility-block");
    } else if (index == 4) {
      $(".scroll-icon").addClass("visibility-block");
      $(".image-ball-4").addClass("visibility-block");
      $(".image-ball-5").addClass("visibility-block");
      $(".book-title").addClass("visibility-block");
      $(".section-4").addClass("visibility-block");
    } else if (index == 5) {
      $(".scroll-icon").addClass("visibility-block");
      $(".stairs").addClass("show-stairs");
      $(".section-5").addClass("visibility-block");
    } else if (index == 6) {
      $(".scroll-icon").addClass("visibility-block");
      $(".token-header").addClass("visibility-block");
      $(".section-6").addClass("visibility-block");
    } else if (index == 7) {
      $(".section-7 form input").attr('id', 'email');
      $(".section-7 .note > div").attr('id', 'success');
      $(".section-7 .note > button").attr('id', 'email');
      $(".section-1 form input").removeAttr('id', 'email');
      $(".section-1 .note > div").removeAttr('id', 'success');
      $(".section-1 .note > button").removeAttr('id', 'email');
      $(".scroll-icon").addClass("visibility-block");
      $(".section-7").addClass("visibility-block");
    }
  },


  onLeave: function (index, nextIndex, direction) {
    if (index == 1) {
      $(".section-1 .space").addClass('show-space');
      setTimeout(function () {
        $(".fp-viewing-secondSection").removeClass('addpause');
        // $("#fullpage").css('transform','translate3d(0px, calc(-100vh - 120px), 0px)');
        $(".section-1 .scroll-icon").removeClass("visibility-block");
        $(".section-1").removeClass("visibility-block");
      }, 2000);
      $(".section-1 form input").removeAttr('id', 'email');
      $(".section-1 .note > div").removeAttr('id', 'success');
      $(".section-1 .note > button").removeAttr('id', 'email');
    } else if (index == 2) {
      $(".section-2 .space").removeClass("show-space");
      $(".section-2 .scroll-icon").removeClass("visibility-block");
      $(".section-2 .our-games-block-wrapper").removeClass("visibility-block");
    } else if (index == 3) {
      $(".section-3 .space").removeClass("show-space");
      $(".section-3 .scroll-icon").removeClass("visibility-block");
      $(".section-3 .section-wrapper").removeClass("visibility-block");
    } else if (index == 4) {
      $(".section-4 .scroll-icon").removeClass("visibility-block");
      $(".image-ball-4").removeClass("visibility-block");
      $(".image-ball-5").removeClass("visibility-block");
      $(".book-title").removeClass("visibility-block");
      $(".section-4").removeClass("visibility-block");
    } else if (index == 5) {
      $(".stairs").removeClass("show-stairs");
      $(".section-5 .scroll-icon").removeClass("visibility-block");
      $(".section-5").removeClass("visibility-block");
    } else if (index == 6) {
      $(".section-6 .scroll-icon").removeClass("visibility-block");
      $(".token-header").removeClass("visibility-block");
      $(".section-6").removeClass("visibility-block");
    } else if (index == 7) {
      $(".section-7 form input").removeAttr('id', 'email');
      $(".section-7 .note > div").removeAttr('id', 'success');
      $(".section-7 .note > button").removeAttr('id', 'email');
      $(".section-7 .scroll-icon").removeClass("visibility-block");
      $(".section-7").removeClass("visibility-block");
    }
  },


  afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
  
  },

  onSlideLeave: function (anchorLink, index, slideIndex, direction) {
    
  }

});
// slick
$(document).on('ready', function () {
  $(".alert-danger button").click(function () {
    $(this).parent('.alert-danger').addClass('none');
  });

  setInterval(function () {
    $('#success button.close').on('click', function () {
      $(this).parents('.alert-success').hide();
      $(".full-layer").remove();
      $('body').removeClass('open-popup');

    });
   
    $('.text-danger button.close').on('click', function () {
      $(this).parents('.text-danger').find('ul[role="alert"]').hide();
      $(".full-layer").remove();
      $('body').removeClass('open-popup');
    });
    $('input[type="email"]').on('click', function () {
      $(this).parent('.field-mail.warning').find('ul[role="alert"]').hide();
      $(".full-layer").remove();
      $('body').removeClass('open-popup');
    });

  }, 1);


  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    responsive: [

  {
    breakpoint: 767,
    settings: "unslick"
    }
    ]
  });

  // #menu


  // tab
  $(".tab").click(function () {
    $(".tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
  $(".tab:nth-child(3)").click();

  // countdown
  const countdown = new Date("December 20, 2020");

  function getRemainingTime(endtime) {
    const milliseconds = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    return {
      'total': milliseconds,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours,
      'days': days,
    };
  }

  function initClock(id, endtime) {
    const counter = document.getElementById(id);
    const daysItem = counter.querySelector('.js-countdown-days');
    const hoursItem = counter.querySelector('.js-countdown-hours');
    const minutesItem = counter.querySelector('.js-countdown-minutes');
    const secondsItem = counter.querySelector('.js-countdown-seconds');

    function updateClock() {
      const time = getRemainingTime(endtime);

      daysItem.innerHTML = time.days;
      hoursItem.innerHTML = ('0' + time.hours).slice(-2);
      minutesItem.innerHTML = ('0' + time.minutes).slice(-2);
      secondsItem.innerHTML = ('0' + time.seconds).slice(-2);

      if (time.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  initClock('js-countdown', countdown);


  setInterval(function () {
    setTimeout(function () {
      if ($('body').hasClass('fp-viewing-seventhSection')) {
        $(".art").addClass("show-art");
      } else {
        $(".art").removeClass("show-art");
      }
    }, 1000);
  }, 1);





});