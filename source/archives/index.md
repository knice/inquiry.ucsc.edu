---
layout: page
title: Archives
---
<section id="archive">
{% assign sorted_posts = (site.posts | where: 'issue', '2016' | sort: 'category') %}
{% for post in sorted_posts %}
  {% assign currentdate = post.date | date: "%Y" %}
  {% if currentdate != date %}
    {% unless forloop.first %}</ul>{% endunless %}
    <h2 id="{{ post.date | date: "%Y" }}">{{ currentdate }}</h2>
    <ul class="archive-item">
    {% assign date = currentdate %}
  {% endif %}
  {% assign currentcategory = post.categories %}
    {% if currentcategory != category %}
    {% unless forloop.first %}</li>{% endunless %}
    <h4 class="category-title">{{ currentcategory }}</h4>
    {% assign category = currentcategory %}
    {% endif %}
    <li>» <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% if forloop.last %}</li>{% endif %}
  {% if forloop.last %}</ul>{% endif %}
{% endfor %}
</section>


<section id="archive">
{% assign sorted_posts = (site.posts | where: 'issue', '2015' | sort: 'category') %}
{% for post in sorted_posts %}
  {% assign currentdate = post.date | date: "%Y" %}
  {% if currentdate != date %}
    {% unless forloop.first %}</ul>{% endunless %}
    <h2 id="{{ post.date | date: "%Y" }}">{{ currentdate }}</h2>
    <ul class="archive-item">
    {% assign date = currentdate %}
  {% endif %}
  {% assign currentcategory = post.categories %}
    {% if currentcategory != category %}
    {% unless forloop.first %}</li>{% endunless %}
    <h4 class="category-title">{{ currentcategory }}</h4>
    {% assign category = currentcategory %}
    {% endif %}
    <li>» <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% if forloop.last %}</li>{% endif %}
  {% if forloop.last %}</ul>{% endif %}
{% endfor %}
</section>
