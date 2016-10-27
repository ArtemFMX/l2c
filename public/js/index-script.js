
$(document).ready(function() {
    $('#menu-toggle').click(function() {
        var x = document.getElementById("topnav");

        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
