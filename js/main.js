$(function () {
  function updateSlideTextHeight() {
    var 자식높이 = $('.boxSize').height();
    $('.slidetext').css('height', 자식높이)
  }
  updateSlideTextHeight();

  $(window).resize(function () {
    updateSlideTextHeight();
  });

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




function detectMediaSize() {

// 미디어 쿼리
if (window.matchMedia("(min-width:1457px)").matches) {
  console.log('pc')
  // 뷰포트 너비가 1457 픽셀 이상
  $(".part1 .box").css("transform", "translateY(0px)").css("opacity", "1");


  $(window).scroll(function () {
    // 스크롤 내리면 article 아래에서 등장
    var ws = $(this).scrollTop();
    var p1 = $(".part1").offset().top;

    $(".part1 .box").css("transform", "translateY(100px)").css("opacity", "0");

    if (ws > p1 - 900) {
      $(".part1 .box:lt(3)").css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p1 - 400) {
      $('.part1 .box').slice(3).css("transform", "translateY(0px)").css("opacity", "1");
    }


    // 스크롤 내려가면 part2 나타나는 효과
    var p2 = $(".part2").offset().top;
    var p2video = $(".part2 #videobox").offset().top;
    var p2photo = $(".part2 #photoslide").offset().top;

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

    if (ws > p2video - 300) {
      $("#videobox .video").width("100%");
      $("#videobox p").width("100%");
      $("#videobox .container").width("100%");


    }

    if (ws > p2video + 100) {
      $("#videobox .video").width("90%");
      $("#videobox p").width("90%");
      $("#videobox .container").width("1440px");
    }



    // part2 포토슬라이드
    if (ws > p2photo - 1000) {
      $('#photoslide .ps1').css("transform", "translateY(0px)").css("opacity", "1");
    }
    if (ws > p2photo - 800) {
      $('#photoslide .ps2').css("transform", "translateY(0px)").css("opacity", "1");
    }
    if (ws > p2photo - 600) {
      $('#photoslide .ps3').css("transform", "translateY(0px)").css("opacity", "0.8");
    }
    if (ws > p2photo - 500) {
      $('#photoslide .textbox').css("transform", "translateY(0px)").css("opacity", "1");
    }
    if (ws > p2photo - 400) {
      $('#photoslide .ps4').css("transform", "translateY(0px)").css("opacity", "1");
    }
    if (ws > p2photo - 200) {
      $('#photoslide .ps5').css("transform", "translateY(0px)").css("opacity", "0.95");
    }
    if (ws > p2photo - 100) {
      $('#photoslide .ps6').css("transform", "translateY(0px)").css("opacity", "1");
    }





  // 스크롤 내려가면 part3 나타나는 효과
    var p3 = $(".part3").offset().top;

    if (ws > p3 - 600) {
      $('#french .box').eq(0).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(1).delay(300).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(2).delay(500).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(3).delay(800).animate({ top: -100, opacity: 1 }, 500);
    }

    //스크롤 내려갈 때 텍스트 색상 회색>검정색 
    if (ws > p3) {
      if (window.innerWidth >= 1457 && window.innerWidth < 1550) {
        $('#black').width((ws - 7100) / 12 + '%')
      } else if (window.innerWidth >= 1550 && window.innerWidth < 1700) {
        $('#black').width((ws - 7200) / 12 + '%')
      } else if (window.innerWidth >= 1600 && window.innerWidth < 1700) {
        $('#black').width((ws - 7300) / 12 + '%')
      } else if (window.innerWidth >= 1700 && window.innerWidth < 1800) {
        $('#black').width((ws - 7400) / 12 + '%')
      } else {
        $('#black').width((ws - 7600) / 12 + '%')
      }
    }

  });

} else if (window.matchMedia("(min-width:1267px) and (max-width:1456px)").matches) {
  // 뷰포트 너비가 1267픽셀~ 1456픽셀
  console.log('pcmedium')

  $(".part1 .box:lt(3)").css("transform", "translateY(0px)").css("opacity", "1");
  $('.part1 .box').slice(3).css("transform", "translateY(0px)").css("opacity", "1");


  $(window).scroll(function () {
    // 스크롤 내리면 article 아래에서 등장
    var ws = $(this).scrollTop();
    var p1 = $(".part1").offset().top;

    $(".part1 .box").css("transform", "translateY(100px)").css("opacity", "0");

    if (ws > p1 - 900) {
      $(".part1 .box:lt(3)").css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p1 - 400) {
      $('.part1 .box').slice(3).css("transform", "translateY(0px)").css("opacity", "1");
    }

    // 스크롤 내려가면 part2 나타나는 효과
    var p2 = $(".part2").offset().top;

    if (ws > p2 - 100) {
      $('.bg2023').css("transform", "translateY(0px)");
      $('.back_big').css("transform", "translate(0px)");
      $('.back_small').css("transform", "translateY(10px)");
    }

    if (ws > p2 + 900) {
      $('#photoslide .imgboxBG').children().css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p2 + 1400) {
      $('#photoslide .textbox').css("transform", "translateY(0px)").css("opacity", "1");
    }




  // 스크롤 내려가면 part3 나타나는 효과
    var p3 = $(".part3").offset().top;

    if (ws > p3 - 700) {
      $('#french .box').eq(0).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(1).delay(300).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(2).delay(500).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(3).delay(800).animate({ top: -100, opacity: 1 }, 500);
    }


    //스크롤 내려갈 때 텍스트 색상 회색>검정색 
    if (ws > p3) {
      if (window.innerWidth >= 1267 && window.innerWidth < 1300) {
        $('#black').width((ws - 6900) / 10 + '%')
      } else if (window.innerWidth >= 1300 && window.innerWidth < 1400) {
        $('#black').width((ws - 7000) / 10 + '%')
      } else {
        $('#black').width((ws - 7250) / 11 + '%')
      }
    }
  })

} else if (window.matchMedia("(min-width:1100px) and (max-width:1266px)").matches) {
  console.log('pcsmall')
  // 뷰포트 너비가 1100픽셀~ 1266픽셀


  $(window).scroll(function () {
    // 스크롤 내리면 article 아래에서 등장
    var ws = $(this).scrollTop();
    var p1 = $(".part1").offset().top;

    $(".part1 .box").css("transform", "translateY(100px)").css("opacity", "0");

    if (ws > p1 - 800) {
      $(".part1 .box:lt(2)").css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p1 - 300) {
      $('.part1 .box:eq(2)').css("transform", "translateY(0px)").css("opacity", "1");
      $('.part1 .box:eq(3)').css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p1 + 100) {
      $('.part1 .box').slice(4).css("transform", "translateY(0px)").css("opacity", "1");
    }

    // 스크롤 내려가면 part2 나타나는 효과
    var p2 = $(".part2").offset().top;

    if (ws > p2 - 100) {
      $('.bg2023').css("transform", "translateY(0px)");
      $('.back_big').css("transform", "translate(0px)");
      $('.back_small').css("transform", "translateY(10px)");
    }

    if (ws > p2 + 900) {

      $('#photoslide .imgboxBG').children().css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p2 + 1400) {
      $('#photoslide .textbox').css("transform", "translateY(0px)").css("opacity", "1");
    }

  // 스크롤 내려가면 part3 나타나는 효과
    var p3 = $(".part3").offset().top;

    if (ws > p3 - 700) {
      $('#french .box').eq(0).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(1).delay(300).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(2).delay(500).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(3).delay(800).animate({ top: -100, opacity: 1 }, 500);
    }

    //스크롤 내려갈 때 텍스트 색상 회색>검정색 
    if (ws > p3-100) {
      if (window.innerWidth >= 1100 && window.innerWidth < 1150) {
        $('#black').width((ws - 6900) / 10 + '%')
      } else if (window.innerWidth >= 1150 && window.innerWidth < 1200) {
        $('#black').width((ws - 7100) / 10 + '%')
      } else {
        $('#black').width((ws - 7350) / 10 + '%')
      }
    }
  })



} else if (window.matchMedia("(min-width:768px) and (max-width:1099px)").matches) {
  console.log('tablet') 
  // 뷰포트 너비가 768픽셀~ 1099픽셀


  $(window).scroll(function () {
    // 스크롤 내리면 article 아래에서 등장
    var ws = $(this).scrollTop();
    var p1 = $(".part1").offset().top;

    $(".part1 .box").css("transform", "translateY(100px)").css("opacity", "0");

    if (ws > p1 - 650) {
      $(".part1 .box:lt(2)").css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p1 - 350) {
      $('.part1 .box:eq(2)').css("transform", "translateY(0px)").css("opacity", "1");
      $('.part1 .box:eq(3)').css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p1 + 50) {
      $('.part1 .box').slice(4).css("transform", "translateY(0px)").css("opacity", "1");
    }

    // 스크롤 내려가면 part2 나타나는 효과
    var p2 = $(".part2").offset().top;

    if (ws > p2 - 100) {
      $('.bg2023').css("transform", "translateY(0px)");
      $('.back_big').css("transform", "translate(0px)");
      $('.back_small').css("transform", "translateY(10px)");
    }

    if (ws > p2 + 800) {

      $('#photoslide .imgboxBG').children().css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (ws > p2 + 1300) {
      $('#photoslide .textbox').css("transform", "translateY(0px)").css("opacity", "1");
    }

  // 스크롤 내려가면 part3 나타나는 효과
    var p3 = $(".part3").offset().top;

    if (ws > p3 - 700) {
      $('#french .box').eq(0).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(1).delay(300).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(2).delay(500).animate({ top: -100, opacity: 1 }, 500);
      $('#french .box').eq(3).delay(800).animate({ top: -100, opacity: 1 }, 500);
    }
  })

} else {
  console.log('mobile')
  // 뷰포트 너비가 ~ 767픽셀
 }

}

// window.onresize = () => {
//   clearTimeout(scrollevent)
//   let scrollevent = setTimeout(() => {
//     location.reload();
//   }, 20);
  
// }

detectMediaSize();
$(window).resize(detectMediaSize)
// window.addEventListener('reize', detectMediaSize, false);

})