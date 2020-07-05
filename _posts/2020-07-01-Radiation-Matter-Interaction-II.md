---
layout: post

title: A Pedastrian Approach to Radiation-Matter Interaction-Part II

date: 2020-07-08

Author: Sizhe

tags: [basics, quantum-field-theory]

toc: true

---

## TL;DR

This blog introduces the quantum theory of free electromagnetic field, a sequel to my QM in Hilbert space blog.

## Motivation/Bird's view

Needless to say, the Maxwell's equation set for electromagnetism is one of the most fundamental pillars that underspins so many branches of mordern physics. CERN has proven experimentally that Maxwell is right even at quantum-scale. However, we cannot apply classical Maxwell's equation in quantum field theory. Instead, we need to quantize the classical electromagnetic field in order to use the Hilbert-space formalism we developed in the part I. I should also admit that the quantization of electromagnetic fields could become nasty once we also take into account the interactions between different fields. Therefore, let us do one thing at a time and quantize the free electromagnetic field (free EM field) here.

We will start with the derivation of classical Hamiltonian of a free charge in a free electromagnetic field. We will then prove that the Hamiltonian gives classical equation of motions for the free charge using Hamiltonian equations. The **gauge invariance** will briefly be discussed along the way. When we are comfortable with the classical Hamiltonian, we can quantize the classical terms into operators to get quantum Hamiltonian. By solving the Schrodinger equation with the quantized Hamiltonian, we can show that the **gauge transformation** causes a phase change in the eigenfunctions/wavefunctions. To continue the discussion started in my previous blog, I will also show how the quantized EM field and Hilbert-space formalism could dance together with one caveat: the vanishing expectation value of the electric field operator $\hat{\mathbf{E}}$. We will solve this problem in the last part of this blog using the **coherent states** as the eigenstates to the free EM field. It turns out that the coherent state is also a convenient tool to solve simple problems related to the polaron theory.

## Classical Hamiltonian of Free EM Field
### Lagrangian and Hamiltonian of a charged particle
For a particle carrying charge $e$  in a free EM field, the force it experiences is described by Lorentz's law:

$$\boldsymbol{F}=e\left(\boldsymbol{E}+\frac{\boldsymbol{v}}{c} \times \boldsymbol{B}\right)\tag{1.1}$$

where $\mathbf{E}$ and $\mathbf{B}$ are electric and magnetic fields, respectively. Both fields in (1) are derivatives of potentials. Sometimes one finds it is more convenient to represent $\mathbf{E}$ and $\mathbf{B}$ using the potentials directly:

$$\boldsymbol{E}=-\nabla \phi-\frac{1}{c} \frac{\partial \boldsymbol{A}}{\partial t}, \quad \boldsymbol{B}=\nabla \times \boldsymbol{A}\tag{1.2}$$

where $\phi$ is electric potential and $\mathbf{A}$ is the magnetic potential. We should notice that $\phi$ is a **position-dependent potential**, i.e. $\phi=\phi(\mathbf{r},t)$, while $\mathbf{A}$ is a **velocity-dependent potential**. More on this later. $c$ is the light speed in (1.2). Putting (1.2) back into (1.1) we find

$$\boldsymbol{F}=e\left(-\nabla \phi-\frac{1}{c} \frac{\partial \boldsymbol{A}}{\partial t}+\frac{1}{c} \boldsymbol{v} \times(\boldsymbol{\nabla} \times \boldsymbol{A})\right)\tag{1.3}.$$

The task now is to rearrange (1.3) so that a derivative form of a potential becomes apparent at RHS. But (1.3) is a bit too bulky, and can simplify it using the following relation,

$$\boldsymbol{B} \times(\boldsymbol{\nabla} \times \boldsymbol{C})=\boldsymbol{\nabla}(\boldsymbol{B} \cdot \boldsymbol{C})-(\boldsymbol{B} \cdot \boldsymbol{\nabla}) \boldsymbol{C}-(\boldsymbol{C} \cdot \boldsymbol{\nabla}) \boldsymbol{B}-\boldsymbol{C} \times(\boldsymbol{\nabla} \times \boldsymbol{B})\tag{1.4}.$$

The relation (1.4) transforms the last term at RHS of (1.3) into

$$\boldsymbol{v} \times(\nabla \times \boldsymbol{A})=\nabla(\boldsymbol{v} \cdot \boldsymbol{A})-(\boldsymbol{v} \cdot \nabla) \boldsymbol{A}\tag{1.5}$$

since $\boldsymbol{v}$ is not explicit function of position. Also the total derivative of $\mathbf{A}$ is

$$
\frac{d\mathbf{A}}{dt}=\frac{\partial \mathbf{A}}{\partial t}+\frac{\partial \mathbf{A}}{\partial r_i}\frac{\partial r_i}{\partial t}=\frac{\partial \mathbf{A}}{\partial t}+(\boldsymbol{v}\cdot\nabla)\mathbf{A}\tag{1.6}.
$$

We can now use (1.5) and (1.6) to simplify (1.3) into

$$\boldsymbol{F}=e\left[-\nabla \phi+\frac{1}{c} \nabla(\boldsymbol{v} \cdot \boldsymbol{A})-\frac{1}{c} \frac{\mathrm{d} \boldsymbol{A}}{\mathrm{d} t}\right]\tag{1.7}.$$

Naively one might want to rearrange the RHS of (1.7) in to a from of $-\partial U/\partial x$ since that is what we learned from conservative forces. However, as I mentioned earlier $\mathbf{A}$ is a velocity-dependent potential, and $\mathbf{F}$ is dependent on particle's velocity too. Therefore, the Lorentz force $\mathbf{F}$ is **not a conservative force**. In classical mechanics, a non-conservative force $Q_j$ is related to its generating potential $U$ by

$$Q_{j}\left(q_{1}, \ldots, q_{n} ; \dot{q}_{1}, \ldots, \dot{q}_{n} ; t\right)=-\frac{\partial U}{\partial q_{j}}+\frac{d}{d t} \frac{\partial U}{\partial \dot{q}_{j}}\tag{1.8},$$

with $q_i$ being the generalized coordinates of a classical system. The Lagrangian $L$ of a particle in $U$ is then $L=T-U$ with $T$ being the kinetic energy of the particle.

We shall now cast (1.8) into a form similiar to (1.8) to get $U$ for Lorentz forces so that we later derive an expression for the Lagrangian. To do this, let us first use a trick to rewrite $\frac{d\mathbf{A}}{dt}$ as

$$
\frac{d\mathbf{A}}{dt}=\frac{d}{dt}\nabla_{\boldsymbol{v}}(\mathbf{A}\cdot\boldsymbol{v})\tag{1.9}.
$$

Using (1.9) it is obvious now that (1.7) can be written as

$$\mathbf{F}=-\nabla\left(e \phi-\frac{e}{c} \boldsymbol{v} \cdot \mathbf{A}\right)+\frac{\mathrm{d}}{\mathrm{d} t} \nabla_{\boldsymbol{v}}\left(e \phi-\frac{e}{c} \boldsymbol{v} \cdot \mathbf{A}\right)\tag{1.10}.$$

The addition of $e\phi$ in the last term at the RHS of (1.9) is right because $\phi$ is not velocity-dependent. Comparing (1.10) with (1.8) we conclude that the generating potential of Lorentz forces is

$$
U=e\phi-\frac{e}{c}\boldsymbol{v}\cdot\mathbf{A}\tag{1.11}.
$$

Consequently, the Lagrangian for a charge particle in free EM field is just

$$L=\frac{1}{2} m \boldsymbol{v}^{2}-e \phi+\frac{e}{c} \boldsymbol{v} \cdot \mathbf{A}\tag{1.12}.$$

If we use generalized coordinates $q_i$(=$r_i$ in this case) in (1.12), we obtain

$$
L=\frac{1}{2}m\sum_i\dot{q}_i^2-e\phi(q_i,t)+\frac{e}{c}\sum_i \dot{q}_iA_i\tag{1.13}.
$$

From (1.13) we immediately get the generalized momentum $p_i$ to be

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

where $\boldsymbol{r}=(x,y,z)$. Substituting (1.15) into (1.16) we find for x-component of momentum $\boldsymbol{p}$

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

In the equation (1.21) the coordinate variables (i.e. $x,y,z$) are only dependent on $t$, thus we have 

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

It is easy to prove that new potentials in (1.23) automatically satisfy (1.17) if we use (1.2) to calculate $\mathbf{E}^{\prime}$ and $\mathbf{B}^{\prime}$. This property of Hamiltonian equation is called **gauge invariance**. Notice that the form of Hamiltonian $H$ is changed under the transformation (1.23). For instance, we can transform $A=0$ and $\phi=-E x$ into $A^{\prime}=(-c E t, 0,0)$ and $\phi^{\prime}=0$ according to (1.23), but the Hamiltonian function changes from the total energy of the particle to the kinetic energy. To make the calculation easier, people usually choose specific $\mathbf{A}$ so the **Coulomb gauge**, $\nabla\cdot\mathbf{A}=0,$ is satisfied.

## Quantization of the Classical Hamiltonian
As a continuity of our discussion in the previous section, we proceed to quantize the classical Hamiltonian derived in Eq.(1.15). The quantization process will be divided into two parts. The first part comprises only the quantization of particle momentum. We can show that the Schrodinger equation using the half-quantized Hamiltonian has the gauge invariance with eigenfunctions shifted by a phase factor. To maintain the gauge invariance in the expectation values we will see that the momentum operator is no longer corresponding to a classical observable anymore. The second part is the quantization of the potentials, where the creation and annihilation operators become powerful tools to describe a quantum system with the presence of EM fields.

### Momentum first
If we replace the canonical momentum $\boldsymbol{p}$ with the operator $\hat{p}=(\hbar/i)\nabla$ in the classical Hamiltonian, Eq. (1.15) becomes

$$\hat{H}=\frac{1}{2 m}\left(\frac{\hbar}{\mathrm{i}} \nabla-\frac{e}{c} \boldsymbol{A}\right)^{2}+e \phi\tag{2.1}.$$

Expanding (2.1) gives

$$\hat{H}=-\frac{\hbar^{2}}{2 m} \Delta+\frac{\mathrm{i} e \hbar}{m c} \boldsymbol{A} \cdot \nabla+\frac{\mathrm{i} e \hbar}{2 m c}(\nabla \cdot \boldsymbol{A})+\frac{e^{2}}{2 m c^{2}} \boldsymbol{A}^{2}+e \phi\tag{2.2}.$$

Notice that in (2.1) $\nabla$ and $\mathbf{A}$ are not commuting. Now if we choose a $\mathbf{A}$ that satisfy the Coulomb gauge, $\nabla\cdot\mathbf{A}=0$, eqn.(2.2) can be reduced into 

$$\hat{H}=\frac{\hat{\boldsymbol{p}}^{2}}{2 m}+e \phi-\frac{e}{m c} \boldsymbol{A} \cdot \hat{\boldsymbol{p}}+\frac{e^{2}}{2 m c^{2}} \boldsymbol{A}^{2}\tag{2.3}.$$

Using (2.1) the Shrodinger equation becomes

$$\left\{\frac{[\hat{p}-(e / c)\mathbf{A}]^{2}}{2 m}+e \phi\right\} \psi=\mathrm{i} \hbar \frac{\partial}{\partial t} \psi\tag{2.4}.$$

Eq.(2.4) is gauge invariant. To see this, we first notice that the gauge transformation in (1.23) can be interpreted as an arbitrary shift of "*potential energy reference point*". A gauge-invariant equation must remain its format after the transformation. In the case of (2.4) the replacement of $\mathbf{A}$ and $\phi$ with $\mathbf{A}^{\prime}$ and $\phi^{\prime}$ from (1.23) gives

$$\left\{\frac{[\hat{p}-(e / c)\mathbf{A}^{\prime}]^{2}}{2 m}+e \phi^{\prime}\right\} \psi^{\prime}=\mathrm{i} \hbar \frac{\partial}{\partial t} \psi^{\prime}\tag{2.5}.$$

The task now is to find $\psi^{\prime}$ that satisfies (2.5). If we use the asatz of 

$$\psi^{\prime}=exp(\frac{ie}{\hbar c}f)\psi\tag{2.6},$$

and substitute (1.23) in (2.5), one can show that, after some tedious rearrangements, (2.4) is recovered from (2.5). Thus, we conclude that **the eigenfunction of (2.4) is shifted by a phase factor after the gauge transformation of EM potentials**. In fact, the phase shift in (2.6) does not change the expectation value of operators at all, since those expectations are calaculated using the "sandwhich" formalism. For instance, the expectation of Hamiltonian operator is

$$
\langle \psi\mid\hat{H}\mid \psi\rangle=\langle\psi^{\prime}\mid\hat{H}\mid\psi^{\prime}\rangle.
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

Eq.(2.8) implies that the expectation $$\langle\psi^{\prime}\mid\hat{\mathcal{P}}\mid\psi^{\prime}\rangle$$ is invariant under gauge transformation instead of that of $\hat{p}$. Hence, if in a physical problem the momentum operator $\hat{p}$ appears, **the operator $\hat{p}$ must always be replaced by $\hat{\boldsymbol{p}}-(e / c) \boldsymbol{A}$ if electromagnetic fields are present**. *This is the only way to guarantee gauge invariance in quantum theory*[1].

### Quantize the potential $\mathbf{A}$

## Coherent States of EM Fields

## Conclusion

## References

[1] Greiner, Walter. Quantum mechanics: an introduction. Springer Science & Business Media, 2011.