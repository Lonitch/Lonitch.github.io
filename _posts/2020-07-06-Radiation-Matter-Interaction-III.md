---
layout: post

title: A Pedastrian Approach to Radiation-Matter Interaction-Part III

date: 2020-07-12

Author: Sizhe

tags: [basics, quantum-field-theory]

toc: true

---

## TL;DR

This blog summarizes the quantized systems introduced in the previous two parts and uses them in the context of radiation-matter interaction.<!--more-->

## Bird's view
We will start with the derivation of the Hamiltonian for a system composed of EM field and free particles. The resulted Hamiltonian will be devided into three parts that describe particles' energy, EM field energy/radiation energy, and the interaction energy. We then use the Hamiltonian to discuss the examples of light emission from an excited atom, lifetime of excited states, adsorption of photons, photon scattering from free electrons, and some special topics.

## Hamiltonian of The EM Field+Paticles System
The system we are interested in here is composed of matters and EM fields, or photons. Usually we would like to think the matter is built up by particles with various masses $$m_i$$ and charges $$e_i$$. The interactions of these particles are always treated in a form of $$V(\ldots,\mathbf{x}_i,\ldots)$$. The Coulombic interaction is one example of such interaction,

$$V_{\text {Coulomb }}\left(\ldots, \boldsymbol{x}_{i}, \ldots, \boldsymbol{x}_{j}, \ldots\right)=\frac{1}{2} \sum_{i, j \atop i \neq j} \frac{e_{i} e_{j}}{\left|\boldsymbol{x}_{i}-\boldsymbol{x}_{j}\right|}\tag{1.1}.$$

Based on the discussions laid out in Part I and II, the Hamiltonian operator for our matter-radiation system can be written as

$$\begin{aligned}
\hat{H}=& \sum_{i} \frac{\left(\hat{\boldsymbol{p}}_{i}-\frac{e_{1}}{c} \hat{\boldsymbol{A}}\left(\boldsymbol{x}_{i}\right)\right)\left(\hat{\boldsymbol{p}}_{i}-\frac{\epsilon_{i}}{c} \hat{\boldsymbol{A}}\left(\boldsymbol{x}_{i}\right)\right)}{2 m_{i}}+V \\
&+\int \frac{\hat{\boldsymbol{E}} \cdot \hat{\boldsymbol{E}}^{\dagger}+\hat{\boldsymbol{B}} \cdot \hat{\boldsymbol{B}}^{\dagger}}{8 \pi} \mathrm{d}^{3} x \\
=& \hat{H}_{\mathrm{mp}}+\hat{H}_{\mathrm{rad}}+\hat{H}_{\mathrm{int}},
\end{aligned}\tag{1.2}$$

where

$$\hat{H}_{\mathrm{mp}}=\sum_{i} \frac{\hat{\boldsymbol{p}}_{i}^{2}}{2 m_{i}}+V\tag{1.3},$$

and the "mp" stands for "many particles". The interaction Hamiltonian is then

$$\hat{H}_{\mathrm{int}}=\sum_{i}\left[-\frac{e_{i}}{m_{i} c} \hat{\mathbf{p}}_{i} \cdot \hat{\mathbf{A}}\left(x_{i}\right)+\frac{e_{i}^{2}}{2 m_{i} c^{2}} \hat{\mathbf{A}}^{2}\left(x_{i}\right)\right]\tag{1.4}.$$

where we use the Coulomb gauge $$\nabla\cdot\mathbf{A}=0$$ and **Ehrenfest Theorem**

$$\begin{array}{l}
{\left[x_{i}, F(\mathbf{x}, \mathbf{p})\right]=\mathrm{i} \hbar \frac{\partial F}{\partial p_{i}}} \\
{\left[p_{i}, G(\mathbf{x}, \mathbf{p})\right]=-\mathrm{i} \hbar \frac{\partial G}{\partial x_{i}}}
\end{array}\tag{1.5}$$

to give $$\hat{\boldsymbol{p}} \cdot \boldsymbol{A}+\boldsymbol{A} \cdot \hat{\boldsymbol{p}} = 2 \hat{\boldsymbol{p}} \cdot \boldsymbol{A}$$.

If we only focus on a single particle then (1.5) becomes

$$\hat{H}_{\mathrm{int}}=-\frac{e}{m c} \hat{\boldsymbol{p}} \cdot \hat{\boldsymbol{A}}(\boldsymbol{x})+\frac{e^{2}}{2 m c^{2}} \hat{\boldsymbol{A}}^{2}(\boldsymbol{x})=\hat{H}^{\prime}_{int}+\hat{H}^{\prime\prime}_{int},$$

where

$$\hat{H}_{\mathrm{int}}^{\prime}=-\frac{e}{m c} \sum_{k, \sigma} \sqrt{\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}} \hat{p} \cdot \boldsymbol{\varepsilon}_{k \sigma}\left(\hat{a}_{k \sigma} \mathrm{e}^{\mathrm{i} k \cdot x}+\hat{a}_{k \sigma}^{\dagger} \mathrm{e}^{-\mathrm{i} k \cdot x}\right)\tag{1.6}$$

and

$$\begin{aligned}
\hat{H}_{\mathrm{int}}^{\prime \prime}=& \frac{e^{2}}{2 m c^{2}} \sum_{\boldsymbol{k} \sigma} \sum_{\boldsymbol{k}^{\prime} \sigma^{\prime}}\left(\frac{2 \pi \hbar c^{2}}{L^{3}}\right) \frac{\boldsymbol{\varepsilon}_{\boldsymbol{k} \sigma} \cdot \boldsymbol{\varepsilon}_{\boldsymbol{k}^{\prime} \sigma^{\prime}}}{\left(\omega_{k} \omega_{k^{\prime}}\right)^{\frac{1}{2}}} \\
& \times\left(\hat{a}_{\boldsymbol{k} \sigma} \hat{a}_{\boldsymbol{k}^{\prime} \sigma^{\prime}} \mathrm{e}^{\mathrm{i}\left(\boldsymbol{k}+\boldsymbol{k}^{\prime}\right) \cdot \boldsymbol{x}}+\hat{a}_{\boldsymbol{k} \sigma} \hat{a}_{\boldsymbol{k}^{\prime} \sigma^{\prime}}^{\dagger} \mathrm{e}^{\mathrm{i}\left(k-\boldsymbol{k}^{\prime}\right) \cdot \boldsymbol{x}}\right.\\
&\left.+\hat{a}_{\boldsymbol{k} \sigma}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime} \sigma^{\prime}} \mathrm{e}^{\mathrm{i}\left(-\boldsymbol{k}+\boldsymbol{k}^{\prime}\right) \cdot \boldsymbol{x}}+\hat{a}_{\boldsymbol{k} \sigma}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime} \sigma^{\prime}}^{\dagger} \mathrm{e}^{\mathrm{i}\left(-\boldsymbol{k}-\boldsymbol{k}^{\prime}\right) \cdot \boldsymbol{x}}\right).
\end{aligned}\tag{1.7}$$

The interaction energy usually only makes a very small portion of the total energy, so we can treat (1.6) and (1.7) as perturbations. And the undistorbed Hamiltonian, $$\hat{H}_{mp}+\hat{H}_{rad}$$ has the state vectors to be

$$|m p+r a d\rangle=|m p\rangle\left|\ldots n_{k \sigma} \ldots\right\rangle_{\mathrm{rad}}\tag{1.8}.$$

Several points are worth mentioning regarding $$\hat{H}_{int}$$ before we proceed to next section. Because we only have one creation/annhilation in each term of eqn.(1.6), then we conclude that $$\hat{H}_{int}^{\prime}$$ introduces single photon transition. On the other hand, $$\hat{H}_{int}^{\prime\prime}$$ introduces transtions that involve two photons. 

## Emission of Light From An Excited Atom

In this section we study the transition from an initial particle state, $$\mid a_i\rangle$$, to a final particle state, $$\mid a_f\rangle$$ by emitting a photon. The the initial and final states for the photon-particle system are then

$$\begin{array}{l}
\mid i\rangle=\left|a_{i}\right\rangle\left|\ldots, n_{k \sigma}, \ldots\right\rangle \\
\mid f\rangle=\left|a_{f}\right\rangle\left|\ldots, n_{k \sigma}+1, \ldots\right\rangle
\end{array}\tag{2.1}.$$

The corresponding energy levels  follow the relation of $$E_i>E_f$$. In Part I we developed Fermi's golden rule based on perturbation theory, which states that the probability of $$i\rightarrow f$$ transition per unit time is given by

$$\begin{aligned}
\left(\frac{\text { trans. prob. }}{\text { time }}\right)=& \frac{2 \pi}{\hbar}\left|M_{\mathrm{fi}}\right|^{2} \delta\left(E_{\mathrm{f}}-E_{\mathrm{i}}\right) \\
M_{\mathrm{fi}}=&\left\langle f\left|\hat{H}^{\prime}\right| i\right\rangle+\sum_{I} \frac{\left\langle f\left|\hat{H}^{\prime}\right| I\right\rangle\left\langle I\left|\hat{H}^{\prime}\right| i\right\rangle}{E_{\mathrm{i}}-E_{\mathrm{I}}+i \eta} \\
&+\sum_{I, I I} \frac{\left\langle f\left|\hat{H}^{\prime}\right| I\right\rangle\left\langle I\left|\hat{H}^{\prime}\right| I I\right\rangle\left\langle I I\left|\hat{H}^{\prime}\right| i\right\rangle}{\left(E_{\mathrm{i}}-E_{\mathrm{I}}+i \eta\right)\left(E_{\mathrm{i}}-E_{\mathrm{II}}+i \eta\right)}+\ldots
\end{aligned}\tag{2.2}$$

where $$\hat{H}^{\prime}$$ is the perturbation Hamiltonian, and $$I/II$$ are complete sets of states. The terms other than the first term of $$M_{fi}$$ are called higher-order transition rate. But here we only consider the fist-order perturbation caused by $$\hat{H}^{\prime}_{int}$$, i.e.

$$\begin{aligned}
\left\langle f\left|\hat{H}_{\mathrm{int}}^{\prime}\right| i\right\rangle & \\
=&\left\langle a_{f}\left|\left\langle\ldots, n_{k \sigma}+1, \ldots\right|\right.\right.\\
&\left.\left[-\frac{e}{m c} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} \sqrt{\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k^{\prime}}}} \hat{\boldsymbol{p}} \cdot \boldsymbol{\varepsilon}_{\boldsymbol{k}^{\prime} \sigma^{\prime}}\left(\hat{a}_{\boldsymbol{k}^{\prime} \sigma^{\prime}} \mathrm{e}^{\mathrm{i} \boldsymbol{k}^{\prime} \cdot \boldsymbol{x}}+\hat{a}_{\boldsymbol{k}^{\prime} \sigma^{\prime}}^{\dagger} \mathrm{e}^{-\mathrm{i} \boldsymbol{k}^{\prime} \cdot \boldsymbol{x}}\right)\right]\right.\\
&\mid a_i\rangle\mid\ldots,n_{k\sigma},\ldots\rangle \\
=&-\frac{e}{m c} \sqrt{\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}}\left\langle a_{\mathbf{f}}\left|\hat{\boldsymbol{p}} \cdot \boldsymbol{\varepsilon}_{\boldsymbol{k} \sigma} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right| a_{\mathrm{i}}\right\rangle \\
& \times\left\langle\ldots, n_{k \sigma}+1, \ldots\left|\hat{a}_{\boldsymbol{k} \sigma}^{\dagger}\right| \ldots, n_{\boldsymbol{k} \sigma}, \ldots\right\rangle \\
=&-\frac{e}{m c} \sqrt{\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}}\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \cdot \boldsymbol{\varepsilon}_{\boldsymbol{k} \sigma} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right| a_{i}\right\rangle \sqrt{n_{\boldsymbol{k} \sigma}+1}.
\end{aligned}\tag{2.3}$$

Notice that in the second equivalence above, we only take into account the contribution of the photon with wave vector $$\boldsymbol{k}$$ and polarization $$\sigma$$. Since the newly emitted photon has an energy of $$\hbar \omega_{\boldsymbol{k}}$$, eqn.(2.2) *to the first order* now becomes

$$\begin{aligned}
\left(\frac{\text { trans. prob. }}{\text { time }}\right)_{\text {emission }}=& \frac{2 \pi}{\hbar}\left|\left\langle f\left|\hat{H}_{\text {int }}^{\prime}\right| i\right\rangle\right|^{2} \delta\left(E_{\mathrm{f}}-E_{\mathrm{i}}\right) \\
=& \frac{2 \pi}{\hbar}\left(\frac{e}{m c}\right)^{2}\left(\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}\right)\left(n_{k \sigma}+1\right) \\
& \times\left|\left\langle a_{\mathrm{f}}\left|\hat{p} \cdot \boldsymbol{\varepsilon}_{k \sigma} \mathrm{e}^{-\mathrm{i} k \cdot x}\right| a_{\mathrm{i}}\right\rangle\right|^{2} \\
& \times \delta\left(E_{a_{\mathrm{f}}}-E_{a_{\mathrm{i}}}+\hbar \omega_{k}\right).
\end{aligned}\tag{2.4}$$

Notice that when there is no photon in our system (i.e. $$n_{k\sigma}=0$$), the transition can still happen. This phenomenon is then referred as **spontaneous emission**. The $$1$$ in $$n_{k\sigma}+1$$ is the result of commutation rule; this is for the same reason we have $$\frac{1}{2}$$ in the zero-point energy of EM field[1].

## Lifetime of Excited States

Now we consider all the possible $$\boldsymbol{k}$$ and $$\sigma$$ in (2.3) to give an expression for the lifetime of state $$i$$, $$\tau$$, as

$$\begin{aligned}
\left(\frac{1}{\tau}\right)_{\mathrm{i} \rightarrow \mathrm{f}}=& \frac{2 \pi}{\hbar} \sum_{\boldsymbol{k}, \sigma}\left|\left\langle f\left|\hat{H}_{\mathrm{int}}^{\prime}\right| i\right\rangle\right|^{2} \delta\left(E_{a_{f}}-E_{a_{1}}+\hbar \omega_{k}\right) \\
=& \frac{4 \pi^{2} e^{2}}{m^{2} L^{3}} \sum_{\boldsymbol{k}, \sigma} \frac{1}{\omega_{k}}\left|\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \cdot \varepsilon_{k \sigma} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot x}\right| a_{\mathrm{i}}\right\rangle\right|^{2} \\
& \times \delta\left(E_{a_{\mathrm{f}}}-E_{a_{1}}+\hbar \omega_{k}\right).
\end{aligned}\tag{3.1}$$

At the limit of $$L\rightarrow\infty$$, we can replace the summation of wave vector with a integral by

$$\sum_{\mathbf{k}}=\frac{L^3}{(2\pi)^3}\int d\boldsymbol{k}\tag{3.2}.$$

The factor in front of the integral is a result from the periodic boundary condition, because PBC dictates that the allowable elements of wavevectors must satisfy the relation of 

$$k_iL=2\pi n_i\quad n_i=0,1,2,\ldots\quad i=x,y,z.\tag{3.3}$$

Each vector $$\mathbf{n}=\{n_x,n_y,n_z\}$$ reprents a normal mode of EM field. So the number of normal modes fall into the volume of $$\Delta n_x\Delta n_y\Delta n_z$$ at $$(n_x,n_y,n_z)$$ is just $$L^3/(2\pi)^3\Delta k_x\Delta k_y\Delta k_z$$. At the limit of $$L\rightarrow \infty$$, (3.2) holds.

Let us now choose the directions of polarization vectors $$\boldsymbol{\varepsilon}_{\mathbf{k}\sigma}$$ so that (3.1) can be largely simplified. If we choose the $$\boldsymbol{\varepsilon}_{\mathbf{k}1}$$ to be a direction perpendicular to $$\langle a_i\mid\hat{\mathbf{p}}\mid a_f\rangle$$, and $$\mathbf{k}$$ forms a angle of $$\theta$$ with $$\langle a_i\mid\hat{\mathbf{p}}\mid a_f\rangle$$ (see Figure 1), we have

$$\begin{aligned}
\sum_{\sigma=1,2}\left|\left\langle a_{\mathbf{f}}\left|\hat{\boldsymbol{p}} \cdot \varepsilon_{\boldsymbol{k} \sigma} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right| a_{\mathrm{i}}\right\rangle\right|^{2} &=\left|\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \cdot \boldsymbol{\varepsilon}_{\boldsymbol{k}_{2}} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot x}\right| a_{\mathrm{i}}\right\rangle\right|^{2} \\
&\substack{(1.5)\\=}\left|\boldsymbol{\varepsilon}_{\boldsymbol{k} 2} \cdot\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot x}\right| a_{\mathrm{i}}\right\rangle\right|^{2}
\end{aligned}\tag{3.4}$$

where the second equation in (1.5) is used again to swap the place of $$\boldsymbol{\varepsilon}$$ and $$\boldsymbol{k}$$. We also notice that the light emitted from an atom has energies of $$\hbar \omega\approx10eV$$, giving that 

$$\begin{aligned}
\boldsymbol{k} \cdot \boldsymbol{x} \approx \frac{2 \pi}{\lambda} a_{\mathrm{Bohr}} &=\frac{\hbar \omega}{\hbar c} a_{\mathrm{Bohr}} \\
&=\frac{10 \mathrm{eV} \frac{1}{2} \times 10^{-8} \mathrm{cm}}{1.97 \times 10^{-5} \mathrm{eV} \mathrm{cm}} \\
&=2.7 \times 10^{-3} \ll 1.
\end{aligned}$$

As a result the exponential factor $$e^{-i\mathbf{k\cdot x}}\approx 1$$, and eq.(3.4) reduces to

$$\sum_{\sigma=1,2}\left|\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \cdot \varepsilon_{k \sigma} \mathrm{e}^{-\mathrm{i} k \cdot x}\right| a_{\mathrm{i}}\right\rangle\right|^{2} \approx\left|\boldsymbol{\varepsilon}_{k 2} \cdot\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle\right|^{2}\tag{3.5}.$$

Eq.(3.5) is often referred as **dipole approximation** for the reasons we will discuss later. Similarly, we also have **magnetic dipole approximation** with $$e^{-i\mathbf{k\cdot x}}\approx 1-i\mathbf{k\cdot x}$$, and **electric quadrupole approximation** with $$e^{-i\mathbf{k\cdot x}}\approx 1-i\mathbf{k\cdot x}-\frac{1}{2}(\mathbf{k\cdot x})^2.$$

<p align="center">
  <img width="256" height="221" src="{{ site.url }}/images/polarization-vectors.PNG">
</p>
<p style="text-align: center;">Figure 1. The choice of one of the polarization vectors. The angle theta represents the polar angle in k-space.</p>

From figure 1 it is easy to get 

$$||\varepsilon_{k 2}||\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle\left|\cos \left(90^{\circ}-\vartheta\right)\right|^{2}=\left|\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle\right|^{2} \sin ^{2} \vartheta,$$

and finally

$$\left(\frac{1}{\tau}\right)_{\mathrm{i} \rightarrow \mathrm{f}}=\frac{e^{2}}{2 \pi m^{2}} \int \mathrm{d}^{3} k \frac{1}{\omega_{k}}\left|\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle\right|^{2} \sin ^{2} \vartheta \delta\left(E_{a_{\mathrm{f}}}-E_{a_{\mathrm{i}}}+\hbar \omega_{k}\right)\tag{3.6}.$$

If we use spherical coordinate to do the integral and let $$\omega_{fi}$$ be the photon frequence that conserve energy, then

$$\begin{aligned}
\left(\frac{1}{\tau}\right)_{\mathrm{i} \rightarrow \mathrm{f}}=& \frac{e^{2} 2 \pi}{2 \pi m^{2} c^{3}} \int \mathrm{d} \omega_{k} \omega_{k}\left|\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle\right|^{2} \\
& \times \delta\left(E_{a_{\mathrm{f}}}-E_{a_{1}}+\hbar \omega_{k}\right) \int_{0}^{\pi} \sin ^{3} \vartheta \mathrm{d} \vartheta \\
=& \frac{4}{3} \frac{e^{2}}{m^{2} c^{3} \hbar} \omega_{\mathrm{fi}}\left|\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle\right|^{2}.
\end{aligned}\tag{3.7}$$

The matrix element $$\left\langle a_{\mathrm{f}}\mid\hat{\boldsymbol{p}}\mid a_{\mathrm{i}}\right\rangle $$ can be cast in another form, i.e. 

$$\begin{aligned}
\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle &=\left\langle a_{\mathrm{f}}\left|m \frac{\mathrm{d} \boldsymbol{\hat{x}}}{\mathrm{d} t}\right| a_{\mathrm{i}}\right\rangle \\
&=-\frac{\mathrm{i}}{\hbar} m\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{x}} \hat{H}_{\mathrm{mp}}-\hat{H}_{\mathrm{mp}} \hat{\boldsymbol{x}}\right| a_{\mathrm{i}}\right\rangle \\
&=-\frac{\mathrm{i} m}{\hbar}\left(E_{a_{\mathrm{i}}}-E_{a_{\mathrm{f}}}\right)\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{x}}| a_{\mathrm{i}}\right\rangle \\
&=-\mathrm{i} m \omega_{\mathrm{fi}}\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{x}}| a_{\mathrm{i}}\right\rangle.
\end{aligned}\tag{3.8}$$

The Heisenberg's equation of motion is used at the second equivalence, that is,

$$\frac{\mathrm{d} \hat{\boldsymbol{x}}}{\mathrm{d} t}=-\frac{\mathrm{i}}{\hbar}\left[\hat{\boldsymbol{x}}, \hat{H}_{\mathrm{mp}}\right]$$

Applying the trick in (3.8) we recognize that the momentum matrix element $$e\left\langle a_{\mathrm{f}}\mid\hat{\boldsymbol{p}}\mid a_{\mathrm{i}}\right\rangle$$ can be expressed as a matrix element of the dipole operator $$e \hat{\boldsymbol{x}}$$. By now the designations *dipole approximation and dipole radiation* introduced earlier should have become clear.

### The Hamiltonian for interaction btw the electron Spin and the EM field

Up to this point we neglect the interaction btw particle spin and EM field. To add it in our Hamiltonian, we first realize that the interaction energy of a magnetic momentum $$\boldsymbol{\mu}$$ and a magnetic field $$\mathbf{B}$$ is just

$$H^{\prime \prime \prime}=-\boldsymbol{\mu} \cdot \boldsymbol{B}\tag{3.9}$$

where $$\boldsymbol{\mu}=(e \hbar / 2 m c) \boldsymbol{\sigma}$$. Since $$\mathbf{B}=\nabla\times\mathbf{A}$$ we can quantize (3.9) as

$$\hat{H}^{\prime \prime \prime}=-\frac{\mathrm{i} e \hbar}{2 m c} \sum_{\boldsymbol{k}, \sigma} N_{\boldsymbol{k}} \boldsymbol{\sigma} \cdot\left(\hat{\boldsymbol{k}} \times \varepsilon_{\boldsymbol{k} \sigma}\right)\left[\hat{a}_{\boldsymbol{k} \sigma} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{r}}+\hat{a}_{\boldsymbol{k} \sigma}^{\dagger} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{r}}\right],$$

where $$\hat{\mathbf{k}}=-i\nabla$$. Acting $$\hat{\mathbf{k}}$$ on exponential factors gives

$$\hat{H}^{\prime \prime \prime}=-\frac{\mathrm{i} e \hbar}{2 m c} \sum_{\boldsymbol{k}, \sigma} N_{\boldsymbol{k}} \boldsymbol{\sigma} \cdot\left(\boldsymbol{k} \times \varepsilon_{\boldsymbol{k} \sigma}\right)\left[\hat{a}_{\boldsymbol{k} \sigma} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{r}}-\hat{a}_{\boldsymbol{k} \sigma}^{\dagger} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{r}}\right]\tag{3.10}.$$

## Adsorption of Photons

The adsorption process is exact opposite to the emission process. Thus, the initial and final states of the phonon+particle system are

$$\begin{array}{l}
|i\rangle=\left|a_{\mathrm{i}}\right\rangle\left|\ldots, n_{k \sigma}, \ldots\right\rangle, \\
\mid f\rangle=\left|a_{\mathrm{f}}\right\rangle\left|\ldots, n_{k \sigma}-1, \ldots\right\rangle.
\end{array}\tag{4.1}$$

and the matrix element of $$\hat{H}_{int}^{\prime}$$ is

$$\begin{aligned}
\left\langle f\left|\hat{H}_{\text {int }}^{\prime}\right| i\right\rangle=&\left\langle a_{\mathrm{f}}\left|\left\langle\ldots, n_{k \sigma}-1, \ldots\right|\right.\right.\\
& \times\left(-\frac{e}{m c}\right) \sum_{\boldsymbol{k}, \sigma} \sqrt{\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}} \hat{\boldsymbol{p}} \cdot \varepsilon_{\boldsymbol{k} \sigma}\left(\hat{a}_{\boldsymbol{k} \sigma} \mathrm{e}^{\mathrm{i} k^{\prime} \cdot \boldsymbol{x}}+\hat{a}_{\boldsymbol{k} \sigma}^{\dagger} \mathrm{e}^{-\mathrm{i} \boldsymbol{k}^{\prime} \cdot \boldsymbol{x}}\right) \\
& \times\left|a_{\mathrm{i}}\right\rangle\left|\ldots, n_{\boldsymbol{k} \sigma}, \ldots\right\rangle \\
=&-\frac{e}{m c} \sqrt{\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}}\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \cdot \varepsilon_{\boldsymbol{k} \sigma} \mathrm{e}^{\mathrm{i} k \cdot \mathbf{x}}\right| a_{\mathrm{i}}\right\rangle \\
& \times\left\langle\ldots, n_{k \sigma}-1, \ldots\left|\hat{a}_{\boldsymbol{k} \sigma}\right| \ldots, n_{k \sigma}, \ldots\right\rangle \\
=&-\frac{e}{m c} \sqrt{\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}}\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \cdot \varepsilon_{\boldsymbol{k} \sigma} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right| a_{\mathrm{i}}\right\rangle \sqrt{n_{k \sigma}}
\end{aligned}\tag{4.2}$$

where we once again only consider one photon with wave vector $$\mathbf{k}$$ and polarization $$\sigma$$. The probability of transition per unit time is then

$$\begin{aligned}
\left(\frac{\text { trans. prob. }}{\text { time }}\right)_{\text {absorption }}=& \frac{2 \pi}{\hbar}\left(\frac{e}{m c}\right)^{2}\left(\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}\right) n_{k \sigma} \\
& \times\left|\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \cdot \boldsymbol{\varepsilon}_{\boldsymbol{k} \sigma} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right| a_{\mathrm{i}}\right\rangle\right|^{2} \delta\left(E_{\mathrm{f}}-E_{\mathrm{i}}\right)
\end{aligned}\tag{4.3}$$

with

$$\begin{array}{l}
E_{\mathrm{f}}=E_{a_{\mathrm{f}}}+\left(n_{\boldsymbol{k} \sigma}-1\right) \hbar \omega_{\boldsymbol{k} \sigma} \\
E_{\mathrm{i}}=E_{a_{\mathrm{i}}}+n_{\boldsymbol{k} \sigma} \hbar \omega_{\boldsymbol{k} \sigma}.
\end{array}$$

If we make use of the relation

$$\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \cdot \varepsilon_{\boldsymbol{k} \sigma} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right| a_{\mathrm{i}}\right\rangle=\left\langle a_{\mathrm{i}}\left|\hat{\boldsymbol{p}} \cdot \varepsilon_{\boldsymbol{k} \sigma} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right| a_{\mathrm{f}}\right\rangle^{*}$$

eqn.(4.3) becomes

$$\begin{array}{l}
\left(\frac{\text { trans. prob. }}{\text { time }}\right) \\
\begin{array}{l}
=\frac{2 \pi}{\hbar}\left(\frac{e}{m c}\right)^{2}\left(\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}\right) n_{\boldsymbol{k} \sigma}\left|\left\langle a_{i}\left|\hat{\boldsymbol{p}} \cdot \varepsilon_{\boldsymbol{k} \sigma} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right| a_{\mathrm{f}}\right\rangle\right|^{2} \\
\quad \times \delta\left(E_{a_{\mathrm{i}}}+\hbar \omega_{\boldsymbol{k} \sigma}-E_{a_{\mathrm{f}}}\right)
\end{array}
\end{array}\tag{4.4}$$

which is similar to eqn.(2.4) with $$n_{k\sigma}+1$$ replaced by $$n_{k\sigma}$$. We will now calculate the **cross section** $$\sigma_{\mathrm{i} \rightarrow \mathrm{f}}(k \sigma)$$ for the absorption of a photon with momentum $$\hbar k$$ and polarization $$\sigma .$$ It is defined as **the transition probability per unit time for the absorption of a photon divided by the incoming photon flux $$j_{\text {photon }}$$**,

$$j_{\text {photon }}=\frac{n_{k \sigma}}{L^{3}} c\tag{4.5}.$$

We call $$\sigma_{i\rightarrow f}$$ "cross section" because it has an unit of area. The definition yields that

$$\begin{aligned}
\sigma_{\mathrm{i} \rightarrow \mathrm{f}}(k \sigma)=& \frac{4 \pi^{2} e^{2}}{m^{2} \omega_{k} c}\left|\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \cdot \varepsilon_{\boldsymbol{k} \sigma} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right| a_{\mathrm{i}}\right\rangle\right|^{2} \\
& \times \delta\left(E_{a_{\mathrm{i}}}+\hbar \omega_{k}-E_{a_{\mathrm{f}}}\right).
\end{aligned}\tag{4.6}$$

## Photon Scattering from Free Electrons
In this section we will first prove that **free paritlce in vacuum cannot radiate any photon by borrowing the concept of 4-momentum from special relativity**. This phenomenon is a result of using eigenstates of free particles. We then study the scattering between a photon and a free electron.

The Hamiltonian for a free particle in vacuum is simply

$$\hat{H}=\frac{\hat{\mathbf{p}}^2}{2m}\tag{5.1},$$

with normalized eigenstates $$\mid\mathbf{q}\rangle$$ being

$$\langle \boldsymbol{x}\mid\mathbf{q}\rangle=\psi_{\mathbf{q}}(\mathbf{x})=\frac{1}{\sqrt{L^3}}e^{i\mathbf{q\cdot x}}\tag{5.2}.$$

At first, we consider the process of a free electron absorbing a photon. The initial and final states are given by

$$\begin{array}{l}
|i\rangle=\left|\boldsymbol{q}_{i}\right\rangle\left|\ldots, n_{k \sigma}, \ldots\right\rangle \\
|f\rangle=\left|\boldsymbol{q}_{\mathrm{f}}\right\rangle\left|\ldots, n_{k \sigma}-1, \ldots\right\rangle
\end{array}$$

and from previous section we also have

$$\begin{aligned}
\left\langle f\left|\hat{H}_{\mathrm{int}}^{\prime}\right| i\right\rangle=&\langle q_{\mathrm{f}}|\left\langle\ldots, n_{k \sigma}-1, \ldots\right|\left(-\frac{e}{m c}\right) \hat{\boldsymbol{p}} \cdot \varepsilon_{k \sigma} \sqrt{\frac{2 \pi \hbar c}{L^{3} \omega_{k}}}\\
& \times\left(\hat{a}_{\boldsymbol{k} \sigma} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}+\hat{a}_{\boldsymbol{k} \sigma}^{\dagger} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot x}\right)\left|\boldsymbol{q}_{\mathrm{i}}\right\rangle\left|\ldots, n_{\boldsymbol{k} \sigma}, \ldots\right\rangle \\
=&-\frac{e}{m c} \sqrt{\frac{2 \pi \hbar c}{L^{3} \omega_{k}}}\left\langle\boldsymbol{q}_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \cdot \varepsilon_{\boldsymbol{k} \sigma} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot x}\right| \boldsymbol{q}_{i}\right\rangle \sqrt{n_{k \sigma}} \\
=&-\frac{e}{m c} \sqrt{\frac{2 \pi \hbar c}{L^{3} \omega_{k}}}\left(-\boldsymbol{q}_{\mathrm{f}} \cdot \varepsilon_{\boldsymbol{k} \sigma}\right) \sqrt{n_{\boldsymbol{k} \sigma}} \\
& \times \int_{L^{3}} \frac{\mathrm{e}^{-\mathrm{i} \boldsymbol{q}_{\mathrm{f}} \cdot \boldsymbol{x}}}{L^{3 / 2}} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}} \frac{\mathrm{e}^{\mathbf{i} q \cdot \boldsymbol{x}}}{L^{3 / 2}} \mathrm{d}^{3} x.
\end{aligned}\tag{5.3}$$

Notice that the third equivalence is right because the exponential factor in the "sandwhich" is a constant and the momentum operator $$\hat{\mathbf{p}}$$ was applied to the $$\mid q_i\rangle$$ state directly. The integral in (5.3) yields a delta function,i.e.

$$\int_{L^{3}} \frac{\mathrm{e}^{-\mathrm{i} q_{\mathrm{f}} \cdot x}}{\sqrt{L^{3}}} \frac{\mathrm{e}^{\mathrm{i}\left(q_{\mathrm{i}}+k\right) \cdot x}}{\sqrt{L^{3}}} \mathrm{d}^{3} x=\delta_{q_{\mathrm{f}}, q_{\mathrm{i}}+k}\tag{5.4}$$

which indicates the conservation of momentum, 

$$\hbar \boldsymbol{q}_{\mathrm{f}}=\hbar \boldsymbol{q}_{\mathrm{i}}+\hbar \boldsymbol{k}\tag{5.5}.$$

Meanwhile, we also have to satisfy the energy conservation law, which gives

$$E_{\mathrm{f}}=E_{\mathrm{i}} \quad \text { or } \quad \frac{\left(\hbar q_{\mathrm{f}}\right)^{2}}{2 m}=\hbar \omega_{k}+\frac{\left(\hbar q_{\mathrm{i}}\right)^{2}}{2 m}\tag{5.6}.$$

Now we are about to see that we cannot satisfy (5.5) and (5.6) in the case of free particle in vacuum. From special relativity the 4-momentum vector for a paticle, $$P^{\mu}_a$$, and a photon, $$P_{\gamma}^{\mu}$$ are

$$P_{a}^{\mu}=\left(\frac{E}{c}, p, 0,0\right),\tag{5.7}$$

and

$$P_{\gamma}^{\mu}=\left(E_{\gamma}/c, \frac{Ev_x}{c^2},\frac{Ev_y}{c^2},\frac{Ev_z}{c^2}\right)\tag{5.8}.$$

Notice that (5.8) gives the massless photon as

$$P^{\mu}_{\gamma}\cdot P_{\mu,\gamma}=m^2=0.$$

where the natural unit is used. Eq.(5.7) alignes the move direction of the particle to x-axis. Let us assume the emitted photon propagates at a direction forming a $$\theta$$ angle with x-axis, that is

$$P_{\gamma}^{\mu}=\frac{E}{c}\left(1,cos\theta,sin\theta,0\right).\tag{5.9}$$

The 4-momentum of new particle is then

$$P^{\mu}_{a^{\prime}}=(\frac{E^{\prime}}{c},\mathbf{p}^{\prime})\tag{5.10}.$$

and $$P_{a^{\prime}}^{\mu}=P^{\mu}_a-P_{\gamma}^{\mu}\tag{5.11}.$$

If we apply the Lorentz invariance and calculate the 4-vector products using Minkowski metric, we have

$$
\begin{aligned}
P_{a}^{\prime \mu} \cdot P_{a,\mu}^{\prime}&=\left(P_{a}^{\mu}-P_{\gamma}^{\mu}\right) \cdot\left(P_{a,\mu}-P_{\gamma,\mu}\right)\\
m_a^2&=m_a^2+m_{\gamma}^2-2P^{\mu}_{a}P_{\gamma,\mu}
\end{aligned}\tag{5.12}.
$$

Because $$m_{\gamma}=0$$ eqn.(5.12) is found to be

$$P_{a}^{\mu} \cdot P_{\gamma,\mu}=\frac{E \cdot E_{\gamma}}{c^{2}}-\frac{\mathbf{p} \cdot E_{\gamma}}{c} \cos \theta=E_{\gamma}(E-c\mathbf{p}cos\theta)=0\tag{5.13}$$

where we recover the light speed from the natural unit. Remember the identity in special relativity

$$E=\sqrt{m^{2} c^{4}+c^{2} p^{2}} \rightarrow E>p c\tag{5.14}$$

we finally conclude from (5.13) that $$E_{\gamma}=0$$, i.e., no photon emission is possible. In a similar way, one can also prove that **the free particle in vacuum does not absorb photon too.**

We can also draw the conclusion that **processes of first order caused by $$\hat{H}_{\text {int }}^{\prime}$$ do not exist**. As a consequence we investigate now the processes of first order with $$\hat{H}_{\text {int }}^{\prime \prime}.$$ for the free particles. This part of the interaction contains terms of the form $$\hat{a}_{k \sigma}^{\dagger} \hat{a}_{k^{\prime} \sigma^{\prime}} .$$ Obviously, they describe processes that can be shown in the following sketch.

<p align="center">
  <img width="262" height="158" src="{{ site.url }}/images/Hint-p-p.PNG">
</p>
<p style="text-align: center;">Figure 2. Sketch of a two-photon process in k-space</p>

In figure 2 the wiggly and solid lines represent photons and particles, respectively. The initial and final states described above are then

$$\begin{array}{l}
|i\rangle=\left|\boldsymbol{q}_{\mathbf{i}}\right\rangle\left|\ldots, n_{\boldsymbol{k}_{1} \sigma_{1}}, \ldots, n_{\boldsymbol{k}_{f} \sigma_{t}}, \ldots\right\rangle \\
|f\rangle=\left|\boldsymbol{q}_{\mathrm{f}}\right\rangle\left|\ldots, n_{k_{i} \sigma_{\mathrm{i}}}-1, \ldots, n_{k_{f} \sigma_{\mathrm{f}}}+1, \ldots\right\rangle.
\end{array}\tag{5.15}$$

The transition probability per unit time is thus,

$$\begin{aligned}
\left(\frac{\text { trans. prob. }}{\text { time }}\right)&=\frac{2 \pi}{\hbar}\left(\frac{e^{2}}{2 m c^{2}}\right)^{2}\left(\frac{2 \pi \hbar c^{2}}{L^{3}}\right)^{2} \frac{\left|\varepsilon_{k_{1} \sigma_{f}} \cdot \varepsilon_{k_{1} \sigma_{1}}\right|^{2}}{\omega_{k_{1}} \omega_{k_{f}}} \\
&\times\left|\left\langle q_{\mathrm{f}}\left|\left\langle\ldots, n_{k_{1} \sigma_{1}}-1, \ldots, n_{k_{f} \sigma_{f}}+1, \ldots\right|\right.\right.\right.\\
&\times\left(\hat{a}_{k_{\mathrm{i}} \sigma_{\mathrm{i}}} \hat{a}_{k_{\mathrm{f}} \sigma_{\mathrm{f}}}^{\dagger} \mathrm{e}^{\mathrm{i}\left(k_{\mathrm{i}}-k_{\mathrm{f}}\right) \cdot x}+\hat{a}_{k_{\mathrm{f}} \sigma_{\mathrm{f}}}^{\dagger} \hat{a}_{k_{\mathrm{i}} \sigma_{\mathrm{i}}} \mathrm{e}^{\mathrm{i}\left(k_{\mathrm{i}}-k_{\mathrm{f}}\right) \cdot x}\right) \\
&\times\left.\left|q_{\mathrm{i}}\right\rangle\left|\ldots, n_{k_{\mathrm{i}} \sigma_{\mathrm{i}}}, \ldots, n_{k_{\mathrm{f}} \sigma_{\mathrm{f}}}, \ldots\right\rangle\right|^{2} \\
&\times \delta\left(\hbar \omega_{\mathrm{i}}+\frac{\left(\hbar q_{\mathrm{i}}\right)^{2}}{2 m}-\hbar \omega_{\mathrm{f}}-\frac{\left(\hbar q_{\mathrm{f}}\right)^{2}}{2 m}\right)
\end{aligned}\tag{5.16}$$

Applying the creation and annhilation operators to the states gives

$$\begin{aligned}
&\left(\frac{\text { trans. prob. }}{\text { time }}\right)_{\text {photon scattering }} \\
&=\frac{8 \pi}{\hbar}\left(\frac{e^{2}}{2 m c^{2}}\right)^{2}\left(\frac{2 \pi \hbar c^{2}}{L^{3}}\right)^{2} \frac{\left|\varepsilon_{k_{1} \sigma_{f}} \cdot \varepsilon_{k_{1} \sigma_{1}}\right|^{2}}{\omega_{k_{1}} \omega_{k_{1}}} \\
&\times\left|\left\langle q_{\mathrm{f}}\left|\mathrm{e}^{\mathrm{i}\left(k_{\mathrm{i}}-k_{\mathrm{f}}\right) \cdot x}\right| q_{\mathrm{i}}\right\rangle\right|^{2} n_{k_{\mathrm{i}} \sigma_{\mathrm{i}}}\left(n_{k_{\mathrm{f}} \sigma_{\mathrm{f}}}+1\right) \\
&\times \delta\left(\hbar \omega_{k_{\mathrm{i}}}+\frac{\left(\hbar q_{\mathrm{i}}\right)^{2}}{2 m}-\hbar \omega_{k_{\mathrm{f}}}-\frac{\left(\hbar q_{\mathrm{f}}\right)^{2}}{2 m}\right)
\end{aligned}\tag{5.17}$$

The matrix element in the squred bracket is then

$$\begin{aligned}
\left\langle\boldsymbol{q}_{f}\left|\mathrm{e}^{\mathrm{i}\left(k_{1}-k_{\mathrm{f}}\right) \cdot \boldsymbol{x}}\right| \boldsymbol{q}_{\mathrm{i}}\right\rangle &=\int \mathrm{d}^{3} x \frac{\mathrm{e}^{-\mathrm{i}\left(q_{\mathrm{f}}+k_{\mathrm{f}}\right) \cdot x}}{\sqrt{L^{3}}} \frac{\mathrm{e}^{\mathrm{i}\left(q_{\mathrm{i}}+k_{\mathrm{i}}\right) \cdot \boldsymbol{x}}}{\sqrt{L^{3}}} \\
&=\delta_{\boldsymbol{q}_{\mathrm{f}}+\boldsymbol{k}_{\mathrm{t}}, k_{\mathrm{i}}+\boldsymbol{q}_{\mathrm{l}}}
\end{aligned}$$

which indicates the conservation of momenta.

## Natural linewidth and self-energy
So far all the transition probability expressions from previous sections have $$\delta-$$functions to satisfy the momentum/energy conservation. However, the photon emitting from a particle corresponds to a wave of finite length and duration. According to the Heisenberg's uncertainty principle, there must be uncertainty in particle's energy that is related to the lifetime of excited states, i.e. $$\Delta E\geq \hbar/\tau$$. Therefore, the photon emission spectrum from a particle must be made of lines with finide width rather than a spectrum of infinite peaks of $$\delta-$$function. This section shows a way to correct such error.

Here we employ a method that is similar to what we have seen in the coherence state section of Part II blog, that is, writing the eigenstates of EM+particle system $$\mid\psi\rangle$$ as a linear combination of unperturbed states $$\mid\phi_n\rangle$$,

$$|\psi\rangle=\sum_{n} c_{n}(t) \exp \left(-\frac{\mathrm{i} E_{n}}{\hbar} t\right)\left|\phi_{n}\right\rangle\tag{6.1},$$

where 

$$(\hat{H}_{mp}+\hat{H}_{rad})\left|\phi_{n}\right\rangle=E_{n}\left|\phi_{n}\right\rangle\tag{6.2}.$$

Using (6.1) and (6.2) in the time-dependent Schrodinger equation gives a system of coupled equations

$$\frac{\mathrm{d} c_{m}(t)}{\mathrm{d} t}=-\frac{\mathrm{i}}{\hbar} \sum_{n} c_{n}(t)\left\langle\phi_{m}\left|\hat{H}_{\mathrm{int}}\right| \phi_{n}\right\rangle \exp \left(\frac{\mathrm{i}\left(E_{m}-E_{n}\right) t}{\hbar}\right)\tag{6.3}.$$

We now let $$c_{i0}$$ to be the amplitude of the initial state with no photon, while $$c_{f\mathbf{k}\sigma}$$ to be the possible final states' amplitudes. Then (6.3) reads

$$\begin{aligned}
\frac{\mathrm{d} c_{i 0}}{\mathrm{d} t} &=-\frac{\mathrm{i}}{\hbar} \sum_{\boldsymbol{k} \sigma}\left\langle i 0\left|\hat{H}_{i n t}\right| f \boldsymbol{k} \sigma\right\rangle \exp \left(\frac{\mathrm{i}}{\hbar}\left(E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}\right) t\right) c_{f k \sigma}, \\
\frac{\mathrm{d} c_{f k \sigma}}{\mathrm{d} t} &=-\frac{\mathrm{i}}{\hbar}\left\langle f \boldsymbol{k} \sigma\left|\hat{H}_{\mathrm{int}}\right| i 0\right\rangle \exp \left(-\frac{\mathrm{i}}{\hbar}\left(E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}\right) t\right) c_{i 0}.
\end{aligned}\tag{6.4}$$

Note that the first equation still contains a sum because the initial state could decay into many different states, while each final state has only one initial state from which it is derived. Hence the second equation of (6.4) has no summation. Now we **make the ansatz of**

$$c_{i 0}(t)=\exp \left(-\frac{\mathrm{i}}{\hbar} \Delta E_{\mathrm{i}} t\right)\tag{6.5}$$

where $$\Delta E_i$$ is a constant needed to be determined. Use(6.5) and integrate the second equation of (6.4) from 0 to $$t$$ to get

$$c_{f k \sigma}(t)=\left\langle f \boldsymbol{k} \sigma\left|\hat{H}_{\mathrm{int}}\right| i 0\right\rangle \frac{\exp \left[-\frac{\mathrm{i}}{\hbar}\left(E_{\mathrm{i}}+\Delta E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}\right) t\right]-1}{E_{\mathrm{i}}+\Delta E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}}\tag{6.6}.$$

We now determine $$\Delta E_i$$ so that the first equation of (6.4) is satisfied too. Using (6.5) and (6.6) in the first equation of (6.4) we find

$$\begin{aligned}
&-\frac{\mathrm{i}}{\hbar} \Delta E_{\mathrm{i}} \exp \left(-\frac{\mathrm{i}}{\hbar} \Delta E_{\mathrm{i}} t\right) \\
=&-\frac{\mathrm{i}}{\hbar} \sum_{k \sigma}\left\langle i 0\left|\hat{H}_{\mathrm{int}}\right| f \boldsymbol{k} \sigma\right\rangle\left\langle f \boldsymbol{k} \sigma\left|\hat{H}_{\mathrm{int}}\right| i 0\right\rangle \\
& \times \frac{\exp \left[-\frac{\mathrm{i}}{\hbar}\left(E_{\mathrm{i}}+\Delta E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}\right) t\right]-1}{E_{\mathrm{i}}+\Delta E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}} \exp \left(\frac{\mathrm{i}}{\hbar}\left(E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}\right) t\right) \\
=&-\frac{\mathrm{i}}{\hbar} \sum_{\boldsymbol{k} \sigma}\left|\left\langle f \boldsymbol{k} \sigma\left|\hat{H}_{\mathrm{int}}\right| i 0\right\rangle\right|^{2} \frac{1-\exp \left[\frac{\mathrm{i}}{\hbar}\left(E_{\mathrm{i}}+\Delta E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}\right) t\right]}{E_{\mathrm{i}}+\Delta E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}} \\
& \times \exp \left(-\frac{\mathrm{i}}{\hbar}\left(E_{\mathrm{i}}+\Delta E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}\right) t+\frac{\mathrm{i}}{\hbar}\left(E_{\mathrm{i}}+\Delta E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}\right) t\right)
\end{aligned}$$

Dividing both side by $$(-i / \hbar) \exp \left(-\frac{i}{\hbar} \Delta E_{i} t\right)$$ results in

$$\begin{aligned}
\Delta E_{\mathrm{i}}=& \sum_{k \sigma}\left|\left\langle f \boldsymbol{k} \sigma\left|\hat{H}_{\mathrm{int}}\right| i 0\right\rangle\right|^{2} \\
& \times\left(\frac{1-\exp \left(\frac{\mathrm{i}}{\hbar}\left(E_{\mathrm{i}}+\Delta E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}\right) t\right)}{E_{\mathrm{i}}+\Delta E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}}\right).
\end{aligned}\tag{6.7}$$

To further simplify (6.7) we ask mathmatician for help. Here we need the **Plemlj's Formula**,

$$\lim _{t \rightarrow \infty}\left(\frac{1-e^{i x t}}{x}\right)=P\left(\frac{1}{x}\right)-i \pi \delta(x)\tag{6.8},$$

and turn (6.7) into

$$\begin{aligned}
\Delta E_{\mathrm{i}}=& \sum_{k \sigma} \frac{\left|\left\langle f k \sigma\left|\hat{H}_{\mathrm{int}}^{\prime}\right| i 0\right\rangle\right|^{2}}{E_{\mathrm{i}}+\Delta E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}} \\
&-\mathrm{i} \pi \sum_{k \sigma}\left|\left\langle f \boldsymbol{k} \sigma\left|\hat{H}_{\mathrm{int}}^{\prime}\right| i 0\right\rangle\right|^{2} \delta\left(E_{\mathrm{i}}+\Delta E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}\right).
\end{aligned}\tag{6.9}$$

Hence, $$\Delta E_i$$ is complex-valued. We write the real part and imaginary part separately to find

$$\begin{array}{l}
\Re\left(\Delta E_{\mathrm{i}}\right)=\sum_{\boldsymbol{k}, \sigma} \frac{\left|\left\langle f \boldsymbol{k} \sigma\left|\hat{H}_{\mathrm{int}}^{\prime}\right| i 0\right\rangle\right|^{2}}{E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}}, \\
\Im\left(\Delta E_{\mathrm{i}}\right)=-\pi \sum_{\boldsymbol{k}, \sigma}\left|\left\langle f \boldsymbol{k} \sigma\left|\hat{H}_{\mathrm{int}}^{\prime}\right| i 0\right\rangle\right|^{2} \delta\left(E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}\right).
\end{array}\tag{6.10}$$

If there are many final states that the particle could stay after the decay, we need to sum over those states too, and (6.10) is modified into

$$\begin{array}{l}
\Re\left(\Delta E_{\mathrm{i}}\right)=\sum_{k, \sigma} \sum_{f} \frac{\left|\left\langle f k \sigma\left|\hat{H}_{\mathrm{int}}^{\prime}\right| i 0\right\rangle\right|^{2}}{E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}},\tag{6.11a,b} \\
\Im\left(\Delta E_{\mathrm{i}}\right)=-\left.\pi \sum_{k, \sigma} \sum_{f}\left|\left\langle f k \sigma\left|\hat{H}_{\mathrm{int}}^{\prime}\right| i 0\right\rangle\right|\right|^{2} \delta\left(E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega_{k}\right).
\end{array}$$

The summation in (6.11a) is unrestricted, meaning that the final state could not fulfill the energy conservation. This phenomenon is called **virtual process** where the particle is understood as a combination of a bare particle and virtual photon cloud. This phenomenon also indicates that quantum field theory is plagued by the infinities, and the solution to such problem is the renormalization group.

On the other hand (6.11b) can be recasted into a form of 

$$-\frac{2}{\hbar} \Im\left(\Delta E_{\mathrm{i}}\right)=\sum_{k \sigma} \sum_{f} \frac{2 \pi}{\hbar}\left|\left\langle f \boldsymbol{k} \sigma\left|\hat{H}_{\mathrm{int}}^{\prime}\right| i 0\right\rangle\right|^{2} \delta\left(E_{\mathrm{i}}-E_{\mathrm{f}}-\hbar \omega\right)\tag{6.12}.$$

Comparing (6.12) with (3.1) we can tell that **the imaginary part of $$\Delta E_i$$ is directly related to the reciprocal lifetime of initial state,** i.e.

$$\frac{1}{\tau_{\mathrm{i}}}=\gamma_{\mathrm{i}}=-\frac{2}{\hbar} \Im\left(\Delta E_{\mathrm{i}}\right)\tag{6.13}.$$

Thus, the initial particle state $$\mid a_{i}\rangle$$ decays with lifetime $$\tau .$$ **On the same footing the state obtains a level shift $$\Re(\Delta E),$$ which results from the emission and reabsorption of (virtual) photons**.

With the calculated $$\Delta E_i$$ the probability amplitude of finding a final state to be $$f$$ with wave vector $$\mathbf{k}$$ and polarization $$\sigma$$ is then

$$c_{f k \sigma}(t)=\left\langle f \boldsymbol{k} \sigma\left|\hat{H}_{\mathrm{int}}^{\prime}\right| i 0\right\rangle \frac{\exp \left(-\frac{\mathrm{i}}{\hbar}\left(E_{\mathrm{i}}+\Re\left(\Delta E_{\mathrm{i}}\right)-\hbar \omega_{k}\right) t\right) \exp \left(-\gamma_{\mathrm{i}} t / 2\right)-1}{E_{\mathrm{i}}+\Re\left(\Delta E_{\mathrm{i}}\right)-E_{\mathrm{f}}-\hbar \omega_{k}+(\mathrm{i} / 2) \hbar \gamma_{\mathrm{i}}}\tag{6.14},$$

from which the probability of finding a specific final state after a long time is 

$$\begin{aligned}
\lim _{t \rightarrow \infty}\left|c_{\mathbf{f} k \sigma}\right|^{2}=&\left|\left\langle f \boldsymbol{k} \sigma\left|\hat{H}_{\text {int }}^{\prime}\right| i 0\right\rangle\right|^{2} \\
& \times \frac{1}{\left(E_{\mathrm{i}}+\Re\left(\Delta E_{\mathrm{i}}\right)-E_{\mathrm{f}}-\hbar \omega_{k}\right)^{2}+\hbar^{2} \gamma_{\mathrm{i}}^{2} / 4}.
\end{aligned}\tag{6.15}$$

Eq.(6.15) reflects **the intensity distribution of the emitted line**: The spectral line has a **Breit-Wigner distribution** with center $$\hbar \omega_{k}=E_{\mathrm{i}}+\Re\left(\Delta E_{\mathrm{i}}\right)-E_{\mathrm{f}}$$ and half-width $$\hbar \gamma_{\mathrm{i}} ;$$. Because of the self-energy of the electron, emission and reabsorption of photons results in the spectral line being shifted by $$\Re\left(\Delta E_{\mathrm{i}}\right) .$$ 

<p align="center">
  <img width="258" height="211" src="{{ site.url }}/images/breit-wigner-distribution.PNG">
</p>
<p style="text-align: center;">Figure 3. Breit-Wigner
form of the spectral line</p>

## Conclusion
Let us call a stop to this radiation-matter interaction journey. This is the first time I write a series of blogs for quantum field theory basics. There are still so many aspects we can talk about this amazing starting point towards the general application of QFT. Along the way I learned that a good theory always starts from a basic equation that is not going to breakdown no matter what. To derive useful conclusions from a theory we have to keep coming back to the basics to assure ourselves that the final results are not artificial but can be interpreted using real-world phenomena. I also restrained myself to only focus on the aspects that might be helpful for me to better understand the polaron theory, hopefully more about polaron theory will be finished after my prelim exam. 


## References

[1] Greiner, Walter. Quantum Mechanics: Special Chapters. Berlin-New York: Springer, 1998.