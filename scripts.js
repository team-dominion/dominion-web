$(function() {

  init();

  $(window).bind("resize", function() {
    var winWidth = $(window).width();
    var winHeihgt = $(window).height();

    $('.vide').css({
      'width': winWidth,
      'height': winHeihgt,
      'overflow': 'hidden'
    });

    // $('section').css({
    //     'min-height': winHeihgt
    // });

  });

})

function init() {
  vide();
}

function vide() {
  var winWidth = $(window).width();
  var winHeihgt = $(window).height();

  $('.vide').css({
    'width': winWidth,
    'height': winHeihgt,
    'overflow': 'hidden'
  });

  $('.vide').vide("img/teamDominion_720p.mp4", {
    posterType: 'jpg',
    position: '50% 50%',
    loop: false
  });
}
