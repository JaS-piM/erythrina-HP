$(function() {
  $(document).ready(function() {

      $(".sp_menu_btn").click(function() {
          $(".sp_menu_li").slideToggle();
      });

  });
});

$(function() {
  var topBtn = $('#pagetop');
  topBtn.hide();
  //スクロールが300に達したらボタン表示
  $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
          topBtn.fadeIn();
      }
      else {
          topBtn.fadeOut();
      }
  });
  //スルスルっとスクロールでトップへもどる
  topBtn.click(function() {
      $('body,html').animate({
          scrollTop: 0
      }, 300);
      return false;
  });
});

