$(function(){
  
  $('.small li').hover(function(){
    $(this).children('.img').css('border-radius','0 50px 0 50px')
    $(this).children('.active').css("opacity","1").css("transform", "translateY(0px)")
  },function(){
    $(this).children('.img').css('border-radius','50px')
    $(this).children('.active').css("opacity","0").css("transform", "translateY(20px)")
  })
});