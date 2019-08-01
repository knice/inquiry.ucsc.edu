---
layout: brief
issue: 2019
category: brief
order: 8
title: Protecting data privacy
colors:
    tag: "#84cbd8"
tags:
    - Computer Science
---
<figure class="">
  {% asset 2019/digital-noise.jpg @magick:resize=600 alt:'stylized image' %}<figcaption>Most of us have increasing concerns about the use of personal data collected from our digital footprints. Computer scientist Abhradeep Guha Thakurta has developed commercial-scale methods that help ensure privacy while also providing access to valuable data. Credit: <a href="https://pxhere.com/en/photo/742594">pxhere</a>, CC0.</figcaption>
</figure>

What if your cell phone could assess your risk for developing diabetes? For that to be possible, a predictive model would first need to be trained on vast amounts of user data. And that poses a problem, said [**Abhradeep Guha Thakurta**](https://www.soe.ucsc.edu/people/aguhatha), assistant professor of computer science and engineering.

“Access to this type of personal data is an insanely sensitive issue,” said Thakurta. “How do we harness such data while still protecting privacy?”

Thakurta has developed [machine learning algorithms](https://en.wikipedia.org/wiki/Outline_of_machine_learning), or computational rulesets, to help solve this problem. [His approach](https://aguhatha.github.io/research.html) is based on introducing randomness into the data. Imagine your data being sent from your phone to a company server. While your actual data might reveal a family history of heart disease, Thakurta’s algorithms could replace this truth with its opposite—you don’t. “The data are intentionally a little bad,” he said.

Feeding models slightly bad data turns out to be good for them—they learn the general trends, without relying on any individual’s “real” data. The method [maximizes](https://www.ieee-security.org/TC/SP2017/papers/373.pdf) data utility, while also maintaining user privacy.

Several companies are working to adapt his approach to their technology, Thakurta said. Apple, for example, is already [using it](https://www.wired.com/2016/06/apples-differential-privacy-collecting-data/) in all their devices to ensure keyboard stroke privacy.

*—[Alison F. Takemura](http://alisonftakemura.info/)*