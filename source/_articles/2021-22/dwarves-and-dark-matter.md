---
layout: brief
issue: 2021
category: brief
order: 3
title: Watching the clock
author:
  last: Derouin
colors:
    tag: "#84cbd8"
tags:
    - Astronomy and Astrophysics
---
Starting small can sometimes help tackle a big question, like the nature of [dark matter](https://www.space.com/20930-dark-matter.html). That's the hope of Assistant Professor [**Alexie Leauthaud**](https://alexie.sites.ucsc.edu/), whose research features [dwarf galaxies](https://www.cosmotography.com/images/dwarf_galaxy_dark_matter.html), the most common---but also most elusive---galaxies in the Universe. Cosmologists refer to these relatively tiny collections of stars (e.g., one billion versus our Milky Way's 200--400 billion) as "laboratories for dark matter," Leauthaud said, because they contain copious amounts of the mysterious substance.
<figure class="right" style="width:600px">
  {% asset 2021/hubbles-legacy-UGC-685.jpg @magick:resize=600 alt:'A galaxy in space' %}<figcaption markdown="span">Taken with the Hubble Space Telescope, this image shows a dwarf galaxy, named UGC 685, located about 15 million light-years from Earth. The most common type of galaxy in the Universe, these relatively small collections of stars are a focus of research for assistant professor of astronomy and astrophysics Alexie Leauthaud. Credit: [ESA/Hubble & NASA](https://commons.wikimedia.org/wiki/File:Hubble%27s_Legacy_UGC_685.jpg) (CC BY 4.0).
  </figcaption>
</figure>

With Princeton's [Jenny Greene](https://web.astro.princeton.edu/people/jenny-greene), Leauthaud co-leads the [Merian Survey](https://merian.sites.ucsc.edu/), an international research collaboration that in March 2021 began using the Blanco Telescope in Chile to map and assess 100,000 dwarf galaxies. Captured through custom-made filters, the discovery of so many dwarf galaxies will enable the astronomers to use a technique called gravitational lensing to measure---for the first time---the amount of dark matter they contain. While light normally travels in a straight line, gravitational forces warp its path. Measuring this warp with gravitational lensing infers the mass of a galaxy: the bigger the deviation, the bigger the mass and how much dark matter is present, Leauthaud said.
<figure class="right" style="width:600px">
  {% asset 2021/sunset-skies-at-CTIO.jpg @magick:resize=600 alt:'Cyanobacteria bloom' %}<figcaption markdown="span">A sunset photograph shows the Cerro Tololo Inter-American Observatory (CTIO), a program of the National Science Foundation's National Optical-Infrared Astronomy Research Laboratory (NOIRLab) in the mountains of northern Chile. More than 20 telescopes operate at the site; dominating the mountain peak in the foreground is the Víctor M. Blanco 4-m Telescope, now being used for the Merian Survey. Credit: [CTIO/NOIRLab/NSF/AURA/B. Tafreshi](https://commons.wikimedia.org/wiki/File:Sunset_Skies_at_CTIO.jpg) (CC BY 4.0).
  </figcaption>
</figure>

{% assign last = site.data.contributors[page.author.last] %}
{% assign contrib = site.data.contributors | where:"last", page.author.last | first %}
{% if contrib.url %}
*&mdash;[{{ contrib.first }} {{contrib.last}}]({{ contrib.url }})*
{% else %}
*&mdash;{{ contrib.first }} {{ contrib.last }}*
{% endif %}
