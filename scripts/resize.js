(function() {

    // set height of the main top page the same as height of browser window
    $(".top").height = $(window).height();
    // set equal height for all jumbotrons
    function heightJumbotrons() {
        for (var i = 0; i < $(".jumbotron").length; i++) {
            if ($(".jumbotron").eq(i).height() < $(window).height()) {
                $(".jumbotron").eq(i).height($(window).height());
            }
        }
    }

    // smooth scroll
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            return false;
            }
        }
    });

    // fluid response when browser size changes
    $(window).resize(function () {
        // for a single paged top part
        $(".top").height = $(window).height();
        //heightJumbotrons();
    });

})();
