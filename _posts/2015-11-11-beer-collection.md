---
layout: post
title: Beer collection
date: 2015-11-11 11:50:00
description: Adding a collection in Jekyll.
type: article
author: simonpalmqvist
categories: programming
---

I have been playing around with collections and added one for beer. 
You can check it out under beer in the menu. I will store all my different 
craft beers i brew together with an image of the label and some information about the beer.

Adding a new collection was fairly simple.

1. First i added some information in _config.yml about the collection.
* {% highlight yaml %}
collections:
  beers:
      output: true
      permalink: "/beer/:name/"
{% endhighlight %}

2. Then I added a directory called _beers and started adding different beers in md format with following yaml header.
* {% highlight yaml %}
---
layout: beer
title:  "Berlin IPA"
img: "/assets/images/berlin-ipa.png"
brewdate:   2015-04-04 00:00:00
beertype: "India Pale Ale"
author: simonpalmqvist
---
{% endhighlight %}

3. Added a specific layout with the name beer in directory _layouts

4. Added a folder called beer with an index file where I can show all beers
* {% highlight ruby %}
{ for beer in site.beers }
    { beer.title } - { beer.brewdate }
{ endfor }

{% endhighlight %}


This is basically all the needs to be done.


