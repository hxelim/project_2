
// 슬라이드
function slide(){
  $('.sliderimg').stop().animate({marginLeft:-1110},900,function(){
    $('.sliderimg div:first').appendTo('.sliderimg');   
    $('.sliderimg').css({marginLeft:0});
  });
  $('.stext').stop().animate({marginLeft:-1110},900,function(){
    $('.stext h6:first').appendTo('.stext');
    $('.stext').css({marginLeft:0});
  });
}

setInterval(slide,5000);

$(function(){
  $('.awardslist').mouseenter(function(){
    let idx = $(this).index()

    $('.awardslist').removeClass('active')
    $(this).addClass('active')

    $('.rightbox img').hide();
    $('.rightbox img').eq(idx).stop().fadeIn('fast');
    
  })
});


$(function(){
  $('#photoslide button').mouseenter(function(){
    $('.imgboxBG').fadeTo('50ms',0.3);
  })
  $('#photoslide button').mouseout(function(){
    $('.imgboxBG').fadeTo("50ms",1);
  })
});


