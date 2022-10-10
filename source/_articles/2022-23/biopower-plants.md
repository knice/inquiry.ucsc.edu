---
layout: brief
issue: 2022
category: brief
order: 10
title: Biopower plants
author-last: Augliere
colors:
    tag: "#84cbd8"
tags:
    - ELECTRICAL AND COMPUTER ENGINEERING
---
<figure class="briefs-full" style="width:600px">
  {% asset 2022/colleen-josephson.jpg @magick:resize=600 alt:'Photo: Aerial photo of San Francisco International Airport (SFO)' %}<figcaption markdown="span">Assistant Professor of Electrical and Computer Engineering Colleen Josephson and her collaborators have deployed 12 of their first prototype "mud batteries," or MFCs (one held here by Josephson), four at one field site in California and eight at two sites near Chicago. "Our oldest two cells were deployed in July 2021," Josephson said, "and we\'re still collecting data." Don't expect a widely available product soon, she said---"A lot depends on the economics." Credit: Courtesy of Colleen </figcaption>
</figure>

We all know about power generation from the sun and the wind, but it's probably a surprise to learn that electricity can also come from the dirt beneath our feet. The dirt itself, however, is not the source---it's the so-called [exoelectrogens](https://en.wikipedia.org/wiki/Exoelectrogen), mostly bacteria, that inhabit healthy soil all over the world. As they break down and metabolize---i.e., "eat"---complex molecules like sugars, these miniscule organisms release a steady trickle of electrons.

Commensurate with their microbial size, the electron output of a single bacterium is quite small. But their immense numbers and density in the soil can collectively produce enough of a spark for Assistant Professor [**Colleen Josephson**](https://people.ucsc.edu/~cojoseph/) and her collaborators to attempt to harness it. Josephson's work aims to create what she calls "a mud battery," more technically known as a [microbial fuel cell](https://en.wikipedia.org/wiki/Microbial_fuel_cell) (MFC). If she succeeds, MFCs will power soil moisture sensor networks on farms, potentially saving a lot of increasingly valuable water.

About 70% of all the potable water we use today goes to agriculture, said Josephson, noting that the sensor networks she envisions could improve the sustainability of farming by saving up to half of this water. And with another expected two billion people added to the world's population over the next 30 years, "it's going to be critical," she said, "to use water more efficiently."

{% assign contrib = site.data.contributors | where:"last", page.author-last | first %}
{% if contrib.url %}
*&mdash;[{{ contrib.first }} {{contrib.last}}]({{ contrib.url }})*
{% else %}
*&mdash;{{ contrib.first }} {{ contrib.last }}*
{% endif %}
