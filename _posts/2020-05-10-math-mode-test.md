---
layout: post
title: $LaTex$ test
date: 2020-05-10
Author: Sizhe
tags: [tests, daily]
---

Use `$$` to start a math mode block while use `$` for inline equation insertion. The first paragraph is selected as abstract of each post. We avoid using equations in abstracts, and use `<!-- more -->` to separate main contents from abstract.

<!-- more -->

Block math test

$$
\begin{aligned}
G^{+}(\mathbf{k}, t) &=-i \theta_{t} \sum_{n}\left\langle\Psi_{0}^{N}\left|e^{i H t} c_{k}\right| \Psi_{n}^{N+1}\right\rangle\left\langle\Psi_{n}^{N+1}\left|e^{-i H t} c_{k}^{\dagger}\right| \Psi_{0}^{N}\right\rangle \\
&=-i \theta_{t} \sum_{n}\left|\left\langle\Psi_{n}^{N+1}\left|c^{\dagger}_{k}\right| \Psi_{0}^{N}\right\rangle\right|^{2} e^{-i\left(E_{n}^{N+1}-E_{0}^{N}\right) t} \\
&=-i \theta_{t} \sum_{n}\left|\left(c_{k}^{\dagger}\right)_{n 0}\right|^{2} e^{-i\left(E_{n}^{N+1}-E_{0}^{N}\right) t}
\end{aligned}
$$

Inline math test

This function is defined only for $\omega\geq0$ because $\omega_{n0}\geq0$. 

> It gives the probability that the state $|\Psi_0^N\rangle$ with an added particle in state $k$
is an exact eigenstate of the $N+1$-particle system with energy between $\omega$ and $\omega+d\omega$.
