---
layout: page
issue: 2022
category: credits
order: 1
title: Inquiring minds
---
<ul class="contributors-container">

{% assign contributorsSorted = site.data.contributors | sort: "last" %}
  {% for contributor in contributorsSorted %}
  
  <li>{% asset {{contributor.file}} @magick:resize=150 alt:"{{contributor.first}} {{contributor.last}} ({{contributor.year}})" %}
  <span>
  {% if contributor.url %}
<a href="{{contributor.url}}">{{contributor.first}} {{contributor.last}} ({{contributor.year}})</a>
{% else%}
{{contributor.first}} {{contributor.last}} ({{contributor.year}})
  {%endif%}
  </span>
  </li>
{%endfor%}

</ul>
In our cover story, "Down on the farm," [Science Communication Master's Program](https://scicom.ucsc.edu/) ("SciCom") alum **Kim Hickok** ('18) reports on how UC Santa Cruz faculty, staff, and students are using ecology and sustainability research to advance equity on campus and beyond. Other stories written by SciCom alums for this issue, edited by **Dave Egerter** ('88), cover scholarship that highlights women filmmakers, imagines more tolerant civilizations, revises societal views toward people living with autism, disputes the racial impetus underlying historical monuments, and celebrates a vibrant immigrant community in nearby Salinas.

The equity thread also runs through other work by students and alums of the highly respected SciCom Program. Last year (2021), for example, **Nicholas St. Fleur** ('14), won the coveted [Evert Clark/Seth Payne Award](https://casw.org/news/nicholas-st-fleur-wins-evert-clark-award/) for young science journalists, given by the Council for the Advancement of Science Writing, for his work at *STAT*, a leading site for health news. Judges praised St. Fleur's stories for covering "fresh ground, particularly on topics around race, medicine, and research." *Science* reporter **Rodrigo Pérez Ortega** ('19) covered how scientists in Latin America and the U.S. have exposed sexual harassment in academia, while Ortega's classmate, **Helen Santoro** ('19), explored how COVID-19 has exacerbated health care disparities, including for transgender people.

SciCom students, led by director **Erika Check Hayden**, also focused on inclusivity in science. The 167 stories published by the class of '22 included pieces on the disproportionate impact of wildfire smoke on racial and ethnic minorities and how COVID-19 more heavily affected schools in predominantly Latino school districts.

Private supporters have joined national foundations to help underwrite the Program's efforts to diversify science journalism. **Barbara Masters** ('84) and her husband, Marc Weiss, established a new Science Communication Fund for Diversity, Equity, and Inclusion. Other key sponsors include David and Dana Loury, parents of **Erin Loury** ('12); **Ellen Chu** ('71); **Ari Remmel** ('20); and former SciCom director **Rob Irion** ('88), who anchored a matching campaign for alumni donors to support an incoming student.

We hope you enjoy reading this year's *inquiry@UC Santa Cruz*.
