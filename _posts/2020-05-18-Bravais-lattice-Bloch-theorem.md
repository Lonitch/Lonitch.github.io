---

layout: post

title: Reciprocal Lattice and Bloch's Theorem

date: 2020-05-18

Author: Sizhe

tags: [condensed-matter-physics, physics-basics, polaron]

toc: true

---

## Background

I've been reading stuff for quite some time, now it's the time to dive into some real-world problems. One of my current research interests is the many-body effects to conductivity properties of electroactive materials, like the electrode materials used in rechargeable battery and Faradaic desalination cell. More specifically, recent studies proved that the dynamics of polarons, a quasi-particle made of a bare electron dressed by its interactions with positive charges and phonons, could be used to explain variation of electronic conductivity in various materials[[1]](#1). To study many-body effects in periodic potential environment (i.e., crystal lattice), I will prepare blog articles to refresh and develop a solid understanding of condensed state physics first, then review related concepts/methods from quantum field theory (QFT), and finally hit the details of polaron dynamics. This article is the first step of my possibly long journey to fully understand the polarons.

As an outsider of physics research community, my goal of writing blogs is to make things crystal clear mathematically and physically intuitive. Comments and corrections are equally welcomed.

## Bravais Lattice One More Time
First thing is first, Bravais lattice is not crystal lattice. Crystal lattice is atomic base superimposed on one specific kind of Bravais lattice. In other words, Bravais lattice is the bone of crystal lattice while atomic base is the flesh. As a part of material science or physics crriculum, students must've learned how to represent points in Bravais lattice, $\mathbf{R}$, using base vectors $\mathbf{a}_i$:
$$
\mathbf{R}=\{\mathbf{R}|\mathbf{R}=n_1\mathbf{a}_1+n_2\mathbf{a}_2+n_3\mathbf{a}_3;n_i\in\mathbb{Z}\}\tag{1}
$$
The primitive cell of a Bravais lattice is the basic volume that encloses single point of the lattice. We can reproduce the whole lattice by duplicating the primitive cell along the directions of three base vectors without overlapping the cells. When an atomic base is used to describe crystal, the real atoms are occupying the positions that are usually off the point in the primitive cell. Thus, we need another set of vector, ${\mathbf{r}_i}$, to represent locations of real atoms. Because $\mathbf{r}_i$ is defined within the primitive cell $\mathcal{B}$ some people call such vector as "relative coordinates". Thus, the coordinate of atom "X" in a crystal lattice, $\mathbf{X}$, is:
$$
\mathbf{X}=\mathbf{R}+\mathbf{r}_i
$$
From here, the mass distribution of the lattice is given by:
$$
\rho(\mathbf{X})=\sum_{\mathbf{R}\in\mathcal{BL}}\sum_{\mathbf{r}\in\mathcal{B}}m_i\delta(\mathbf{X}-\mathbf{R}-\mathbf{r}_i)
$$
where $m_i$ is the mass of ith atom. In a perfect crystal lattice where defects and impurity are negligible, the mass distribution is a periodic function, i.e.:
$$
\rho(\mathbf{X})=\rho(\mathbf{X+R})
$$

## Reciprocal Lattice: Starting from Fourier Expansion
Let $f(\mathbf{X})$ be a function exhibiting the same periodicity as a Bravais lattice, i.e.
$$
f(\mathbf{X})=f(\mathbf{X+R}).
$$
The Fourier expansion of $f(X)$ is:
$$f(\mathbf{X})=\sum_Qf(\mathbf{Q})e^{i\mathbf{Q}\cdot\mathbf{X}}=\sum_{\mathbf{Q}}f(\mathbf{Q})e^{i\mathbf{Q}\cdot(\mathbf{X+R})}
\tag{2}
$$
Eqn.(2) indicates that
$$
e^{i\mathbf{k}\cdot\mathbf{R}}=1\rightarrow\mathbf{k}\cdot\mathbf{R}=2\pi n
\tag{3}
$$
where $n\in\mathbb{Z}$. To solve for $\mathbf{k}$ we first define vectors $\mathbf{b}_i$ that is related to Bravais base vectors $a_i$ by
$$
\mathbf{a}_i\mathbf{b}_j=2\pi\delta_{ij}
\tag{4}
$$
If we let
$$
\mathbf{k}=\sum_j l_j\mathbf{b}_j,\quad l_j\in\mathbb{Z}\tag{5}
$$
substitute (5) into (3) and use (1),(4) we find
$$
\mathbf{k\cdot R}=\sum_i2\pi (n_i l_i)
$$
Because $(n_i l_i)$ are definitely integers, we just proved the definition in (5) satisifies (3). The lattice $\mathbf{Q}$ defined by base vectors $\mathbf{b}_i$ is the "**reciprocal lattice**":
$$
\tag{6}\{\mathbf{Q}|\mathbf{Q}=\sum_in_i\mathbf{b}_i;n_i\in\mathbb{Z}\}
$$
The volume of the primitive cell is $V_0=\mathbf{a_1\cdot(a_2\times a_3)}$, from this and (4) we have
$$
\mathbf{b}_1=\frac{2\pi}{V_0}(\mathbf{a_2\times a_3})\tag{7}
$$
One of the most profound properties of reciprocal lattice is that **the symmetry of reciprocal lattice is identical to that of Bravais lattice except that Bravais lattice vector $\mathbf{R}$ is replaced with reciprocal lattice vecotor $\mathbf{Q}$**. This fact has deep consequences, as we shall see. For instance,we Fourier transform the periodic function $f(\mathbf{r})$ as:
$$
\begin{align}
f(\mathbf{Q})&=\int_{V}d\mathbf{r}f(\mathbf{r})e^{-i\mathbf{Q}\cdot\mathbf{r}}\\
&=\int_{V}d\mathbf{r}f(\mathbf{r+R})e^{-i\mathbf{Q}\cdot\mathbf{r}}\\
&=\sum_{\mathbf{R}}\int_{V_0}d\mathbf{r}f(\mathbf{r+R})e^{-i\mathbf{Q}\cdot\mathbf{r}}
\end{align}\tag{8}
$$
Now we let $\mathbf{r}^{\prime}=\mathbf{r+R}$ and give:
$$
f(\mathbf{Q})=\sum_{\mathbf{R}}e^{i\mathbf{Q}\cdot\mathbf{R}}\int_{V_0}d\mathbf{r}^{\prime}f(\mathbf{r}^{\prime})e^{-i\mathbf{Q}\cdot\mathbf{r}^{\prime}}=N\int_{V_0}d\mathbf{r}f(\mathbf{r})e^{-i\mathbf{Q}\cdot\mathbf{r}}
\tag{10}
$$
where in second step we used a famous theorem:
$$\frac{1}{V}\sum_ke^{i\mathbf{r\cdot k}}=\delta(\mathbf{r})\tag{11}$$
and **$N$ is the number of points in Bravais lattice**.
## Bloch's Theorem

## References

<a id="1">[1]</a> Sio, Weng Hong, et al. "Ab initio theory of polarons: Formalism and applications." Physical Review B 99.23 (2019): 235139.
