---
layout: page
---

# Archives
<!-- Need to write styles for this -->
<section id="archive">
{% for post in site.posts %}
  {% assign currentdate = post.date | date: "%Y" %}
  {% if currentdate != date %}
    <h3 id="y{{currentdate}}">{{ currentdate }}</h3>
    {% assign date = currentdate %} 
  {% endif %}
  <ul class="archive-item">
    <li>» <a href="{{ post.url }}">{{ post.title }}</a></li>
  </ul>
{% endfor %}
</section>