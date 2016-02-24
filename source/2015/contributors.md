---
layout: page
permalink: /2015/contributors/
issue: 2015
---

{% for post in site.categories.contributors %}
{% capture year %}{{post.date | date: "%Y"}}{% endcapture %}
  {% if year == "2015" %}
 
 <h1>{{ post.title }}</h1>
{{ post.content }}
  
  {% endif %}
{% endfor %}