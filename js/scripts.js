$(function() {    
    // scrolltop and header animate --------------------------//
    var lastScrollTop = 0;
    var delta = 50;
    
    if($(this).scrollTop() > 0) {
          $('header').addClass('nav-down');
    }
  
    $('body').scroll(function(){
      var st = $(this).scrollTop();
  
      if(Math.abs(lastScrollTop - st) <= delta) {
        return;
      }
  
      if (st > 100) {
        $('#scrolltop').addClass('up');
      } else {
        $('#scrolltop').removeClass('up');
      }

      if (st > lastScrollTop){
        $('header').removeClass('nav-down').addClass('nav-up');
      } else {
        if(st + $(window).height() < $(document).height() && st >= delta) {
          $('header').removeClass('nav-up').addClass('nav-down');
        } else {
          $('header').removeClass('nav-up').removeClass('nav-down');
        }
      }
      lastScrollTop = st;

      if($(window).width() >= 768){
        if($('.parallax.bottom').length && $(window).scrollTop() >= $('.parallax.bottom').offset().top - 200) {
          $('.parallax.bottom').css('padding-top','50vh');
        }
  
        if($('.parallax.right').length && $(window).scrollTop() >= $('.parallax.right').offset().top - 200) {
          $('.parallax.right .content').css('margin-left','60vw');
          $('.parallax.right .content').css('right','0');
        }
      }

      lazyLoad();
    });
  
  
    $('#scrolltop').click(function() {
      $('html, body').scrollTop(0);
    });

    $('body').on('click','a.next',function(){
      var $hash = $($(this).prop('hash'));
      var hashTop = -($hash.parent().offset().top) + $(window).innerHeight();
      $('html, body').animate({
        scrollTop: hashTop
      }, 1000);
    });

    lazyLoad();

  });

  function lazyLoad(){
    $('.lazy').each(function(){
      if($(this).attr('data-src') != '' && $(window).scrollTop() >= $(this).offset().top - $(window).innerHeight()) {
        if($(this).is('img')){
          $(this).attr('src',$(this).attr('data-src')).css('opacity',100);
        } else if($(this).is('section') || $(this).is('div')){
          $(this).css('background-image','url('+$(this).attr('data-src')+')').css('opacity',100);
        }
        $(this).attr('data-src','');
      }
    });
  }
  