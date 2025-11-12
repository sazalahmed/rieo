$(function () {

    "use strict";


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
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fa-solid fa-chevron-right nextArrow"></i>',
        prevArrow: '<i class="fa-solid fa-chevron-left prevArrow"></i>',

        responsive: [
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












});
