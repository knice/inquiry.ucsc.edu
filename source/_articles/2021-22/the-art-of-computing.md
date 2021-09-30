---
layout: brief
issue: 2021
category: brief
order: 14
title: The art of computing
author-last: Walker
colors:
    tag: "#84cbd8"
tags:
    - Film and digital media
---
<figure class="right briefs-full" style="width:600px">
  {% asset 2021/encyclopedia-arts-trades-engraving.jpg @magick:resize=600 alt:"Clipping from Oakland Tribune, June 1927" %}<figcaption markdown="span">Published between 1751 and 1772 with many contributors and edited primarily by [Denis Diderot](https://en.wikipedia.org/wiki/Denis_Diderot), the *Encyclopédie, Ou Dictionnaire Raisonné Des Sciences, Des Arts et Des Métiers* (English: *Encyclopedia, or Classified Dictionary of the Sciences, Arts, and Trades*) inspired the development of computing, according to professor of film and digital media Warren Sack. The engraving on the right from the 28-volume series depicts a factory and detailed drawings of the tools for making pins. Credits: Both, Wikimedia Commons (Public Domain), [here](https://commons.wikimedia.org/wiki/File:Encyclopedie_de_D%27Alembert_et_Diderot_-_Premiere_Page_-_ENC_1-NA5.jpg) and [here](https://commons.wikimedia.org/wiki/File:1762_Diderot%27s_Encyclopedie,_Epinglier_II.jpg).</figcaption>
</figure>
Although many artists now use computers to make art, few know that art played a key role in making computers. According to Professor [**Warren Sack**](https://film.ucsc.edu/faculty/warren_sack), art and craftsmanship laid the foundation on which computing and software design were built. In his book [*The Software Arts*](https://mitpress.mit.edu/books/software-arts) (MIT Press, 2019), Sack recounts how early figures in computing---like Charles Babbage, inventor of the first mechanical computer---were inspired by the 28-volume French [*Encyclopédie*](https://en.wikipedia.org/wiki/Encyclop%C3%A9die) that catalogued the tools and step-by-step process of 18th-century crafts and trades, such as pin making, glass blowing, and tapestry weaving. "It all came from the workshops of artists and artisans," Sack said.

An artist and software designer, Sack straddles the two disciplines, his work showcasing how computing can influence art as well. In *[The Translation Map](http://translationmap.walkerart.org/index.html),* a 2003 installation created with artist [Sawad Brooks](https://creative-capital.org/artists/sawad-brooks/) for the [Walker Art Center](https://walkerart.org/) in Minneapolis, Sack's software routed messages in one language to a series of public discussion forums around the world, resulting in a collaborative process of translation. The artists then traced the pathways of how people worked together, producing translation "maps" that illuminated shared cultural and colonial histories---and enduring divisions. "If you accept the idea that computing is an art," Sack said, "you gain a completely different way of looking at it."

{% assign contrib = site.data.contributors | where:"last", page.author-last | first %}
{% if contrib.url %}
*&mdash;[{{ contrib.first }} {{contrib.last}}]({{ contrib.url }})*
{% else %}
*&mdash;{{ contrib.first }} {{ contrib.last }}*
{% endif %}
