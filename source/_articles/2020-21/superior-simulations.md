---
layout: post
issue: "2020"
category: feature
order: 11
title: Superior simulations
subhead: "Mathematical quest seeks to embrace uncertainty"
author:
  name: Dana Mackenzie
  file: "2020/dana-mackenzie.jpg"
  url: 
banner:
  file: 
  position: left
further-inquiry:
    - title: "Prof. Venturi addresses a long-standing open problem in computational mathematics. An attempt to explain Venturi's work in lay terms."
      url: https://www.soe.ucsc.edu/news/prof-venturi-addresses-long-standing-open-problem-computational-mathematics
    - title: "D. Venturi, The Numerical Approximation of Nonlinear Functionals and Functional Differential Equations. <em>Physics Reports</em> 732, 18 February 2018, 1-102. With 100 pages of extremely dense mathematics, this is Venturi's <em>magnum opus</em>. It's not for the faint-hearted, but it cites many examples of functional differential equations and explains some of Venturi's numerical methods."
      url: https://doi.org/10.1016/j.physrep.2017.12.003
    - title: "W. E, J. Han, Q. Li. [A Mean-Field Optimal Control Formulation of Deep Learning. Research in the Mathematical Sciences 6, article 10 (2019). Presents Weinan E's approach to deep neural networks using a functional differential equation of the Hamilton-Jacobi-Bellman type."
      url: https://doi.org/10.1007/s40687-018-0172-y
    - title: >
          W. E, C. Ma, L. Wu. Machine Learning from a Continuous Viewpoint. arXiv:1912.12777v1 [math.NA] 30 Dec 2019. Note particularly the "Discussion" section of this preprint, which explains E's view of neural networks as a discrete realization of a continuous flow in an infinite-dimensional space [PDF]
      url: https://arxiv.org/pdf/1912.12777.pdf
    
---

*Does this mean that physics, a science of great exactitude, has been
reduced to calculating only the probability of an event, and not
predicting exactly what will happen? Yes. That\'s a retreat, but that\'s
the way it is: Nature permits us to calculate only probabilities. Yet
science has not collapsed.*

---Richard Feynman, [*QED: The Strange Theory of Light and
Matter*](https://press.princeton.edu/books/paperback/9780691164090/qed)
<figure class="left" style="width:300px;">
  {% asset 2020/multiple-globes.jpg @magick:resize=300 alt:'Weighing fish' %}<figcaption>This image depicts the sample-then-propagate method for weather forecasting. Shown here are a subset of 50 slightly different estimates for the current weather conditions that have been propagated forward in time, creating 50 considerably different forecasts a few days later. Credit: ©European Centre for Medium-Range Weather Forecasts (CC BY-SA
4.0).</figcaption>
</figure>
"Propagating uncertainty" sounds, for a scientist, like a not very good
idea. Isn't science supposed to reduce uncertainty, or eliminate it
entirely? That's not what UC Santa Cruz associate professor of applied
mathematics [**Daniele
Venturi**](https://www.soe.ucsc.edu/people/venturi) thinks.
He agrees with Nobel Prize--winning physicist [Richard
Feynman](https://www.nobelprize.org/prizes/physics/1965/feynman/biographical/):
scientists often need to accept uncertainty. But, he asks, is there a
good mathematical way to propagate uncertainty---or, in math terms, to
"transport a probability distribution"---from one place (or time) to
another? If so, such math could potentially be applied, for example, to
create more robust and useful models of complex natural phenomena.

Take the weather, for instance. Small uncertainties in today's
weather---say, whether the temperature in Peoria at 2 pm was 78 degrees
or 79 degrees---can become larger uncertainties tomorrow or a week from
now. But computer weather models do a poor job of reproducing this
effect. That's because they use a legacy mathematical tool, called
differential equations (in particular, the [Navier-Stokes
equations](https://en.wikipedia.org/wiki/Navier-Stokes_equations)),
that was designed to represent systems without including uncertainty.

Weather forecasters know this, and they have a kludgy work-around. "They
sample the weather in five or ten initial conditions and push each
through the equations," Venturi said. "Based on the outcome, they might
say there is a 30 percent chance of rain. That just means that three
simulations out of ten produced rain."
<figure class="" style="width:600px;">
  {% asset 2020/simulation-1aR.jpg @magick:resize=600 alt:'Globes' %}<figcaption>In the current &quot;sample-then-propagate&quot; approach to simulating natural
phenomena, such as the weather, an initially uncertain measurement is
taken. Several initial conditions are randomly chosen within the range
of uncertainty, then propagated through a deterministic differential
equation. These are assumed to provide a representative sample of the
final state, up to uncertainty (blue region). Venturi&#39;s work aims to
compute the blue region directly, using a non-deterministic &quot;functional
differential equation.&quot; Credit: Adapted from <a href="https://www.metoffice.gov.uk/research/weather/ensemble-forecasting/what-is-an-ensemble-forecast">Met Office, United
Kingdom</a>
(public domain).
</figcaption>
</figure>
We could call this approach "sample-then-propagate." It's a necessary
kludge because differential equations can only transport points to
points. If you give them the fog of a probability distribution as input,
they don't know what to do. Sample-then-propagate gives us pretty good
weather forecasts. But it's awkward and inefficient, and it does not
deliver a representation with any guarantee of accuracy.

Ever since he was an undergraduate at the University of Bologna in
Italy, Venturi has dreamed of building a tool that can actually solve
the problem the right way: by transporting the fog of uncertainty from
place to place or from time to time. He calls his method ["[functional
differential
equations"](https://en.wikipedia.org/wiki/Functional_differential_equation)
(FDE). But we can call it "propagate-then-sample."
<figure class="" style="width:600px;">
  {% asset 2020/simulation2.jpg @magick:resize=600 alt:'Neural network' %}<figcaption>In a deep neural network for image recognition the purple input layer
collects the raw pixel data. The yellow output layer gives the
computer&#39;s guess on whether the image is a dog or a cat. The strength of
the connections between hidden layers are indicated by the widths of the
lines. These strengths, or &quot;weights,&quot; are tuned in a way that maximizes
the frequency of correct guesses. Credit: <a href="https://www.ece.cornell.edu/faculty-directory/ziv-goldfeld">Ziv
Goldfeld</a>,
with permission.</figcaption>
</figure>
For math nerds, there is one difference between FDE and ordinary DE that is almost a showstopper. Ordinary DE involve finitely many variables, the dimensions of space and time that points move around in. But probability distributions live in an infinite-dimensional space because
you can vary them in infinitely many different ways. "When I tell my
colleagues I work on differential equations with infinitely many
variables, they say, 'Are you crazy?'" Venturi said. "That's the biggest
compliment I could get. It means it's something interesting."

Venturi traces the origins of FDE to [Eberhard
Hopf](https://en.wikipedia.org/wiki/Eberhard_Hopf) of
Indiana University, who first used them in a [theory of
turbulence](https://www.jstor.org/stable/24900259) that
dates from 1952. Russian mathematicians [Andrei
Monin](https://en.wikipedia.org/wiki/Andrei_Monin) and
[Akiva Yaglom](https://en.wikipedia.org/wiki/Akiva_Yaglom)
revived them in 1971, calling Hopf's equation "the most compact
formulation of the general turbulence problem." Functional differential
equations were a perfect fit for studying turbulence because turbulent
fluid flow cannot be predicted with certainty. Recently, though, FDEs
are beginning to appear in disciplines not related to fluids.

One surprising new example arises in machine learning. In recent years,
deep neural networks---"deep" refers to a great number of layers---have
had good success in realms like image recognition and [computer chess
and
go](http://sciencemag.org/news/2016/03/update-why-week-s-man-versus-machine-go-match-doesn-t-matter-and-what-does).
These networks loosely imitate the human brain, in which one layer of
neurons might recognize individual pixels, while a deeper one pieces the
pixels into curves, the next organizes them into trunk, limbs, and head,
and the deepest layer finally recognizes the animal as a cat.

These complex constructs occupy the attention of mathematicians [Weinan
E](https://web.math.princeton.edu/~weinan) and [Jiequn
Han](https://web.math.princeton.edu/~jiequnh) at Princeton
University, whose work explores the theoretical concept of a [neural
network with infinitely many
layers](http://arxiv.org/pdf/1912.12777.pdf). Such a
network has to learn from essentially random input: a training set of
images, some of which contain cats while others do not. It then needs to
propagate uncertainty through all the layers of the network to obtain a
classifier with (hopefully) the smallest amount of uncertainty possible.
If this sounds to you like a problem made for FDE, you've passed the
test.

That FDE is called a Hamilton-Jacobi-Bellman equation, and its solution
is an operator that allows you to compute the weights---the strength of
connections between layers---from any input. "It's the core of how you
train a neural network," Venturi said.

Han said the advantage of "considering the problem in an
infinite-dimensional space" is that it explains what neural networks are
and why they work. They are discrete versions of a continuous,
infinite-dimensional tool for propagating uncertainty. And, provided
they are good approximations of such a hypothetical tool, they work
well.

Venturi devotes a lot of effort to finding good discrete approximations
to the solutions of FDE, in other words the second part of
"propagate-then-sample." In practice, this means solving some very
high-dimensional (but not infinite) ordinary DE. It's no longer "crazy,"
but conventional, hard mathematics. "You need to know the state of the
art really well to see if it is sufficient to achieve the goal you set
at the beginning," Venturi said. "The current state is insufficient. I
don't claim any victory, but what I do claim is a heroic attempt. The
winner will be whoever is first able to compute the solutions well."
