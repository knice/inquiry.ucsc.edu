---
layout: post
issue: 2018
category: feature
order: 6
title: Detecting human diversity
subhead: "Variation graphs facilitate genomic discovery"
author:
    name: Katharine Miller
    file: "2018/katharine-miller.jpg"
banner:
    file: 2018/detecting-diversity-hero1.jpg
    position: left
related:
    - title: "Paten B, Novak AM, Eizenga JM, Garrison E. Genome graphs and the evolution of genome inference. Genome Res 2017;27:665-76."
      url: https://genome.cshlp.org/content/27/5/665
    - title: "Novak AM, Hickey G, Garrison E, Blum S, et al. Genome graphs. bioRxiv 2017."
      url: https://doi.org/10.1101/101378
    - title: "Garrison E, Sirén J, Novak AM, Hickey G, et al. Sequence variation aware genome references and read mapping with the variation graph toolkit. bioRxiv 2017."
      url: https://doi.org/10.1101/234856
    
---
{% include_relative sidebars/2018-detecting-human-diversity-hero-caption.html classes="right" bgcolor="#f1f1f1" %}
After the first human [genome](https://ghr.nlm.nih.gov/primer/hgp/genome) was successfully sequenced in 2003, researchers established it as *the* reference genome. It became the singular, highest-quality, most well-understood, standardized genome against which all other human genomes would be mapped and compared for the foreseeable future.

It turns out this commitment to a single reference genome has a big downside. Called reference bias or mapping bias, it can cause potentially important observations to be misinterpreted or rejected when they don’t fit the expected pattern. “With the existing reference genome,” said [**Benedict Paten**](https://www.soe.ucsc.edu/people/benedict), UC Santa Cruz assistant professor of biomolecular engineering, “it’s easier to find variants that are in the reference genome than ones that aren’t.”

The problem is particularly acute for [structural variations in the genome](https://en.wikipedia.org/wiki/Human_Genome_Structural_Variation)—long stretches of DNA that differ from the reference in various ways, including changes known as insertions, deletions, inversions, and translocations. When these interesting and potentially important variants exist in a new sample that is being mapped against the reference, they might not be seen at all. As a consequence, the new sample is deemed more similar to the reference than it actually is. The failure to find important variants can have consequential downstream implications for patients if a missed variant is the cause of a genetic disorder or plays a key role in a patient’s cancer. And as the pace of sequencing-based genomic research continues to increase, so too have the potential impacts of reference bias.

To address this critical and growing concern, Paten and colleagues at UCSC and the [Sanger Institute](http://www.sanger.ac.uk/) set out to build a set of technologies for replacing the existing reference genome with a more comprehensive foundational structure. “The natural thing is to have a graph that includes all the known [gene variants](https://en.wikipedia.org/wiki/Allele),” Paten said. And though the idea of replacing the linear reference genome with a graph might sound simple, he said, “we’ve had to solve some pretty tricky computer science problems to make this work.”

Having a great solution doesn’t mean it will be used, especially given the deep entrenchment of the single reference genome in the field. Nevertheless, even members of the [Genome Reference Consortium](https://www.ncbi.nlm.nih.gov/grc) who’ve spent their careers maintaining and [improving upon the linear reference](http://genome.wustl.edu/projects/detail/reference-genomes-improvement/) agree that genome variation graphs make sense. “The representation of variation in the human population is a type of data that fits very neatly into and is well-represented by a graph model,” said [Valerie Schneider](https://mendelspod.com/podcasts/improving-backbone-clinical-genomics-valerie-schneider-ncbi/), program head for sequence displays and tools at the NIH’s [National Center for Biotechnology Information](https://www.ncbi.nlm.nih.gov/home/about/) (NCBI) and team lead for the NCBI’s involvement in the Genome Reference Consortium. “Benedict is at the leading edge of where this is going.”

[Tina Graves-Lindsay](http://genome.wustl.edu/people/individual/tina-graves-lindsay/), leader of the reference genomes group at Washington University’s [McDonnell Genome Institute](http://genome.wustl.edu/) in St. Louis, agreed, “When we get to the point where they’re ready to be used, genome graphs are the future representation.”

## Genomic fake news ##
{% include_relative sidebars/2018-genomic-graph-visualizations.html classes="left" bgcolor="#c6d1e5" %}
Understanding the source of reference bias requires at least a passing understanding of how sequencing technology works. The most common approach to genome sequencing today relies on repeated sequencing of short stretches of DNA—typically 100–600 base pairs (the A, C, T, and G [nucleotides](https://en.wikipedia.org/wiki/Nucleotide) that make up DNA). Researchers generally try to get 10x to 30x coverage of every portion of a genome using these short “reads.” They must then piece these together to create a contiguous model of a person’s genome, a task accomplished by mapping the short reads against the latest generation of the very first genome ever sequenced—the human reference genome, now in its 20th iteration ([*GRCh38*](https://www.ncbi.nlm.nih.gov/grc/human)). During this genome assembly task, the reads are scored relative to how well they match the reference. “The more similar a read is to the reference genome, the higher probability that the mapping will be deemed correct,” Paten said. As a result, reads that diverge from the reference may map incorrectly or fail to map altogether.

For example, if a researcher tries to map 100–600 base-pair short reads from an individual who has a 10,000 base-pair insertion that isn’t represented in the reference, this structural variant gets a poor matching score. Essentially, there is no place to map those reads against the reference, and the insertion is ignored.

It’s also true that no single reference can truly represent the genetic diversity present in a worldwide population full of varied and interesting ethnic groups. Curiously, the human reference genome used today does not even represent the set of genes from a specific human being. This mosaic model of a single set of unpaired chromosomes gets 70% of its 3-billion base-pair DNA sequence from a single male of mixed African and European ancestry, and the remaining 30% from an assortment of more than 50 individuals. “The idea at the time was that a linear reference derived from many individuals would be a good way to capture diversity,” said NCBI’s Schneider.

We now know that humans are more genetically diverse than expected. Today, geneticists estimate that the average person’s genome differs from the reference by about 3.6 million base-pair changes, called “SNPs” (pronounced “snips”) or [single-nucleotide polymorphisms](https://ghr.nlm.nih.gov/primer/genomicresearch/snp). In addition, each human genome contains about 2500 structural variations that aren’t included in the reference—variations that affect about 8.9 million bases per person. The human genome variation graphs developed by Paten and collaborators capture and display all this diversity in one visualization.

## Graphing genomes ##

To imagine a genome variation graph, picture the 3-billion base-pair linear reference genome itself as a single path through a graph with an incredibly long horizontal axis. Next, imagine many other paths converging with the reference for stretches where their sequences are identical, but diverging at other points before converging again. One divergence might be a bubble that represents a single nucleotide change; another might be an inserted sequence or even an inverted stretch of DNA that can be conceptualized as a loop-de-loop that leaves the path and rejoins it. There can also be bubbles within bubbles or loops that have additional divergences internally. Any observed variant can be accounted for in the graph representation. “The graph captures information about what we’d expect a human to look like in a computationally practical manner,” Paten said, “so that when we get a new sample we can infer things that are correct.”

Ultimately, the linear reference genome will be just one path through a graph that contains many possible paths. Any other [haplotype](https://en.wikipedia.org/wiki/Haplotype) (the set of [alleles](https://en.wikipedia.org/wiki/Allele)—gene variants—a person inherits from each parent) could be represented as a path as well. While that might sound like a simple concept, it presented a challenge for Paten’s team: how to encode a population’s haplotypes through a graph in a way that would be small, compact, and searchable on a computer? “We found a really beautiful solution to that,” Paten said, which involves weighting different paths according to their prevalence in the population. “If I trace a path through a graph that might correspond to a haplotype, it’s actually very useful, from a genetics point of view, to be able to ask, ‘What’s the probability of that path given what we know about the population?’” Paten said.

The team also had to establish a novel coordinate system for the human genome variation graph. “When you live in the topsy-turvy world of graphs, it isn’t initially that clear how you represent alleles and sites,” Paten said. The coordinate system for the linear reference genome is straightforward. Each chromosome begins at a point A and ends at a point B with defined locations all along the way. To define the unambiguous position of an allele in a genome graph (as well as what its alternatives are) and do it in a way that works for all forms of variation, “took some really hard thinking,” Paten said. But it is a problem his team has now solved by developing a mathematical model that represents an allele’s coordinates relative to its neighbors.

“The graph is a way to organize a population’s genomic information together so that we can answer questions in an efficient manner,” Paten said. Given a new sample, it should be easier to find the variants it shares with the population because they are already contained in the graph. And finding new variants should also be easier because the graph allows researchers to make better inferences about what’s possible or probable.

Paten’s human genome variation map currently contains data from a 2500-person cohort. To these he plans to add additional variant information from 150,000 individuals. But the 2500-person graph can already do almost as good a job as the linear reference genome at finding small genome variants (e.g., SNPs) in a new sample, and a far better job of finding structural variations, particularly if these involve long stretches of DNA, Paten said.

## Transition tools ##

As previously mentioned, in the field of genomics where large data sets that rely on the linear reference already exist, changing the foundational structure for genome mapping won’t happen overnight. Even uptake of formal updates to the linear reference is slow. *GRCh38*, the current iteration of the standardized reference genome, was released more than four years ago, yet many projects are still using *GRCh37*, Paten said. “It takes that long to accomplish all the things you have to do to switch from one to another—it’s an enormous headache.”

Paten predicts the shift to the genome graph will be even slower and may also proceed in an uneven way. During the transition, it’s likely that researchers will use the graph and then project their findings back onto the reference genome, he said. “This should provide a compatibility layer for a good while.” Indeed, he said, the graph may never fully replace the reference genome, “but that’s just fine because it’s just a set of paths in our graph.”

The shift to genome graphs also faces major technical hurdles. All of the tools for genome mapping and variant analysis are built around alignments to one linear reference. “When you introduce these new models, such as graphs, you need a robust tool suite that can take advantage of the additional information,” Schneider said.

To that end, Paten’s team has created a software toolkit called “vg” (short for variation graph). Publicly available on [GitHub](https://github.com/about), [vg](https://github.com/vgteam/vg#vg) is already the most popular software of its kind, Paten said. “Several hundred people have started trying to use it. That’s not big, but it’s promising.” Paten also plans to release probability-weighted paths for the current map’s 2500 human genomes in the next year.

Eventually, Paten hopes there will be consensus around the human genome variation graph just as there is now consensus around the linear reference genome. The graph model offers an intuitive way for computers to infer the next genome, he said. “It’s a much better basis for making inferences in human genomics.” And that could ultimately power much more precise precision medicine.