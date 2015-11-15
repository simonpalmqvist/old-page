---
layout: post
title: Google Analytics
date: 2015-11-15 21:31:00
description: How to add google analytics to a jekyll site
type: article
author: simonpalmqvist
categories: programming
---

Since I thought it might be interesting to see some statistics on how many people visit my site I started looking into
adding Google Analytics to my site.

If Disqus was easy to implement then Google Analytics was even simpler. I just logged in with my google mail and added
a new site with the url and name, then I got a code snippet that I just pasted in my included javascript file and it
was up and running.

{% highlight javascript %}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-70155816-1', 'auto');
ga('send', 'pageview');

{% endhighlight %}

Currently my site has one unique visitor and that's me \o/
