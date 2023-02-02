---
layout: brief
issue: 2022
category: brief
order: 2
title: Reimagining imaging
author-last: Malsbury
colors:
    tag: "#84cbd8"
tags:
    - Electrical and Computer Engineering
---
<figure style="width:400px">
  {% asset 2022/shiva-abbaszadeh.jpg @magick:resize=400 alt:'Photo: Shiva Abbaszadeh' %}<figcaption markdown="span">Assistant Professor of Electrical and Computer Engineering Shiva Abbaszadeh reads at least one journal paper a day to stay versed on potential applications for the complex imaging instruments she and her laboratory team develop. Credit: Christopher C. Lee, courtesy of Shiva
Abbaszadeh.</figcaption>
</figure>
Cancer and plant growth might seem quite different subjects, but the research of Assistant Professor [**Shiva Abbaszadeh**](https://engineering.ucsc.edu/people/sha) has common roots. In her [Radiological Instrumentation Laboratory](https://ril.soe.ucsc.edu/), Abbaszadeh and her students work to develop tools for imaging and sensing low levels of radiation, with potential applications ranging from healthcare to sustainable energy. "There is no similar facility in a research university for the type of detector we are fabricating," said Abbaszadeh. "Maybe one or two companies and one or two national labs do similar work."

Much of the lab's efforts focus on improving conventional medical imaging technologies like positron emission tomography (PET) and computed tomography (CT). Abbaszadeh's \$2.3 million in National Institutes of Health [grants](https://engineering.ucsc.edu/news/ucsc-professor-receives-nih-funding) support the development of highly accurate, low-radiation systems customized specifically for medical imaging of the brain and lymph nodes in the head and neck.

An additional 2021 Department of Energy [grant](https://engineering.ucsc.edu/news/doe-grant-funds-development-new-imaging-technology-study-roots-and-soil) provides nearly \$2 million over three years to develop---with academic collaborators including [**Weixin Cheng**](https://envs.ucsc.edu/faculty/index.php?uid=wxcheng), professor and chair of environmental studies---a low-cost, combined PET/CT-based system for imaging plant-soil interactions. The newly funded research aims to track the movement of carbon between soil and roots, heretofore possible only by disturbing the experiments. "This technology will help us answer questions we couldn't answer before because we didn't have tools to investigate them," said Abbaszadeh.

{% assign contrib = site.data.contributors | where:"last", page.author-last | first %}
{% if contrib.url %}
*&mdash;[{{ contrib.first }} {{contrib.last}}]({{ contrib.url }})*
{% else %}
*&mdash;{{ contrib.first }} {{ contrib.last }}*
{% endif %}
