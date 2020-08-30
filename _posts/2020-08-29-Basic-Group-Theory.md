---
layout: post

title: Notes on Basic Concepts of Group Theory

date: 2020-08-30

Author: Sizhe

tags: [handwriting, math]

toc: true

---

## Background

These notes are made based on the purpose of quick exposure to basic concepts of group theory, a pervasive tool used in the research of condensed-matter QFT. The following text will function as a lookup table or a prelude for my possible future application of group theory in QFT problems.

## Transformation in the Special Relativity

The allowed transformation in the special relativity has to preserve the following quadratic form of infinitesimal Minkowski spacetime,

$$(ds)^2=(cdt)^2-(dx)^2-(dy)^2-(dz)^2=dx_{\mu}dx_{\nu}\eta^{\mu\nu}\tag{1},$$

where $\eta^{\mu\nu}$ is the Minkowski space metric tensor. If we define a linear transformation so that

$$dx_{\mu}^{\prime}=\Lambda_{\mu}^{\sigma}dx_{\sigma}\tag{2},$$

then the invariant of $(ds)^2$ leads to

$$dx_{\mu}dx_{\nu}\eta^{\mu\nu}=dx_{\mu}^{\prime}dx_{\nu}^{\prime}\eta^{\mu\nu}=dx_{\mu}dx_{\nu}\Lambda_{\lambda}^{\mu}\eta^{\lambda\sigma}\Lambda_{\nu}^{\sigma}\tag{3},$$

where the second equivalence in (3) is valid as $\eta^{\mu\nu}=\eta^{\nu\mu}$. Eq.(3) also indicates that 

$$\Lambda^T\eta\Lambda=\eta\tag{4}.$$

The transformations that satisfy (4) are Lorentz transformations, belonging to Poincaré group. For an arbitrary function $F(a,b,c,\cdots)$ if the function value remains unchanged after the arguments are transformed into $a^{\prime},b^{\prime}$, i.e.,

$$F(a,b,c,\cdots)=F^{\prime}(a^{\prime},b^{\prime},c^{\prime},\cdots),$$

We say the function is **invariant under the transformation.** Another useful concept that relates to invariance is **covariance**, and we illustrate the concept by considering the following polynomial,

$$E=ax^2+bxy+cz^4.$$

After we transform $x,y,$ and $z$ into $x^{\prime},y^{\prime},$ and $z^{\prime}$, if the form of the function remains unchanged, instead of preserving function value,then we call such transformation as **covariant**. In special relativity, all the physical laws has to be **covariant under Lorentz transformation.**

## Practical definition of Group

A group $G$ is a set that contains symmetric transformations related by a binary operator $\circ$ (e.g. matrix multiplication). A group has the following properties:

- Closure: if $g_1,g_2\in G$, then $g_1\circ g_2\in G$;
- Must contain an identity element $e$;
- Must contain inverse elements,i.e. $g^{-1}\in G$ and $g\circ g^{-1}=e$;
- Associativity: $g_1\circ(g_2\circ g_3)=(g_1\circ g_2)\circ g_3$

## Some Commonly Used Groups
### Rotation in 2D space
- $O(2)$: group of all orthogonal $2\times2$ matrices that perform sysmmetric rotation on 2D space, with the binary operator being matrix multiplication and $O^TO=I$.
- $SO(2)$: similar to $O(2)$ with one more constraint of $det[O]=1$, which remains coordinate system orientation.
- $U(1)$: group of unit compex number $z$ with the binary operator being the number multiplication.

We can show that the group $SO(2)$ relates to $U(1)$ by representing "$i$" using a $2\times2$ matrix,

$$i\rightarrow\left(\begin{array}{cc}
0 & -1 \\
1 & 0
\end{array}\right),$$

and the elements in $U(1)$ becomes

$$z=e^{i\theta}=\left(\begin{array}{cc}
cos\theta & -sin\theta \\
sin\theta & cos\theta
\end{array}\right),$$

the rotation matrix in 2D space.

### Rotation in 3D space
The rotation in 3D space is accomplished using 4-dimensional complex number, quaternions, 

$$q=a+b\mathbf{i}+c\mathbf{j}+d\mathbf{k}\tag{5},$$

with

$$\mathbf{i^2=j^2=k^2=1},|q|^2=1,\mathbf{ij=k}.$$

If we represent $i,j,k$ as three different $2\times2$ matrices,

$$\mathbf{i}=\left(\begin{array}{cc}
0 & 1 \\
-1 & 0
\end{array}\right),\quad\mathbf{j}=\left(\begin{array}{ll}
0 & i \\
i & 0
\end{array}\right) \quad, \quad \mathbf{k}=\left(\begin{array}{cc}
i & 0 \\
0 & -i
\end{array}\right)$$

and demand that $det(q)=1$, we obtain the group of $SU(2)$. For any arbitrary vector $\vec{v}=a\mathbf{i}+b\mathbf{j}+c\mathbf{k}$, the 3D rotation is applied to $\vec{v}$ as

$$\vec{v}^{\prime}=q\vec{v}q^{-1}.$$

## Lie Theory for Continuous Symmetry
For any finite transformation $h(\theta)$ with a parameter $\theta$ (e.g. rotate an object by $50^{\circ}$), we can define the **generator** $\mathbf{X}$ for $h(\theta)$ as

$$h(\theta)=\lim_{N\rightarrow\infty}(I+\frac{\theta}{N}\mathbf{X})^N=e^{\theta \mathbf{X}}\tag{6}.$$

Based on the concept of generator we can define **Lie algebra** $\mathfrak{g}$ as a collection of generator that gives the elements of group $G$ when exponentiated and a Lie bracket $[,]$ between generators. With proper math symbols, the relationship between two generator $\mathbf{X},\mathbf{Y}\in\mathfrak{g}$ can be casted in the **Baker-Campbell-Hansdorff formula**,

$$g\circ h=e^{\mathbf{X}}\circ e^{\mathbf{Y}}=exp\{\mathbf{X+Y+\frac{1}{2}[X,Y]+\frac{1}{12}[X,[X,Y]]\cdots}\}\tag{7}.$$

For the group $SU(2)$ the Lie bracket is simply the commutator bracket. Usually, another possible candidate for the Lie bracket is Poisson bracket. In general, for a Lie algebra on a vector space $\mathfrak{g}$, the Lie bracket $[,]:\mathfrak{g\times g}\rightarrow\mathfrak{g}$ satisfies:

- $[a\mathbf{X}+b\mathbf{Y},\mathbf{Z}]=a[\mathbf{X,Z}]+b[\mathbf{Y,Z}]$
- $[\mathbf{X,Y}]=-[\mathbf{Y,X}]$
- Jacobi identity: $[\mathbf{X,[Y,Z]}]+\mathbf{[Y,[Z,X]]+[Z,[X,Y]]}=0$

## Example: get elements in the group $SO(3)$
$SO(3)$ is typically represented by a group of $3\times3$ matrices that rotate objects in 3D space. Here we provide a general process of getting elements in $SO(3)$ by first calculating the generators. Let $O$ and $J$ be the group element and its generator, i.e. $O=e^{\theta J}$. For $SO(3)$, the operators satisfy the following conditions:

- $O^TO=I$,
- $\text{ and } det(O)=1$.

The two conditions above indicate, separately:

$$J^T+J=0\tag{8}$$

$$det(O)=det(e^{\theta J})=e^{\theta Tr(J)}=1\text{ and }Tr(J)=0\tag{9}$$

The $3\times3$ matrices that obey (8) and (9) are

$$J_{1}=\left(\begin{array}{ccc}
0 & 0 & 0 \\
0 & 0 & -1 \\
0 & 1 & 0
\end{array}\right), J_{2}=\left(\begin{array}{ccc}
0 & 0 & 1 \\
0 & 0 & 0 \\
-1 & 0 & 0
\end{array}\right), J_{3}=\left(\begin{array}{ccc}
0 & -1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 0
\end{array}\right).$$

Toe get a mateix operator from $J_1$, we first focus on the submatrix at the bottom right corner, 

$$ j_{1}=\left(\begin{array}{cc}
0 & -1 \\
1 & 0
\end{array}\right).$$

For any integer $n$, we have

$$(j_1)^{2n}=(-1)^nI\quad (j_1)^{2n+1}=(-1)^nj_1.$$

Thus,

$$\begin{aligned}\mathrm{e}^{\theta j_{1}}&=\sum_{n=0}^{\infty} \frac{\theta^{n} j_{1}^{n}}{n !}\\
&=\sum_{n=0}^{\infty} \frac{\theta^{2 n}}{(2 n) !} \underbrace{\left(j_{1}\right)^{2 n}}_{-1^nI}+\sum_{n=0}^{\infty} \frac{\theta^{2 n+1}}{(2 n+1) !} \underbrace{\left(j_{1}\right)^{2 n+1}}_{(-1)^{n}j_{1}}\\
&=\underbrace{\left(\sum_{n=0}^{\infty} \frac{\theta^{2 n}}{(2 n) !}(-1)^{n}\right)}_{=\cos (\theta)} I+\underbrace{\left(\sum_{n=0}^{\infty} \frac{\theta^{2 n+1}}{(2 n+1) !}(-1)^{n}\right)}_{=\sin (\theta)} j_{1}\\
&=\cos (\theta)\left(\begin{array}{cc}
1 & 0 \\
0 & 1
\end{array}\right)+\sin (\theta)\left(\begin{array}{cc}
0 & -1 \\
1 & 0
\end{array}\right)=\left(\begin{array}{cc}
\cos (\theta) & -\sin (\theta) \\
\sin (\theta) & \cos (\theta)
\end{array}\right).
\end{aligned}$$

Since $e^{0J_1}=1$, we get the full operator $O_1$ as 

$$O_{1}=\left(\begin{array}{ccc}
1 & 0 & 0 \\
0 & \cos (\theta) & -\sin (\theta) \\
0 & \sin (\theta) & \cos (\theta)
\end{array}\right)\tag{10}.$$

Following the similar steps, the other two elements of $SO(3)$ group are

$$O_{2}=\left(\begin{array}{ccc}
 \cos (\theta) & 0 & -\sin (\theta)\\
 0 & 1 & 0\\
 \sin (\theta) & 0 & \cos (\theta)
\end{array}\right),O_{3}=\left(\begin{array}{ccc}
 \cos (\theta) & -\sin (\theta) & 0\\
 \sin (\theta) & \cos (\theta) & 0\\
 0 & 0 & 1
\end{array}\right).$$

**Conventionally, we introduce "$i$" in the generator $J_i$ to make them Hermitian,** i.e. $J^{\dagger}=J$. The Lie algebra is then

$$[J_i,J_j]=i\epsilon_{ijk}J_k\tag{11},$$

with

$$J_{1}=\left(\begin{array}{ccc}
0 & 0 & 0 \\
0 & 0 & -i \\
0 & i & 0
\end{array}\right) \quad J_{2}=\left(\begin{array}{ccc}
0 & 0 & i \\
0 & 0 & 0 \\
-i & 0 & 0
\end{array}\right) \quad J_{3}=\left(\begin{array}{ccc}
0 & -i & 0 \\
i & 0 & 0 \\
0 & 0 & 0
\end{array}\right).$$

### Proof: $SU(2)$ and $SO(3)$ have the same Lie algebra
To derive Eq.(11) for $SU(2)$ we notice that the elements in $SU(2)$ (i.e. unit quaternions) follow:

$$\mathcal{U^{\dagger}U}=1\quad det(\mathcal{U})=1.$$

Let $J_i$ be the generator for the element $\mathcal{U}_i$, and we use Baker-Campbell-Hansdorff formula and the conditions above to build the relationship between $J_i$ and its Hermitian conjugate $J^{\dagger}_i$ as

$$\begin{aligned}
e^{-iJ^{\dagger}_i}e^{iJ_i}&=1\\
e^{-iJ^{\dagger}_i+iJ_i+\frac{1}{2}[J^{\dagger}_i,J_i]+\cdots}&=e^0,
\end{aligned}$$

and thus, $J_i^{\dagger}=J_i$. Because $\mathcal{U}$ has unit determinant, we have

$$det(e^{iJ_i})=e^{iTr(J_i)}=1\quad Tr(J_i)=0.$$

We conclude that **the generators of SU(2) must be Hermitian
traceless matrices**. A basis for Hermitian traceless 2 × 2 matrices is given by the following 3 **Pauli matrices**:

$$\sigma_{1}=\left(\begin{array}{cc}
0 & 1 \\
1 & 0
\end{array}\right), \quad \sigma_{2}=\left(\begin{array}{cc}
0 & -i \\
i & 0
\end{array}\right), \quad \sigma_{3}=\left(\begin{array}{cc}
1 & 0 \\
0 & -1
\end{array}\right)\tag{12}.$$

This means **every Hermitian traceless $2\times2$ matrix can be written as a linear combination of these matrices**. It is straightforward to show that

$$\left[\sigma_{i}, \sigma_{j}\right]=2 i \epsilon_{i j k} \sigma_{k}$$

To get rid of "2" in the equation above, we define the generator of $SU(2)$ as $J_i=\frac{1}{2}\sigma_{i}$, and we recover the Lie algebra of (11).

## The Abstract Definition of a Lie Group

Furthermore, the group operation $\circ$ must induce a differentiable map of the manifold into itself. This is a compatibility requirement that ensures that the group property is compatible with the manifold property. Concretely this means that every group element, say $A$ induces a map that takes any element of the group $B$ to another element of the group $C = AB$ and this map must be differentiable. Using coordinates this means that the coordinates of $AB$ must be differentiable functions of the coordinates of $B$.

>A **manifold** is a set of points, for example a sphere that looks locally like flat Euclidean space $R^n$. Another way of thinking about a n-dimensional manifold is that it’s a set which can be given $n$ independent coordinates in some neighborhood of any point.

Each group corresponds to a **simply-connected geometric object.** Take $SU(2)$ as an example, the unit quaternion in  the group satisfies:

$$a^2+b^2+c^2+d^2=1$$

which is the condition for a sphere in 4D space (i.e. $S^3$ sphere). Because $S^3$ sphere is a simply-connected object, the $SU(2)$ is considered as a **fundamental group**. Generally, we represent the symmetry in nature only using fundamental groups, and **there is precisely one simply-connected Lie group corresponding to each Lie algebra.**

## Representation Theory

Elements in any group can simply act on objects that are different in nature, which could be a vector, or geometric shapes. This idea motivates the definition of a representation of a group: **a representation $R$ for a group element is a map between the group elements, $g$, and linear transformation $R(g)$ of some vector space $V$ in such a way that the group properties are preserved**.

>Using representation theory, we are able to investigate systematically how a given group acts on very different vector spaces.

One of the most important examples in physics is $SU(2)$. For example, we can investigate how $SU(2)$ acts on $\mathbb{C}^{2}$. The objects living in $\mathbb{C}^{2}$ are 2D complex and therefore the elements in $SU(2)$ acts on them as $2\times2$ matrices. The matrices (=linear transformations) acting on $\mathbb{C}^{2}$ are just the "usual" $\mathbb{SU}(2)$ (this is where the "2" in $SU(2)$ comes from!) matrices that we already know. In addition, we can examine how $SU(2)$ acts on $\mathbf{C}^{3}$ or even higher dimensional vector spaces. Since the objects living in $\mathbb{C}^3$ are 3D imaginary vectors, the elements in $SU(2)$ are then $3\times3$ matrices. A basis for the generator of $SU(2)$ elements is given by

$$J_{1}=\frac{1}{\sqrt{2}}\left(\begin{array}{lll}
0 & 1 & 0 \\
1 & 0 & 1 \\
0 & 1 & 0
\end{array}\right), J_{2}=\frac{1}{\sqrt{2}}\left(\begin{array}{ccc}
0 & -i & 0 \\
i & 0 & -i \\
0 & i & 0
\end{array}\right), J_{3}=\left(\begin{array}{ccc}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & -1
\end{array}\right)\tag{13}.$$

To avoid confusion, researchers sometimes refer $SU(2)$ group as $S^3$ sphere.

### Useful notions
- Similarity transformation
> If $R(G)$ is a representation of $G$, then $S^{-1}R(G)S$ is also representation.

This means if **we have a representation, we can transform it using any non-singular matrix to get nice-looking matrix representations**.

- Invariant subspace
> When we have a representation $R$ of a group $G$ on a vector space $V,$ we call $V^{\prime}\subseteq V$ an invariant subspace if for $v\in V^{\prime}$ we have $R(g)v\in V^{\prime}$ for all $g\in G$.

- Irreducible representation (the fundamental representation)
> An irreducible representation is a representation of a group $G$ on a vector space $V$ that has no invariant subspaces besides the zero space $\{0\}$ and $V$ itself.

## Conclusion

This blog is dry in a sense of the "information density" as I only expect this blog serves as a reminder for a layman like me who first encoutered group theory in a condensed matter QFT book. For various applications of group theory you might find Jakob's book *Physics from Symmetry* worth reading. If you're a math-driven head, Prof. John Stillwell's *Naive Lie Theory* is so far the best choice we have to get used to the mathematical language behind the theory.