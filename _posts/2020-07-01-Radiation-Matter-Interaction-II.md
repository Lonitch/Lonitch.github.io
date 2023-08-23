---
layout: post

title: A Pedastrian Approach to Radiation-Matter Interaction-Part II

date: 2020-07-05

Author: Sizhe

tags: [basics, quantum-field-theory]

toc: true

---

## TL;DR

This blog introduces the quantum theory of free electromagnetic field, a sequel to my QM in Hilbert space blog.<!--more-->

## Motivation/Bird's view

Needless to say, the Maxwell's equation set for electromagnetism is one of the most fundamental pillars that underspins so many branches of mordern physics. CERN has proven experimentally that Maxwell is right even at quantum-scale. However, we cannot apply classical Maxwell's equation in quantum field theory. Instead, we need to quantize the classical electromagnetic field in order to use the Hilbert-space formalism we developed in the part I. I should also admit that the quantization of electromagnetic fields could become nasty once we also take into account the interactions between different fields. Therefore, let us do one thing at a time and quantize the free electromagnetic field (free EM field) here.

We will start with the derivation of classical Hamiltonian of a free charge in a free electromagnetic field. We will then prove that the Hamiltonian gives classical equation of motions for the free charge using Hamiltonian equations. The **gauge invariance** will briefly be discussed along the way. When we are comfortable with the classical Hamiltonian, we can quantize the classical terms into operators to get quantum Hamiltonian. By solving the Schrodinger equation with the quantized Hamiltonian, we can show that the **gauge transformation** causes a phase change in the eigenfunctions/wavefunctions. To continue the discussion started in my previous blog, I will also show how the quantized EM field and Hilbert-space formalism could dance together with one caveat: the vanishing expectation value of the electric field operator $$\hat{\mathbf{E}}$$. We will solve this problem in the last part of this blog using the **coherent states** as the eigenstates to the free EM field. It turns out that the coherent state is also a convenient tool to solve simple problems related to the polaron theory.

## Classical Hamiltonian of Free EM Field
### Lagrangian and Hamiltonian of a charged particle
For a particle carrying charge $$e$$  in a free EM field, the force it experiences is described by Lorentz's law:

$$\boldsymbol{F}=e\left(\boldsymbol{E}+\frac{\boldsymbol{v}}{c} \times \boldsymbol{B}\right)\tag{1.1}$$

where $$\mathbf{E}$$ and $$\mathbf{B}$$ are electric and magnetic fields, respectively. Both fields in (1) are derivatives of potentials. Sometimes one finds it is more convenient to represent $$\mathbf{E}$$ and $$\mathbf{B}$$ using the potentials directly:

$$\boldsymbol{E}=-\nabla \phi-\frac{1}{c} \frac{\partial \boldsymbol{A}}{\partial t}, \quad \boldsymbol{B}=\nabla \times \boldsymbol{A}\tag{1.2}$$

where $$\phi$$ is electric potential and $$\mathbf{A}$$ is the magnetic potential. We should notice that $$\phi$$ is a **position-dependent potential**, i.e. $$\phi=\phi(\mathbf{r},t)$$, while $$\mathbf{A}$$ is a **velocity-dependent potential**. More on this later. $$c$$ is the light speed in (1.2). Putting (1.2) back into (1.1) we find

$$\boldsymbol{F}=e\left(-\nabla \phi-\frac{1}{c} \frac{\partial \boldsymbol{A}}{\partial t}+\frac{1}{c} \boldsymbol{v} \times(\boldsymbol{\nabla} \times \boldsymbol{A})\right)\tag{1.3}.$$

The task now is to rearrange (1.3) so that a derivative form of a potential becomes apparent at RHS. But (1.3) is a bit too bulky, and can simplify it using the following relation,

$$\boldsymbol{B} \times(\boldsymbol{\nabla} \times \boldsymbol{C})=\boldsymbol{\nabla}(\boldsymbol{B} \cdot \boldsymbol{C})-(\boldsymbol{B} \cdot \boldsymbol{\nabla}) \boldsymbol{C}-(\boldsymbol{C} \cdot \boldsymbol{\nabla}) \boldsymbol{B}-\boldsymbol{C} \times(\boldsymbol{\nabla} \times \boldsymbol{B})\tag{1.4}.$$

The relation (1.4) transforms the last term at RHS of (1.3) into

$$\boldsymbol{v} \times(\nabla \times \boldsymbol{A})=\nabla(\boldsymbol{v} \cdot \boldsymbol{A})-(\boldsymbol{v} \cdot \nabla) \boldsymbol{A}\tag{1.5}$$

since $$\boldsymbol{v}$$ is not explicit function of position. Also the total derivative of $$\mathbf{A}$$ is

$$
\frac{d\mathbf{A}}{dt}=\frac{\partial \mathbf{A}}{\partial t}+\frac{\partial \mathbf{A}}{\partial r_i}\frac{\partial r_i}{\partial t}=\frac{\partial \mathbf{A}}{\partial t}+(\boldsymbol{v}\cdot\nabla)\mathbf{A}\tag{1.6}.
$$

We can now use (1.5) and (1.6) to simplify (1.3) into

$$\boldsymbol{F}=e\left[-\nabla \phi+\frac{1}{c} \nabla(\boldsymbol{v} \cdot \boldsymbol{A})-\frac{1}{c} \frac{\mathrm{d} \boldsymbol{A}}{\mathrm{d} t}\right]\tag{1.7}.$$

Naively one might want to rearrange the RHS of (1.7) in to a from of $$-\partial U/\partial x$$ since that is what we learned from conservative forces. However, as I mentioned earlier $$\mathbf{A}$$ is a velocity-dependent potential, and $$\mathbf{F}$$ is dependent on particle's velocity too. Therefore, the Lorentz force $$\mathbf{F}$$ is **not a conservative force**. In classical mechanics, a non-conservative force $$Q_j$$ is related to its generating potential $$U$$ by

$$Q_{j}\left(q_{1}, \ldots, q_{n} ; \dot{q}_{1}, \ldots, \dot{q}_{n} ; t\right)=-\frac{\partial U}{\partial q_{j}}+\frac{d}{d t} \frac{\partial U}{\partial \dot{q}_{j}}\tag{1.8},$$

with $$q_i$$ being the generalized coordinates of a classical system. The Lagrangian $$L$$ of a particle in $$U$$ is then $$L=T-U$$ with $$T$$ being the kinetic energy of the particle.

We shall now cast (1.8) into a form similiar to (1.8) to get $$U$$ for Lorentz forces so that we later derive an expression for the Lagrangian. To do this, let us first use a trick to rewrite $$\frac{d\mathbf{A}}{dt}$$ as

$$
\frac{d\mathbf{A}}{dt}=\frac{d}{dt}\nabla_{\boldsymbol{v}}(\mathbf{A}\cdot\boldsymbol{v})\tag{1.9}.
$$

Using (1.9) it is obvious now that (1.7) can be written as

$$\mathbf{F}=-\nabla\left(e \phi-\frac{e}{c} \boldsymbol{v} \cdot \mathbf{A}\right)+\frac{\mathrm{d}}{\mathrm{d} t} \nabla_{\boldsymbol{v}}\left(e \phi-\frac{e}{c} \boldsymbol{v} \cdot \mathbf{A}\right)\tag{1.10}.$$

The addition of $$e\phi$$ in the last term at the RHS of (1.9) is right because $$\phi$$ is not velocity-dependent. Comparing (1.10) with (1.8) we conclude that the generating potential of Lorentz forces is

$$
U=e\phi-\frac{e}{c}\boldsymbol{v}\cdot\mathbf{A}\tag{1.11}.
$$

Consequently, the Lagrangian for a charge particle in free EM field is just

$$L=\frac{1}{2} m \boldsymbol{v}^{2}-e \phi+\frac{e}{c} \boldsymbol{v} \cdot \mathbf{A}\tag{1.12}.$$

If we use generalized coordinates $$q_i$$(=$$r_i$$ in this case) in (1.12), we obtain

$$
L=\frac{1}{2}m\sum_i\dot{q}_i^2-e\phi(q_i,t)+\frac{e}{c}\sum_i \dot{q}_iA_i\tag{1.13}.
$$

From (1.13) we immediately get the generalized momentum $$p_i$$ to be

$$
p_i=\frac{\partial L}{\partial \dot{q}_i}=m\dot{q_i}+\frac{e}{c}A_i\tag{1.14}.
$$

Now we convert the Lagrangian into Hamiltonian using Legendre transformation,i.e.

$$
H=\sum_ip_i\dot{q}_i-L=\frac{1}{2}m\boldsymbol{v}^2+e\phi=\frac{1}{2m}(\boldsymbol{p}-\frac{e}{c}\mathbf{A})^2+e\phi\tag{1.15}
$$

where (1.14) is used at the third equivelence of (1.15).

### Hamiltonian equations in EM field
We are now ready to write down the Hamiltinian equations using (1.15) and the relations below
$$\begin{aligned}
\frac{\mathrm{d} p_{x}}{\mathrm{d} t} &=-\frac{\partial H}{\partial x}, \quad \frac{\mathrm{d} p_{y}}{\mathrm{d} t}=-\frac{\partial H}{\partial y}, \quad \frac{\mathrm{d} p_{z}}{\mathrm{d} t}=-\frac{\partial H}{\partial z} \\
\frac{\mathrm{d} x}{\mathrm{d} t} &=\frac{\partial H}{\partial p_{x}}, \quad \frac{\mathrm{d} y}{\mathrm{d} t}=\frac{\partial H}{\partial p_{y}}, \quad \frac{\mathrm{d} z}{\mathrm{d} t}=\frac{\partial H}{\partial p_{z}}.
\end{aligned}\tag{1.16}$$

We will show in this section that (1.16) produces Newton's equations of motion for charged particle in free EM field,i.e.

$$m \frac{\mathrm{d}^{2} \boldsymbol{r}}{\mathrm{d} t^{2}}=e\left(\boldsymbol{E}+\frac{1}{c} \boldsymbol{v} \times \boldsymbol{B}\right)\tag{1.17},$$

where $$\boldsymbol{r}=(x,y,z)$$. Substituting (1.15) into (1.16) we find for x-component of momentum $$\boldsymbol{p}$$

$$\begin{aligned}
\frac{\mathrm{d} p_{x}}{\mathrm{d} t}=& \frac{e}{m c}\left[\left(p_{x}-\frac{e}{c} A_{x}\right) \frac{\partial A_{x}}{\partial x}+\left(p_{y}-\frac{e}{c} A_{y}\right) \frac{\partial A_{y}}{\partial x}\right.\\
&\left.+\left(p_{z}-\frac{e}{c} A_{z}\right) \frac{\partial A_{z}}{\partial x}\right]-e \frac{\partial \phi}{\partial x}
\end{aligned}\tag{1.18}$$

and

$$\frac{\mathrm{d} \mathbf{r}}{\mathrm{d} t}=\frac{1}{m}\left(\boldsymbol{p}-\frac{e}{c} \mathbf{A}\right)\tag{1.19}.$$

The equation (1.19) implies that 

$$\frac{\mathrm{d} p_{x}}{\mathrm{d} t}=m \frac{\mathrm{d}^{2} x}{\mathrm{d} t^{2}}+\frac{e}{c} \frac{\mathrm{d} A_{x}}{\mathrm{d} t}\tag{1.20}.$$

Substituting (1.19) and (1.20) back into (1.18) gives

$$m \frac{\mathrm{d}^{2} x}{\mathrm{d} t^{2}}+\frac{e}{c} \frac{\mathrm{d} A_{x}}{\mathrm{d} t}=\frac{e}{c} \frac{\mathrm{d} x}{\mathrm{d} t} \frac{\partial A_{x}}{\partial x}+\frac{e}{c} \frac{\mathrm{d} y}{\mathrm{d} t} \frac{\partial A_{y}}{\partial x}+\frac{e}{c} \frac{\mathrm{d} z}{\mathrm{d} t} \frac{\partial A_{z}}{\partial x}-e \frac{\partial \phi}{\partial x}\tag{1.21}.$$

In the equation (1.21) the coordinate variables (i.e. $$x,y,z$$) are only dependent on $$t$$, thus we have 

$$\frac{\mathrm{d} A_{x}}{\mathrm{d} t}=\frac{\partial A_{x}}{\partial t}+\frac{\partial A_{x}}{\partial x} \frac{\mathrm{d} x}{\mathrm{d} t}+\frac{\partial A_{x}}{\partial y} \frac{\mathrm{d} y}{\mathrm{d} t}+\frac{\partial A_{x}}{\partial z} \frac{\mathrm{d} z}{\mathrm{d} t}$$

and

$$\begin{aligned}
&m \frac{\mathrm{d}^{2} x}{\mathrm{d} t^{2}} \\
&=-\frac{e}{c} \frac{\partial A_{x}}{\partial t}-e \frac{\partial \phi}{\partial x}+\frac{e}{c}\left[\frac{\mathrm{d} y}{\mathrm{d} t}\left(\frac{\partial A_{y}}{\partial x}-\frac{\partial A_{x}}{\partial y}\right)+\frac{\mathrm{d} z}{\mathrm{d} t}\left(\frac{\partial A_{z}}{\partial x}-\frac{\partial A_{x}}{\partial z}\right)\right]\\
&=e E_{x}+\frac{e}{c}\left(\frac{\mathrm{d} y}{\mathrm{d} t} B_{z}-\frac{\mathrm{d} z}{\mathrm{d} t} B_{y}\right)
\end{aligned}\tag{1.22}$$

This is just (1.17) with explicit indices.

### Gauge invariance
The potentials can be chosen at will by using the following transformation:

$$\boldsymbol{A}^{\prime}=\boldsymbol{A}+\boldsymbol{\nabla} f \quad \text { and } \quad \boldsymbol{\phi}^{\prime}=\boldsymbol{\phi}-\frac{1}{c} \frac{\partial f}{\partial t}\tag{1.23}.$$

It is easy to prove that new potentials in (1.23) automatically satisfy (1.17) if we use (1.2) to calculate $$\mathbf{E}^{\prime}$$ and $$\mathbf{B}^{\prime}$$. This property of Hamiltonian equation is called **gauge invariance**. Notice that the form of Hamiltonian $$H$$ is changed under the transformation (1.23). For instance, we can transform $$A=0$$ and $$\phi=-E x$$ into $$A^{\prime}=(-c E t, 0,0)$$ and $$\phi^{\prime}=0$$ according to (1.23), but the Hamiltonian function changes from the total energy of the particle to the kinetic energy. To make the calculation easier, people usually choose specific $$\mathbf{A}$$ so the **Coulomb gauge**, $$\nabla\cdot\mathbf{A}=0,$$ is satisfied.

## Quantization of Classical Hamiltonian
As a continuity of our discussion in the previous section, we proceed to quantize the classical Hamiltonian derived in Eq.(1.15). The quantization process will be divided into two parts. The first part comprises only the quantization of particle momentum. We can show that the Schrodinger equation using the half-quantized Hamiltonian has the gauge invariance with eigenfunctions shifted by a phase factor. To maintain the gauge invariance in the expectation values we will see that the momentum operator is no longer corresponding to a classical observable anymore. The second part is the quantization of the EM fields (not charged particles!!), where the creation and annihilation operators become powerful tools to describe a quantum system with the presence of EM fields.

### Quantize particle Hamiltonian
If we replace the canonical momentum $$\boldsymbol{p}$$ with the operator $$\hat{p}=(\hbar/i)\nabla$$ in the classical Hamiltonian, Eq. (1.15) becomes

$$\hat{H}=\frac{1}{2 m}\left(\frac{\hbar}{\mathrm{i}} \nabla-\frac{e}{c} \boldsymbol{A}\right)^{2}+e \phi\tag{2.1}.$$

Expanding (2.1) gives

$$\hat{H}=-\frac{\hbar^{2}}{2 m} \Delta+\frac{\mathrm{i} e \hbar}{m c} \boldsymbol{A} \cdot \nabla+\frac{\mathrm{i} e \hbar}{2 m c}(\nabla \cdot \boldsymbol{A})+\frac{e^{2}}{2 m c^{2}} \boldsymbol{A}^{2}+e \phi\tag{2.2}.$$

Notice that in (2.1) $$\nabla$$ and $$\mathbf{A}$$ are not commuting. Now if we choose a $$\mathbf{A}$$ that satisfy the Coulomb gauge, $$\nabla\cdot\mathbf{A}=0$$, eqn.(2.2) can be reduced into 

$$\hat{H}=\frac{\hat{\boldsymbol{p}}^{2}}{2 m}+e \phi-\frac{e}{m c} \boldsymbol{A} \cdot \hat{\boldsymbol{p}}+\frac{e^{2}}{2 m c^{2}} \boldsymbol{A}^{2}\tag{2.3}.$$

Using (2.1) the Shrodinger equation becomes

$$\left\{\frac{[\hat{p}-(e / c)\mathbf{A}]^{2}}{2 m}+e \phi\right\} \psi=\mathrm{i} \hbar \frac{\partial}{\partial t} \psi\tag{2.4}.$$

Eq.(2.4) is gauge invariant. To see this, we first notice that the gauge transformation in (1.23) can be interpreted as an arbitrary shift of "*potential energy reference point*". A gauge-invariant equation must remain its format after the transformation. In the case of (2.4) the replacement of $$\mathbf{A}$$ and $$\phi$$ with $$\mathbf{A}^{\prime}$$ and $$\phi^{\prime}$$ from (1.23) gives

$$\left\{\frac{[\hat{p}-(e / c)\mathbf{A}^{\prime}]^{2}}{2 m}+e \phi^{\prime}\right\} \psi^{\prime}=\mathrm{i} \hbar \frac{\partial}{\partial t} \psi^{\prime}\tag{2.5}.$$

The task now is to find $$\psi^{\prime}$$ that satisfies (2.5). If we use the asatz of 

$$\psi^{\prime}=exp(\frac{ie}{\hbar c}f)\psi\tag{2.6},$$

and substitute (1.23) in (2.5), one can show that, after some tedious rearrangements, (2.4) is recovered from (2.5). Thus, we conclude that **the eigenfunction of (2.4) is shifted by a phase factor after the gauge transformation of EM potentials**. In fact, the phase shift in (2.6) does not change the expectation value of operators at all, since those expectations are calaculated using the "sandwhich" formalism. For instance, the expectation of Hamiltonian operator is

$$
\langle \psi\mid\hat{H}\mid \psi\rangle=\langle\psi^{\prime}\mid\hat{H}\mid\psi^{\prime}\rangle=\langle\psi\mid e^{-\frac{ie}{\hbar c}f}\hat{H}e^{\frac{ie}{\hbar c}f}\mid \psi\rangle.
$$

Also from (1.19) we find **the genuine kinetic momentum operator for particle** in EM field is

$$
\hat{\mathcal{P}}=\frac{\hbar}{i}\nabla-\frac{e}{c}\mathbf{A}\tag{2.7}.
$$

Applying (2.7) after the gauge transformation on the state (2.6) gives

$$\begin{aligned}
\left(\hat{\boldsymbol{p}}-\frac{e}{c} \boldsymbol{A}^{\prime}\right) \psi^{\prime} &=\left(\frac{\hbar}{\mathrm{i}} \nabla-\frac{e}{c} \boldsymbol{A}-\frac{e}{c} \nabla f\right) \psi \exp \left(\frac{\mathrm{i} e}{\hbar c} f\right) \\
&=\exp \left(\frac{\mathrm{i} e}{\hbar c} f\right)\left(\frac{\hbar}{\mathrm{i}} \nabla+\frac{e}{c} \nabla f-\frac{e}{c} \boldsymbol{A}-\frac{e}{c} \nabla f\right) \psi \\
&=\exp \left(\frac{\mathrm{i} e}{\hbar c} f\right)\left(\frac{\hbar}{\mathrm{i}} \nabla-\frac{e}{c} \boldsymbol{A}\right) \psi
\end{aligned}\tag{2.8}.$$

Eq.(2.8) implies that the expectation $$\langle\psi^{\prime}\mid\hat{\mathcal{P}}\mid\psi^{\prime}\rangle$$ is invariant under gauge transformation instead of that of $$\hat{p}$$. Hence, if in a physical problem the momentum operator $$\hat{p}$$ appears, **the operator $$\hat{p}$$ must always be replaced by $$\hat{\boldsymbol{p}}-(e / c) \boldsymbol{A}$$ if electromagnetic fields are present**. *This is the only way to guarantee gauge invariance in quantum theory*[1].

### Quantize the EM field
To quantize the EM field we take a step back to the classical world where we first solve for $$\mathbf{A}$$ in the classical Maxwell's equations. The solution will be a Fourier series with each Fourier coefficient being the **field coordiantes**. This classical $$\mathbf{A}$$ will be later used to calculate the energy of EM fields. The calculated classical energy is then quantized into **field Hamiltonian operator** by introducing the creation and annihilation operators. With quantized Hamiltonian, it is trivial to derive quantized $$\mathbf{A}$$.

Let us reproduce Maxwell's equations once again in SI units to start our journey:

$$\begin{aligned}
\boldsymbol{\nabla} \times \boldsymbol{E}+\frac{1}{c} \frac{\partial \boldsymbol{B}}{\partial t} &=0 \\
\boldsymbol{\nabla} \cdot \boldsymbol{D} &=4 \pi \varrho \\
\boldsymbol{\nabla} \times \boldsymbol{H}-\frac{1}{c} \frac{\partial \boldsymbol{D}}{\partial t} &=\frac{4 \pi}{c} \boldsymbol{j} \\
\boldsymbol{\nabla} \cdot \boldsymbol{B} &=0.
\end{aligned}\tag{2.9}$$

Taking time derivative of the second equation and divergence of the third equation gives the continuity equation,

$$
\frac{\partial \rho}{\partial t}+\nabla\cdot\boldsymbol{j}=0\tag{2.10}.
$$

In a free EM field, $$\mathbf{H=B}$$ and $$\mathbf{E=D}$$. So using (1.2) in the second and the third equation of (.9) gives

$$\begin{aligned}
\nabla \times(\nabla \times \boldsymbol{A})+\frac{1}{c^{2}} \frac{\partial^{2} \boldsymbol{A}}{\partial t^{2}}+\frac{1}{c} \boldsymbol{\nabla} \frac{\partial \phi}{\partial t} &=\frac{4 \pi}{c} \boldsymbol{j}, \\
\frac{1}{c} \frac{\partial}{\partial t} \boldsymbol{\nabla} \cdot \boldsymbol{A}+\boldsymbol{\nabla}^{2} \phi &=-4 \pi \varrho.
\end{aligned}\tag{2.11}$$

Because the EM field is free, we have $$\boldsymbol{j}=\rho=0$$. Further we can simplify (2.11) by using the following relation,

$$\boldsymbol{\nabla} \times(\boldsymbol{\nabla} \times \boldsymbol{A})=\boldsymbol{\nabla}(\boldsymbol{\nabla} \cdot \boldsymbol{A})-\boldsymbol{\nabla}^{2} \boldsymbol{A},\tag{2.12}$$

and (2.11) becomes

$$\begin{aligned}
\boldsymbol{\nabla}(\boldsymbol{\nabla} \cdot \boldsymbol{A})-\boldsymbol{\nabla}^{2} \boldsymbol{A}+\frac{1}{c^{2}} \frac{\partial^{2} \boldsymbol{A}}{\partial t^{2}}+\frac{1}{c} \boldsymbol{\nabla} \frac{\partial \phi}{\partial t} &=0, \\
\frac{1}{c} \frac{\partial}{\partial t} \boldsymbol{\nabla} \cdot \boldsymbol{A}+\boldsymbol{\nabla}^{2} \phi &=0.
\end{aligned}\tag{2.13}$$

The (2.13) is still too bulky. Remember that Maxwell's equation set is gauge invariant with $$\mathbf{A}$$ and $$\phi$$ being non-unique. We can perform a gauge transformation to reduce (2.13) to a simpler form. In this case we choose a gauge $$f$$ to fulfill the **Lorentz gauge**,

$$\nabla \cdot \boldsymbol{A}^{\prime}+\frac{1}{c} \frac{\partial \phi^{\prime}}{\partial t}=0.\tag{2.14}$$

Using (1.23) in (2.14) to give the equation to solve for $$f$$,

$$\nabla^{2} f-\frac{1}{c^{2}} \frac{\partial^{2}}{\partial t^{2}} f=-\left(\nabla \cdot \mathbf{A}+\frac{1}{c} \frac{\partial \phi}{\partial t}\right)\tag{2.15}.$$

Since (2.15) is pretty much always solvable, we are not going to give the explicit form of $$f$$ here. Replace $$\mathbf{A}$$ and $$\phi$$ with the primed ones and use (2.14) in (2.13) to give

$$\begin{aligned}
-\boldsymbol{\nabla}^{2} \boldsymbol{A}^{\prime}+\frac{1}{c^{2}} \frac{\partial^{2} \boldsymbol{A}^{\prime}}{\partial t^{2}} &=0, \\
(\boldsymbol{\nabla}^{2}-\frac{1}{c^2}\frac{\partial^2}{\partial t^2})\phi^{\prime} &=0.
\end{aligned}\tag{2.16}$$

We can get rid of $$\phi$$ by using a gauge that is more strict than Lorentz gauge, **Coulomb gauge**,

$$\begin{aligned}
\boldsymbol{\nabla} \cdot \boldsymbol{A}^{\prime}(\boldsymbol{r}, t) &=0 \\
\phi^{\prime}(\boldsymbol{r}, t) &=0.
\end{aligned}\tag{2.17}$$

Thus, (2.16) is reduced to

$$\begin{aligned}
\nabla^{2} \mathbf{A}-\frac{1}{c^{2}} \frac{\partial^{2} \mathbf{A}}{\partial t^{2}} &=0 \\
\nabla \cdot \mathbf{A} &=0 \\
\phi &=0,
\end{aligned}\tag{2.18}$$

where the prime signs are dropped for convenience. For people who have some experiences with PDE, the first equation of (2.18) is a "wave equation" and its solution has a form of

$$\begin{aligned}
\boldsymbol{A}(\boldsymbol{r}, t) &=2 \boldsymbol{\varepsilon}\left|\boldsymbol{A}_{0}\right| \cos (\boldsymbol{k} \cdot \boldsymbol{r}-\omega t+\alpha) \\
&=\boldsymbol{A}_{0} \mathrm{e}^{\mathrm{i}(\boldsymbol{k} \cdot \boldsymbol{r}-\omega t)}+\boldsymbol{A}_{0}^{*} \mathrm{e}^{-\mathrm{i}(\boldsymbol{k} \cdot \boldsymbol{r}-\omega t)} \\
&=\boldsymbol{A}_{0} \mathrm{e}^{\mathrm{i}(\boldsymbol{k} \cdot \boldsymbol{r}-\omega t)}+\mathrm{c}.\mathrm{c}
\end{aligned}\tag{2.19}$$

Here $$\boldsymbol{A}_{0}=\mid\boldsymbol{A}_{0}\mid \boldsymbol{\varepsilon} \mathrm{e}^{\mathrm{i} \alpha}$$ is the amplitude and "c.c." stands for the "complex conjugate" of the first term. It is easy to see that $$\boldsymbol{k}\perp\mathbf{A}_0$$ to satify the second equation in (2.18), and 

$$\omega=\mid\boldsymbol{k}\mid c\tag{2.20}.$$

$$\boldsymbol{\varepsilon}$$ is sometimes called as the "transverse vector", because it represents the directions at which EM waves vibrate, and is perpendicular to the propagation direction $$\boldsymbol{k}$$. The corresponding electric and magnetic fields are then

$$\begin{array}{l}
\boldsymbol{E}=-2 k\left|\boldsymbol{A}_{0}\right| \boldsymbol{\varepsilon} \sin (\boldsymbol{k} \cdot \boldsymbol{r}-\omega t+\alpha) \\
\boldsymbol{B}=-2\left|\boldsymbol{A}_{0}\right| \boldsymbol{k} \times \boldsymbol{\varepsilon} \sin (\boldsymbol{k} \cdot \boldsymbol{r}-\omega t+\alpha)
\end{array}\tag{2.21}.$$

Up to this point we are only dealing with the classical picture of the field $$\mathbf{A}$$, but the quantized picuture must come into play if we consider the field in a finite space with periodic boundary condition (similar situation is found when we put a free quantum particle into a 3D box). Imagine we confine the free EM field in a 3D box with edge length being $$L$$, **the field $$\mathbf{A}$$ is the superposition of various normal modes** $$\mathbf{A}_{\mathbf{k}\sigma}$$ with their wave vectors being

$$\boldsymbol{k}=\left(k_{x}, k_{y}, k_{z}\right)=\frac{2 \pi}{L}\left\{n_{1}, n_{2}, n_{3}\right\}, \quad n_{1}, n_{2}, n_{3} \in \mathbf{Z}\tag{2.22}$$

due to the periodic boundary condition. Inspired by (2.19) the solution for a **normal mode** should have a form of 

$$\boldsymbol{A}_{\boldsymbol{k} \sigma}=N_{k} \boldsymbol{\varepsilon}_{\boldsymbol{k} \sigma} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}} \quad(\sigma=1,2)\tag{2.23},$$

where $$N_k$$ is a normalization constant, and $$\sigma$$ represents the transverse directions, which are perpendicular to each other,i.e.

$$\boldsymbol{\varepsilon}_{\boldsymbol{k} \sigma} \cdot \boldsymbol{\varepsilon}_{\boldsymbol{k} \sigma^{\prime}}=\delta_{\sigma \sigma^{\prime}}.$$

With (2.23) we can write $$\mathbf{A}$$ in the form of

$$\mathbf{A}=\sum_{\boldsymbol{k}} \sum_{\sigma=1,2} N_{k} \varepsilon_{\boldsymbol{k} \sigma}\left(a_{\boldsymbol{k} \sigma}(t) \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}+a_{\boldsymbol{k} \sigma}^{*}(t) \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right)\tag{2.24}, $$

with

$$a_{\boldsymbol{k} \sigma}(t)=a_{\boldsymbol{k} \sigma}(0) \mathrm{e}^{-\mathrm{i} \omega_{k} t}\tag{2.25a},$$

$$\frac{\mathrm{d} a_{\boldsymbol{k} \sigma}(t)}{\mathrm{d} t}=-\mathrm{i} \omega_{\boldsymbol{k}} a_{\boldsymbol{k} \sigma}(t)\tag{2.25b}.$$

There are some nuances to derive (2.24) and (2.25), but we are not going to discuss them since they are off the topic here. A good reference for that is Prof. Walter's *Quantum Mechanics: Special Chapters*[2]. However, pay close attention to the signs in front of $$i$$ in (2.24), the sequence of which avoids the double counting of wave vectors. The factor of $$e^{-i\omega_k t}$$ in (2.25) is a result of transverse vibrations of each normal mode vibrate with the same frequency.

From the classical electrodynamics we know the energy of EM field is given by

$$\begin{aligned}
H &=\frac{1}{8 \pi} \int_{L^{3}} \mathrm{d}^{3} x\left(\boldsymbol{E}^{2}+\boldsymbol{B}^{2}\right) \\
&=\frac{1}{8 \pi} \int_{L^{3}} \mathrm{d}^{3} x\left[\frac{1}{c^{2}} \frac{\partial \boldsymbol{A}}{\partial t} \cdot \frac{\partial \boldsymbol{A}^{*}}{\partial t}+(\boldsymbol{\nabla} \times \boldsymbol{A}) \cdot\left(\boldsymbol{\nabla} \times \boldsymbol{A}^{*}\right)\right].
\end{aligned}\tag{2.26}$$

Substituing (2.24) into (2.26) gives

$$H=\sum_{\boldsymbol{k}, \sigma} \frac{\omega_{k}^{2}}{4 \pi c^{2}} N_{k}^{2} L^{3}\left(a_{\boldsymbol{k} \sigma} a_{\boldsymbol{k} \sigma}^{*}+a_{\boldsymbol{k} \sigma}^{*} a_{\boldsymbol{k} \sigma}\right)\tag{2.27}.$$

If we let the normalization constant $$N_k$$ to be

$$N_{k}=\sqrt{\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}},$$

We find (2.27) becomes equal to a sum of energies corresponding to uncoupled "**harmonic field oscillators**",

$$H=\frac{1}{2} \sum_{\boldsymbol{k}, \sigma} \hbar \omega_{k}\left(a_{\boldsymbol{k} \sigma} a_{\boldsymbol{k} \sigma}^{*}+a_{\boldsymbol{k} \sigma}^{*} a_{\boldsymbol{k} \sigma}\right)\tag{2.28}.$$

Notice that we did not combine the terms in the bracket above, even though they are still scalars. The reason for this will become clear once we introduce creation and annihilation operators.

Now we introduce quantization. The form of (2.28) motivates us to proceed in a manner that is similar to the quantization of phonons of the quantized oscillators, i.e. designating $$a_{\boldsymbol{k}\sigma}$$ to be 

$$\hat{a}_{\boldsymbol{k}\sigma}$$ and $$a^*_{\boldsymbol{k}\sigma}$$ to be $$\hat{a}^{\dagger}_{\boldsymbol{k}\sigma}.$$ 

We require that

$$\left[\hat{a}_{\boldsymbol{k} \sigma}, \hat{a}_{\boldsymbol{k}^{\prime} \sigma^{\prime}}^{\dagger}\right]_{-}=\delta_{\boldsymbol{k} \boldsymbol{k}^{\prime}} \delta_{\sigma \sigma^{\prime}}\tag{2.29}.$$

and

$$\left[\hat{a}_{\boldsymbol{k} \sigma}, \hat{a}_{\boldsymbol{k}^{\prime} \sigma^{\prime}}\right]_{-}=\left[\hat{a}_{\boldsymbol{k} \sigma}^{\dagger}, \hat{a}_{\boldsymbol{k}^{\prime} \sigma^{\prime}}^{\dagger}\right]_{-}=0.$$

Then the Hamiltonian becomes

$$\begin{aligned}
\hat{H} &=\sum_{\boldsymbol{k}, \sigma} \frac{\hbar \omega_{k}}{2}\left(\hat{a}_{\boldsymbol{k} \sigma}^{\dagger} \hat{a}_{\boldsymbol{k} \sigma}+\hat{a}_{\boldsymbol{k} \sigma} \hat{a}_{\boldsymbol{k} \sigma}^{\dagger}\right) \\
&=\sum_{\boldsymbol{k}, \sigma} \hbar \omega_{k}\left(\hat{a}_{\boldsymbol{k} \sigma}^{\dagger} \hat{a}_{\boldsymbol{k} \sigma}+\frac{1}{2}\right),
\end{aligned}\tag{2.30}$$

with the **zero-point energy of EM field** defined as

$$\sum_{k, \sigma} \frac{\hbar \omega_{k}}{2}.$$

This zero-point energy is infinite but it plays no role in many physical problems.

### Eigenstates of EM Fields
We are now equipped with quantized EM field and ready to use the Hamiltonian operator derived in (2.30) with Hilber-space formalism (bra-ket formalism). To start with we first define the eigenstate to $$\hat{H}$$ using the direct product method developed in the part I. Let $$\mid n_{\boldsymbol{k}\sigma}\rangle$$ represent the state of $$n_{\boldsymbol{k}\sigma}$$ *EM field oscillator*, or **photons**. Because the EM field is a superposition of *normal modes* of field oscillator, we can represent the eigenstates of EM field as a direct product of *field oscillator states*, i.e.

$$
\left|\ldots, n_{k \sigma}, \ldots, n_{k^{\prime} \sigma^{\prime}}, \ldots\right\rangle=\ldots\left|n_{k \sigma}\right\rangle \ldots\left|n_{k^{\prime} \sigma^{\prime}}\right\rangle \ldots\tag{2.31}
$$

With the following two relations,

$$\begin{array}{l}
\hat{a}_{\boldsymbol{k} \sigma}\left|\ldots, n_{\boldsymbol{k} \sigma}, \ldots\right\rangle=\sqrt{n_{\boldsymbol{k} \sigma}}\left|\ldots, n_{\boldsymbol{k} \sigma}-1, \ldots\right\rangle \\
\hat{a}_{\boldsymbol{k} \sigma}^{\dagger}\left|\ldots, n_{\boldsymbol{k} \sigma}, \ldots\right\rangle=\sqrt{n_{\boldsymbol{k} \sigma}+1}\left|\ldots, n_{k \sigma}+1, \ldots\right\rangle
\end{array}\tag{2.32}$$

we derive that

$$\begin{aligned}
\hat{H}\left|\ldots, n_{k \sigma}, \ldots\right\rangle &=\sum_{\boldsymbol{k}, \sigma} \hbar \omega_{k}\left(\hat{a}_{k \sigma}^{\dagger} \hat{a}_{\boldsymbol{k} \sigma}+\frac{1}{2}\right)\left|\ldots, n_{\boldsymbol{k} \sigma}, \ldots\right\rangle \\
&=\sum_{\boldsymbol{k}, \sigma} \hbar \omega_{k}\left(\hat{n}_{\boldsymbol{k} \sigma}+\frac{1}{2}\right)\left|\ldots, n_{\boldsymbol{k} \sigma}, \ldots\right\rangle \\
&=\sum_{\boldsymbol{k}, \sigma} \hbar \omega_{k}\left(n_{\boldsymbol{k} \sigma}+\frac{1}{2}\right)\left|\ldots, n_{\boldsymbol{k} \sigma}, \ldots\right\rangle \\
&=E\left|\ldots, n_{\boldsymbol{k} \sigma}, \ldots\right\rangle.
\end{aligned}\tag{2.33}$$

Therefore, we can define a "**particle number opperator**" $$\hat{N}_{\mathbf{k}\sigma}$$ as

$$\begin{aligned}
\hat{N}_{\boldsymbol{k} \sigma}\left|n_{\boldsymbol{k} \sigma}\right\rangle & \equiv \hat{a}_{\boldsymbol{k} \sigma}^{\dagger} \hat{a}_{\boldsymbol{k} \sigma}\left|n_{\boldsymbol{k} \sigma}\right\rangle \\
&=n_{\boldsymbol{k} \sigma}\left|n_{\boldsymbol{k} \sigma}\right\rangle \quad\left(n_{k \sigma}=0,1,2, \ldots\right).
\end{aligned}\tag{2.34}$$

The detailed derivation of (2.32) could be found in my second quantization blog [here](https://lonitch.github.io/First-Second-Quantization/). The particle number operator could further help us to define the **momentum operator of EM field** as

$$\hat{\boldsymbol{p}}=\sum_{\boldsymbol{k}, \sigma} \hbar \boldsymbol{k} \hat{a}_{\boldsymbol{k} \sigma}^{\dagger} \hat{a}_{\boldsymbol{k} \sigma}=\sum_{\boldsymbol{k}, \sigma} \hbar \boldsymbol{k} \hat{n}_{\boldsymbol{k} \sigma}\tag{2.35},$$

which is derived from the classical momentum of EM field,

$$\boldsymbol{p}=\int_{L^{3}} \mathrm{d}^{3} x \frac{1}{4 \pi c} \boldsymbol{E} \times \boldsymbol{B}.$$


## Coherent States of EM Fields
With the Hamiltonian of EM field quantized it is trivial to quantize the classical electric and magnetic fields, $$\hat{\mathbf{E}}$$ and $$\hat{\mathbf{B}}$$. However, we shall now see that the expectation of $$\hat{\mathbf{E}}$$ is not the classical results shown in (2.21) using the "occupation number" states desribed in the previous subsection.

Eq.(2.24) (1.2), and Coulomb gauge condition indicate that 

$$\begin{aligned}
\boldsymbol{E} &=-\frac{1}{c} \frac{\partial \boldsymbol{A}}{\partial t}=-\frac{1}{c} \frac{\partial}{\partial t} \sum_{\boldsymbol{k}, \sigma} \sqrt{\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}} \varepsilon_{\boldsymbol{k} \sigma}\left[a_{\boldsymbol{k} \sigma}(t) \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot x}+a_{\boldsymbol{k} \sigma}^{*}(t) \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot x}\right] \\
&=+\mathrm{i} \sum_{\boldsymbol{k}, \sigma} \sqrt{\frac{2 \pi \hbar c^{2}}{L^{3} \omega_{k}}} \frac{\omega_{k}}{c} \varepsilon_{\boldsymbol{k} \sigma}\left[a_{\boldsymbol{k} \sigma}(t) \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}-a_{\boldsymbol{k} \sigma}^{*}(t) \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right].
\end{aligned}\tag{3.1}$$

If we only focus on one specific wave vector $$\mathbf{k}$$ and transverse direction $$\sigma$$, we can drop the subscripts and have

$$\boldsymbol{E}=+\mathrm{i} \sqrt{\frac{2 \pi \hbar \omega}{L^{3}}} \boldsymbol{\varepsilon}\left[a(t) \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}-a^{*}(t) \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right]\tag{3.2}.$$

We can turn (3.2) easily by replacing $$a$$,$$a^*$$ with $$\hat{a}$$ and $$\hat{a}^{\dagger}$$,i.e.

$$\hat{\boldsymbol{E}}(\boldsymbol{x}, t)=+\mathrm{i} \sqrt{\frac{2 \pi \hbar \omega}{L^{3}}} \boldsymbol{\varepsilon}\left[\hat{a}(t) \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}-\hat{a}^{\dagger}(t) \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right]\tag{3.3}.$$

We can also derive (3.3) using Heisenberg's equation of motion[2] if we don't want to be lazy. In order to calculate the classical value of electric field $$\hat{\mathbf{E}}$$, we can calculate its expectation with a $$n$$-photon state $$\mid n_{\mathbf{k}\sigma}\rangle=\mid n\rangle$$ as

$$\langle n|\hat{\boldsymbol{E}}| n\rangle=\mathrm{i} \sqrt{\frac{2 \pi \hbar \omega}{L^{3}}} \varepsilon\left\langle n\left|\hat{a} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}-\hat{a}^{\dagger} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right| n\right\rangle=0\tag{3.4}$$

due to (2.32). On the other hand the energy density of the electric field is given by

$$\begin{aligned}
\left\langle n\left|\frac{\hat{\boldsymbol{E}} \hat{\boldsymbol{E}}^{\dagger}}{8 \pi}\right| n\right\rangle &=\frac{2 \pi \hbar \omega}{8 \pi L^{3}} \boldsymbol{\varepsilon} \cdot \boldsymbol{\varepsilon}\langle n|\left(\hat{a} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}-\hat{a}^{\dagger} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right) \\
& \times\left(\hat{a}^{\dagger} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}-\hat{a} \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right)|n\rangle \\
&=\frac{2 \pi \hbar \omega}{8 \pi L^{3}}\left\langle n\left|\hat{a} \hat{a}^{\dagger}+\hat{a}^{\dagger} \hat{a}\right| n\right\rangle \\
&=\frac{\hbar \omega}{4 L^{3}}\left\langle n\left|2 \hat{a}^{\dagger} \hat{a}+1\right| n\right\rangle=\frac{\hbar \omega}{2 L^{3}}\left(n+\frac{1}{2}\right).
\end{aligned}\tag{3.5}$$

Clearly the equation (3.4) does not repeat the results we derived in (2.21), but eqn.(3.5) indicates the electric field contributes half of the energy density of EM field, and the other half is from magnetic field. According to Edward Harris[3] the result in (3.4) is due to the random phase each photon possesses, so the expectation of $$\hat{E}$$ vanishes if we average over all the phases. To make the expectation of $$\hat{\mathbf{E}}$$ ressembles the classical $$\mathbf{E}$$ field, we introduce the **coherence state** defined as

$$|c\rangle=\sum_{n=0}^{\infty} b_{n}|n\rangle\tag{3.6}$$

with

$$b_{n}=\frac{c^{n} \mathrm{e}^{-\frac{1}{2}|c|^{2}}}{\sqrt{n !}}.\tag{3.7}$$

The $$c$$ in (3.7) is a complex number and the probability of finding $$n$$ photons in the coherence state is then

$$\left|b_{n}\right|^{2}=\frac{|c|^{2 n} \mathrm{e}^{-|c|^{2}}}{n !}\tag{3.8}.$$

Indeed, the sum of (3.8) gives unity,i.e.

$$\sum_{n=0}^{\infty}\left|b_{n}\right|^{2}=\mathrm{e}^{-|c|^{2}} \sum_{n=0}^{\infty} \frac{|c|^{2 n}}{n !}=\mathrm{e}^{-|c|^{2}} \mathrm{e}^{+|c|^{2}}=1.$$

Unlike the $$n-$$state used before, the coherence state introduces the uncertainty in the number of photons. It is easy to prove that 

$$
\langle c\mid \hat{a}\mid c\rangle=c\quad\langle c\mid\hat{a}^{\dagger}\mid c\rangle=c^{*}\tag{3.9},
$$

and the expectation of $$\hat{E}$$ becomes

$$\begin{aligned}
\langle c|\hat{\boldsymbol{E}}| c\rangle &=+\mathrm{i} \sqrt{\frac{2 \pi \hbar \omega}{L^{3}}} \varepsilon\left\langle c\left|\hat{a} \mathrm{e}^{\mathrm{i} k \cdot x}-\hat{a}^{\dagger} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot x}\right| c\right\rangle \\
&=+\mathrm{i} \sqrt{\frac{2 \pi \hbar \omega}{L^{3}}} \varepsilon\left[c \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}-c^{*} \mathrm{e}^{-\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{x}}\right] \\
&=+\mathrm{i} \sqrt{\frac{2 \pi \hbar \omega}{L^{3}}} \varepsilon 2 \mathrm{i}|c| \sin \left(\boldsymbol{k} \cdot \boldsymbol{x}+\delta_{c}\right) \\
&=-2|c| \sqrt{\frac{2 \pi \hbar \omega}{L^{3}}} \varepsilon \sin \left(\boldsymbol{k} \cdot \boldsymbol{x}+\delta_{c}\right)
\end{aligned}\tag{3.10}$$

with $$c=\mid c\mid e^{i\delta_c}$$.

## Conclusion

I did not follow Edward's book strictly in the blog because I found the arguments in Prof. Walter's books are more appealing and easier to understand. In the last part of this series of blogs we will dive into some real examples of radiation-matter interactions.

## References

[1] Greiner, Walter. Quantum mechanics: an introduction. Springer Science & Business Media, 2011.

[2] Greiner, Walter. Quantum Mechanics: Special Chapters. Berlin-New York: Springer, 1998.

[3] Harris, E. G. "A Pedestrain Approach to Quantum Field Theory". Wiley, Interscience, New York p 99 (1972): 9-19.