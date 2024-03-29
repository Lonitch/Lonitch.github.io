---
layout: post

title: Harmonic Lattice Dynamics (handwriting notes)

date: 2020-07-29

Author: Sizhe

tags: [handwriting, quantum-field-theory]

toc: false

---

## Why the fuss

The harmonic lattice is a topic on my writing plan for quite some time. The Harmonic lattice approximation gives the birth of phonon, the starting point of the second quantization. Unlike my previous blogs, this one only shows some handwriting notes that I made during the past two days. For me, preparing these notes is a joyful journey. I discover new things that advance my understanding of the field theory and old things that I took for granted. Also, to my best knowledge, there is no fool-proof introduction to harmonic lattice dynamics in the context of quantum field theory. Physicists tend to make things over-complicated while skipping details crucial for understanding. Chemists give their full trust to physicists and borrow the derived formulae from solid-state textbooks directly. As an amateur physicist and half-chemist, I went through all the troubles to derive equations that finally lead to quantum field operators step by step. I believe I found a way to explain best the quantization of the harmonic lattice based on introductory quantum mechanics. The ending shows the most relevant results of the quantum field theory of phonons that provide creative tools for studying the condensed matter. A big reason for me to show handwriting this time is those bulky equations in my notes. I wish I can have more time to make new blogs like this because this old-school style challenges my resilience, both emotionally and intellectually. But new things have to wait until I finish my prelim exam.<!--more-->

One last thing, forgive my bad handwriting:).

## Download PDF

You can find the binded PDF file [here](https://drive.google.com/file/d/1brhMocl32VCFaW1SPit3S0N9dLIRM5-5/view?usp=sharing)

## PNG pages (11 pages in total)
<p align="center">
  <img width="578" height="775" src="{{ site.url }}/images/HLD1-min.png">
</p>
<p style="text-align: center;">Page 1</p>

<p align="center">
  <img width="578" height="775" src="{{ site.url }}/images/HLD2-min.png">
</p>
<p style="text-align: center;">Page 2</p>

<p align="center">
  <img width="578" height="775" src="{{ site.url }}/images/HLD3-min.png">
</p>
<p style="text-align: center;">Page 3</p>

<p align="center">
  <img width="578" height="775" src="{{ site.url }}/images/HLD4-min.png">
</p>
<p style="text-align: center;">Page 4</p>

<p align="center">
  <img width="578" height="775" src="{{ site.url }}/images/HLD5-min.png">
</p>
<p style="text-align: center;">Page 5</p>

<p align="center">
  <img width="578" height="775" src="{{ site.url }}/images/HLD6-min.png">
</p>
<p style="text-align: center;">Page 6</p>

<p align="center">
  <img width="578" height="775" src="{{ site.url }}/images/HLD7-min.png">
</p>
<p style="text-align: center;">Page 7</p>

<p align="center">
  <img width="578" height="775" src="{{ site.url }}/images/HLD8-min.png">
</p>
<p style="text-align: center;">Page 8</p>

<p align="center">
  <img width="578" height="775" src="{{ site.url }}/images/HLD9-min.png">
</p>
<p style="text-align: center;">Page 9</p>

<p align="center">
  <img width="578" height="775" src="{{ site.url }}/images/HLD10-min.png">
</p>
<p style="text-align: center;">Page 10</p>

<p align="center">
  <img width="578" height="775" src="{{ site.url }}/images/HLD11-min.png">
</p>
<p style="text-align: center;">Page 11</p>

## Appendix: Several more words on Dynamic Matrix

In the notes we already showed that the dynamic matrix $$\mathcal{D}_{m\alpha,n\beta}(\vec{\boldsymbol{k}})$$ is the Fourier transform of another matrix $$D_{m\alpha,n\beta}(\vec{R}_i-\vec{R}_j)$$, i.e.,

$$
\mathcal{D}_{m\alpha,n\beta}=\sum_{\vec{R}_j}\frac{1}{\sqrt{m_mm_n}}D_{m\alpha,n\beta}(\vec{R}_i-\vec{R}_j)e^{-i\vec{\boldsymbol{k}}\cdot(\vec{R}_i-\vec{R}_j)}.
$$

Because the harmonic lattice energy can be represented using $$D_{m\alpha,n\beta}$$ as,

$$
\Phi^{ham}=\Phi^0+\frac{1}{2} \sum_{im\alpha,jn\beta}D_{m\alpha,n\beta}(\vec{R}_i-\vec{R}_j)u_{im,\alpha}u_{jn,\beta}
$$

the matrix $$D$$ can also be calculated by

$$D_{i m \alpha, j n \beta}=\frac{\partial^{2} \Phi^{ham}}{\partial u_{im, \alpha} \partial u_{jn, \beta}}.\tag{A.1}$$

We can easily calculate elements of matrix $$D$$ using (A.1) if we know the explicit expression of $$\Phi^{ham}$$ in terms of $$u_{im,\alpha}$$.