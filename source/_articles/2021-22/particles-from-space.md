---
layout: brief
issue: 2021
category: brief
order: 15
title: Particles from space
author-last: Kathan
colors:
    tag: "#84cbd8"
tags:
    - Physics
---
<figure style="width:200px">
  {% asset 2021/baloon-launch.png @magick:resize=200 alt:"Clipping from Oakland Tribune, June 1927" %}<figcaption markdown="span">Carried by a high-altitude balloon launched in Sweden (see video [here](http://scipp.ucsc.edu/~johnson/download/BalloonLaunchAESOPLite2018FromEsrange_FromJohnClemPI_Rotated.mp4)), the AESOP-lite mission collected more than 130 hours of data measuring cosmic radiation near the edge of the Earth’s atmosphere. Credit: Courtesy of Robert Johnson.</figcaption>
</figure>

In 2018, a high-altitude balloon launched in Sweden ascended 40 kilometers into the atmosphere. While it drifted towards the far north of Canada, its 500-lb. payload of delicate sensors captured more than 130 hours of data intended to help untangle the mysteries of [cosmic radiation](https://www.space.com/32644-cosmic-rays.html).

Cosmic rays mostly include subatomic particles like neutrons and protons, which circulate throughout the galaxy at nearly light speed. Many of these particles are thought to be produced by pulsars, the "remnants of ancient stellar explosions," said Professor [**Robert Johnson**](https://people.ucsc.edu/~rjohnson/). But much about these galactic emanations remains unexplained, including the source of low-energy electrons, which make up a fraction of the rays.
<figure class="briefs-full" style="width:600px">
  {% asset 2021/AESOP-retrieval.jpg @magick:resize=600 alt:"Clipping from Oakland Tribune, June 1927" %}<figcaption markdown="span">The mission’s balloon and its equipment payload (on right) drifted for six days before it landed and was collected on Ellesmere Island in the far north of Canada. Credit: Sarah Mechbal, with permission.</figcaption>
</figure>
To study these elusive electrons, Johnson, then doctoral-candidate **Sarah Mechbal** (Ph.D. '20; now at Deutsches Elektronen-Synchrotron---[DESY](https://www.research-in-germany.org/en/research-landscape/research-organisations/research-infrastructures/desy.html)---in Germany), and [John Clem](https://web.physics.udel.edu/about/directory/faculty/john-clem) at the University of Delaware collaborated on the NASA-supported mission, for which the UCSC team built [AESOP (Anti-Electron Sub Orbital Payload)-Lite](https://stratocat.com.ar/fichas-e/2018/KRN-20180515.htm), an instrument capable of distinguishing electrons from positrons, their antiparticles.

The Earth's atmosphere absorbs most radiation, making it difficult to measure---hence the high-altitude balloon to ferry AESOP-Lite near the edge of space. With the mission's [initial findings](https://arxiv.org/pdf/2009.03437.pdf) now published, the researchers plan to compare their data with measurements from similar sensors on the International Space Station and satellites deep in the solar system. These comparisons, Johnson said, could illuminate how our Sun's radiation affects these particles from space.
{% assign contrib = site.data.contributors | where:"last", page.author-last | first %}
{% if contrib.url %}
*&mdash;[{{ contrib.first }} {{contrib.last}}]({{ contrib.url }})*
{% else %}
*&mdash;{{ contrib.first }} {{ contrib.last }}*
{% endif %}
