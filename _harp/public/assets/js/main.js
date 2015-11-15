$(document).ready(function() {
    $(window).scroll(function() {
        var t = $(window).scrollTop();

        if (t > 80) {
            $("#navbar").addClass("navbar-main-scroll");
        } else {
            $(".navbar-main-scroll").removeClass("navbar-main-scroll");
        }
    });

    $('body').scrollspy({ 
        target: '#navbar-collapse',
        offset: 64
    });

    $("#about-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 64
        }, 1000);
    });

    $("#services-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#services").offset().top - 64
        }, 1000);
    });

    $("#eyewear-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#eyewear").offset().top - 64
        }, 1000);
    });

    $("#forms-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#forms").offset().top - 64
        }, 1000);
    });

    $("#contact-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 64
        }, 1000);
    });

    $("#contact-us").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 64
        }, 1000);
    });
});
