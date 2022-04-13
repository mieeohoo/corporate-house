'use strict';

$(function () {

  // ハンバーガーメニュー
  $('#menu-btn').on('click', function () {
    if ($('header').hasClass('open')) {
      $('header').removeClass('open');
    }
    else {
      $('header').addClass('open');
    }
  });

  $('#mask').on('click', function () {
    $('header').removeClass('open');
  });

  $('#global-nav').on('click', function () {
    $('header').removeClass('open');
  });

  // ページトップボタン
  var pagetop = $('#page-top');

  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 300);
    return false;
  });
});