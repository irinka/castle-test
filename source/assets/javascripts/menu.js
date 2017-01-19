$(function () {
  $('.menu_item__nav > a').click(function (e) {
    e.preventDefault();
    var nameBlock = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(nameBlock).offset().top - 60
    }, 500);
  })

  $('.menu-mobile_item > a').click(function (e) {
    e.preventDefault();
    var nameBlock = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(nameBlock).offset().top
    }, 500);
  })

  function show() {
    $('.menu-mobile_btn').unbind();
    $('.menu-mobile_btn').click(function () {
      $('.menu-mobile').fadeIn(200);
      hide();
    })
  }

  function hide() {
    $('.menu-mobile_btn').unbind();
    $('.menu-mobile_btn').click(function () {
      $('.menu-mobile').fadeOut(200);
      show();
    })
  }

  hide();
});
