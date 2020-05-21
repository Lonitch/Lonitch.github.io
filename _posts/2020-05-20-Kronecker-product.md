---
layout: post

title: Kronecker Product

date: 2020-05-21

Author: Sizhe

tags: [notes, math, quantum-mechanics]

toc: true

---

## Motivation
The Kronecker product is widely used in Dirac notation, a basic tool for second quantization formulation. People who learned the basics of quantum field theory from Mattuck and Klauber is not fluent with Dirac notation, and could easily mistake Kronecker product with outer product. This blog clarifies the definition of Kronecker product and its application in the formulation of two-body state.

## Definition of Kronecker Product
Let $A$ be a matrix with dimensions of $m\times n$, and $B$ with dimensions of $p\times q$. And the Kronecker product of $A$ and $B$ is:

$$
A\otimes B = \begin{pmatrix}
a_{11}B &a_{12}B &\cdots &a_{1n}B\\
a_{21}B &a_{22}B &\cdots &a_{2n}B\\
\vdots  &\vdots  &\ddots &\vdots \\
a_{m1}B &a_{m2}B &\cdots &a_{mn}B\\
\end{pmatrix}\tag{1}
$$

Thus, the Kronecker product creates a new matrix of $(mp)\times(nq)$. If we let $\mathbf{x}$ and $\mathbf{y}$ be two vectors having length of $n$ and $q$, respectively, the commutative theorem of Kronecker product writes:

$$
(A\mathbf{x})\otimes (B\mathbf{y})=(A\otimes B)(\mathbf{x\otimes y})\tag{2}
$$
The similar rule is applied when $\mathbf{x}$ and $\mathbf{y}$ are matrices.
## Construct Two-body States Using Kronecker Product
According to Dirac notation, the time-independent Schrodinger equation is just

$$
\hat{H}|\phi\rangle=E|\phi\rangle\tag{3}
$$

where $\hat{H}$ is the Hamiltonian operator, and $\|\phi\rangle$ is a single-particle eigenstate, see the article [here](https://lonitch.github.io/Bravais-lattice-Bloch-theorem/). We now write a two-particle eigenstate as $\|\phi_1,\phi_2\rangle$, and Eq. (3) becomes:

$$
\hat{H}|\phi_1,\phi_2\rangle=E^{\prime}|\phi_1,\phi_2\rangle \tag{4}
$$

Because the most common wavefunctions are spatial-coordinate based, we need to project our state $\|\phi_1,\phi_2\rangle$ on to coordinate bases. To this end, we need to define spatial location "state" as $\|x\rangle$, and the two-particle wavefunction as $\Psi(x_1,x_2)$. For two-fermion(boson) state we have

$$
\begin{align}
\Psi(x_1,x_2)&=(\langle x_1|\otimes\langle x_2|)|\phi_1,\phi_2\rangle\\
&=\frac{1}{\sqrt{2}}\langle x_1|\phi_1\rangle\langle x_2|\phi_2\rangle+\xi\frac{1}{\sqrt{2}}\langle x_2|\phi_1\rangle\langle x_1|\phi_2\rangle
\end{align}\tag{5}
$$

where $\xi=-1$ for fermion states and $\xi=1$ for boson states, as a result of indistinguishability of particles. The factor $\frac{1}{\sqrt{2}}$ here guarantees the sum of moduli of each term equal to 1. From (5), we can derive the form of $\|\phi_1,\phi_2\rangle$ using Kronecker product as:

$$
|\phi_1,\phi_2\rangle=\frac{1}{\sqrt{2}}|\phi_1\rangle\otimes|\phi_2\rangle-\frac{1}{\sqrt{2}}|\phi_2\rangle\otimes|\phi_1\rangle\tag{6}
$$

Because

$$
(\langle x_1|\otimes\langle x_2|)(|\phi_1\rangle\otimes|\phi_2\rangle)=(\langle x_1|\phi_1\rangle)\otimes(\langle x_2|\phi_2\rangle)=\langle x_1|\phi_1\rangle\langle x_2|\phi_2\rangle
$$

More generally, the N-particle symmetrized wavefunction can be written as

$$
|\phi_1,\phi_2,\cdots,\phi_N\rangle=\frac{1}{\sqrt{N!\Pi_{\phi=1}^{\infty}(n_{\phi}}!)}\sum_{\mathcal{P}}\xi^{(1-sgn\mathcal{P})/2}|\phi_{\mathcal{P1}}\rangle\otimes|\phi_{\mathcal{P2}}\rangle\cdots|\phi_{\mathcal{P}_N}\rangle\tag{7}
$$

where $sgn\mathcal{P}=1(-1)$ when the permutation of the particles can be obtained after even(odd) steps. The summation in Eq.(7) runs over all possible permutations of $\{\mathcal{P}_1,\mathcal{P}_2,\cdots,\mathcal{P}_N\}$. If we treat $\phi_i$ as the ith quantum state, then $n_{\phi}$ is just the number of particles with state $\phi$. For fermion $n_{\phi}\le1$, and (7) is just the "**Slater determinant**". With notation conventions, we always arrange the quantum states in ascending sequence in $\|\cdots\rangle$ according to the energy levels. As a result, we can write the N-particle state using integers as $\|1,2,3,\cdots\rangle$.

## Other Useful Identity of Kronecker Product
Let $A$, $B$,... be matrices, we have

$$
(A\otimes B)^T=A^T\otimes B^T
$$

$$
(A\otimes B)^{\dagger}=A^{\dagger}\otimes B^{\dagger}
$$

$$
trace(A\otimes B)=trace(A)trace(B)
$$

$$
(A\otimes B)\otimes C=A\otimes(B\otimes C)
$$

$$
(A\otimes B\cdots\otimes X)(A^{\prime}\otimes B^{\prime}\cdots\otimes X^{\prime})=(A\otimes A^{\prime})(B\otimes B^{\prime})\cdots(X\otimes X^{\prime})
$$
