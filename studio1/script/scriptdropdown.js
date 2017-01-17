$(document).ready(function() {
    $(window).scroll(function() {
        $(".top").css("opacity", 1 - $(window).scrollTop() / ($('.top').height() / 2));
    });
});

$(window).scroll(function() {

    if ($(this).scrollTop() > 0) {
        $('.top').fadeOut();
    } else {
        $('.top').fadeIn();
    }
});