---
---

$(window).load(function() {

    var windowHeight = $(window).height();
    var bodyHeight = $("body").height();

    if ( bodyHeight < windowHeight) {
        $("footer").css("margin-top", windowHeight - bodyHeight);
    }
});

console.log("what");