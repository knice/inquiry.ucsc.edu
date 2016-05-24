---
layout: page
title: Archives
---
<section class="archive">
{% assign sorted_posts = (site.posts | where: 'issue', '2016' | sort: 'order') %}

<h2 id="{{ post.date | date: "%Y" }}">2016</h2>
<h4 class="category-title">Features</h4>
<ul class="archive-item">
{% assign category_posts = sorted_posts | where: 'category', 'feature' %}
{% for post in category_posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>    
{% endfor %}
</ul>

<h4 class="category-title">Briefs</h4>
<ul class="archive-item">
{% assign category_posts = sorted_posts | where: 'category', 'brief' %}
{% for post in category_posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>    
{% endfor %}
</ul>
</section>


{% assign sorted_posts = (site.posts | where: 'issue', '2015' | sort: 'order') %}
<section class="archive">
  <h2 id="{{ post.date | date: "%Y" }}">2015</h2>
  <h4 class="category-title">Features</h4>
  <ul class="archive-item">
{% assign category_posts = sorted_posts | where: 'category', 'feature' %}
{% for post in category_posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>    
{% endfor %}
  </ul>

  <h4 class="category-title">Briefs</h4>
  <ul class="archive-item">
{% assign category_posts = sorted_posts | where: 'category', 'brief' %}
{% for post in category_posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>    
{% endfor %}
  </ul>
</section>

