$(function () {
  function updateSlideTextHeight() {
    var 자식높이 = $('.boxSize').height();
    $('.slidetext').css('height', 자식높이)
  }
  updateSlideTextHeight();

  $(window).resize(function () {
    updateSlideTextHeight();
  });
})


$(function () {
  // 호버하면 navigation
  $('nav li, .Mnav').mouseover(function () {
    $('.emptybox').stop().slideDown();
    $('.sub_nav').stop().slideDown();
  })
    .mouseout(function () {
      $('.emptybox').stop().slideUp();
      $('.sub_nav').stop().slideUp();
    })

  $('.sub_nav li a').mouseover(function () {
    $(this).addClass('select')
  }).mouseout(function () {
    $(this).removeClass('select')
  })
})





$(function () {

  // 수상내역 마우스 호버시 포스터 바뀜
  $('.list').mouseenter(function () {
    let idx = $(this).index()

    $('.awardslist').removeClass('active')
    $(this).find('.awardslist').addClass('active')



    $('.rightbox img').hide();
    $('.rightbox img').eq(idx).stop().fadeIn('fast');

  });


  // 포토슬라이드 버튼 호버하면 이미지 어둡게
  $('#photoslide button').mouseenter(function () {
    $('.imgboxBG').addClass('activegray');
    $('.imgboxBG').fadeTo('50ms', 0.3);
  })
  $('#photoslide button').mouseout(function () {
    $('.imgboxBG').removeClass('activegray');
    $('.imgboxBG').fadeTo("50ms", 1);

  })

})










// 미디어 쿼리
if (window.matchMedia("(min-width:1457px)").matches) {
  // 뷰포트 너비가 1457 픽셀 이상
  $(function () {
    // 슬라이드 사진 
    function slide() {
      $('.sliderimg').stop().animate({ marginLeft: -1110 }, 900, function () {
        $('.sliderimg div:first').appendTo('.sliderimg');
        $('.sliderimg').css({ marginLeft: 0 });
      });
      $('.stext').stop().animate({ marginLeft: -1110 }, 900, function () {
        $('.stext h6:first').appendTo('.stext');
        $('.stext').css({ marginLeft: 0 });
      });
    }

    setInterval(slide, 5000);
  });




  $(window).scroll(function () {
    // 스크롤 내리면 article 아래에서 등장
    var ws = $(this).scrollTop();
    var p1 = $(".part1").offset().top;

    $(".part1 .box").css("transform", "translateY(100px)").css("opacity", "0");

    if (ws > p1 - 700) {
      $(".part1 .box:lt(3)").css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p1 - 300) {
      $('.part1 .box').slice(3).css("transform", "translateY(0px)").css("opacity", "1");
    }


    // 스크롤 내려가면 part2 나타나는 효과
    var ws = $(this).scrollTop();
    var p2 = $(".part2").offset().top;
    var windowWidth = $(window).width();

    if (ws > p2 - 100) {
      $('.bg2023').css("transform", "translateY(0px)");
      $('.back_big').css("transform", "translate(0px)");
      $('.back_small').css("transform", "translateY(10px)");
    }

    if (ws > p2 - 100) {

      $("#videobox .video").width("90%");
      $("#videobox p").width("90%");
      $("#videobox .container").width("1440px");
    }

    if (ws > p2 + 700) {
      $("#videobox .video").width("100%");
      $("#videobox p").width("100%");
      $("#videobox .container").width("100%");


    }

    if (ws > p2 + 1050) {
      $("#videobox .video").width("90%");
      $("#videobox p").width("90%");
      $("#videobox .container").width("1440px");
    }



    // part2 포토슬라이드
    if (ws > p2 + 1500) {

      $('#photoslide .ps1').css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p2 + 1600) {
      $('#photoslide .ps2').css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p2 + 1700) {
      $('#photoslide .ps3').css("transform", "translateY(0px)").css("opacity", "0.8");
    }

    if (ws > p2 + 1800) {
      $('#photoslide .textbox').css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p2 + 1900) {
      $('#photoslide .ps4').css("transform", "translateY(0px)").css("opacity", "1");
    }
    if (ws > p2 + 2000) {
      $('#photoslide .ps5').css("transform", "translateY(0px)").css("opacity", "0.95");
    }
    if (ws > p2 + 2100) {
      $('#photoslide .ps6').css("transform", "translateY(0px)").css("opacity", "1");
    }
  });





  // 스크롤 내려가면 part3 나타나는 효과
  $(window).scroll(function () {
    var ws = $(this).scrollTop();
    var p3 = $(".part3").offset().top;

    if (ws > p3 - 600) {
      $('#french .box').eq(0).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(1).delay(300).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(2).delay(500).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(3).delay(800).animate({ top: -100, opacity: 1 }, 500);
    }
  });

  //스크롤 내려갈 때 텍스트 색상 회색>검정색 
  $(window).scroll(function () {
    var ws = $(this).scrollTop();
    var p3 = $(".part3").offset().top;
    if (ws > p3) {
      $('#black').width((ws - 7500) / 7 + '%')
    }

  });








} else {










  // 뷰포트 너비가 1440픽셀 미만
  $(window).scroll(function () {
    $(function () {
      // 슬라이드 사진 
      function slide() {
        $('.sliderimg').stop().animate({ marginLeft: -1110 }, 900, function () {
          $('.sliderimg div:first').appendTo('.sliderimg');
          $('.sliderimg').css({ marginLeft: 0 });
        });
        $('.stext').stop().animate({ marginLeft: -1110 }, 900, function () {
          $('.stext h6:first').appendTo('.stext');
          $('.stext').css({ marginLeft: 0 });
        });
      }
  
      setInterval(slide, 5000);
    });


    // 스크롤 내리면 article 아래에서 등장
    var ws = $(this).scrollTop();
    var p1 = $(".part1").offset().top;

    $(".part1 .box").css("transform", "translateY(100px)").css("opacity", "0");

    if (ws > p1 - 700) {
      $(".part1 .box:lt(3)").css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p1 - 300) {
      $('.part1 .box').slice(3).css("transform", "translateY(0px)").css("opacity", "1");
    }








    // 스크롤 내려가면 part2 나타나는 효과
    var ws = $(this).scrollTop();
    var p2 = $(".part2").offset().top;
    var windowWidth = $(window).width();

    if (ws > p2 - 100) {
      $('.bg2023').css("transform", "translateY(0px)");
      $('.back_big').css("transform", "translate(0px)");
      $('.back_small').css("transform", "translateY(10px)");
    }

    if (ws > p2 + 1400) {

      $('#photoslide .imgboxBG').children().css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p2 + 1650) {
      $('#photoslide .textbox').css("transform", "translateY(0px)").css("opacity", "1");
    }
  });




  // 스크롤 내려가면 part3 나타나는 효과
  $(window).scroll(function () {
    var ws = $(this).scrollTop();
    var p3 = $(".part3").offset().top;

    if (ws > p3 - 600) {
      $('#french .box').eq(0).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(1).delay(300).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(2).delay(500).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(3).delay(800).animate({ top: -100, opacity: 1 }, 500);
    }
  });

  //스크롤 내려갈 때 텍스트 색상 회색>검정색 
  $(window).scroll(function () {
    var ws = $(this).scrollTop();
    var p3 = $(".part3").offset().top;
    if (ws > p3) {
      $('#black').width((ws - 6900) / 8 + '%')
    }

  });


}
