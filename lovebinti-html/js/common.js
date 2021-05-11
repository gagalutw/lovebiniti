var ClassNames$4 = {
  EXPANDED: 'expand',
  OPENED: 'opened',
  SHOW: 'show',
  ISMOBILE: 'is-mobile-mode'
};
var width;
MobileNav();

//加入Scroll to top按鈕 +
$(function () {
  $('.wrapper').append('<a href="javascript: void(0)" class="scrollToTop"><i class="fas fa-chevron-up"></i></a>');
  $(document).off("scroll").on("scroll", function () {

    if ($(window).scrollTop() > 20) {
      $('.scrollToTop').addClass('show');
    } else {
      $('.scrollToTop').removeClass('show');
    }
  }).scroll();;

  $('.scrollToTop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});


$(window).on('load', function () {
  AOS.init({
    duration: 1200,
  })

});

// 導覽列樣式
$(function () {
  //區塊動態效果

  var timer = null;
  $(window).resize(function () {

    width = $(window).width();
    window.clearTimeout(timer);
    timer = window.setTimeout(function () {
      if (width > 992) {
        // 桌機版導覽列hover效果
        $(".main-menu .dropdown").hover(function () {
          $(this).addClass(ClassNames$4.SHOW);
          $(this).find(".dropdown-toggle").addClass("active");
          $(this).find(".dropdown-menu").addClass(ClassNames$4.SHOW);

        }, function () {
          $(this).removeClass(ClassNames$4.SHOW);
          $(this).find(".dropdown-toggle").removeClass("active");
          $(this).find(".dropdown-menu").removeClass(ClassNames$4.SHOW);
        })

        $("html").removeClass("Mobile");
        $(".cover-mask").remove();

      } else {
        $(".cover-mask").remove();
        $("html").addClass("Mobile");
        $(".wrapper").append('<div class="cover-mask"></div>')
      }
    }, 500);
  }).trigger("resize");
})


// 關閉元素
$('.wrapper').on('click', '.toggle-close-btn, .close-element, .cover-mask', function () {
  $("html").removeClass(ClassNames$4.ISMOBILE);
  $(document).find(".expand").removeClass(ClassNames$4.EXPANDED);
  $(document).find(".opened").removeClass(ClassNames$4.OPENED);
  $(".cart-box").removeClass(ClassNames$4.EXPANDED);
  $(".cover-mask").removeClass("nav-expand");
})




//手機版導覽列控制
function MobileNav() {
  var iWinScroll = $(window).scrollTop();
  var timer;

  $(window).on("scroll", function () {
    window.clearTimeout(timer)

    timer = window.setTimeout(function () {
      iWinScroll = $(window).scrollTop();
    }, 100)
  })


  //手機導覽列展開
  $('#menuToggle').on("click", function () {
    iWinScroll = $(window).scrollTop();

    $(".cover-mask").toggleClass("nav-expand");
    $('.navbar').toggleClass(ClassNames$4.EXPANDED);
    $("html").toggleClass(ClassNames$4.ISMOBILE);

  })
}


//購物車展開
$('.cart-btn, .mob-cart-btn').on("click", function () {
  $(".cover-mask").toggleClass("nav-expand");
  $(".cover-mask").toggleClass(ClassNames$4.EXPANDED);
  $(".cart-box").toggleClass(ClassNames$4.EXPANDED);
  $("html").toggleClass(ClassNames$4.ISMOBILE);
})


// $(document).on('click', function (e) {
//   console.log($(e.target));
// })


//判斷手機行動裝置
function isMobile() {
  return (
    (navigator.userAgent.match(/Android/i)) ||
    (navigator.userAgent.match(/webOS/i)) ||
    (navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPod/i)) ||
    //  (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/BlackBerry/))
  );
}


//註冊視窗
// 會員條款打勾&閱讀完畢偵測
$(".membertern-box").scroll(function () {
  var box = $(".membertern-box");
  var boxscrollH = box.prop("scrollHeight") - 108;
  var boxscroll = box.scrollTop();
  if (boxscrollH == boxscroll && $("#Checkbox").prop("checked")) {
    $("#signup .main-btn").removeClass("cancel-btn");
  } else {
    $("#signup .main-btn").addClass("cancel-btn");
  }

  $("#Checkbox").click(function () {
    if ($("#Checkbox").prop("checked") && boxscrollH == boxscroll) {
      $("#signup .main-btn").removeClass("cancel-btn");

    } else {
      $("#signup .main-btn").addClass("cancel-btn");
    }
  })
})


//fancybox
$('[data-fancybox]').fancybox({
  toolbar: true,
  smallBtn: false,
  iframe: {
    preload: false
  }
})

