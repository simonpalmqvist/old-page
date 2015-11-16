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
}

//Functions to move footer to the bottom of the page, used on dom mutation, window resize and load.
function moveFooterAfter(mutations) {
    mutations.forEach(function(mutation) {
        Array.prototype.forEach.call(mutation.addedNodes, function(node) {
            node.addEventListener("load", moveFooter);
        });
    });
}

function moveFooter() {
    var body = document.body;
    var footer = document.querySelector(".site-footer");
    var bodyHeight = body.clientHeight;
    var windowHeight = window.innerHeight;

    if (footer.classList.contains("move")) {
        bodyHeight += footer.clientHeight;
    }

    if ( bodyHeight < windowHeight) {
        body.classList.add("fullscreen");
        footer.classList.add("move");
    } else if (bodyHeight > windowHeight) {
        body.classList.remove("fullscreen");
        footer.classList.remove("move");

        if(this.constructor === MutationObserver) {
            this.disconnect();
        }
    }
}

window.addEventListener("load", function() {
    var commentDiv = document.querySelector("#disqus_thread");
    moveFooter();

    if (commentDiv) {
        loadDiscuss();


        var observer = new MutationObserver(moveFooterAfter);

        var observerConfig = {
            childList: true
        };

        observer.observe(document.body, observerConfig);
    }
});

window.addEventListener("resize", moveFooter);

//Google Analytics part
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-70155816-1', 'auto');
ga('send', 'pageview');
