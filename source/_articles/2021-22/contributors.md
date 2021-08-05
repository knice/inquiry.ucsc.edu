---
layout: page
issue: 2020
category: credits
order: 1
title: Inquiring minds
---
<ul class="contributors-container">

{% assign contributorsSorted = site.data.contributors | sort: "last" %}
  {% for contributor in contributorsSorted %}
  
  <li>{% asset {{contributor.file}} alt:"{{contributor.name-year}}" %}
  <span>
  {% if contributor.url %}
<a href="{{contributor.url}}">{{contributor.name-year}}</a>
{% else%}
{{contributor.name-year}}
  {%endif%}
  </span>
  </li>
{%endfor%}

</ul>
With the distinctive expertise of scientists-turned-journalists, the 16
writers shown here, all graduates of the UC Santa Cruz [Science
Communication Program](https://scicom.ucsc.edu/index.html), created the
stories that grace these pages. Directed by editor [**Dave
Egerter**](https://medcommstrategy.com/) ('88), their reporting captures
the great scope, creativity, and global reach of the research being
performed across UCSC's five academic divisions.

Upgraded last year (2019) to award a master's degree, the "SciCom"
program uniquely trains former scientists to use their expertise to
foster the public understanding of science, health, technology, and the
environment. The urgency of this mission stepped up a notch with the
arrival of Covid-19. Like all UCSC instruction, the SciCom curriculum
moved online. Program instructors, led by director and veteran
journalist [**Erika Check
Hayden**](https://scicom.ucsc.edu/faculty/index.html), taught courses
via Zoom. The nine-student class of 2020 (eight less Stanford Ph.D.
immunologist [**Jonathan Wosen**](https://muckrack.com/jonathan-wosen),
hired early out of the program by the *San Diego Union-Tribune* as a
biotech reporter) gained real-world experience in both their classwork
and remotely-conducted internships. While working flat-out to keep up
with Covid-19 developments as a reporter at *BuzzFeed*, lecturer in
policy and investigative reporting [**Peter
Aldhous**](https://scicom.ucsc.edu/faculty/index.html) redirected his
spring-quarter class to support science reporters at the *San Jose
Mercury News*. Through that collaboration, the SciCom students helped
cover the pandemic's impact in the Bay Area.

The pandemic is also being professionally chronicled by many of the
program's 350-plus graduates in their work for local, regional,
national, and international media outlets, in newspapers, radio,
television, online media, peer-reviewed journals, magazines, and
university public relations. Covid-19 and near-constant attacks on the
credibility of science and the news media make the accurate, engaging
science journalism practiced by SciCom graduates&mdash;as exemplified by
their writing herein&mdash;more important than ever.

In these abruptly trying times, we hope you stay safe and enjoy reading
this year's *inquiry\@UC Santa Cruz.*
