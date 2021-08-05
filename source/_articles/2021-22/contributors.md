---
layout: page
issue: 2021
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
As **Mary-Russell Roberson** \'88 writes in our cover story \"Adaptable academics,\" the coronavirus pandemic forced the UC Santa Cruz community to devise new ways to learn and work. That included the students and alumni of the renowned [Science Communication master\'s program](https://scicom.ucsc.edu/index.html), which has now trained former scientists in the art and craft of science journalism for 40 years---including all the authors shown here, as well as editor **Dave Egerter** ('88).

Graduates of the program played key roles in responsibly covering the pandemic amid relentless misinformation. They included **Laura Helmuth** \'98, [named in March 2020](https://www.scientificamerican.com/pressroom/pr/scientific-american-appoints-laura-helmuth-editor-in-chief/) as editor-in-chief of *Scientific American*; **Nsikan Akpan** \'14, [named in January 2021](https://nypublicradio.org/2021/01/04/wnyc-names-nsikan-akpan-health-and-science-editor/) as health and science editor at WNYC public radio in New York; and **Eva Emerson** \'94 and **Rosie Mestel** \'91, the [editor-in-chief and executive editor](https://knowablemagazine.org/our-staff) at highly regarded *Knowable Magazine* in Palo Alto. Scores of other alumni reported on the coronavirus for publications, radio stations, and university news offices across the U.S. and in Europe.

And in a first for the program, alumna **Julia Calderone** \'14 contributed to a large team at the *New York Times* that received journalism's top honor for its reporting on COVID-19: the [2021 Pulitzer Prize for Public Service](https://www.pulitzer.org/winners/new-york-times-6). Calderone, a senior staff editor for the newspaper\'s health and family section, performed in-depth data analysis for the project.

Meanwhile, SciCom lecturers, led by director [**Erika Check Hayden**](https://scicom.ucsc.edu/about/program-news-articles/2016-09-hayden.html), pivoted to virtual instruction for this year\'s graduates. Save for socially distanced workshops in photojournalism and video production, students studied remotely and reported for their news internships from home. Their teachers via Zoom included three program alumni: multimedia journalist **Lisa Strong** \'93, author and essayist **Evelyn Strauss** \'98, and former director **Robert Irion** \'88.

The talent and versatility of the program\'s graduates is on display in these pages. We hope you and yours stay well as you enjoy the stories we've unfolded in this 7th annual issue of *inquiry\@UC Santa Cruz*.
