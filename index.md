---
layout: page
title: San Diego City Robotics
---
{% include JB/setup %}

Welcome to the (in-development) San Diego City Robotics homepage. This site is hosted via [GitHub Pages](https://pages.github.com) and built with [Jekyll](http://jekyllrb.com/) and [Jekyll Bootstrap](http://jekyllbootstrap.com/).

<div class="container-fluid">
    <div class="col-md-9">

<iframe width="640" height="360" src="//www.youtube.com/embed/SIQrtIMvYTE?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

Meetings are held on **Saturdays** weekly from **9:30 AM to 12:05 PM**, on the San Diego City College campus in Downtown San Diego, room T-214 (the technology incubator building).


{% assign post = site.posts.first %}

## Last Post: [{{ post.title }} ({{ post.date | date: "%B %-d, %Y" }})]({{ post.url }})

  </div>
  
    <div class="col-md-3">
{% include JB/setup %}

<html>
{% assign posts_collate = site.posts %}
{% include JB/posts_collate %}
</html>

    </div>
</div>
