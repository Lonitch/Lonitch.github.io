---
layout: post

title: Notes on Basic Concepts of Group Theory

date: 2020-08-29

Author: Sizhe

tags: [handwriting, math]

toc: false

---

## Background

These notes are made based on the purpose of quick exposure to basic concepts of group theory, a pervasive tool used in the research of condensed-matter QFT. The following text will function as a lookup table or a prelude for the possible future application of group theory in QFT problems.

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
For any finite transformation $h(\theta)$ with a parameter $\theta$ (e.g. rotate an object by $50^{\circ}$), we can define the **generator** for $h(\theta)$ as

$$h(\theta)=\lim_{N\rightarrow\infty}(1+\frac{\theta}{N}x)^N=e^{\theta x}\tag{6}.$$

Based on the concept of generator we can define **Lie algebra** $\mathfrak{g}$ as a collection of generator that gives the elements of group $G$ when exponentiated and a Lie bracket $[,]$ between generators. With proper math symbols, the relationship between two generator $\mathbf{X},\mathbf{Y}\in\mathfrak{g}$ can be casted in the **Baker-Campbell-Hansdorff formula**,

$$g\circ h=e^{\mathbf{X}}\circ e^{\mathbf{Y}}=exp\{\mathbf{X+Y+\frac{1}{2}[X,Y]+\frac{1}{12}[X,[X,Y]]\cdots}\}\tag{7}.$$

For the group $SU(2)$ the Lie bracket is simply the commutator bracket.

## Example: get elements in the group $SO(3)$
