function loadDiscuss() {
    var disqus_config = function () {
        //var disqus_developer = 1;
        this.page.shortname = "sp222kh";
        this.page.identifier = "{{ site.url }}";
    };

    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');

        s.src = '//simonpalmqvist.disqus.com/embed.js';

        s.setAttribute('data-timestamp', + new Date());
        (d.head || d.body).appendChild(s);

    })();
};

function moveFooterAfter(mutation) {
    $(mutation[0].addedNodes[0]).load(moveFooter);
}

function moveFooter() {
    var body = $("body");
    var footer = $(".site-footer");
    var bodyHeight = body.height();
    var windowHeight = $(window).height();

    if (footer.hasClass("move")) {
        bodyHeight += footer.outerHeight();
    }

    if ( bodyHeight < windowHeight) {
        body.addClass("fullscreen");
        footer.addClass("move");
    } else if (bodyHeight > windowHeight) {
        body.removeClass("fullscreen");
        footer.removeClass("move");

        if(this.constructor === MutationObserver) {
            this.disconnect();
        }
    }
}



$(window).load(function() {
    if ($("#disqus_thread").length) {
        loadDiscuss();
        var observer = new MutationObserver(moveFooterAfter);

        var observerConfig = {
            childList: true
        };

        observer.observe(document.body, observerConfig);
    }

    moveFooter();

});
