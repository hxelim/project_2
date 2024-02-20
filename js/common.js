$(function () {
  // 리사이즈 이벤트 발생 시 이전 미디어 쿼리 설정 제거
  function removePreviousMediaQueries() {
    $('#menu').unbind('mouseenter mouseleave');
    $('.icon_menu').unbind('click');
    $('#menu>li').unbind('click');
    $('#menuBg').css({ height: 'auto' });
  }

  // 화면 크기에 따라 다른 동작을 위한 함수
  function handleViewportSize() {
    const mediaQuery = window.matchMedia("(min-width:1100px)");

    if (mediaQuery.matches) {
      console.log('pc')
      // 뷰포트 너비가 1100 픽셀 이상인 경우에 실행할 코드
      $('.sub').hide();
      $('#menu').show();
      removePreviousMediaQueries();

      // 초기 메뉴 배경 높이 설정
      updateMenuBgHeight();

      // 메뉴 호버 이벤트
      $('#menu').hover(
        function () {
          $('.sub').stop().slideDown();
          updateMenuBgHeight();
          $('#menuBg').stop().slideDown();
        },
        function () {
          $('.sub').stop().slideUp();
          $('#menuBg').stop().slideUp();
        }
      );
    } else {
      console.log('tablet')
      // 뷰포트 너비가 1100 픽셀 미만인 경우에 실행할 코드
      $('#menu').hide();
      $('#menuBg').hide();
      removePreviousMediaQueries();


      $('.icon_menu').click(function () {
        $('#menu').slideToggle("slow");
      });

      $('#menu>li').click(function () {
        $('.sub').stop().slideUp();
        $(this).find('.sub').stop().slideToggle();
      });


    }
  }

  // 초기화 및 리사이즈 이벤트 핸들러 등록
  handleViewportSize();
  $(window).resize(handleViewportSize);

  
  // 메뉴 배경 높이 업데이트 함수
  function updateMenuBgHeight() {
    let maxHeight = 0;
    $('#menu > li > .sub').each(function () {
      maxHeight = Math.max(maxHeight, $(this).height());
    });
    $('#menuBg').css({ height: maxHeight });
  }
});

