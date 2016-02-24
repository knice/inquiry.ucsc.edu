---
layout: page
permalink: /2015/books/
issue: 2014
---
{% for post in site.categories.pen %}
{% capture year %}{{post.date | date: "%Y"}}{% endcapture %}
  {% if year == "2015" %}
	
<h1>{{ post.title }}</h1>
{{ post.content }}
  {% endif %}
{% endfor %}