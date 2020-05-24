---
layout: post

title: First and Second quantization

date: 2020-05-22

Author: Sizhe

tags: [notes, math, quantum-mechanics, quantum-field-theory]

toc: true

---

## Motivation
In preliminary quantum mechanics, we talked about several important postulates that carved into the monument of early quantum mechanics, which include Schrodinger equation, energy level quantization, etc. These postulates underspin what we now call the "First quantization". After the introduction of the occupation number representation and borrowing the concept of fields from classical mechanics, people started to realize that the basic building unit of our universe is quantum fields which spread out to every corner of the universe. As a consequence physicists reformed the early formulation of QM to make it compatible with the special relativity, and that is the beginning of quantum field theory (QFT). The reformulation is called "second quantization", and is an essential tool for solving many-body problems. In this blog we will review the basics of first and second quantization by following the three steps: (1) applying Dirac notation to QM formulation, (2) deriving the commutation rules of the creation and annihilation operators, and (3) introducing operators in QFT and their transformations. After this blog we are good to review the tight-binding theory.

## Many-particle systems in First quantization
In this section we will assume that we already know the basic postulates of QM, and we are fairly fluent with Fourier transforms. The basic postulates play an important role in QM similar to the Euclid's Axioms in geometry: we got it from meditation and they are hard to prove mathematically. We will restate the these postulates as follows:

>1. All quantum states are represented by state vectors in Hilbert space
>2. All observables are represented by Hermitian operators acting on state vectors
>3. Different Hermitian operators correspond to different sets of base eigenstates, and they are related to each other through superposition

Note that the postulate #3 gives a way to expand state vectors using different bases. For example, if operators $A$ and $B$ correspond to eigenstates (state vectors) $\|\phi_a\rangle$ and $\|\psi_b\rangle$, repectively, we have:

$$
\begin{matrix}
A|\phi_a\rangle=a|\phi_a\rangle\\
B|\psi_b\rangle=b|\psi_b\rangle
\end{matrix}
$$

then

$$
|\phi_a\rangle=\sum_{\nu}c_{\nu}|\psi_{\nu}\rangle\tag{1}
$$

where $c_{\nu}$ is obtained from the **inner product** of the two state vectors: $\langle\phi_a\|\psi_{\nu}\rangle$. And $\langle\phi_a\|$ is the Hermitian adjoint of the "**ket**" $\|\phi_a\rangle$, called **"bra"**.

>**Side note on Hilbert space and Fock space**: Hilbert space is a vector space where each location in the space has a vector attaching to it. The bases of the space are eigenstates of a Hermitian operator (usually Hamiltonian). These base eigenstates are representing many-body systems that have fixed number of particles. If we relax this constraint and use eigenstates that have variable number of particles as space bases, we obtain the "**Fock space**". In some textbook, Fock space is also referred as "extended Hilbert space".

With these postulates, we now write the **Schrodinger's Equation**(SE) as:

$$
i\frac{\partial}{\partial t}|\phi\rangle=\hat{H}|\phi\rangle\tag{2}
$$

where $\hat{H}$ is the Hamiltonian operator and $\|\phi\rangle$ is a single-particle eigenstate. We now proceed to derive an eigenstate for many-paricle state using Fourier transformation and identity operator. 

Let's first assume a single-particle state to be  $\|\phi\rangle$, and a real space coordinate state to be $\|\mathbf{r}\rangle$. In a 3D space, the inner product between $\|\phi\rangle$ and $\|\mathbf{r}\rangle$, $\langle\mathbf{r}\|\phi\rangle$, gives a state as a function of real spacial coordinates:

$$
\langle\mathbf{r}|\phi\rangle=\phi(\mathbf{r}).
$$

By following the similar steps that derives Eq.(1), we **project the state $\|\phi\rangle$ to the new set of states $\{\mathbf{r}\}$** as:

$$
|\phi\rangle=\int_V d\mathbf{r} |\mathbf{r}\rangle\langle\mathbf{r}|\phi\rangle\tag{3}
$$

where

$$
\phi(\mathbf{r})=\langle\mathbf{r}|\phi\rangle\tag{4}
$$

If we do the inner product of two identical states, we will get unity according to the orthonormality of eigenstates of quantum system, that is:

$$
1=\langle\phi|\phi\rangle=\int_V d\mathbf{r} \langle\phi|\mathbf{r}\rangle\langle\mathbf{r}|\phi\rangle=\langle\phi|\left(\int_Vd\mathbf{r}|\mathbf{r}\rangle\langle\mathbf{r}|\right)|\phi\rangle\tag{5}
$$

Eq. (5) indicates that 

$$
\int_Vd\mathbf{r}|\mathbf{r}\rangle\langle\mathbf{r}|=1\tag{6}
$$
which is one of the **unity operators**. There are other unity operators when we treat the single-particle state $\|\phi\rangle$ as a mixed state which is a superpostion of the base states $\|\nu\rangle$. Notice that $\nu$ could be one quantum number or a set of quantum number. For instance, a base state that is described by momentum vector $\mathbf{k}$ and spin state $\uparrow$ can be written as:

$$
|\nu\rangle=|\mathbf{k},\uparrow\rangle\tag{7}
$$

The quantum numbers are usually not continuous variables, so change the base of $\|\phi\rangle$ to give:

$$
|\phi\rangle=\sum_{\nu}|\nu\rangle\langle\nu|\phi\rangle\tag{8}
$$

By following the steps that derive Eq.(6), we immediately get:

$$
\sum_{\nu}|\nu\rangle\langle\nu|=1\tag{9}
$$

It is common to write a state base in terms of real space coordinates $\mathbf{r}$ and quantum number $\nu$, $\phi_{\nu}(\mathbf{r})=\langle\mathbf{r}\|\nu\rangle$. To get mixed state $\phi(\mathbf{r})$ from base states $ \phi_{\nu}(\mathbf{r})$, we use Eq. (8) and Eq. (6) to get:

$$
\begin{aligned}
\phi(\mathbf{r})=\sum_{\nu}\langle\mathbf{r}|\nu\rangle\langle\nu|\phi\rangle&=\sum_{\nu}\langle\mathbf{r}|\nu\rangle\langle\nu|\int_Vd\mathbf{r^{\prime}}|\mathbf{r}^{\prime}\rangle\langle\mathbf{r}^{\prime}|\phi\rangle\\
&=\sum_{\nu}\phi_{\nu}(\mathbf{r})\int_Vd\mathbf{r}^{\prime}\phi^{\dagger}_{\nu}(\mathbf{r}^{\prime})\phi(\mathbf{r}^{\prime})
\end{aligned}\tag{10}
$$

It is important to remember that $\sum_{\nu}$ could be a combination of integral and series sum if some of the quantum numbers are continuous variables. For example, we need two continuous ($k_x,k_y,k_z$)and two discrete quantum numbers (spin state $\sigma$ and radial level $n$) to fully describe a Landau orbital. So $\sum_{\nu}$ in this case is:

$$
\sum_{\nu}=\sum_{\sigma=\uparrow,\downarrow}\sum_{n=0}^{\infty}\int_{-\infty}^{\infty}\frac{L_y}{2\pi}dk_y\int_{-\infty}^{\infty}\frac{L_z}{2\pi}dk_z
$$

Now that we learn something about the single-particle state, how can we generalize to represent many-particle state? To answer this question, we need a bit knowledge of Fourier transformation, and use the "**projection procedure**" we have see in Eq.(4) and (8). 

We first assume a mixed N-particle state as $A(\mathbf{r_1,r_2,\ldots,r_N})$, and going backwards to form a base state for ($N-1$)-particle state, $A_{\nu1}$, by projecting $A$ onto $\phi_{\nu1}(\mathbf{r}_1)$ base. Using Eq. (10) we find:

$$
A_{\nu1}(\mathbf{r_2,r_3,\ldots,r_N})=\int_Vd\mathbf{r}_1\phi^{\dagger}_{\nu1}(\mathbf{r}_1)A \tag{11}
$$

where $\phi_{\nu1}(\mathbf{r})$ is again the single-particle state base. Inverting Eq. (11) we find:

$$
A(\mathbf{\tilde{r}_1,r_2,\ldots,r_N})=\sum_{\nu1}\phi_{\nu1}(\mathbf{\tilde{r}_1})A_{\nu1}\tag{12}
$$

because

$$
\begin{aligned}
\sum_{\nu1}\phi_{\nu1}(\mathbf{\tilde{r}_1})A_{\nu1}&=\sum_{\nu1}\int_Vd\mathbf{r}_1\phi_{\nu1}(\tilde{\mathbf{r}}_1)\phi^{\dagger}_{\nu_1}(\mathbf{r}_1)A\\
&=\sum_{\nu1}\int_Vd\mathbf{r}_1\langle\tilde{\mathbf{r}}_1|\nu1\rangle\langle\nu1|\mathbf{r}_1\rangle A\\
&=\int_Vd\mathbf{r}_1\langle\tilde{\mathbf{r}}_1|\left(\sum_{\nu1}|\nu1\rangle\langle\nu1|\right)|\mathbf{r}_1\rangle A\\
&=\int_Vd\mathbf{r}_1\langle\tilde{\mathbf{r}}_1|\mathbf{r}_1\rangle A=\int_V\delta(\mathbf{r_1-\tilde{r}_1})Ad\mathbf{r}_1\\
&=A(\mathbf{\tilde{r}_1,r_2,\ldots,r_N})
\end{aligned}\tag{13}
$$

We can definitely repeat the steps in Eq.(11) and (12) for $\mathbf{r_2,r_3,\ldots,r_N}$ and get:

$$
A(\mathbf{r_1,\ldots,r_N})=\sum_{\nu_1,\ldots,\nu_N}A_{\nu_1\nu_2\ldots\nu_N}\phi_{\nu_1}(\mathbf{r}_1)\phi_{\nu_2}(\mathbf{r}_2)\cdots\phi_{\nu_N}(\mathbf{r}_N)\tag{14}
$$

where $A_{\nu_1\nu_2\ldots\nu_N}$ is just a constant. However the construction in Eq.(14) is not useful as it ignores the symmetry that a many-particle state should obey as we shall see now. Given a many-particle state $\Psi(\mathbf{r_1,r_2,\ldots,r_N})$, if we assume that the state is only modulated by a constant prefactor $\lambda$ when a pair of particles exchanges their location, we then have:

$$
\Psi(\mathbf{\ldots r_j,\ldots,r_i,\ldots})=\lambda\Psi(\mathbf{\ldots r_i,\ldots,r_j,\ldots})=\lambda^2\Psi(\mathbf{\ldots r_j,\ldots,r_i,\ldots})
$$

and we conclude that $\lambda^2=1$, and $\lambda=\pm1$. For particles with $\lambda=-1$ we call them **fermions**, and **bosons** for $\lambda=1$. A famous many-particle state that obeys the exchange symmetries is the "**Slater determinant**" defined as:

$$
\hat{S}_{\pm}\Pi_j\phi_{\nu_j}(\mathbf{r}_j)=\left|\begin{matrix}
\phi_{\nu_1}(\mathbf{r}_1) & \phi_{\nu_1}(\mathbf{r}_2) &\ldots &\phi_{\nu_1}(\mathbf{r}_N)\\
\phi_{\nu_2}(\mathbf{r}_1) & \phi_{\nu_2}(\mathbf{r}_2) &\ldots &\phi_{\nu_2}(\mathbf{r}_N)\\
\vdots & \vdots &\ddots&\vdots\\
\phi_{\nu_N}(\mathbf{r}_1) & \phi_{\nu_N}(\mathbf{r}_2) &\ldots &\phi_{\nu_N}(\mathbf{r}_N)
\end{matrix}\right|_{\pm}\tag{15}
$$

where $\hat{S}_{\pm}$ is so-called "symmetrization operator". When the particles are fermions (i.e. "-" sign in Eq. (15)), we have:

$$
\Psi_f=\frac{1}{\sqrt{N!}}\sum_{\mathcal{P}}sign{(\mathcal{P})}\Pi_j\phi_{\nu_j}(\mathbf{r}_{\mathcal{P}_j})\tag{16}
$$

where the sum is over all possible permutations of the set 

$$
\{\mathbf{r_1,r_2,\ldots,r_N}\}.
$$

The $sign(\mathcal{P})$ is equal to 1(-1) when the permutation is obtained after an even(odd) number of location exchange steps. For bosons, we have instead:

$$
\Psi_b=\frac{1}{\sqrt{N!}\Pi_j\sqrt{n_{v_j}!}}\sum_{\mathcal{P}}\Pi_j\phi_{\nu_j}(\mathbf{r}_{\mathcal{P}_j})\tag{17}
$$

## Operators in First quantization
Now that we have our quantum states prepared mathematically, let's derive the operators that can be applied to these states. Our first step is to look for single-particle operators, $\hat{T}(\mathbf{r}_j,\nabla)$, that only act locally. For instance the kinetic energy operator, $\hat{T}=-\hbar^2\nabla^2/2m$. At a local coordinate, the operator, according to the #2 QM postulate listed in the previous section, represents an observable, which is a superpostion of many different base states. Thus, following the similar logic led to Eq.(1), we thus conclude that all the single-particle operators are **unitary** (that is, changes the direction of state vectors in Hilbert space but remains the magnitude of the vectors). Therefore, the local operator acting at coordinate $\mathbf{r}_{\alpha}$ can be written in Dirac notation as:

$$
\hat{T}_{\alpha}=\sum_{\nu_i,\nu_j}T_{\nu_j\nu_i}|\phi_{\nu_j}(\mathbf{r}_{\alpha})\rangle\langle\phi_{\nu_i}(\mathbf{r}_{\alpha})|\tag{18}
$$

with

$$
T_{\nu_j\nu_i}=\langle\phi_{\nu_j}(\mathbf{r}_{\alpha})|\hat{T}_{\alpha}|\phi_{\nu_i}(\mathbf{r}_{\alpha})\rangle=\int d\mathbf{r}_{\alpha}\phi^{\dagger}_{\nu_j}(\mathbf{r}_{\alpha})\hat{T}_{\alpha}\phi_{\nu_i}(\mathbf{r}_{\alpha})\tag{19}
$$

In a N-particle system the sum of the local operators is called the "**total operator**", and is defined as:

$$
\hat{T}_{tot}=\sum^N_{\alpha}\hat{T}_{\alpha}\tag{20}
$$

And the action of $\hat{T}_{tot}$ on a simple product of base states gives:

$$
\begin{aligned}
&\hat{T}_{tot}|\phi_{\nu_1}(\mathbf{r}_1)\rangle|\phi_{\nu_2}(\mathbf{r}_2)\rangle\cdots|\phi_{\nu_N}(\mathbf{r}_N)\rangle\\
&=\sum^N_{\alpha=1}\sum_{\nu_i\nu_j}T_{\nu_j\nu_i}\delta_{\nu_i,\nu_{\alpha}}|\phi_{\nu_j}(\mathbf{r}_{\alpha})\rangle|\phi_{\nu_1}(\mathbf{r}_{1})\rangle\ldots|\phi_{\nu_{\alpha+1}}(\mathbf{r}_{\alpha+1})\rangle\ldots\\
\end{aligned}\tag{21}
$$

By analogy we can derive the form of **two-body operators** by following the steps led to Eq.(18) and (19) as:

$$
\hat{V}_{\alpha\beta}=\sum_{\nu_i\nu_j\nu_p\nu_q}V_{\nu_p\nu_q\nu_i\nu_j}|\phi_{\nu_q}(\mathbf{r}_{\beta}\rangle|\phi_{\nu_p}(\mathbf{r}_{\alpha})\rangle\langle\phi_{\nu_i}(\mathbf{r}_{\alpha})|\langle\phi_{\nu_j}(\mathbf{r}_{\beta})|\tag{22}
$$

where 

$$
\begin{aligned}
V_{\nu_p\nu_q\nu_i\nu_j}=\int\int d\mathbf{r}_{\alpha}d\mathbf{r}_{\beta}\phi^{\dagger}_{\nu_q}(\mathbf{r}_{\beta})\phi^{\dagger}_{\nu_p}(\mathbf{r}_{\alpha})\hat{V}(\mathbf{r_{\alpha}-r_{\beta}})\\
\times\phi_{\nu_i}(\mathbf{r}_{\alpha})\phi_{\nu_j}(\mathbf{r}_{\beta})
\end{aligned}
\tag{23}
$$
Finally, pay attention to the sequence of subscripts in (23)! The part of $\phi^{\dagger}_{\nu_q}(\mathbf{r}_{\beta})\phi^{\dagger}_{\nu_p}(\mathbf{r}_{\alpha})$ comes from the Hermitian adjoint of $\phi_{\nu_{p}}\phi_{\nu_q}$, which says:

$$
\left(\phi_{\nu_{p}}\phi_{\nu_q}\right)^{\dagger}=\phi_{\nu_q}^{\dagger}\phi_{\nu_p}^{\dagger}
$$

With Eq.(23) we can write total two-body operator as:

$$
\hat{V}_{tot}=\frac{1}{2}\sum_{\alpha,\beta}\hat{V}_{\alpha\beta}
$$

This closes the review for first quantization. With the QM formulation based on  Dirac notation in mind, we will see the similarities between the first and second quantization in the next section.
## Occupation number representation
Needless to say, solving many-body problems using Slater determinant as state vector is awkward due to its mathematical complexity. One of the most popular simplification to Slater determinant is **occupation number representation**(ONR) where **we only care about the numbers of particles occupying different orbitals (represented by quantum numbers)**. A N-particle state in ONR can be written as:

$$
|n_{\nu_1},n_{\nu_2},\ldots,n_{\nu_N}\rangle\quad \sum_i n_{\nu_i}=N \tag{24}
$$

If we use Eq.(24) as base states and relax the contraint of fixed number of particles, we end up with a state vector that resides in **Fock space**. For fermions $n_{\nu_i}=0,1$, but $n_{\nu_i}$ can be any non-negative integers for bosons. To change the N-particle state into another state with an arbitrary number of particles, we need two kinds of operators that act on states in ONR: (1) creation operators that increment the number of particles on a specific orbital by 1, and (2) annihilation operators that decrease the number of particles on an orbital by 1. Let's first check thse operations in bosons' systems.

## Boson creation and annihilation operators
Intuitively we can define the creation $b^{\dagger}_{\nu_i}$ and annihilation operators $b_{\nu_i}$ as follows:

$$
\begin{aligned}
b^{\dagger}_{\nu_i}|n_{\nu_1},n_{\nu_2},\ldots,n_{\nu_i},\ldots\rangle=B^{+}(n_{\nu_i})|n_{\nu_1},n_{\nu_2},\ldots,n_{\nu_i}+1,\ldots\rangle\\
b_{\nu_i}|n_{\nu_1},n_{\nu_2},\ldots,n_{\nu_i},\ldots\rangle=B^-(n_{\nu_i})|n_{\nu_1},n_{\nu_2},\ldots,n_{\nu_i}-1,\ldots\rangle
\end{aligned}\tag{25}
$$

where the eigenvalues $B_{\pm}$ are the functions of the particle number, $n_{\nu_i}$. If there is no particle occupying orbital $\nu_i$, the operator $b_{\nu_i}$ will annihilates the state, from which we get 

$$
B^-(0)=0\tag{26}
$$

Before we move forward, let us defined a new operator:**number operator**, and it is defined as follows:

$$
\hat{n}_b(\nu_i)=b^{\dagger}_{\nu_i}b_{\nu_i}\tag{27}
$$

When Eq.(27) is applied to a state in ONR we have:

$$
\hat{n}_b(\nu_i)|n_{\nu_1},\ldots, n_{\nu_i},\ldots\rangle=n_{\nu_i}|n_{\nu_1},\ldots, n_{\nu_i},\ldots\rangle\tag{28}
$$

The proof of Eq.(27) involves knowledge of relativistic quantum mechanics (RQM), and thus will not be elaborated in this blog. Any self-respected textbook of RQM should have the proof. The one I love in particular is from Dr. Klauber's *Student Friendly Quantum Field Theory*.

With the definition of the number operator, we can now summarize the commutation rules for $b^{\dagger}_{\nu}$ and $b_{\nu}$. **The commutation rules are at the core of the quantum field theory because they make QFT obeys symmetry properties of QM formulation**. First, $b_{\nu}$ and $b^{\dagger}_{\nu}$ do not commute. To see this, we use vacuum state $\|0\rangle$ as an example:

$$
b_{\nu}b^{\dagger}_{\nu}|0\rangle-b^{\dagger}_{\nu}b_{\nu}|0\rangle=[b_{\nu},b^{\dagger}_{\nu}]|0\rangle=|0\rangle\tag{29}
$$

From Eq.(29) we obtain our first commutation rule using **commutator bracket**, "$[\quad]$":

$$
[b_{\nu},b^{\dagger}_{\nu^{\prime}}]=\delta_{\nu\nu^{\prime}}\tag{30}
$$
Using commutation bracket we can easily derive other commutation rules shown below:

$$
\begin{aligned}
[b_{\nu},b_{\nu^{\prime}}]=0\quad[b^{\dagger}_{\nu},b^{\dagger}_{\nu^{\prime}}]=0
\end{aligned}\tag{31}
$$
We closes this section by deriving the normalization factor $B^{-}$ and $B^{+}$. Notice that the Hermitian adjoint of the state $b^{\dagger}_{\nu}\|n_{\nu}\rangle$ is $\langle n_{\nu}\|b_{\nu}$, we can use (30) to get:

$$
\langle n_{\nu}|b_{\nu}b^{\dagger}_{\nu}|n_{\nu}\rangle=\langle n_{\nu}|b^{\dagger}_{\nu}b_{\nu}+1|n_{\nu}\rangle=n_{\nu}+1=(B^+)^{\dagger}B^+\tag{32}
$$

Since $(B^+)^{\dagger}B^+=\|B^+\|^2$,and take $B^+$ as real for simplicity, we have:

$$
B^+(n_{\nu})=\sqrt{n_{\nu}+1},\tag{33}
$$

from which we obtain that:

$$
b^{\dagger}_{\nu}|n_{\nu}\rangle=\sqrt{n_{\nu}+1}|n_{\nu}+1
\rangle.\tag{34}$$
For annihilation operator we use the Hermitian adjoint of $b_{\nu}|n_{\nu}\rangle$ to give:

$$
\langle n_{\nu}|b^{\dagger}_{\nu}b_{\nu}|n_{\nu}\rangle=\langle n_{\nu}|\hat{n}_{\nu}|n_{\nu}\rangle=n_{\nu}=(B^-)^{\dagger}B^-\tag{35}
$$

and

$$
b_{\nu}|n_{\nu}\rangle=\sqrt{n_{\nu}}|n_{\nu}-1
\rangle.\tag{36}
$$
The method used to derive commutation rules for fermion systems is identical except that **the commutation bracket is replaced with Poisson bracket**. As we shall see in the next section.
## Fermion creation and annihilation operators
Like what we did for bosons, we define the creation and annihilation operators for fermions as:

$$
\begin{aligned}
a^{\dagger}_{\nu_i}|\ldots,n_{\nu_i},\ldots\rangle=A^{+}|\ldots,n_{\nu_i}+1,\ldots\rangle\\
a_{\nu_i}|\ldots,n_{\nu_i},\ldots\rangle=A^{-}|\ldots,n_{\nu_i}-1,\ldots\rangle
\end{aligned}\tag{37}
$$
By following we did in last section, we find that:

$$
(a_{\nu}a^{\dagger}_{\nu}+a^{\dagger}_{\nu}a_{\nu})|0\rangle=\{a_{\nu},a^{\dagger}_{\nu}\}|0\rangle=|0\rangle\tag{38}
$$

which indicates

$$
\{a_{\nu},a^{\dagger}_{\nu^{\prime}}\}=\delta_{\nu\nu^{\prime}}\tag{39}
$$

where the number operator is $\hat{n}_{\nu}=a^{\dagger}_{\nu}a_{\nu}$. Like bosons the other commutation rules are:

$$
\{a_{\nu},a_{\nu^{\prime}}\}=0\quad\{a^{\dagger}_{\nu},a^{\dagger}_{\nu^{\prime}}\}=0\tag{40}
$$

Using Hermitian adjoints again and we obtain $A^+$ and $A^-$ as:

$$
\begin{aligned}
a_{\nu}|n_{\nu}\rangle=\sqrt{n_{\nu}}|n_{\nu}-1\rangle\\
a^{\dagger}_{\nu}|n_{\nu}\rangle=\sqrt{n_{\nu}+1}|n_{\nu}+1\rangle
\end{aligned}\tag{41}
$$
Note that $n_{\nu}$ for fermions is equal to 0 or 1, so $\sqrt{n_{\nu}}=\sqrt{n_{\nu}+1}=1$. The previous and current section completes the ONR and its basic operators, from which we can easily derive single-particle and two-particle operators in QFT.
## Quantum field operators and their Fourier transforms
In second quantization any state can be obtained by applying creation operator repeatedly to the vacuum state $\|0\rangle$. For boson systems, this can be translated into the following equation:

$$
|n_{\nu_1},\ldots,n_{\nu_i},\ldots\rangle=(b^{\dagger}_{\nu_1})^{n_{\nu_1}}\cdots(b^{\dagger}_{\nu_i})^{n_{\nu_i}}\cdots|0\rangle\tag{42}
$$

In first quantization we used the arguments of projecting states to different bases to describe the concept of single- and two-particle operators. However, the second quantization describes the N-particle operators as a two-step process:**destroy N particles on original orbitals first and then create N particles on a set of new orbitals**. Based on this description we can proceed to write down the single-particle operator for boson systems as:

$$
\hat{T}_{\alpha}|n_{\nu_1},\ldots,n_{\nu_N}\rangle=\sum_{\nu_i}T_{\nu_i\nu_{\alpha}}b^{\dagger}_{\nu_i}b_{\nu_{\alpha}}\left[b^{\dagger}_{\nu_1}b^{\dagger}_{\nu_2}\ldots|0\rangle\right]\tag{43}
$$

The square bracket in Eq.(43) generates the original state at LHS of the same equation. The definition of $T_{\nu_i\nu_{\alpha}}$ is given in Eq.(19). The total single-particle operator is then:

$$
\hat{T}_{tot}|n_{\nu_1},\ldots,n_{\nu_N}\rangle=\sum_{\alpha}^N\sum_{\nu_i}T_{\nu_i\nu_{\alpha}}b^{\dagger}_{\nu_i}b_{\nu_{\alpha}}\left[b^{\dagger}_{\nu_1}b^{\dagger}_{\nu_2}\ldots|0\rangle\right]\tag{44}
$$

The two-particle operator can then be described as destroying 2 particles followed by creating 2 particles. And it can be written down intuitively as:

$$
\hat{V}_{tot}|n_{\nu_1},\ldots,n_{\nu_N}\rangle=\frac{1}{2}\sum_{\nu_k\nu_l}\sum_{\nu_m\nu_n}V_{klmn}b^{\dagger}_{\nu_l}b^{\dagger}_{\nu_k}b_{\nu_m}b_{\nu_n}\tag{45}
$$

It does not take a Ph.D. in physics to imagine how convenient ONR could be by comparing (18) and (22) with (44) and (45). Things are getting better as QFT based on ONR can also perform base change operation like what we did in Eq.(1). We reproduce Eq.(1) to transform it into ONR using creation and annihilation operators, $c^{\dagger}$ and $c$:

$$
\begin{aligned}
|\phi_a\rangle=\sum_b|\psi_b\rangle\langle\psi_b|\phi_a\rangle\\
\tilde{c}_a^{\dagger}|0\rangle=\sum_bc^{\dagger}_b|0\rangle\langle\psi_b|\phi_a\rangle
\end{aligned}\tag{46}
$$

which indicates

$$
\begin{aligned}
\tilde{c}^{\dagger}_a=\sum_b\langle\psi_b|\phi_a\rangle c_b^{\dagger}\\
\tilde{c}_a=\sum_b\langle\phi_a|\psi_b\rangle c_b
\end{aligned}\tag{47}
$$

It can be proved that **the commutation rules for $c_b$ and $c^{\dagger}_b$ still applies to new operators $\tilde{c}_a^{\dagger}$ and $\tilde{c}_a$.** If we repace $\langle\phi_a\|$ with $\langle \mathbf{r}\|$ Eq.(47) becomes:

$$
\begin{aligned}
\tilde{c}(\mathbf{r})=\sum_b\psi_b(\mathbf{r})c_b\\
\tilde{c}^{\dagger}(\mathbf{r})=\sum_b\psi^{\dagger}_b(\mathbf{r})c^{\dagger}_b
\end{aligned}\tag{48}
$$
where $b$ is quantum number. For bosons and fermions, the commutation rules for $\tilde{c}^{\dagger}(\mathbf{r})$ and $\tilde{c}(\mathbf{r})$ is just:

$$
\begin{aligned}
[\tilde{c}(\mathbf{r}),\tilde{c}^{\dagger}(\mathbf{r}^{\prime})]=\delta(\mathbf{r-r^{\prime}})\quad \text{for bosons}\\
\{\tilde{c}(\mathbf{r}),\tilde{c}^{\dagger}(\mathbf{r}^{\prime})\}=\delta(\mathbf{r-r^{\prime}})\quad \text{for fermion}
\end{aligned}\tag{49}
$$
According to the [Bloch's theorem](https://lonitch.github.io/Bravais-lattice-Bloch-theorem/) $\psi_{\mathbf{k}}(\mathbf{r})=e^{i\mathbf{k\cdot r}}u_{\mathbf{k}}(\mathbf{r})$. For simplicity we assume the periodic function $u_{\mathbf{k}}(\mathbf{r})=1$ and substitute $\psi_{\mathbf{k}}(\mathbf{r})$ into (48), we arrive at two very useful transformations between $c_b$ and $\tilde{c}(\mathbf{r})$:

$$
\begin{aligned}
\tilde{c}^{\dagger}(\mathbf{r})=\sum_{\mathbf{k}}e^{-i\mathbf{k\cdot r}}c^{\dagger}_{\mathbf{k}}\\
\tilde{c}(\mathbf{r})=\sum_{\mathbf{k}}e^{i\mathbf{k\cdot r}}c_{\mathbf{k}}
\end{aligned}\tag{50}
$$

## Conclusion
We reviewed the baics of first and second quantization in this blog, which is essential for understanding occupation number representation. Hopefully we will see significant simplificantion ONR could bring to many-body problems.

写着写着就忘了时间，楼下的一对小情侣还在吵闹，也就越发觉得能找个安静的地方写点东西其实不简单。 导师交代的任务一件也没干，那就拖着吧，周末了还是得干点自己喜欢的。本以为写这篇应该简单，毕竟都是本科生的东西，但是写着写着还是发现有些地方茫茫然。不过写完的感觉好像做了一趟历史的过山车，有时慢有时快。一阵喧闹，满脑子空白地回到起点，看着手里的门票，好像什么也没所过，没想过，只不过时间不见了。