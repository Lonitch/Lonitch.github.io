---
layout: post

title: A Pedastrian Approach to Radiation-Matter Interaction

date: 2020-06-28

Author: Sizhe

tags: [basics, quantum-field-theory]

toc: true

---

## Motivation

While working on my side project of *ab initio* polaron theory, I realize that none of my notes is explicitly related to the radiation-matter interaction (RMI). It's a bit weird at this point that RMI never occur to me as an important thing to learn even though the polaron is a result of interactions between electrons and radiation-excited phonons in crystalline lattice. After a search for proper sources to learn RMI, I laid my eyes on Edward Harris' **A Pedestrian Approach to Quantum Field Theory**. For a guy who just finished Dr. Klauber's excellent **Student Friendly Quantum Field Theory**, I was kinda reluctant to start reading another introductory book on QFT with concerns of wasting too much time. But Edward's book turned out to be a huge page-turner after I scanned through the first chapter. This blog is dedicated to reproduce some of the important conclusions in the first three chapters of Edward's book. All the derivation in this blog is prepared for those who had an introductory non-relativistic quantum mechanics class, but a brief review of axioms of QM is also given somewhere along the derivation.

## Hilbert-space Formalism of Quantum Mechanics
### Properties and definitions in Hilbert space
Hilbert space is a vector space spanned by a complete set of base vectors. The vector space is similar to the scalar space except that each coordiante in the space corresponds to a vector instead of a scalar. The vectors live in Hilbert space have the following properties:

- they follow commutative and associative rules,
- there is a null vector, $\mid0\rangle,$
- and for an arbitrary vector $\mid a\rangle$ there is a $\mid -a\rangle$ so that $\mid a\rangle+\mid-a\rangle=\mid 0\rangle.$

Except the vector properties the **scalar product** in Hilbert space is defined as 

$$
(|a\rangle,|b\rangle)=\langle a|b\rangle
$$

where $\langle a \|=(\|a\rangle)^{\dagger}.$ According to Schwartz inequality we have

$$
\langle\mathbf{f}|\mathbf{f}\rangle\cdot\langle \mathbf{v|v}\rangle\geq\langle\mathbf{f|v}\rangle^2\tag{1}
$$

Other important properties of Hilbert space include "completeness" and "separable":
- **separable**: for any vector $\|f\rangle$ and an arbitrary positive value $\varepsilon$ in Hilbert space there is a set of vectors $\|f_n\rangle$ that satisfy 

$$
||f\rangle-|f_n\rangle|<\varepsilon.
$$

- **complete**: any Cauchy vector sequence that has the property of 

$$
\lim_{m,n\rightarrow\infty}||f_n\rangle-|f_m\rangle|=0
$$

defines a unique limit of $$\|f\rangle$$ that satisfies

$$\lim _{n \rightarrow \infty} \||f\rangle-\left|f_{n}\right\rangle \|=0.$$

Enough for the properties, let us now define some other useful things in Hilbert space which will be used in our new formalism for quantum mechanics. First, a set $\{\|f_n\rangle\}$ is said to be **orthogonal** if

$$
\langle\mathbf{f}_n|\mathbf{f}_m\rangle=\delta_{nm}
$$

The set is **complete** if any vector $\|f\rangle$ in Hilbert space can be represented by the set as

$$
|\mathbf{f}\rangle=\sum_i\alpha_i|\mathbf{f}_i\rangle
$$

where $\alpha_i$ are complex numbers, and

$$
\alpha_i=\langle \mathbf{f}_i|\mathbf{f}\rangle
$$

Sometimes people call $\langle\mathbf{f}_i\|\mathbf{f}\rangle$ as the representives of $\|\mathbf{f}_i\rangle$.

### Operators in Hilbert space
Mathematically the operators in Hilbert space are mappings to the space itself. We use hatted symbols (e.g. $\hat{A}$) to represent operators in the following derivation. Just like the vectors the operators also have their **adjoint** $\hat{A}^{\dagger}$, and when they are applied to a vector in Hilbert space we have:

$$
(\hat{A}|\mathbf{f}\rangle)^{\dagger}=\langle\mathbf{f}|\hat{A}^{\dagger}\tag{2}
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

In physics Hermitian operators usually represent real-word detectable observables.

### Eigenvalues and eigenvectors
For each operator $\hat{A}$ there exists a non-null vector satisfying

$$
\hat{A}|\mathbf{f}\rangle=A|\mathbf{f}\rangle\tag{3}
$$

with $A$ and $\|\mathbf{f}\rangle$ being a complex eigenvalue and an eigenvector. For Hermitian operators 

1. the eigenvalues are real numbers,
2. if $\|\mathbf{a}\rangle$ and $\|\mathbf{a}^{\prime}\rangle$ are two eigenvectors of $\hat{A}$ we have $\langle\mathbf{a\|a^{\prime}}\rangle=0$
3. **The eigenvectors of a bounded Hermitian operator after
normalization form a denumerably complete orthonormal system**. Consequently, its eigenvalues form a discrete set (discrete spectrum).

Based on the property #3 we now can represent arbitrary vector $\|\psi\rangle$ in Hilbert space using the eigenvectors of a Hermitian operator $\{\|\mathbf{a}_i\rangle\}$ as

$$
|\psi\rangle=\sum_i |\mathbf{a}_i\rangle\langle\mathbf{a}_i|\psi\rangle\tag{4}
$$

If we assume that $\|\psi\rangle$ is normalized, then from (4) we have

$$
\langle\psi|\psi\rangle=\langle\psi|(\sum_i|\mathbf{a}_i\rangle\langle\mathbf{a}_i|)|\psi\rangle=1
$$

and

$$
\sum_i|\mathbf{a}_i\rangle\langle\mathbf{a}_i|=1,\tag{5}
$$

with $\langle\mathbf{a_n\|a_m}\rangle=\delta_{nm}$. Now the inner products $\langle\mathbf{a}_i\|\psi\rangle$ are the elements of a vector in Hilbert space that itself represent a state. Let's use a daily-life analogy of **Sizhe's state** to understand this. Let's say $\|sizhe\rangle$ represents a personal state of Sizhe, and we can present Sizhe's state in Hilbert space as

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

where $\langle nerdy\mid$,$\langle corky\mid$, and $\langle sloppy\mid$ are the base vectors of our imaginary Hilbert space. With the vector above we can tell how nerdy, corky, and sloppy Sizhe is in the Hilbert space. With this simple picture in mind, we can represent the state $\mid\psi\rangle$ using the set $\{\mathbf{a}_i\}$ as

$$|\psi\rangle=\left[\begin{array}{c}
\left\langle a_{1} \mid \psi\right\rangle \\
\left\langle a_{2} \mid \psi\right\rangle \\
\vdots \\
\left\langle a_{n} \mid \psi\right\rangle \\
\vdots 
\end{array} \right]=\langle\mathbf{a}_i\mid\psi\rangle=\psi(\mathbf{a}_i)\tag{6}.$$

For an operator $\hat{B}$ we have a matrix instead in Hilbert space:

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

So far we only considered the discrete base sets in our formalism but we must also consider **continuous base sets**. A good example of such base set is the spatial coordinate set $\{\mathbf{x}\}$. And the state in this case is represented as

$$
\mid \psi\rangle=\int\mid\mathbf{x}\rangle\langle\mathbf{x}\mid\psi\rangle d\mathbf{x}\tag{10}
$$

with $\langle \mathbf{x}\mid\mathbf{x}^{\prime}\rangle=\delta(\mathbf{x-x^{\prime}})$. The inner product between two states becomes

$$
\langle\varphi\mid\psi\rangle=\int\langle\varphi\mid\mathbf{x}\rangle\langle\mathbf{x}\mid\psi\rangle d\mathbf{x}=\int\varphi^{\dagger}(\mathbf{x})\psi(\mathbf{x})d\mathbf{x}\tag{11}.
$$

In the real-world physical problems, the **operator functions** are also defined as functions that take operators as their arguments. By means of eigenvalues the operator function $f(\hat{A})$ is also defined as

$$
f(\hat{A})\mid a_i\rangle=f(a_i)\mid a_i\rangle\tag{12}.
$$

We conclude this section by defining the **inverse of an operator**:

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
- and the inner products of states,i.e.$${}_{new}\langle b_i\mid a_j\rangle_{new}={}_{old}\langle b_i\mid a_j\rangle_{old}$$.

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
The axioms used in QM are postulates that assume the correspondences between mathematical objects and physical quantities. This section simply serves as a reminder of basic axioms that we will use later. For comprehensive explanations you might need to consult introductory QM textbooks.

>**Axiom I:** The result of any measurement of an observable can only be one of the eigenvalues of the corresponding operator, and the system state is represented by the corresponding eigenvector.

>**Axiom II:** If a system is known to be at a state of $\mid a\rangle$, then the probability of a measurement of $\hat{B}$ yields $b$ is $\|\langle b\mid a \rangle\|^2$. If $\hat{B}$ measures a continuous quantity then we have the probability of finding the measurement results within a range of $[b,b+db]$ is $\|\langle b\mid a \rangle\|^2db$.

>**Axiom III:** The operators $\hat{A}$ and $\hat{B}$ that correspond classical dynamic variables satisfy the following commutation rules:
>
>$$[\hat{A},\hat{B}]=\hat{A}\hat{B}-\hat{B}\hat{A}=i\hbar\{A,B\}$$
>where $\{\}$ is the Poisson bracket of dynamic variables $A$ and $B$. 
>$$\{A, B\}=\sum_{i}\left\{\frac{\partial A}{\partial q_{i}} \frac{\partial B}{\partial p_{i}}-\frac{\partial A}{\partial p_{i}} \frac{\partial B}{\partial q_{i}}\right\}$$
>and $p_i$ and $q_i$ are classical momenta and coordinates of the system. One could easily find that
>$$\begin{array}{l}
{\left[q_{i}, q_{j}\right]=\left[p_{i}, p_{j}\right]=0} \\
{\left[q_{i}, p_{j}\right]=i \hbar \delta_{i j}}
\end{array}$$

We shall now derive a consequence of **Axiom III** before we proceed. If we define the expectation of observable $A$ when a system is at a state of $\mid \psi\rangle$ as $\langle \psi\mid\hat{A}\mid\psi\rangle$, and the standard deviation as $\Delta A=\langle(A-\langle A\rangle)^2\rangle^{1/2}$, it can be shown that

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

Thus $\hat{B}\mid a\rangle$ is also an eigenvector of $\hat{A}$. **If the state $\mid a\rangle$ is non-degenerate, the two states, $\hat{B}\mid a\rangle$ and $\mid a\rangle$, must only differ by a constant**. So $\hat{B}\mid a \rangle=b\mid a\rangle$, and $\mid a\rangle$ is the simultaneous eigenvector of $\hat{A}$ and $\hat{B}$. We can also write this simultaneousness explicitly in the vector as $\mid a,b\rangle$. 

If the state $\mid a\rangle$ has n-degeneracy, i.e. 

$$
\hat{A}\mid a,i\rangle=a\mid a,i\rangle\quad i=1,\ldots,n,
$$

then we can only conclude that **$\hat{B}\mid a \rangle$ is a linear combination of $\mid a,i\rangle$**. For simplicity we usually make $\mid a,i\rangle$ eigenvectors of $\hat{B}$, but they don't need to be.

A brief summary before we proceed. We have at this point laid out the general formalism of QM using mathematical objects in Hilbert space. We start with basic properties and definitions of eigenvectors and operators to prepare our review of axioms of QM. The axiom IV, in particular, help us to recast Schrodinger picture into Heisenberg picture where operators become time-dependent and eigenstates are time-ivariant. In the following section we use this Hilbert-space formalism to solve some simple problems in QM.

### Spin particle in magnetic field
Spin is an intrinsic form of angular momentum carried by elementary particles. For a $\frac{1}{2}-$spin particle its **spin operator** is given by

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

are called **Pauli metrices**.
## Free Electromagnetic Field

## Interaction of Radiation and Matter