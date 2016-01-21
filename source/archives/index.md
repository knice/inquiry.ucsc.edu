---
layout: page
permalink: archives.html
---

# Archives

<section id="archive">
{% for post in site.posts %}
  {% assign currentdate = post.date | date: "%Y" %}
  {% if currentdate != date %}
    <h3 id="y{{currentdate}}">{{ currentdate }}</h3>
    {% assign date = currentdate %} 
  {% endif %}
  <ul style="margin: 0; padding: 0; list-style: none;">
    <li>{{ post.date | date: "%B, %d" }} » <a href="{{ post.url }}">{{ post.title }}</a></li>
  </ul>
{% endfor %}
</section>