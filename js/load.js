---
---

function loadDiscuss() {
    var disqus_config = function () {
        var disqus_developer = 1;
        this.page.shortname = "sp222kh";
        this.page.identifier = "{{ page.url }}";
    };

    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');

        s.src = '//simonpalmqvist.disqus.com/embed.js';

        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);

    })();
};

function moveFooter() {
    var windowHeight = $(window).height();
    var bodyHeight = $("body").height();

    if ( bodyHeight < windowHeight) {
        $(".site-footer").css("margin-top", windowHeight - bodyHeight);
    } else if (bodyHeight > windowHeight) {
        $(".site-footer").css("margin-top", 0);
    }
}


$(window).load(function() {
    if ($("#disqus_thread").length) {
        loadDiscuss();
        $(".post-footer").bind("DOMSubtreeModified", function() {
            moveFooter();
        });
    }

    moveFooter();
});

