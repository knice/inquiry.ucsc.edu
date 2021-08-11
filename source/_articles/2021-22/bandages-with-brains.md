---
layout: brief
issue: 2021
category: brief
order: 4
title: Bandages with brains
author:
  last: Welsh
colors:
    tag: "#84cbd8"
tags:
    - Applied Mathematics
---
<figure style="width:300px">
  {% asset 2021/marcella-gomez.jpg @magick:resize=300 alt:'Assistant professor Marcella Gomez' %}<figcaption>Marcella Gomez, assistant professor of applied mathematics, is creating the artificial intelligence "brain" of a smart bandage, a collaborative project she co-leads with professors of electrical and computer engineering Marco Rolandi and Mircea Teodorescu, and also includes clinical researchers at UC Davis and Tufts University. Credit: Karyn Skemp.</figcaption>
</figure>

Assistant Professor [**Marcella Gomez**](https://www.soe.ucsc.edu/people/mgomez26) is teaching artificial intelligence learning models to heal. With electrical and computer engineering professors [**Marco Rolandi**](https://www.soe.ucsc.edu/people/mrolandi) and [**Mircea Teodorescu**](https://www.soe.ucsc.edu/people/mteodorescu), Gomez co-leads a collaborative project that includes clinical researchers at UC Davis and Tufts University. Funded by a \$16 million grant from the Defense Advanced Research Projects Agency, the project aims to develop a "smart bandage" that can speed the healing of difficult wounds, like those suffered by soldiers and veterans with battlefield injuries from explosions. "Our task is to identify where in the healing process we can intervene to accelerate wound closure," Gomez said.

To monitor the wound, the smart bandage will contain optical sensors currently being developed by Teodorescu's team. It will also incorporate a Rolandi team--developed bioelectronic device to deliver ions and biochemicals. What molecules and when to administer them will depend on the bandage's "brain"---the artificial intelligence system being developed by Gomez.

"We'll monitor the wounds in real-time, and my algorithms will process and interpret the images to say, for example, 'Oh, we've started inflammation!'" Gomez said, prompting the bandage to release specific biochemicals. Eventually, she said, the technology could be adapted to help heal chronic sores, like those caused by diabetes, which burden a substantial number of patients and cost the health care system billions annually.

{% assign contrib = site.data.contributors | where:"last", page.author.last | first %}
{% if contrib.url %}
*&mdash;[{{ contrib.first }} {{contrib.last}}]({{ contrib.url }})*
{% else %}
*&mdash;{{ contrib.first }} {{ contrib.last }}*
{% endif %}
