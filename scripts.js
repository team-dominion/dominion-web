var isSmartphone = false;

$(function() {

  init();

  $(window).bind('resize', function() {
    arrange();
  });

  $(window).scroll(function(e) {
    var scrollTop = $(window).scrollTop();
    var homeHeight = $('.vide').height();
    var aboutHeight = $('#about').height();
    var worksHeight = $('#works').height();

    //show sidemenu
    if (scrollTop >= homeHeight / 2 && isSmartphone == false) {
      $('.side-nav').fadeIn(800);
    } else {
      $('.side-nav').fadeOut(800);
    }

    //change sidemenu to active
    $('nav.side-nav li').children('img').attr('src', "./img/sidenav.png");
    $('nav.side-nav li').children('a').hide();

    if (scrollTop <= homeHeight - 100) {
      $('nav.side-nav li').eq(0).children('img').attr('src', "./img/sidenav-active.png");
      $('nav.side-nav li').eq(0).children('a').show();
    }
    else if (scrollTop <= homeHeight + aboutHeight) {
      $('nav.side-nav li').eq(1).children('img').attr('src', "./img/sidenav-active.png");
      $('nav.side-nav li').eq(1).children('a').show();
    }
    else if (scrollTop <= homeHeight + aboutHeight + worksHeight) {
      $('nav.side-nav li').eq(2).children('img').attr('src', "./img/sidenav-active.png");
      $('nav.side-nav li').eq(2).children('a').show();
    }
    else {
      $('nav.side-nav li').eq(3).children('img').attr('src', "./img/sidenav-active.png");
      $('nav.side-nav li').eq(3).children('a').show();
    }

  });

  $('a[href^="#"]').click(function() {
   var speed = 400;
   var href= $(this).attr("href");
   var target = $(href == "#" || href == "" ? 'html' : href);
   var position = target.offset().top;

   $('body,html').animate({scrollTop:position}, speed, 'swing');

   return false;
   });

});

function init() {
  arrange();
  vide();

  // append sidenav image
  $('nav.side-nav li').append('<img src="./img/sidenav.png">');
}

function vide() {
  $('.vide').vide('img/teamDominion_720p.mp4', {
    posterType: 'jpg',
    position: '50% 50%',
    loop: false
  });
}

function arrange() {
  var winWidth = $(window).width();
  var winHeihgt = $(window).height();

  // is Smartphone?
  if ($(window).width() < 700) {
    isSmartphone = true;
  } else {
    isSmartphone = false;
  }

  // vide
  $('.vide').css({
    'width': winWidth,
    'height': winHeihgt,
    'overflow': 'hidden'
  });

  // side nav
  $('.side-nav').css({
    'position': 'fixed',
    'top': (winHeihgt - $('.side-nav').height()) / 2,
    'right': 0
  });
}
