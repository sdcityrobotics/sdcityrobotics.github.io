---
layout: page
title: Making This Site
tagline: Thought process, resources, etc.
author: Nils Olsson
---
{% include JB/setup %}

[Previous page](..)

This site is hosted on GitHub, uses GitHub pages, Jekyll and Jekyll Bootstrap. All of the content on this site was written in HTML, Markdown, SCSS (SASS) and JavaScript.

Checkout the [source-code repository](https://github.com/sdcityrobotics/sdcityrobotics.github.io); it's private though, so unless you're in the club organization you wont be able to access it.

This site was made out of a necessity for a well organized and approachable homepage for our club. One that could function as both a blog center for weekly status updates and also as a resource center (as an alternative to an external wiki). Based on the criteria, we chose GitHub pages, Jekyll and Jekyll Bootstrap to host and build this site.

## Why we chose [GitHub pages](https://pages.github.com/)

It was decided to use GitHub pages instead of a service like Wix because, despite the convenience of having a WYSIWYG website creator, we are already paying for a GitHub organization, and organizations like user accounts get a free GitHub pages site.

Websites using GitHub pages are *static*, that is they 100% content, composed entirely of HTML, CSS and JavaScript. This makes web-developing vastly easier for non-web-developers (such as pretty much everyone on the team, myself included) as there is no exposed database or code (Ruby, Python, etc.) to need to deal with.

GitHub Pages provides everything needed to make simple and secure static websites, and are easily maintained through the same development pipeline (Git) that everyone on the software team is  already accustomed to. Pages also has support for the CSS extension language [SASS](http://sass-lang.com/) and the JavaScript transcompiled language [CoffeeScript](http://coffeescript.org/) (*"It's just JavaScript"*).

## Why we chose [Jekyll](http://jekyllrb.com/)

GitHub pages provides a completely blank slate for building static websites; it's up to you to provide the HTML, CSS and JavaScript. Some default templates are provided, but to meet the criteria of our website Jekyll---a static website engine---was chosen. Jekyll is *"blog aware"*: it comes with permalinks, categories, pages, posts and layouts built-in. Jekyll also supports templating using a language called [Liquid](https://github.com/Shopify/liquid/wiki). However, Jekyll does not come pre-configured.

## Why we chose [Jekyll Bootstrap](http://jekyllbootstrap.com/)

Jekyll provides the engine for generating our static website, Jekyll Bootstrap provides the pre-configured blog scaffolding. Bootstrap comes with pre-built page and post templates that can be aware of one-another, and comes with a *rake* configuration for various tasks, like creating posts, pages, switching themes, etc. Analytic and comment engine support also comes built-in.

## Still to do...

1. About and Team pages
2. Cross-site links
3. Learning article templates

## Resources

These were some of the various resources that I referred to in learning how to design this website.

### CSS

- [Responsive design planning device diagrams](http://www.metaltoad.com/blog/simple-device-diagram-responsive-design-planning)
- [Responsive pattern and modules, resources, news.](http://bradfrost.github.io/this-is-responsive/)
- [CSS Tricks](http://css-tricks.com/)

### Jekyll

- [Templating](http://jekyllrb.com/docs/templates/)

### Jekyll Bootstrap

- [Liquid API](http://jekyllbootstrap.com/api/jekyll-liquid-api.html)
- [Bootstrap API](http://jekyllbootstrap.com/api/bootstrap-api.html)
- [Theme API](http://jekyllbootstrap.com/api/theme-api.html)
