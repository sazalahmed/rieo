$(function () {

    "use strict";

    // menu fix js
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            if ($('.main_menu').offset() != undefined) {
                if (!$('.main_menu').hasClass("menu_fix")) {
                    $('.main_menu').addClass("menu_fix");
                }
            }
        }
        else {
            if ($('.main_menu').offset() != undefined) {
                $('.main_menu').removeClass("menu_fix");
            }
        }
    });


    // svg icon converter
    SVGInject(document.querySelectorAll("img.injectable"));


    // progressbar
    $(document).ready(function () {
        $('.barfiller').each(function () {
            $(this).barfiller({});
        });
    });


    // venobox
    $('.venobox').venobox();


    // slick slider
    $('.team_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fa-solid fa-chevron-right nextArrow"></i>',
        prevArrow: '<i class="fa-solid fa-chevron-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // AOS js
    AOS.init();

    //small device menu toggler
    $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show");
    });

});
