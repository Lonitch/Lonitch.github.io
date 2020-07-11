---
layout: post

title: A Pedastrian Approach to Radiation-Matter Interaction-Part III

date: 2020-07-12

Author: Sizhe

tags: [basics, quantum-field-theory]

toc: true

---

## TL;DR

This blog summarizes the quantized systems introduced in the previous two parts and uses them in the context of radiation-matter interaction.

## Bird's view
We will start with the derivation of the Hamiltonian for a system composed of EM field and free particles. The resulted Hamiltonian will be devided into three parts that describe particles' energy, EM field energy/radiation energy, and the interaction energy. We then use the Hamiltonian to discuss the examples of light emission from an excited atom, lifetime of excited states, adsorption of photons, photon scattering from free electrons, and some special topics.

## Hamiltonian of The EM Field+Paticles System
The system we are interested in here is composed of matters and EM fields, or photons. Usually we would like to think the matter is built up by particles with various masses $m_i$ and charges $e_i$. The interactions of these particles are always treated in a form of $V(\ldots,\mathbf{x}_i,\ldots)$. The Coulombic interaction is one example of such interaction,

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

where we use the Coulomb gauge $\nabla\cdot\mathbf{A}=0$ and **Ehrenfest Theorem**

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

The interaction energy usually only makes a very small portion of the total energy, so we can treat (1.6) and (1.7) as perturbations. And the undistorbed Hamiltonian, $\hat{H}_{mp}+\hat{H}_{rad}$ has the state vectors to be

$$|m p+r a d\rangle=|m p\rangle\left|\ldots n_{k \sigma} \ldots\right\rangle_{\mathrm{rad}}\tag{1.8}.$$

Several points are worth mentioning regarding $\hat{H}_{int}$ before we proceed to next section. Because we only have one creation/annhilation in each term of eqn.(1.6), then we conclude that $\hat{H}_{int}^{\prime}$ introduces single photon transition. On the other hand, $\hat{H}_{int}^{\prime\prime}$ introduces transtions that involve two photons. 

## Emission of Light From An Excited Atom

In this section we study the transition from an initial particle state, $\mid a_i\rangle$, to a final particle state, $\mid a_f\rangle$ by emitting a photon. The the initial and final states for the photon-particle system are then

$$\begin{array}{l}
\mid i\rangle=\left|a_{i}\right\rangle\left|\ldots, n_{k \sigma}, \ldots\right\rangle \\
\mid f\rangle=\left|a_{f}\right\rangle\left|\ldots, n_{k \sigma}+1, \ldots\right\rangle
\end{array}\tag{2.1}.$$

The corresponding energy levels  follow the relation of $E_i>E_f$. In Part I we developed Fermi's golden rule based on perturbation theory, which states that the probability of $i\rightarrow f$ transition per unit time is given by

$$\begin{aligned}
\left(\frac{\text { trans. prob. }}{\text { time }}\right)=& \frac{2 \pi}{\hbar}\left|M_{\mathrm{fi}}\right|^{2} \delta\left(E_{\mathrm{f}}-E_{\mathrm{i}}\right) \\
M_{\mathrm{fi}}=&\left\langle f\left|\hat{H}^{\prime}\right| i\right\rangle+\sum_{I} \frac{\left\langle f\left|\hat{H}^{\prime}\right| I\right\rangle\left\langle I\left|\hat{H}^{\prime}\right| i\right\rangle}{E_{\mathrm{i}}-E_{\mathrm{I}}+i \eta} \\
&+\sum_{I, I I} \frac{\left\langle f\left|\hat{H}^{\prime}\right| I\right\rangle\left\langle I\left|\hat{H}^{\prime}\right| I I\right\rangle\left\langle I I\left|\hat{H}^{\prime}\right| i\right\rangle}{\left(E_{\mathrm{i}}-E_{\mathrm{I}}+i \eta\right)\left(E_{\mathrm{i}}-E_{\mathrm{II}}+i \eta\right)}+\ldots
\end{aligned}\tag{2.2}$$

where $\hat{H}^{\prime}$ is the perturbation Hamiltonian, and $I/II$ are complete sets of states. The terms other than the first term of $M_{fi}$ are called higher-order transition rate. But here we only consider the fist-order perturbation caused by $\hat{H}^{\prime}_{int}$, i.e.

$$\begin{aligned}
\left\langle f\left|\hat{H}_{\mathrm{int}}^{\prime}\right| i\right\rangle & \\
=&\left\langle a_{f}\left|\left\langle\ldots, n_{k \sigma}+1, \ldots\right|\right.\right.\\
&\left.\left[-\frac{e}{m c} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} \sqrt{\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k^{\prime}}}} \hat{\boldsymbol{p}} \cdot \boldsymbol{\varepsilon}_{\boldsymbol{k}^{\prime} \sigma^{\prime}}\left(\hat{a}_{\boldsymbol{k}^{\prime} \sigma^{\prime}} \mathrm{e}^{\mathrm{i} \boldsymbol{k}^{\prime} \cdot \boldsymbol{x}}+\hat{a}_{\boldsymbol{k}^{\prime} \sigma^{\prime}}^{\dagger} \mathrm{e}^{-\mathrm{i} \boldsymbol{k}^{\prime} \cdot \boldsymbol{x}}\right)\right]\right.\\
&\mid a_i\rangle\mid\ldots,n_{k\sigma},\ldots\rangle \\
=&-\frac{e}{m c} \sqrt{\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}}\left\langle a_{\mathbf{f}}\left|\hat{\boldsymbol{p}} \cdot \boldsymbol{\varepsilon}_{\boldsymbol{k} \sigma} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right| a_{\mathrm{i}}\right\rangle \\
& \times\left\langle\ldots, n_{k \sigma}+1, \ldots\left|\hat{a}_{\boldsymbol{k} \sigma}^{\dagger}\right| \ldots, n_{\boldsymbol{k} \sigma}, \ldots\right\rangle \\
=&-\frac{e}{m c} \sqrt{\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}}\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \cdot \boldsymbol{\varepsilon}_{\boldsymbol{k} \sigma} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right| a_{i}\right\rangle \sqrt{n_{\boldsymbol{k} \sigma}+1}.
\end{aligned}\tag{2.3}$$

Notice that in the second equivalence above, we only take into account the contribution of the photon with wave vector $\boldsymbol{k}$ and polarization $\sigma$. Since the newly emitted photon has an energy of $\hbar \omega_{\boldsymbol{k}}$, eqn.(2.2) *to the first order* now becomes

$$\begin{aligned}
\left(\frac{\text { trans. prob. }}{\text { time }}\right)_{\text {emission }}=& \frac{2 \pi}{\hbar}\left|\left\langle f\left|\hat{H}_{\text {int }}^{\prime}\right| i\right\rangle\right|^{2} \delta\left(E_{\mathrm{f}}-E_{\mathrm{i}}\right) \\
=& \frac{2 \pi}{\hbar}\left(\frac{e}{m c}\right)^{2}\left(\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}\right)\left(n_{k \sigma}+1\right) \\
& \times\left|\left\langle a_{\mathrm{f}}\left|\hat{p} \cdot \boldsymbol{\varepsilon}_{k \sigma} \mathrm{e}^{-\mathrm{i} k \cdot x}\right| a_{\mathrm{i}}\right\rangle\right|^{2} \\
& \times \delta\left(E_{a_{\mathrm{f}}}-E_{a_{\mathrm{i}}}+\hbar \omega_{k}\right).
\end{aligned}\tag{2.4}$$

Notice that when there is no photon in our system (i.e. $n_{k\sigma}=0$), the transition can still happen. This phenomenon is then referred as **spontaneous emission**. The $1$ in $n_{k\sigma}+1$ is the result of commutation rule; this is for the same reason we have $\frac{1}{2}$ in the zero-point energy of EM field[1].

## Lifetime of Excited States

Now we consider all the possible $\boldsymbol{k}$ and $\sigma$ in (2.3) to give an expression for the lifetime of state $i$, $\tau$, as

$$\begin{aligned}
\left(\frac{1}{\tau}\right)_{\mathrm{i} \rightarrow \mathrm{f}}=& \frac{2 \pi}{\hbar} \sum_{\boldsymbol{k}, \sigma}\left|\left\langle f\left|\hat{H}_{\mathrm{int}}^{\prime}\right| i\right\rangle\right|^{2} \delta\left(E_{a_{f}}-E_{a_{1}}+\hbar \omega_{k}\right) \\
=& \frac{4 \pi^{2} e^{2}}{m^{2} L^{3}} \sum_{\boldsymbol{k}, \sigma} \frac{1}{\omega_{k}}\left|\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \cdot \varepsilon_{k \sigma} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot x}\right| a_{\mathrm{i}}\right\rangle\right|^{2} \\
& \times \delta\left(E_{a_{\mathrm{f}}}-E_{a_{1}}+\hbar \omega_{k}\right).
\end{aligned}\tag{3.1}$$

At the limit of $L\rightarrow\infty$, we can replace the summation of wave vector with a integral by

$$\sum_{\mathbf{k}}=\frac{L^3}{(2\pi)^3}\int d\boldsymbol{k}\tag{3.2}.$$

The factor in front of the integral is a result from the periodic boundary condition, because PBC dictates that the allowable elements of wavevectors must satisfy the relation of 

$$k_iL=2\pi n_i\quad n_i=0,1,2,\ldots\quad i=x,y,z.\tag{3.3}$$

Each vector $\mathbf{n}=\{n_x,n_y,n_z\}$ reprents a normal mode of EM field. So the number of normal modes fall into the volume of $\Delta n_x\Delta n_y\Delta n_z$ at $(n_x,n_y,n_z)$ is just $L^3/(2\pi)^3\Delta k_x\Delta k_y\Delta k_z$. At the limit of $L\rightarrow \infty$, (3.2) holds.

Let us now choose the directions of polarization vectors $\boldsymbol{\varepsilon}_{\mathbf{k}\sigma}$ so that (3.1) can be largely simplified. If we choose the $\boldsymbol{\varepsilon}_{\mathbf{k}1}$ to be a direction perpendicular to $\langle a_i\mid\hat{\mathbf{p}}\mid a_f\rangle$, and $\mathbf{k}$ forms a angle of $\theta$ with $\langle a_i\mid\hat{\mathbf{p}}\mid a_f\rangle$ (see Figure 1), we have

$$\begin{aligned}
\sum_{\sigma=1,2}\left|\left\langle a_{\mathbf{f}}\left|\hat{\boldsymbol{p}} \cdot \varepsilon_{\boldsymbol{k} \sigma} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right| a_{\mathrm{i}}\right\rangle\right|^{2} &=\left|\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \cdot \boldsymbol{\varepsilon}_{\boldsymbol{k}_{2}} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot x}\right| a_{\mathrm{i}}\right\rangle\right|^{2} \\
&\substack{(1.5)\\=}\left|\boldsymbol{\varepsilon}_{\boldsymbol{k} 2} \cdot\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot x}\right| a_{\mathrm{i}}\right\rangle\right|^{2}
\end{aligned}\tag{3.4}$$

where the second equation in (1.5) is used again to swap the place of $\boldsymbol{\varepsilon}$ and $\boldsymbol{k}$. We also notice that the light emitted from an atom has energies of $\hbar \omega\approx10eV$, giving that 

$$\begin{aligned}
\boldsymbol{k} \cdot \boldsymbol{x} \approx \frac{2 \pi}{\lambda} a_{\mathrm{Bohr}} &=\frac{\hbar \omega}{\hbar c} a_{\mathrm{Bohr}} \\
&=\frac{10 \mathrm{eV} \frac{1}{2} \times 10^{-8} \mathrm{cm}}{1.97 \times 10^{-5} \mathrm{eV} \mathrm{cm}} \\
&=2.7 \times 10^{-3} \ll 1.
\end{aligned}$$

As a result the exponential factor $e^{-i\mathbf{k\cdot x}}\approx 1$, and eq.(3.4) reduces to

$$\sum_{\sigma=1,2}\left|\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{p}} \cdot \varepsilon_{k \sigma} \mathrm{e}^{-\mathrm{i} k \cdot x}\right| a_{\mathrm{i}}\right\rangle\right|^{2} \approx\left|\boldsymbol{\varepsilon}_{k 2} \cdot\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle\right|^{2}\tag{3.5}.$$

Eq.(3.5) is often referred as **dipole approximation** for the reasons we will discuss later. Similarly, we also have **magnetic dipole approximation** with $$e^{-i\mathbf{k\cdot x}}\approx 1-i\mathbf{k\cdot x}$$, and **electric quadrupole approximation** with $$e^{-i\mathbf{k\cdot x}}\approx 1-i\mathbf{k\cdot x}-\frac{1}{2}(\mathbf{k\cdot x})^2.$$

<p align="center">
  <img width="256" height="221" src="{{ site.url }}/images/polarization-vector.PNG">
</p>
<p style="text-align: center;">Figure 1. The choice of one of the polarization vectors. The angle theta represents the polar angle in k-space.</p>

From figure 1 it is easy to get 

$$||\varepsilon_{k 2}||\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle\left|\cos \left(90^{\circ}-\vartheta\right)\right|^{2}=\left|\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle\right|^{2} \sin ^{2} \vartheta,$$

and finally

$$\left(\frac{1}{\tau}\right)_{\mathrm{i} \rightarrow \mathrm{f}}=\frac{e^{2}}{2 \pi m^{2}} \int \mathrm{d}^{3} k \frac{1}{\omega_{k}}\left|\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle\right|^{2} \sin ^{2} \vartheta \delta\left(E_{a_{\mathrm{f}}}-E_{a_{\mathrm{i}}}+\hbar \omega_{k}\right)\tag{3.6}.$$

If we use spherical coordinate to do the integral and let $\omega_{fi}$ be the photon frequence that conserve energy, then

$$\begin{aligned}
\left(\frac{1}{\tau}\right)_{\mathrm{i} \rightarrow \mathrm{f}}=& \frac{e^{2} 2 \pi}{2 \pi m^{2} c^{3}} \int \mathrm{d} \omega_{k} \omega_{k}\left|\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle\right|^{2} \\
& \times \delta\left(E_{a_{\mathrm{f}}}-E_{a_{1}}+\hbar \omega_{k}\right) \int_{0}^{\pi} \sin ^{3} \vartheta \mathrm{d} \vartheta \\
=& \frac{4}{3} \frac{e^{2}}{m^{2} c^{3} \hbar} \omega_{\mathrm{fi}}\left|\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle\right|^{2}.
\end{aligned}\tag{3.7}$$

The matrix element $$\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle $$ can be cast in another form, i.e. 

$$\begin{aligned}
\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle &=\left\langle a_{\mathrm{f}}\left|m \frac{\mathrm{d} \boldsymbol{\hat{x}}}{\mathrm{d} t}\right| a_{\mathrm{i}}\right\rangle \\
&=-\frac{\mathrm{i}}{\hbar} m\left\langle a_{\mathrm{f}}\left|\hat{\boldsymbol{x}} \hat{H}_{\mathrm{mp}}-\hat{H}_{\mathrm{mp}} \hat{\boldsymbol{x}}\right| a_{\mathrm{i}}\right\rangle \\
&=-\frac{\mathrm{i} m}{\hbar}\left(E_{a_{\mathrm{i}}}-E_{a_{\mathrm{f}}}\right)\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{x}}| a_{\mathrm{i}}\right\rangle \\
&=-\mathrm{i} m \omega_{\mathrm{fi}}\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{x}}| a_{\mathrm{i}}\right\rangle.
\end{aligned}\tag{3.8}$$

The Heisenberg's equation of motion is used at the second equivalence, that is,

$$\frac{\mathrm{d} \hat{\boldsymbol{x}}}{\mathrm{d} t}=-\frac{\mathrm{i}}{\hbar}\left[\hat{\boldsymbol{x}}, \hat{H}_{\mathrm{mp}}\right]$$

Applying the trick in (3.8) we recognize that the momentum matrix element $$e\left\langle a_{\mathrm{f}}|\hat{\boldsymbol{p}}| a_{\mathrm{i}}\right\rangle$$ can be expressed as a matrix element of the dipole operator $e \hat{\boldsymbol{x}}$. By now the designations *dipole approximation and dipole radiation* introduced earlier should have become clear.

### The Hamiltonian for interaction btw the electron Spin and the EM field

Up to this point we neglect the interaction btw particle spin and EM field. To add it in our Hamiltonian, we first realize that the interaction energy of a magnetic momentum $\boldsymbol{\mu}$ and a magnetic field $\mathbf{B}$ is just

$$H^{\prime \prime \prime}=-\boldsymbol{\mu} \cdot \boldsymbol{B}\tag{3.8}$$

where $\boldsymbol{\mu}=(e \hbar / 2 m c) \boldsymbol{\sigma}$. Since $\mathbf{B}=\nabla\times\mathbf{A}$ we can quantize (3.8) as

$$\hat{H}^{\prime \prime \prime}=-\frac{\mathrm{i} e \hbar}{2 m c} \sum_{\boldsymbol{k}, \sigma} N_{\boldsymbol{k}} \boldsymbol{\sigma} \cdot\left(\hat{\boldsymbol{k}} \times \varepsilon_{\boldsymbol{k} \sigma}\right)\left[\hat{a}_{\boldsymbol{k} \sigma} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{r}}+\hat{a}_{\boldsymbol{k} \sigma}^{\dagger} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{r}}\right],$$

where $\hat{\mathbf{k}}=-i\nabla$. Acting $\hat{\mathbf{k}}$ on exponential factors gives

$$\hat{H}^{\prime \prime \prime}=-\frac{\mathrm{i} e \hbar}{2 m c} \sum_{\boldsymbol{k}, \sigma} N_{\boldsymbol{k}} \boldsymbol{\sigma} \cdot\left(\boldsymbol{k} \times \varepsilon_{\boldsymbol{k} \sigma}\right)\left[\hat{a}_{\boldsymbol{k} \sigma} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{r}}-\hat{a}_{\boldsymbol{k} \sigma}^{\dagger} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{r}}\right]\tag{3.9}.$$

## Adsorption of Photons

## Photon Scattering from Free Electrons

## Special Topics

## Conclusion

## References

[1] Greiner, Walter. Quantum Mechanics: Special Chapters. Berlin-New York: Springer, 1998.