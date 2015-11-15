//Disqus part
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

//Functions to move footer to the bottom of the page, used on dom mutation, window resize and load.
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

    $(window).resize(moveFooter);

});

//Google Analytics part
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-70155816-1', 'auto');
ga('send', 'pageview');
