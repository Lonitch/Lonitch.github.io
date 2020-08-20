---
layout: post

title: A Pedastrian Approach to Radiation-Matter Interaction-Part I

date: 2020-06-28

Author: Sizhe

tags: [basics, quantum-field-theory]

toc: true

---

## TL;DR

This blog introduces the formalism of quantum mechanics in Hilbert space.

## Motivation

While working on my side project of *ab initio* polaron theory, I realize that none of my notes is explicitly related to the radiation-matter interaction (RMI). It's a bit weird at this point that RMI never occur to me as an important thing to learn even though the polaron is a result of interactions between electrons and radiation-excited phonons in crystalline lattice. After a search for proper sources to learn RMI, I laid my eyes on Edward Harris' **A Pedestrian Approach to Quantum Field Theory**. For a guy who just finished Dr. Klauber's excellent **Student Friendly Quantum Field Theory**, I was kinda reluctant to start reading another introductory book on QFT with concerns of wasting too much time. But Edward's book turned out to be a huge page-turner after I scanned through the first chapter. This blog is dedicated to reproduce some of the important conclusions in the first chapter of Edward's book. All the derivation in this blog is prepared for those who had an introductory non-relativistic quantum mechanics class, but a brief review of axioms of QM is also given somewhere along the derivation.

## Quantum Mechanics in Hilbert Space
### Properties and definitions in Hilbert space
Hilbert space is a vector space spanned by a complete set of base vectors. The vector space is similar to the scalar space except that each coordiante in the space corresponds to a vector instead of a scalar. The vectors live in Hilbert space have the following properties:

- they follow commutative and associative rules,
- there is a null vector, $\mid0\rangle,$
- and for an arbitrary vector $\mid a\rangle$ there is a $\mid -a\rangle$ so that $\mid a\rangle+\mid-a\rangle=\mid 0\rangle.$

Except the vector properties the **scalar product** in Hilbert space is defined as 

$$
(|a\rangle,|b\rangle)=\langle a|b\rangle
$$

where $\langle a \|=(\|a\rangle)^{\dagger},$ is an adjoint vector of $\mid a\rangle$. According to Schwartz inequality we have

$$
\langle\mathbf{f}|\mathbf{f}\rangle\cdot\langle \mathbf{v|v}\rangle\geq\langle\mathbf{f|v}\rangle^2\tag{1}.
$$

Other important properties of Hilbert space include "completeness" and "separable":
- **separable**: for any vector $\mid f\rangle$ and an arbitrary positive value $\varepsilon$ in Hilbert space there is a set of vectors $\mid f_n\rangle$ that satisfy 

$$
||f\rangle-|f_n\rangle|<\varepsilon.
$$

- **completeness**: any Cauchy vector sequence that has the property of 

$$
\lim_{m,n\rightarrow\infty}||f_n\rangle-|f_m\rangle|=0
$$

defines a unique limit of $\mid f\rangle$ that satisfies

$$\lim _{n \rightarrow \infty} \||f\rangle-\left|f_{n}\right\rangle \|=0.$$

Enough for the properties, let us now define some other useful things in Hilbert space which will be used in our new formalism for quantum mechanics. First, a vector set $\{\mid f_n\rangle\}$ is said to be **orthogonal** if

$$
\langle\mathbf{f}_n|\mathbf{f}_m\rangle=\delta_{nm}
$$

The set is **complete** if any vector $\mid f\rangle$ in Hilbert space can be represented by the set as

$$
|\mathbf{f}\rangle=\sum_i\alpha_i|\mathbf{f}_i\rangle
$$

where $\alpha_i$ are complex numbers, and $\alpha_i=\langle \mathbf{f}_i\mid\mathbf{f}\rangle$. Sometimes people call $\langle\mathbf{f}_i\mid\mathbf{f}\rangle$ as the representives of $\mid\mathbf{f}\rangle$.

### Operators in Hilbert space
Mathematically the operators in Hilbert space are mappings to the space itself. We use hatted symbols (e.g. $\hat{A}$) to represent operators in the following derivation. Just like the vectors the operators also have their **adjoint** $\hat{A}^{\dagger}$, and when they are applied to a vector in Hilbert space we have:

$$
(\hat{A}|\mathbf{f}\rangle)^{\dagger}=\langle\mathbf{f}|\hat{A}^{\dagger}\tag{2}.
$$

The properties of Hermitian adjoint include:

$$
\begin{aligned}
(\hat{A}\hat{B})^{\dagger}&=\hat{B}^{\dagger}\hat{A}^{\dagger}\\
(\alpha\hat{A})^{\dagger}&=\alpha^*\hat{A}^{\dagger}
\end{aligned}
$$

An adjoint is said to be **Hermitian** when $\hat{A}^{\dagger}=\hat{A}$, and the operator is then a Hermitian operator. It is easy to see that

$$
\langle\mathbf{f}|\hat{A}|\mathbf{f}\rangle=\langle\mathbf{f}|\hat{A}^{\dagger}|\mathbf{f}\rangle=(\langle\mathbf{f}|\hat{A}|\mathbf{f}\rangle)^*=real.
$$

In physics Hermitian operators usually represent real-word detectable observables (e.g. energy, momentum, and total number of particles).

### Eigenvalues and eigenvectors
For each operator $\hat{A}$ there exists a non-null vector satisfying

$$
\hat{A}|\mathbf{f}\rangle=A|\mathbf{f}\rangle\tag{3}
$$

with $A$ and $\mid\mathbf{f}\rangle$ being a complex eigenvalue and an eigenvector. For Hermitian operators 

1. the eigenvalues are real numbers,
2. if $\mid\mathbf{a}\rangle$ and $\mid\mathbf{a}^{\prime}\rangle$ are two eigenvectors of $\hat{A}$ we have $\langle\mathbf{a\mid a^{\prime}}\rangle=0$
3. **The eigenvectors of a bounded Hermitian operator after
normalization form a denumerably complete orthonormal system**. Consequently, its eigenvalues form a discrete set (discrete spectrum).

Based on the property #3 we now can represent arbitrary vector $\mid\psi\rangle$ in Hilbert space using the eigenvectors of a Hermitian operator $\{\mid\mathbf{a}_i\rangle\}$ as

$$
|\psi\rangle=\sum_i |\mathbf{a}_i\rangle\langle\mathbf{a}_i|\psi\rangle\tag{4}
$$

If we assume that $\mid\psi\rangle$ is normalized, then from (4) we have

$$
\langle\psi|\psi\rangle=\langle\psi|(\sum_i|\mathbf{a}_i\rangle\langle\mathbf{a}_i|)|\psi\rangle=1
$$

and

$$
\sum_i|\mathbf{a}_i\rangle\langle\mathbf{a}_i|=1,\tag{5}
$$

with $\langle\mathbf{a_n\mid a_m}\rangle=\delta_{nm}$. Eq.(5) sometimes is called as the **identity operator**. Now the inner products $\langle\mathbf{a}_i\mid\psi\rangle$ are the elements of a state vector in Hilbert space. Let's use a daily-life analogy of **Sizhe's state** to understand this. Let's say $\mid sizhe\rangle$ represents a personal state of Sizhe, and we can present Sizhe's state from a perspective of characters as

$$
|sizhe\rangle=\left[
\begin{array}{c}
\langle nerdy|sizhe\rangle\\
\langle corky|sizhe\rangle\\
\langle sloppy|sizhe\rangle\\
\vdots
\end{array}
\right]
$$

where $\langle nerdy\mid$,$\langle corky\mid$, and $\langle sloppy\mid$ are the base vectors in our imaginary Hilbert space. With the vector above we can tell how nerdy, corky, and sloppy Sizhe is in the space. Meanwhile, we can adopt another set of base vectors, $\mid asian\rangle$,$\mid male\rangle$, and $\mid short\rangle$ to represent $\mid sizhe\rangle$ from a perspective of appearance. With this simple picture in mind, we can represent the state $\mid\psi\rangle$ using the set $\{\mathbf{a}_i\}$ as

$$|\psi\rangle=\left[\begin{array}{c}
\left\langle a_{1} \mid \psi\right\rangle \\
\left\langle a_{2} \mid \psi\right\rangle \\
\vdots \\
\left\langle a_{n} \mid \psi\right\rangle \\
\vdots 
\end{array} \right]=\langle\mathbf{a}_i\mid\psi\rangle=\psi(\mathbf{a}_i)\tag{6}.$$

We use a matrix instead to present an operator $\hat{B}$ in Hilbert space:

$$\hat{B}=\left[\begin{array}{cccc}
\langle a_{1}|\hat{B}| a_{1}\rangle & \langle a_{1}|\hat{B}| a_{2}\rangle & \cdots \\
\langle a_{2}|\hat{B}| a_{1}\rangle & \langle a_{2}|\hat{B}| a_{2}\rangle & \cdots \\
\vdots & \vdots & \ddots
\end{array}\right]=\langle\mathbf{a}_i|\hat{B}|\mathbf{a}_j\rangle.\tag{7}$$

Note that the matrix $\langle\mathbf{a}_i\mid\hat{A}\mid\mathbf{a}_j\rangle$ is diagonal. There are many different complete orthonormal vector sets in Hilbert space, sometimes we prefer a specific base set over others.  If a state/operator is first represented using an unpreferable base vector set $\{\mid a_i\rangle\}$, we need to perform a base transition to the preferable base $\{\mid b_i\rangle\}$ using Eq.(5). That is

$$
\mid\psi\rangle=\sum_i\mid a_i\rangle\langle a_i\mid\psi\rangle=\sum_i \sum_j\mid b_j\rangle\langle b_j\mid a_i\rangle\langle a_i\mid\psi\rangle\tag{8}
$$

and

$$
\langle a_i\mid\hat{C}\mid a_j\rangle=\sum_k\sum_p\langle a_i\mid b_k\rangle\langle b_k\mid\hat{C}\mid b_p\rangle\langle b_p\mid a_j\rangle\tag{9}.
$$

Further we can prove the trace of an operator is independent of representation using base transition, i.e.

$$
\begin{aligned}
TrC &= \sum_i\langle a_i\mid\hat{C}\mid a_i\rangle\\
&=\sum_i\sum_k\langle a_i\mid b_k\rangle\langle b_k\mid\hat{C}\mid b_k\rangle\langle b_k\mid a_i\rangle\\
&=\sum_k\langle b_k\mid\sum_i \mid a_i\rangle\langle a_i\mid\mid b_k\rangle\langle b_k\mid\hat{C}\mid b_k\rangle\\
&=\sum_k\langle b_k\mid b_k\rangle\langle b_k\mid\hat{C}\mid b_k\rangle=\sum_k\langle b_k\mid\hat{C}\mid b_k\rangle\\
&=TrC
\end{aligned}
$$

where the last equivalence is due to the invariance of matrix trace. 

So far we only considered the discrete base sets in our formalism but we must also consider **continuous base sets**. A good example of such base set is the spatial coordinate set $\{\mathbf{x}\}$. And a state in ${\mathbf{x}}-$representation is

$$
\mid \psi\rangle=\int\mid\mathbf{x}\rangle\langle\mathbf{x}\mid\psi\rangle d\mathbf{x}\tag{10}
$$

with $\langle \mathbf{x}\mid\mathbf{x}^{\prime}\rangle=\delta(\mathbf{x-x^{\prime}})$. The inner product between two states becomes

$$
\langle\varphi\mid\psi\rangle=\int\langle\varphi\mid\mathbf{x}\rangle\langle\mathbf{x}\mid\psi\rangle d\mathbf{x}=\int\varphi^{\dagger}(\mathbf{x})\psi(\mathbf{x})d\mathbf{x}\tag{11}.
$$

In the real-world physical problems, the **operator functions** are also defined as functions that take operators as their arguments. By means of eigenvalues the operator function $f(\hat{A})$ is defined as

$$
f(\hat{A})\mid a_i\rangle=f(a_i)\mid a_i\rangle\tag{12}.
$$

We conclude this section by defining the **inverse of an operator** as

$$\hat{A}^{-1}\mid a_i\rangle=\frac{1}{a_i}\mid a_i\rangle\tag{13}.$$

### Unitary transformations
An operator $\hat{U}$ is unitary if $\hat{U}^{-1}=\hat{U}^{\dagger}$. Using unitary operators we define the unitary transformation as

$$
\mid a\rangle_{new}=\hat{U}^{\dagger}\mid a\rangle_{old}\tag{14}.
$$

for states and 

$$
\hat{A}_{\mathrm{new}}=\hat{U}^{\dagger} \hat{A}_{\mathrm{old}} \hat{U}\tag{15}
$$

for operators. Notice that the unitary transformations conserve:

- the eigenvalues of operators,i.e. 

$$\hat{A}_{new}\mid a_i\rangle_{new}=\hat{U}^{\dagger}\hat{A}_{old}\mid a_i\rangle_{old}=a_i\mid a_i\rangle_{new}$$

- and the inner products of states,i.e.

$${}_{new}\langle b_i\mid a_j\rangle_{new}={}_{old}\langle b_i\mid a_j\rangle_{old}$$.

### Direct product space
Due to the variety of particle states (e.g. spin-up and spin-down states of electrons) sometimes we need to expand our Hilbert space through the direct product method. Here we use a nucleon as an example. A nucleon can be a proton or a neutron. A proton is positively charged but a neutron is neutral. They can be treated as two states of the same particle in the charge space (a specific example of Hilbert space):

$$|p\rangle=\left(\begin{array}{l}
1 \\
0
\end{array}\right)_{\text {charge }}, \quad|n\rangle=\left(\begin{array}{l}
0 \\
1
\end{array}\right)_{\text {charge }}$$

with $p$ and $n$ being proton and neutron, respectively. However states in the charge space are not enough to fully describe a particle state because each kind of particle has two spin states too. If we let

$$|\uparrow\rangle=\left(\begin{array}{l}
1 \\
0
\end{array}\right)_{\operatorname{spin}}, \quad|\downarrow\rangle=\left(\begin{array}{l}
0 \\
1
\end{array}\right)_{\operatorname{spin}}$$

then a spin-up proton state can be represented by a 4-vector as

$$|p \uparrow\rangle=\left(\begin{array}{l}
1 \\
0
\end{array}\right)_{\text {charge }} \times\left(\begin{array}{l}
1 \\
0
\end{array}\right)_{\text {spin }}=\left(\begin{array}{l}
1 \\
0 \\
0 \\
0
\end{array}\right).$$

Thus, **whenever one wish to accommondate more particle attributes in a physical system, the Hilbert space must be expanded.**

### Axioms of quantum mechanics
The axioms used in QM are postulations that assume the correspondences between mathematical objects and physical quantities. This section simply serves as a reminder of basic axioms that we will use later. For comprehensive explanations you might need to consult introductory QM textbooks.

>**Axiom I:** The result of any measurement of an observable can only be one of the eigenvalues of the corresponding operator, and the system state is represented by the corresponding eigenvector.

>**Axiom II:** If a system is known to be at a state of $\mid a\rangle$, then the probability of a measurement of $\hat{B}$ yields $b$ is $\|\langle b\mid a \rangle\|^2$. If $\hat{B}$ measures a continuous quantity then we have the probability of finding the measurement results within a range of $[b,b+db]$ is $\|\langle b\mid a \rangle\|^2db$.

>**Axiom III:** The operators $\hat{A}$ and $\hat{B}$ that correspond classical dynamic variables satisfy the following commutation rules:
>
>$[\hat{A},\hat{B}]=\hat{A}\hat{B}-\hat{B}\hat{A}=i\hbar\{A,B\}$
>where $\{\}$ is the Poisson bracket of dynamic variables $A$ and $B$:
>$\{A, B\}=\sum_{i}\left\{\frac{\partial A}{\partial q_{i}} \frac{\partial B}{\partial p_{i}}-\frac{\partial A}{\partial p_{i}} \frac{\partial B}{\partial q_{i}}\right\},$
>and $p_i$ and $q_i$ are classical momenta and coordinates of the particles in a system. One could easily find that
>$\begin{array}{l}
{\left[q_{i}, q_{j}\right]=\left[p_{i}, p_{j}\right]=0} \\
{\left[q_{i}, p_{j}\right]=i \hbar \delta_{i j}}
\end{array}$

We shall now derive a consequence of **Axiom III** before we proceed. If we define the expectation value of observable $A$ of a system at a state of $\mid \psi\rangle$ to be $\langle \psi\mid\hat{A}\mid\psi\rangle$, and its standard deviation as $\Delta A=\langle(A-\langle A\rangle)^2\rangle^{1/2}$, it can be shown that

$$\left(\Delta A\right)^2(\Delta B)^{2} \geq-1 / 4\langle[A, B]\rangle^{2}$$

Substitute $q$ for $A$ and $p$ for $B$, we get the famous Heisenberg uncertainty principle:

$$
\Delta p_{i} \Delta q_{j} \geq \frac{\hbar}{2} \delta_{i j}\tag{16}.
$$

>**Axiom IV:** let $\mid\psi_{t_0}\rangle$ and $\mid\psi_{t}\rangle$ be the system state at time $t_0$ and $t$ repectively, then they are related to each other through the unitary transformation: 
>$$\left|\psi_{t}\right\rangle=\hat{U}\left(t-t_{0}\right)\left|\psi_{t_{0}}\right\rangle$$

Using **Axiom IV** we can recast QM in the **Heisenberg picture** (before this point we derived everything in **Schrodinger's Picture**,SP). To accomplish this we let

$$
\hat{U}=\hat{U}(t-t_0)=exp(-\frac{i}{\hbar}\hat{H}(t-t_0))\tag{17},
$$

and the state vector in Heisenberg picture is derived from SP as

$$
\mid\psi_t\rangle_{HP}=\hat{U}^{\dagger}\mid\psi_{t}\rangle_{SP}=\hat{U}^{\dagger}\hat{U}\mid\psi_{t_0}\rangle_{SP}=\mid\psi_{t_0}\rangle_{SP}\tag{18}.
$$

The consequence of Eq.(18) is obviously that **the system states are time-invariant in Heisenberg picture(HP)**. The operators in HP is then

$$\hat{A}_{HP}(t)=\hat{U}_{t}^{\dagger} \hat{A}_{SP} \hat{U}_{t}=e^{i / \hbar \hat{H}\left(t-t_{0}\right)} \hat{A}_{SP} e^{-i / \hbar \hat{H}\left(t-t_{0}\right)}\tag{19}$$

and it is now time-dependent. We can get the **Heisenberg equation of motion** by time-differentiating (19):

$$-\frac{\hbar}{i} \frac{\partial}{\partial t} \hat{A}_{HP}=\left[\hat{A}_{HP}, \hat{H}\right]\tag{20}.$$

It can be seen immediately from (20) that **any operator commutates with Hamiltonian is a constant of the motion in HP**.

### Simultaneous eigenstates
The concept of simultaneous eigenstate arises due to the commutative operators. For operators $\hat{A}$ and $\hat{B}$ if we have $[\hat{A},\hat{B}]=0$, then

$$
\hat{A}\hat{B}\mid a\rangle=\hat{B}\hat{A}\mid a\rangle=a\hat{B}\mid a\rangle\tag{21}.
$$

Thus $\hat{B}\mid a\rangle$ is also an eigenvector of $\hat{A}$. **If the state $\mid a\rangle$ is non-degenerate, the two states, $\hat{B}\mid a\rangle$ and $\mid a\rangle$, must only differ by a constant**. So $\hat{B}\mid a \rangle=b\mid a\rangle$, and $\mid a\rangle$ is the simultaneous eigenvector of $\hat{A}$ and $\hat{B}$. We can also write this simultaneousness explicitly in the state as $\mid a,b\rangle$. 

If the state $\mid a\rangle$ has n-degeneracy, i.e. 

$$
\hat{A}\mid a,i\rangle=a\mid a,i\rangle\quad i=1,\ldots,n,
$$

then we can only conclude that **$\hat{B}\mid a \rangle$ is a linear combination of $\mid a,i\rangle$**. For simplicity we usually make $\mid a,i\rangle$ eigenvectors of $\hat{B}$ too, but they don't need to be.

A brief summary before we proceed. We have at this point laid out the general formalism of QM using mathematical objects in Hilbert space. We start with basic properties and definitions of eigenvectors and operators to prepare our review of axioms of QM. The axiom IV, in particular, help us to recast Schrodinger picture into Heisenberg picture where operators become time-dependent and eigenstates are time-invariant. In the following section we use this Hilbert-space formalism to solve some simple problems in QM.

## Solved QM Problems 
### Spin particle in magnetic field
Spin is an intrinsic form of angular momentum carried by elementary particles. In this section we use Hilbert-space formalism to derive the expression of general spin operator around an arbitrary axis. For a $\frac{1}{2}-$spin particle its **spin operator** is given by

$$
\mathbf{J}=\frac{\hbar}{2}\vec{\sigma}=\frac{\hbar}{2}(\sigma_x\vec{e}_x+\sigma_y\vec{e}_y+\sigma_z\vec{e}_z) \tag{21}.
$$

where

$$\sigma_{x}=\left(\begin{array}{cc}
0 & 1 \\
1 & 0
\end{array}\right), \sigma_{y}=\left(\begin{array}{cc}
0 & -i \\
i & 0
\end{array}\right), \sigma_{z}=\left(\begin{array}{rr}
1 & 0 \\
0 & -1
\end{array}\right)\tag{22}$$

are called **Pauli metrices**. Now the task is to find the Hamiltonian for a particle in magnetic field. If we only focus on magnetic momentum energy, and let the magnetic field strength be $\mathbf{B}$ and the magnetic momentum be $\vec{\mu}$ then the particle energy is just $\mathbf{E}_B=-\vec{\mu}\mathbf{\cdot B}$. We further take the direction of $\mathbf{B}$ as the z-direction, and use the fact that $\vec{\mu}$ is proportional to $\mathbf{J}$ to write the magnetic Hamiltonian as 

$$\mathbf{H}_B=C\sigma_z\tag{23}$$

where $C$ is a constant. The explicit derivation of the total Hamiltonian with magnetic field included can be found [here](https://quantummechanics.ucsd.edu/ph130a/130_notes/node295.html). We notice that $J_z$ commutes with $\mathbf{H}_B$, so they share the same eigenvectors. The eigenvectors of $J_z$ are defined as

$$
\begin{aligned}
J_z\mid\uparrow,z\rangle&=\frac{\hbar}{2}\mid\uparrow,z\rangle=\frac{\hbar}{2}\left[\begin{array}{c}1\\0\end{array}\right]\\
J_z\mid\downarrow,z\rangle&=-\frac{\hbar}{2}\mid\downarrow,z\rangle=-\frac{\hbar}{2}\left[\begin{array}{c}0\\1\end{array}\right]
\end{aligned}\tag{24}.
$$

Note that if we relax the direction of $\mathbf{B}$ to an arbitrary direction $\vec{\mathbf{n}}$ defined as

$$
\vec{\mathbf{n}}=\sin\theta\cos\phi\vec{e}_x+\sin\theta\sin\phi\vec{e}_y+\cos\theta\vec{e}_z,
$$

and use Eq.(21), we can obtain a more general representation for angular momentum operator about an axis in the direction of $\vec{\mathbf{n}}$ as

$$
\mathbf{J}_{n}=\mathbf{J}\cdot\vec{\mathbf{n}}=\frac{\hbar}{2}\left(\begin{array}{cc}
\cos \theta & \sin \theta e^{-i \phi} \\
\sin \theta e^{+i \phi} & -\cos \theta
\end{array}\right)\tag{25}
$$

which has its two eigenvectors being

$$|\uparrow, \mathbf{n}\rangle=\left(\begin{array}{c}
\cos \theta / 2 \\
\sin \theta / 2 e^{i \phi}
\end{array}\right)\tag{26-a}$$

and

$$|\downarrow, \mathbf{n}\rangle=\left(\begin{array}{c}
-\sin \theta / 2 e^{-i \phi} \\
\cos \theta / 2
\end{array}\right)\tag{26-b}.$$

As in the case of $J_z$, (26-a) and (26-b) also correspond to separate eigenvalues of $\frac{\hbar}{2}$ and $\frac{-\hbar}{2}$. At the limit of $\theta=0$ the equations (26-a) and (26-b) reduce to $\mid\uparrow,z\rangle$ and $\mid \downarrow,z\rangle$.

Next we discuss the dynamics of our system by first defining a particle state as

$$\left|\psi_{t}\right\rangle=\left(\begin{array}{l}
\psi_{1}(t) \\
\psi_{2}(t)
\end{array}\right)\tag{27}$$

Use (27) and (23) in time-dependent Schrodinger's equation, we obtain the equation of motion for the dynamic state,

$$\frac{d}{d t}\left(\begin{array}{l}
\psi_{1} \\
\psi_{2}
\end{array}\right)=-i \frac{C}{\hbar}\left(\begin{array}{rr}
1 & 0 \\
0 & -1
\end{array}\right)\left(\begin{array}{l}
\psi_{1} \\
\psi_{2}
\end{array}\right)\tag{28}$$

from which

$$\left|\psi_{t}\right\rangle=\left(\begin{array}{l}
\psi_{1}(0) e^{-i \frac{C}{\hbar} t} \\
\psi_{2}(0) e^{+i \frac{C}{\hbar} t}
\end{array}\right)\tag{29}.$$

At $t=0$ if the state is measured to be 

$$\mid\uparrow,x\rangle=\left[\begin{array}{c}
\frac{1}{\sqrt{2}}\\
\frac{1}{\sqrt{2}}
\end{array}\right],$$

then (29) becomes

$$\left|\psi_{t}\right\rangle=\frac{1}{\sqrt{2}}\left(\begin{array}{l}
 e^{-i \frac{C}{\hbar} t} \\
 e^{+i \frac{C}{\hbar} t}
\end{array}\right).$$

>we can get $\mid\uparrow,x\rangle$ from $\mid\uparrow,\mathbf{n}\rangle$ by setting $\theta=\pi/2$ and $\phi=0$.

By axiom II of QM the probability of finding the up-spin at x-direction at time $t$ is 

$$\left|\left\langle\uparrow, x \mid \psi_{t}\right\rangle\right|^{2}=\cos ^{2} \frac{C}{\hbar} t.$$

### Propagator of free particle
In this section we introduce the concept of **propagator**, the probability amplitude of a free particle trasporting between two coordinates in spacetime. The particle propagator is the building block of quantum perturbation theory, the most important theoretical framework that allows people doing *ab initio* calculations of fermion-boson interactions. We shall appreciate the convenience that our Hilbert-space formalism brings to our derivation of particle propagator. 

For free particles we only care about their dynamic variables:coordinates $x$ and momentum $p$. The eigenvalue equations for corresponding operators are:

$$
\hat{x}\mid x\rangle=x\mid x\rangle,\quad\hat{p}\mid p\rangle=p\mid p \rangle
$$

In free space a particle can occupy any coordinate or momentum, so the normalization of eigenvectors is:

$$
\begin{aligned}
\langle x\mid x^{\prime}\rangle=\delta(x-x^{\prime})\\
\langle p\mid p^{\prime}\rangle=\delta(p-p^{\prime})
\end{aligned}\tag{30}.
$$

From Axiom III of QM we have the commutation rule for $\hat{x}$ and $\hat{p}$ as

$$
[\hat{x},\hat{p}]=i\hbar\tag{31},
$$

which determines the matrix element of $p$,$\langle x\mid\hat{p}\mid x^{\prime}\rangle$. To see this we first sandwhich (31) between two coordinate states，i.e.,

$$\begin{aligned}
\left\langle x^{\prime}|\hat{x} \hat{p}-\hat{p} \hat{x}| x^{\prime \prime}\right\rangle &=\left\langle x^{\prime}|\hat{x} 1\hat{p}-\hat{p}1 \hat{x}| x^{\prime \prime}\right\rangle \\
&=\int d x^{\prime \prime \prime}\left\{\left\langle x^{\prime}|x| x^{\prime \prime \prime}\right\rangle\left\langle x^{\prime \prime \prime}|p| x^{\prime \prime}\right\rangle-\left\langle x^{\prime}|p| x^{\prime \prime \prime}\right\rangle\left\langle x^{\prime \prime \prime}|x| x^{\prime \prime}\right\rangle\right\} \\
&=i \hbar \delta\left(x^{\prime}-x^{\prime \prime}\right)
\end{aligned}\tag{32}.$$

We also know that

$$
\begin{aligned}
\langle x^{\prime}|\hat{x} \hat{p}\mid x^{\prime\prime}\rangle&=x^{\prime}\langle x^{\prime}|\hat{p}\mid x^{\prime\prime}\rangle\\
\langle x^{\prime}|\hat{p}\hat{x} \mid x^{\prime\prime}\rangle&=x^{\prime\prime}\langle x^{\prime}|\hat{p}\mid x^{\prime\prime}\rangle
\end{aligned},
$$

and the famous property of Dirac $\delta-$function that

$$x \frac{d}{d x} \delta(x)=-\delta(x)\tag{33}$$

so we obtain from (32)

$$\left\langle x^{\prime}|\hat{p}| x^{\prime \prime}\right\rangle=\frac{\hbar}{i} \frac{\partial}{\partial x^{\prime}} \delta\left(x^{\prime}-x^{\prime \prime}\right)\tag{34}.$$

>By similar steps we can also prove that 
>
>$$\left\langle p^{\prime}|\hat{x}| p^{\prime \prime}\right\rangle=-\frac{\hbar}{i} \frac{\partial}{\partial p^{\prime}} \delta\left(p^{\prime}-p^{\prime \prime}\right)\tag{35}.$$

By taking a matrix product, we can also find that

$$\begin{aligned}
\left\langle x^{\prime}\left|\hat{p}^{2}\right| x^{\prime \prime}\right\rangle &=\left\langle x^{\prime}|p 1 p| x^{\prime \prime}\right\rangle \\
&=\int d^{3} x^{\prime \prime \prime}\left\langle x^{\prime}|p| x^{\prime \prime \prime}\right\rangle\left\langle x^{\prime \prime \prime}|p| x^{\prime \prime}\right\rangle \\
&=\left(\frac{\hbar}{i} \frac{\partial}{\partial x^{\prime}}\right)^{2} \delta\left(x^{\prime}-x^{\prime \prime}\right)
\end{aligned}.$$

In general we have

$$\begin{array}{l}
\left\langle \hat{x}^{\prime}\left|p^{n}\right| x^{\prime \prime}\right\rangle=\left(\frac{\hbar}{i} \frac{\partial}{\partial x^{\prime}}\right)^{n} \delta\left(x-x^{\prime \prime}\right) \\
\left\langle \hat{p}^{\prime}\left|x^{n}\right| p^{\prime \prime}\right\rangle=\left(-\frac{\hbar}{i} \frac{\partial}{\partial p^{\prime}}\right)^{n} \delta\left(x^{\prime}-x^{\prime \prime}\right)
\end{array}\tag{36}.$$

With the coordinate representation of momentum operator matrix, we now turn our attention to the eigenvalue problem of $\hat{p}$. We first notice that the format of the coordinate presentation of momentum eigenvector, $\langle x\mid p\rangle$, can be derived using (34),i.e.,

$$\begin{aligned}
\left\langle x^{\prime}|\hat{p}| p^{\prime}\right\rangle &=\int d x^{\prime \prime}\left\langle x^{\prime}|\hat{p}| x^{\prime \prime}\right\rangle\left\langle x^{\prime \prime} \mid p^{\prime}\right\rangle=\frac{\hbar}{i} \frac{\partial}{\partial x^{\prime}}\left\langle x^{\prime} \mid p^{\prime}\right\rangle \\
&=p^{\prime}\left\langle x^{\prime} \mid p^{\prime}\right\rangle
\end{aligned}\tag{37}.$$

Since $x$ and $p$ are continuous variables, the vector $\langle x\mid p\rangle$ essentially represent a smooth wavefucntion $\psi_p(x)$. From (37) we have

$$
\frac{\hbar}{i}\frac{\partial}{\partial x}\psi_p(x)=p\psi_p(x),
$$

which indicates that $\psi_p(x)$ takes the form of $Ce^{\frac{i}{\hbar}p\cdot x}$ with $C$ being a complex constant. The normalization of $\psi_p(x)$ gives:

$$
\int \psi^{\dagger}_{p^{\prime}}(x)\psi_{p}(x)dx=| C|^2\int e^{\frac{\hbar}{i}(p-p^{\prime})x}dx=2\pi\hbar|C|^2 \delta(p-p^{\prime})=\delta(p-p^{\prime}).
$$

Thus, we can choose $C=1$ and 

$$\psi_p(x)=\frac{1}{\sqrt{2\pi\hbar}}e^{\frac{i}{\hbar}p\cdot x}\tag{38}.$$

The results in (34),(35) and (36) can be easily extended to 3-dimensional space and Eq.(38) in 3D space becomes

$$
\psi_{\mathbf{p}}(\mathbf{x})=\frac{1}{(2\pi\hbar)^{3/2}}e^{\frac{i}{\hbar}\mathbf{p\cdot x}}\tag{39}.
$$

We shall now see that the particle propagator arises naturally when we consider time-dependent eigenvectors of the Hamiltonian. For a free particle the Hamiltonian is just the particle's kinetic energy, $\hat{H}=\frac{\hat{p}^2}{2m}$, the coordinate- and momentum-representation of $\hat{H}$ are then

$$\begin{array}{l}
\left\langle\mathbf{x}^{\prime}|H| \mathbf{x}^{\prime \prime}\right\rangle=-\frac{\hbar^{2}}{2 m} \nabla^{2} \delta\left(\mathbf{x}^{\prime}-\mathbf{x}^{\prime \prime}\right) \\
\left\langle\mathbf{p}^{\prime}|H| \mathbf{p}^{\prime \prime}\right\rangle=\frac{1}{2 m} p^{\prime 2} \delta\left(\mathbf{p}^{\prime}-\mathbf{p}^{\prime \prime}\right)
\end{array}\tag{40}$$

from the results in (36). Using Axiom IV of QM we find that the eigenstate of free particle at time $t$ from the state at $t_0$ is just

$$
\mid \psi_t\rangle=e^{-\frac{i}{\hbar}\hat{H}(t-t_0)}\mid\psi_{t_0}\rangle\tag{41}.
$$

The eigenvector in coordinate $\mathbf{x}-$representation is then

$$\begin{aligned}
\psi\left(\mathbf{x}^{\prime}, t\right) &=\left\langle\mathbf{x}^{\prime}\left|e^{-i / \hbar \hat{H}\left(t-t_{0}\right)}\right| \psi_{t_{0}}\right\rangle \\
&=\int d^{3} x^{\prime \prime}\left\langle\mathbf{x}^{\prime}\left|e^{-i / \hbar \hat{H}\left(t-t_{0}\right)}\right| \mathbf{x}^{\prime \prime}\right\rangle\left\langle\mathbf{x}^{\prime \prime} \mid \psi_{t_{0}}\right\rangle \\
&=\int d^{3} x^{\prime \prime} G\left(\mathbf{x}^{\prime}, t \mid \mathbf{x}^{\prime \prime}, t_{0}\right) \psi\left(\mathbf{x}^{\prime \prime}, t_{0}\right)
\end{aligned}$$

where $G(\mathbf{x}^{\prime},t\mid \mathbf{x}^{\prime\prime},t_0)$ is the **particle propagator** we are looking for. Using continuous identity operator we have

$$G\left(\mathbf{x}^{\prime}, t \mid \mathbf{x}^{\prime \prime}, t_{0}\right)=\iint\left\langle\mathbf{x}^{\prime} \mid \mathbf{p}^{\prime}\right\rangle d^{3} p^{\prime} \cdot\left\langle\mathbf{p}^{\prime}\left|e^{-i / \hbar \hat{H}^{\left(t-t_{0}\right)}}\right| \mathbf{p}^{\prime \prime}\right\rangle d^{3} p^{\prime \prime}\left(\mathbf{p}^{\prime \prime}\left|\mathbf{x}^{\prime \prime}\right\rangle\right.\tag{42}$$

and

$$\left\langle \mathbf{p}^{\prime}\left|e^{-i / \hbar \hat{H}\left(t-t_{0}\right)}\right| \mathbf{p}^{\prime \prime}\right\rangle=e^{-(i / \hbar)\left(p^{\prime 2} / 2 m\right)\left(t-t_{0}\right)} \delta\left(\mathbf{p}^{\prime}-\mathbf{p}^{\prime \prime}\right).$$

After the substitution of (38) in (42), we find

$$G\left(\mathbf{x}^{\prime}, t \mid \mathbf{x}^{\prime \prime}, t_{0}\right)=\int \frac{d^{3} p^{\prime}}{(2 \pi \hbar)^{3}} e^{i / \hbar\left[\mathbf{p}^{\prime} \cdot\left(\mathbf{x}^{\prime}-\mathbf{x}^{\prime \prime}\right)-\left(p^{\prime 2} / 2 m\right)\left(t-t_{0}\right)\right]}$$

This integration can be carried out with the result

$$G\left(\mathbf{x}^{\prime}, t \mid \mathbf{x}^{\prime \prime}, t_{0}\right)=\left(\frac{m}{2 \pi i \hbar\left(t-t_{0}\right)}\right)^{3 / 2} e^{(i m / 2 \hbar)\left[\left(\mathbf{x}^{\prime}-\mathbf{x}^{\prime \prime}\right)^{2} /\left(t-t_{0}\right)\right]}\tag{43}.$$

### Fermi's golden rule
We should now be comfortable with the Hilbert-space formalism. Using the first-order approximation in the quantum perturbation theory, we procced to derive the **Fermi's Golden rule** in this section. Since mordern research of quantum field theory mostly stems from perturbative theory, getting some exposure to it could really help us to appreciate the motives behind modern studies that use quantum field theory to understand the properties of condensed matters. 

In a perturbed system, we are often interested to solve the following equation:

$$
-\frac{\hbar}{i}\frac{\partial}{\partial t}\mid\psi\rangle=(\hat{H}_0+\hat{H}^{\prime})\mid\psi\rangle\tag{44}.
$$

where we have for non-pertubative Hamiltonian $\hat{H}_0$

$$\hat{H}_{0}\left|\Phi_{n}\right\rangle=E_{n}\left|\Phi_{n}\right\rangle.\tag{45}$$

If we let

$$|\psi\rangle=\sum_{n} C_{n}(t) e^{-i / \hbar E_{n} t}\left|\Phi_{n}\right\rangle\tag{46},$$

and apply a $\langle\psi\mid$ at the both sides of (44), we find a set of coupled equations in a form of 

$$\frac{d}{d t} C_{m}(t)=-\frac{i}{\hbar} \sum_{n}\left\langle\Phi_{m}\left|\hat{H}^{\prime}\right| \Phi_{n}\right\rangle e^{i / \hbar\left(E_{m}-E_{n}\right) t} C_{n}(t)\tag{47}.$$

If we integrate (47) from time $0$ to $t$, we get

$$C_{m}(t)=C_{m}(0)-\frac{i}{\hbar} \sum_{n} \int_{0}^{t} d t^{\prime}\left\langle\Phi_{m}\left|\hat{H}^{\prime}\right| \Phi_{n}\right\rangle e^{i / \hbar\left(E_{m}-E_{n}\right) t^{\prime}} C_{n}\left(t^{\prime}\right)\tag{48}.$$

Eq.(48) is too bulky to handle, so we need to make some approximations to make it easier the calculation of the probability of finding our perturbed system at state $m$ at time $t$, $\|C_m(t)\|^2$. 

The first approximation is that the system is at state $i$ at $t_0$,i.e., $C_m(0)=\delta_{im}$. We further assume that $\hat{H}^{\prime}$ is time-independent, and $C_m(t)$ do not depart from $C_m(0)$ very much. Then for $i\neq f$, Eq.(48) becomes

$$\begin{aligned}
C_{f}(t) &=-\frac{i}{\hbar}\left\langle\Phi_{f}\left|\hat{H}^{\prime}\right| \Phi_{i}\right\rangle \int_{0}^{t} d t^{\prime} e^{i / \hbar\left(E_{f}-E_{i}\right) t^{\prime}} \\
&=-\frac{i}{\hbar}\left\langle\Phi_{f}\left|\hat{H}^{\prime}\right| \Phi_{i}\right\rangle\left[\frac{e^{i / \hbar\left(E_{f}-E_{i}\right) t}-1}{i / \hbar\left(E_{f}-E_{i}\right)}\right]
\end{aligned}\tag{49}.$$

Then the probability of $\|C_m(t)\|^2$ is found to be

$$\left|C_{f}(t)\right|^{2}=\frac{4}{\hbar^{2}}\left|\left\langle\Phi_{f}\left|\hat{H}^{\prime}\right| \Phi_{i}\right\rangle\right|^{2} \frac{\sin ^{2}\left(\omega_{f_{i}} t / 2\right)}{\omega_{f i}^{2}}\tag{50}$$

where $\omega_{f i}=\left(E_{f}-E_{i}\right) / \hbar.$

>Now, regarded as a function of $\omega,$ the function $\sin ^{2}(\omega t / 2) / \omega^{2}$ becomes very sharply peaked about $\omega=0$ when $t$ becomes large. Most of the area under a graph of the function is under the central peak. Also
>
>$$\int_{-\infty}^{+\infty} d \omega \frac{\sin ^{2}(\omega t / 2)}{\omega^{2}}=\frac{\pi t}{2}.$$
>
>Therefore, we can say that
>
>$$\frac{\sin ^{2}(\omega t / 2)}{\omega^{2}} \underset{t \rightarrow \infty}{\longrightarrow} \frac{\pi t}{2} \delta(\omega)\tag{51}$$

If we use (51) in (50) memtioned above, we have

$$\frac{\left|C_{f}(t)\right|^{2}}{t}=\frac{2 \pi}{\hbar}\left|\left\langle\Phi_{f}\left|H^{\prime}\right| \Phi_{i}\right\rangle\right|^{2} \delta\left(E_{f}-E_{i}\right)\tag{52}.$$

Eq.(52) may be interpreted as the transition probability per unit time for a transition from an initial state $\mid\Phi_{i}\rangle$ to a final state $\mid\Phi_{f}\rangle$. This result is known as **Fermi's golden rule**. Since Eq.(52) contains a Dirac $\delta$ -function, it is clear that **it is meaningful only if an integration over a continuum of final energies or initial energies is ultimately carried out**.

## Conclusion
There are some typos in Edward's book and I'm glad I worked all of them out. In the part II I'll develop a quantum theory of free electromagnetic field.