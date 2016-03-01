---
layout: page
title: Archives
---

<section id="archive">
{% assign sorted_posts = (site.posts | sort: 'category') %}
{% for post in sorted_posts %}
  {% assign currentdate = post.date | date: "%Y" %}
  {% if currentdate != date %}
    {% unless forloop.first %}</ul>{% endunless %}
    <h2 id="y{{ post.date | date: "%Y" }}">{{ currentdate }}</h2>
    <ul class="archive-item">
    {% assign date = currentdate %}
  {% endif %}
    <li>» <a href="{{ post.url }}">{{ post.title }}</a>  <span style="text-transform: uppercase; margin-left: 1em; font-size: 9px;">{{ post.category }}</span></li>
  {% if forloop.last %}</ul>{% endif %}
{% endfor %}
</section>