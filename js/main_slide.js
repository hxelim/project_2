$(function () {
  let slider;

  function detectMediaSize() {

    if(window.matchMedia("(min-width:1377px)").matches) {
      $('#slideBG').stop().css({ width: '75vw' })
      $('#slideBGsub').stop().css({ width: '25vw' })

    } else {

      $('#slideBG').stop().animate({ width: '100%' }, 1000);
      $('#slideBGsub').stop().animate({ width: 0 }, 1000);
    }



    if (window.matchMedia("(min-width:1267px)").matches) {

      function slide() {
        $('.slide').stop().animate({ marginLeft: -1110 }, 900, function () {
          $('.slide li:first').appendTo('.slide');
          $('.slide').css({ marginLeft: 0 });
        })
      }
      clearInterval(slider);
      slider = setInterval(slide, 3000);

    } else {  

      let w = $(window).innerWidth()
      // let w = window.innerWidth;

      function slide() {
        $('.slide').stop().animate({ marginLeft: -w}, 900, function () {
          $('.slide li:first').appendTo('.slide');
          $('.slide').css({ marginLeft: 0 });
        });
      }

      clearInterval(slider);
      slider = setInterval(slide, 3000)
    }
  }


window.addEventListener('resize', function() {
  clearInterval(slider);
  detectMediaSize();
},false)


detectMediaSize();

});