
// 슬라이드
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


$(function () {
  $(window).scroll(function () {
    var ws = $(this).scrollTop();

    var p2 = $(".part2").offset().top;
    if (p2 < ws) {
      $('.bg2023').css("transform", "translateY(-70px)");
      $('.back_big').css("transform", "translate(0px)");
      $('.back_small').css("transform", "translateY(10px)")
      $('#photoslide').css("transform","translateY(-100px)").css("opacity","0");

    }
    // if(p2+450 < ws){
    //   $('.bg2023').css("transform","translateY(150px)");
    //   $('.back2023').css("transform","translateY(200px)");
    // }

    //   if( ws>p2+700  && ws< p2+1600){
    //     console.log(ws)
    //     //내려갈때

    //     $('#videobox .container').width("100%");

    //   }else {$('#videobox .container').width(1440);}

    // });




  //   if (ws > p2 + 700 && ws < p2 + 1600) {
  //     $('#videobox .video').width(1296 + ((ws + 500) * 0.04));
  //   }
  // });




  if(p2+1200 < ws <p2){
    $('#photoslide').css("transform","translateY(0px)").css("opacity","1");
  }

});

});



$(function () {
  $('.awardslist').mouseenter(function () {
    let idx = $(this).index()

    $('.awardslist').removeClass('active')
    $(this).addClass('active')

    $('.rightbox img').hide();
    $('.rightbox img').eq(idx).stop().fadeIn('fast');

  })
});


$(function () {
  $('#photoslide button').mouseenter(function () {
    $('.imgboxBG').fadeTo('50ms', 0.3);
  })
  $('#photoslide button').mouseout(function () {
    $('.imgboxBG').fadeTo("50ms", 1);
  })
});


