---
layout: page
title: Me and my site
type: "website"
---

![Room that needs renovating]({{ site.url }}/assets/images/build.jpg)

This site is currently under construction.

If you like to know more please check the blog section.

{% for beer in site.beers %} 
    {{ beer.title }}
{% endfor %}