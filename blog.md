---
layout: page
title: Blog
header: Blog Posts by Date
group: navigation
---
{% include JB/setup %}

- [(sort by Category)]({{ site.url }}/categories.html)
- [(sort by Tag)]({{ site.url }}/tags.html)

<html>
{% assign posts_collate = site.posts %}
{% include JB/posts_collate %}
</html>
