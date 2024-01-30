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


// 스크롤 내리면 article 아래에서 등장
$(function(){
  $(window).scroll(function(){
    var ws=$(this).scrollTop();
    var p1=$(".part1").offset().top;

    $(".part1 .box").css("transform","translateY(100px)").css("opacity", "0");



    if(ws > p1 -700 ) {
      $(".box:nth-of-type(1),.box:nth-of-type(2),.box:nth-of-type(3)").css("transform","translateY(0px)").css("opacity", "1");
    }

    if(ws > p1-200  ) {
      $(".box:nth-of-type(4),.box:nth-of-type(5),.box:nth-of-type(6)").css("transform","translateY(0px)").css("opacity", "1");
    }
  })
});





// 스크롤 내려가면 part2 나타나는 효과
$(function () {
  $(window).scroll(function () {
    var ws = $(this).scrollTop();
    var p2 = $(".part2").offset().top;

    if (p2 < ws) {
      $('.bg2023').css("transform", "translateY(-70px)");
      $('.back_big').css("transform", "translate(0px)");
      $('.back_small').css("transform", "translateY(10px)");
      $("#videobox .video").width("90%");
      $("#videobox p").width("90%");
      $("#videobox .container").width("1440px");
    }

    if (ws > p2 + 950) {
      $("#videobox .video").width("100%");
      $("#videobox p").width("100%");
      $("#videobox .container").width("100%");
    }

    if (ws > p2 + 1250) {
      $("#videobox .video").width("90%");
      $("#videobox p").width("90%");
      $("#videobox .container").width("1440px");
    }


    if (  ws > p2 + 1400) {

      $('#photoslide .ps1').css("transform", "translateY(0px)").css("opacity", "1");
    }
     
    if (  ws > p2 + 1550) {
      $('#photoslide .ps2').css("transform", "translateY(0px)").css("opacity", "1");
    }

    if (  ws > p2 + 1700) {
    $('#photoslide .ps3').css("transform", "translateY(0px)").css("opacity", "0.8");
    }
    if (  ws > p2 + 1850) {
      $('#photoslide .ps4').css("transform", "translateY(0px)").css("opacity", "1");
      
    }
    if (  ws > p2 + 2000) {
      $('#photoslide .ps5').css("transform", "translateY(0px)").css("opacity", "0.95");
    }
    if (  ws > p2 + 2150) {
      $('#photoslide .ps6').css("transform", "translateY(0px)").css("opacity", "1");
    }







    
  });
});


// 수상내역 마우스 호버시 포스터 바뀜
$(function () {
  $('.awardslist').mouseenter(function () {
    let idx = $(this).index()

    $('.awardslist').removeClass('active')
    $(this).addClass('active')

    $('.rightbox img').hide();
    $('.rightbox img').eq(idx).stop().fadeIn('fast');

  })
});


// 포토슬라이드 버튼 호버하면 이미지 어둡게
$(function () {
  $('#photoslide button').mouseenter(function () {
    $('.imgboxBG').fadeTo('50ms', 0.3);
  })
  $('#photoslide button').mouseout(function () {
    $('.imgboxBG').fadeTo("50ms", 1);
  })
});


// // 스크롤 내리면 순차적으로 텍스트 짙어짐
//   $(document).ready(function () {
//     // 스크롤 이벤트 감지
//     $(window).on('scroll', function () {
//         // 각 텍스트 엘리먼트에 대해 실행
//         $('#stageforworld h3').each(function () {
//             // 각 단어에 대해 실행
//             $(this).find('span').each(function (index) {
//                 var word = $(this);
//                 // 화면에 보일 때 순차적으로 투명도를 1로 설정하여 나타나도록 함
//                 setTimeout(function () {
//                     word.css('opacity', 1);
//                 }, index * 300); // 500ms 간격으로 나타나도록 설정 (원하는 시간으로 수정 가능)
//             });
//         });
//     });
//   });
