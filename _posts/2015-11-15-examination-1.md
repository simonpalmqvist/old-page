---
layout: post
title:  "Examination 1!"
date:   2015-11-15 18:30:00
description: A blog post presenting the answers to questions in examination 1.
type: "article"
author: simonpalmqvist
categories: programming
---

###Pre-compiling CSS

I have been briefly looking at pre-compiling css with less earlier before we started this project and 
was already a bit sold at working with the techniques nesting and variables, since makes the css so much 
easier to work with and maintain.

After this project I'm glad that I didn't delete the Jekyll boilerplate Sass-files and start fresh which I first
intended to do. By going through it I found a lot of use cases for how to use mixins, how to structure my sass 
files and even when there is good to use operators which from the beginning was a bit unclear of where they could
be brought into use.

{% highlight sass %}
@mixin skewAndRotate($value) {
    -webkit-transform: skew($value) rotate($value);
    -moz-transform: skew($value) rotate($value);
    -ms-transform: skew($value) rotate($value);
    -o-transform: skew($value) rotate($value);
    transform: skew($value) rotate($value);
}

@include skewAndRotate(-5deg);

{% endhighlight %}

{% highlight sass %}

$base-font-family: Helvetica, Arial, sans-serif;
$header-font-family: "Montserrat", $base-font-family;

{% endhighlight %}

I also really find the functions lighten/darken to adjust colors really neat and the not functions to exclude certain
elements. There is probably a lot of more good functions that I have missed but guess I will learn more by working a lot
more with Sass.

There's a lot of pros but harder to see some cons with it. To be honest I didn't think of anything while developing
this site. It can perhaps be harder to debug but since I didn't have to do that a lot I'm not able to comment on it.
One other thing might be that it takes time to compile the css and the changes take a bit longer time before they are 
visible.

###Static Site Generators

Jekyll is the first SSG I have tried and I must say I really like the idea behind it. Being able to Skip 
writing a lot of server-side code or maintaining and updating for example a Wordpress site for projects like 
blogs where you can actually skip these things is really nice. It was really easy to get something up and running fast 
and not too much work to add other types of collections (that can be really useful) either.

Some projects that SSGs might be useful for might be blogs, portfolios, iOS/android app pages or any type site that
presents static information where user data don't need to be stored. It also requires that the person who will maintain
the site and update or add new content understands how markdown works and how to push it to the site.


###Robots.txt

robots.txt is basically a file with instructions how web robots / search engine spiders, 
for example google, should handle your site or app when they scan it for information.

Right now mine is configured to do following:

{% highlight text %}
User-agent: *
Disallow: /
{% endhighlight %}

This means that all (* = all) user agents should skip all pages (/ = the root directory).
I have this set because I at this stage don't want people to find it in search engines.
Maybe at a later stage when I have some kind of portfolio to show or if I intend to start
more serious blogging then I would make it available

If I for example only want to allow Google* I could then add this before my other configuration:

{% highlight text %}
User-agent: Google
Disallow: 
{% endhighlight %}

This will only allow Google*.

Maybe I then want to allow everything* except the about page then i could change it to: 

{% highlight text %}
User-agent: Google
Disallow: /about/
{% endhighlight %}

It's however only possible to disallow stuff not allow stuff but as a solution you can add 
several disallows to each user agent criteria to solve that.

*\* Allow is not really correct since the web robots can scan you site even if you specify in
your robots file that they shouldn't.*

###Humans.txt

Humans.txt is as the name implies a file for humans. The thought behind it is to give information
about the people behind a website/webapp nad maybe who it was built.

If robots.txt was strict regarding the content, humans.txt is not. It's up to the
team/person behind it to decide what it should contain.

For my project I just added my name, location and github/twitter account for further contact.

###Implementation of comments (Disqus)

I was at first a bit sceptic to Disqus and started googling and found some other solutions that creates 
statics comments. After investigating them a bit more they didn't feel better to use than Disqus so I
decided to give it a try. 

Even though I'm a bit sceptic to just include content from another provider via for example iframes the 
static comment solution didn't look less messy.

The implementation of Disqus went really smooth just signed up for an account, copied the html and js code
and pasted it in my post html layout and it was working. Later I moved out the javascript part into an own 
javascript file.

###Open Graph

Open Graph is a protocol that's used to provide information about pages on your web site/app that
will be used when sharing it on social media (for example Facebook). It can also improve your ranking
on search engines, it's for example used by Google to get information about your site.

A lot of information can be added, but som basics is a title (for example the title of your blog post),
an image (that will be displayed) and a description (that tells a bit about the blog post).

By adding these things will make your content much more interesting when it gets shared rather than just
showing your url.

To add open graphs you just add a meta tag in the head like this:
{% highlight html %}
<meta property="og:title" content="Simons blog">
{% endhighlight %}

On my site I aimed to go for one image for all different pages that connects well with the branding
of my site. The image also has a layout that works good for both sharing on Facebook (so they don't
cut any important part of the image) and also looks good on for example Reddit where they show a
square image.

I also have a generic title and generic description for all pages unless I have specified
anything. For example in blog posts I specify that the title should be equal to the blog posts title 
and a short description about what the blog post is about.