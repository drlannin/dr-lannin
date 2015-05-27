$(document).ready(function() {
    $(window).scroll(function() {
        var t = $(window).scrollTop();

        if (t > 80) {
            $("#navbar").addClass("navbar-main-scroll");
        } else {
            $(".navbar-main-scroll").removeClass("navbar-main-scroll");
        }
    });
});
