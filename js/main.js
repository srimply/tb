(function ($) {
    "use strict";


    var $body = $("body"),
            $window = $(window);

    /*============================= Navigation Section ==============================*/

    $window.on('scroll' ,function () {
        if ($(".navbar").offset().top > 25) {
            $(".navbar-default").addClass("small");
        } else {
            $(".navbar-default").removeClass("small");
        }
    });
    /***************************
    t.on("scroll",function(){var o=t.scrollTop(),a=$(".navbar");
    o>300?a.addClass("fixed-top"):a.removeClass("fixed-top")}),function(){if($("section.stats").length>0)
    {var t=0;$(window).on("scroll",function(){var o=$("section.stats").offset()
    .top-window.innerHeight;0==t&&$(window).scrollTop()>o&&($("section.stats .single-stat .counter")
    .each(function(){var t=$(this),o=t.attr("data-count");$({countNum:t.text()}).animate({countNum:o},
        {duration:2e3,easing:"swing",step:function(){t.text(Math.floor(this.countNum))},complete:function()
        {t.text(this.countNum)}})}),t=1)})}}(),
    $(".nav-item .nav-link").on("click",function(){$(".navbar-collapse").removeClass("show")}),
    /*============================= Navigation Section ==============================*/

    $window.on('scroll' ,function () {
        if ($(".navbar").offset().top > 25) {
            $(".navbar-nav").addClass("show");
        } else {
            $(".navbar-nav").removeClass("show");
        }
    });

    /*============================= Smoothscroll js ==============================*/
    
    $('.navbar-default').on('click', 'a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 1
        }, 1000);
        event.preventDefault();
    });
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    /*====================================== jquery scroll spy ========================================*/
    
    $body.scrollspy({
        target: ".navbar-collapse",
        offset: 15

    });

    /*====================================== Fancybox ========================================*/

    $('.fancybox-buttons').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        prevSpeed: 550,
        nextEffect: 'fade',
        nextSpeed: 550,
        closeBtn: true,
        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {}
        }
    });

    /*====================================== Fancybox-script ========================================*/

    $(".fancybox").fancybox();

    /*====================================== Mixit-up ========================================*/

    var filterList = {
        init: function () {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.web, .graphics, .development, .photography'
                }
            });

        }

    };

    // Run the show!
    filterList.init();

    /*====================================== Parallex ========================================*/

    $('.parallax').scrolly({bgParallax: true});


})(jQuery);


/*============================= Preload==============================*/

$(window).on('load' ,function () {
    "use strict";
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
    ;
});


/*======================================counter-up ========================================*/

$('.Count').each(function () {
    "use strict";
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


$(function() {  
    $('.btn-6')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX});
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX});
      });
    $('[href=#]').click(function(){return false;});
  });