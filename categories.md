---
layout: page
title: Categories
header: Blog Posts By Category
// group: navigation
---
{% comment %}
This page used to be in the navigation bar
{% endcomment %}

{% include JB/setup %}

- [(sort by Date)]({{ site.url }}/blog.html)
- [(sort by Tag)]({{ site.url }}/tags.html)

<html>
    <ul class="tag_box inline">
      {% assign categories_list = site.categories %}
      {% include JB/categories_list %}
    </ul>


    {% for category in site.categories %} 
      <h2 id="{{ category[0] }}-ref">{{ category[0] | join: "/" }}</h2>
      <ul>
        {% assign pages_list = category[1] %}  
        {% include JB/pages_list %}
      </ul>
    {% endfor %}
</html>
