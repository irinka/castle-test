$(function () {
  $('.menu_item__nav > a').click(function (e) {
    e.preventDefault();
    var nameBlock = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(nameBlock).offset().top - 60
    }, 500);
  })
});
