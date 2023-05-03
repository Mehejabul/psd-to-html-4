$(function () {

    /*========= typed =========*/
    var type = new Typed('.type', {

        strings: ['Ios,Android,windows.',
                  'Apple tv,Xbox One',
                  'Pc,Tablets',

        ],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,

    });
    var typed = new Typed('.type', {
        strings: ['Ios,Android,windows.',
                      'Apple tv,Xbox One',
                      'Pc,Tablets', ],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,

    });

    /*========= slide =========*/
    $('.slide').slick({
        dots: true,
        speed: 1000,
        autoplay: false,
        swipe: true,
        arrows: false,
    });

    //===== Sticky===//

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".navbar").removeClass("sticky");
            $(".header-three .navigation img").attr("src", "images/logo-2.png");
        } else {
            $(".navbar").addClass("sticky");
            $(".header-three .navigation img").attr("src", "images/logo.png");
        }
    });
     //=====Preloader_strt===//
    
     var patsala = $(window);
    var page = $('html, body');

    $(window).on('load', function () {
        $('.preloader').delay(3500).fadeOut(1500);

    })


});
