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














});
