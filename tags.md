---
layout: page
title: Tags
header: Blog Posts By Tag
// group: navigation
---
{% include JB/setup %}

- [(sort by Date)]({{ site.url }}/blog.html)
- [(sort by Category)]({{ site.url }}/categories.html)

<html>
    <ul class="tag_box inline">
      {% assign tags_list = site.tags %}  
      {% include JB/tags_list %}
    </ul>


    {% for tag in site.tags %} 
      <h2 id="{{ tag[0] }}-ref">{{ tag[0] }}</h2>
      <ul>
        {% assign pages_list = tag[1] %}  
        {% include JB/pages_list %}
      </ul>
    {% endfor %}
</html>
