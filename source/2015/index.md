---
layout: page
issue: 2015
---

{% for post in site.categories.welcome %}
{% capture year %}{{post.date | date: "%Y"}}{% endcapture %}
  {% if year == "2015" %}
<h1>{{ post.title }}</h1>
{{ post.content }}
{% endif %}
{% endfor %}