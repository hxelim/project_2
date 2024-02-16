$(function () {

  $(window).scroll(function(){
    let ws = $(this).scrollTop();
    let fixWrap = $('.smallWrap').offset().top;
    let move = ws - fixWrap;
    let end = $('.small').width() - $(window).innerWidth();

    if(ws> fixWrap && ws < fixWrap+end){
      $('.small').css('transform',`translateX(-${move}px)`);
    } else if (ws >= fixWrap + end) {
      $('.small').css('transform',`translateX(-${end}px)`)
    }
  });

  $('.small li').hover(function () {
    $(this).children('.img').css('border-radius', '0 50px 0 50px')
      if (window.innerWidth >= 768) { 
        $(this).children('.active').css("opacity", "1").css("transform", "translateY(0px)") 
      }
  }, function () {
    $(this).children('.img').css('border-radius', '50px')
    $(this).children('.active').css("opacity", "0").css("transform", "translateY(20px)")
  })




});