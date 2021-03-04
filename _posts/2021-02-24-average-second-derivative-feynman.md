---
layout: post
title: $\langle\frac{\partial^2}{\partial x^2}\rangle$ Derived from Path Integral
date: 2021-02-24
Author: Sizhe
tags: [notes, quantum-mechanics, path-integral]
---

## A Problem from Feynman's Path Integral Book
---
Let $x_i$ be coordinates at different time instances, prove that

$$
\langle\chi|m\frac{x_{k+1}-x_k}{\epsilon}m\frac{x_k-x_{k-1}}{\epsilon}|\psi\rangle=\int\int \chi^* \hat{p}\hat{p}\psi dxdy=-\hbar^2\int\int\chi^*\frac{\partial^2}{\partial x^2}\psi dxdy\tag{1}
$$

with $\hat{p}=-i\hbar\frac{\partial}{\partial x}$ being momentum operator. There is a misprint in Eqn.(1) as we can see that by verifying the units on both sides. The LHS has a unit of momentum square while the RHS has a unit of momentum squared times length. Note that the unit of wavefunction is $\sqrt{probability/vol.}$. Therefore, Eqn.(1) should really be

$$
\langle\chi|m\frac{x_{k+1}-x_k}{\epsilon}m\frac{x_k-x_{k-1}}{\epsilon}|\psi\rangle=-\hbar^2\int\chi^*(x,t)\frac{\partial^2}{\partial x^2}\psi(x,t) dx\tag{1*}
$$

## Equations Developed by Feynman for Later Use
---
To show eqn.(1), I first noticed that, from the definition of path integral, 

$$\langle\chi|1|\psi\rangle=\int\int\chi^*(x_a,t_b)K(x_a,t_b;x_b,t_a)\psi(x_b,t_a)dx_adx_b\tag{2},$$

with kernel $K(x,t_b;y,t_a)$ being a path integral of free particle with two ends at $t_a$ and $t_b$. The integral with a format shown in eq. (2) is called as **transition amplitude**, whose absolute square gives the probability of finding a system in state $\chi$ when it starts with a state $\psi$. If the **1** in Eq.(2) is replaced with a function $F(x_c,t_c)$, we have a transition element as 

$$
\langle\chi|F|\psi\rangle_S=\int\int\int_{x_a}^{x_b}\chi^*(x_b,t_b)F(x_c,t_c)e^{iS/\hbar}\mathcal{D}x(t)\psi(x_a,t_a)dx_adx_b\tag{3},
$$

The kernel is written out as a path integral explicitly, and the action $S$ describes the system's behavior.

Because $t_c$ is a different time instance, we can further split the path integral in Eq.(3) to get: 

$$
\langle\chi|F|\psi\rangle_S=\int\int\int \chi^*(b)K(b;c)F(c)K(c;a)\psi(a) dx_cdx_adx_b\tag{4}
$$

where $a=(x_a,t_a)$. Also, for an arbitrary wavefunction $f(y,t)$, we have

$$
\begin{array}{ll}
\int_{\infty}K(x,t+\epsilon;y,t)f(y,t)dy&=f(x,t+\epsilon)=f(x,t)+\epsilon\frac{\partial f}{\partial t}\\
&=f(x,t)-\frac{i\epsilon}{\hbar}\hat{H}f(x,t)\tag{5}
\end{array}
$$

Shrodinger's equation of $f(x,t)$ is used at the last line of Eq. (5). The Hamiltonian operator $\hat{H}$ is related to the Lagrangian $\mathcal{L}$ in $S$. Using the first equivalence of eq. (5) in eq. (4) gives

$$
\langle\chi|F|\psi\rangle_S=\int\chi^*(c)F(c)\psi(c) dx_c\tag{6}.
$$

Now, if we replace $F$ with a product of coordinates at two different time instances, $x_{k+1}(t+\epsilon)x_k(t)$ in eq.(4), we have

$$
 \begin{array}{ll}
\langle\chi|x_{k+1}x_k|\psi\rangle_S&=\int\int\int\int \chi^*(b)K(b;x_{k+1},t+\epsilon)x_{k+1}K(x_{k+1},t+\epsilon;x_k,t)x_k\times\\
&\quad\quad\quad K(x_k,t;a)\psi(a) dx_{k+1}dx_kdx_adx_b\\
&=\int\int \chi^*(x_{k+1},t+\epsilon)x_{k+1}K(x_{k+1},t+\epsilon;x_k,t)x_k\psi(x_k,t)dx_{k+1}dx_k.\tag{7}
 \end{array}
$$

According to Feynman's argument, if we integrate over $x_k$, we can use eq. (5) to get

$$
 \begin{array}{ll}
\int K(x_{k+1},t+\epsilon;x_k,t)x_k\psi(x_k,t)dx_k&=x_{k+1}\psi(x_{k+1},t+\epsilon)\\
&=(1-\frac{i\epsilon}{\hbar}\hat{H})x_{k+1}\psi(x_{k+1},t)\tag{8},
 \end{array}
$$

It might seem to be that Eq.(5) is applied to Eq.(8) directly by replacing $f(y)$ in (5) with $x \psi$ in (8). However, Feynman was trying to motivate us here to build a relationship between the **conventional operator formalism** and the **path integral formalism**. So the $x$ can be understood as a coordinate operator, or an eigenvalue of the operator. After a time period of $\epsilon$, the eigenvalue of the coordinate operator for the wavefunction becomes $x_{k+1}$, and thus the result in (8). 

If we move forward with Eqn.(8), the eq. (7) now becomes

$$
 \begin{array}{ll}
\langle\chi|x_{k+1}x_k|\psi\rangle_S&=\int \chi^*(x_{k+1},t+\epsilon)x_{k+1}(1-\frac{i\epsilon}{\hbar}\hat{H})x_{k+1}\psi(x_{k+1},t)dx_{k+1}\\
&=\int \chi^*(x,t+\epsilon)x(1-\frac{i\epsilon}{\hbar}\hat{H})x\psi(x,t)dx\\
&=\int\chi^*(x,t)(1+\frac{i\epsilon}{\hbar}\hat{H})x(1-\frac{i\epsilon}{\hbar}\hat{H})x\psi(x,t)dx\\
&=\int\chi^*(x)x^2\psi(x)dx+\frac{i\epsilon}{\hbar}\int\chi^*(\hat{H}x-x\hat{H})x\psi(x)dx.\tag{9}
 \end{array}
$$

Since $\frac{im}{\hbar}[H,x]=p$, the equation above gives

$$
\langle\chi|x_{k+1}x_k|\psi\rangle_S=\int\chi^*(x)x^2\psi(x)dx+\frac{\epsilon}{m}\int\chi^*px\psi(x)dx\tag{10}.
$$

## Getting back to eq. (1)
---
Notice that

$$
 \begin{array}{ll}
\langle\chi|m\frac{x_{k+1}-x_k}{\epsilon}m\frac{x_k-x_{k-1}}{\epsilon}|\psi\rangle&=\frac{m^2}{\epsilon^2}\{\langle\chi|x_{k+1}x_k|\psi\rangle-\langle\chi|x_{k+1}x_{k-1}|\psi\rangle-\\
&\langle\chi|x_kx_k|\psi\rangle+\langle\chi|x_{k}x_{k-1}|\psi\rangle\}\\
&=\frac{m^2}{\epsilon^2}\{A-B-C+D\}\tag{11}.
 \end{array}
$$

where we let $x_{k+1}=x$ and $x_k=y$ to get

$$
\begin{array}{ll}
A&=\int\chi^*(x,t+\epsilon)xK(x,t+\epsilon;y,t)y\psi(y,t)dxdy\\
&=\int\chi^*(x,t+\epsilon)x(1-\frac{i\epsilon}{\hbar}H)x\psi(x,t)dx\\
&=\int\chi^*(x,t)(1+\frac{i\epsilon}{\hbar})x(1-\frac{i\epsilon}{\hbar}H)x\psi(x,t)dx\\
&=\int\chi^*(x,t)(x^2-\frac{i\epsilon}{\hbar}xHx+\frac{i\epsilon}{\hbar}Hxx+\frac{\epsilon^2}{\hbar^2}HxHx)dx.
\tag{12}
\end{array}
$$

Things get complicated for $B$ as we need to converge wavefunctions at $t_{k+1}$ and $t_{k-1}$ to $t_{k}$. So **we use Eqn(8) and its conjugate to calculate $B$**. Let $t_k=t$, $x_{k+1}=x$, $x_k=z$, and $x_{k-1}=y$, we have

$$
 \begin{array}{ll}
B&=\int\chi^*(x,t+\epsilon)xK(x,t+\epsilon;y,t-\epsilon)y\psi(y,t-\epsilon)dxdy\\
&=\int\chi^*(x,t+\epsilon)xK(x,t+\epsilon;z,t)K(z,t;y,t-\epsilon)y\psi(y,t-\epsilon)dxdydz\\
&=\int\chi^*(x,t+\epsilon)xK(x,t+\epsilon;z,t)(1-\frac{i\epsilon}{\hbar})z\psi(z,t-\epsilon)dxdz\\
&=\int\chi^*(z,t+\epsilon)z(1-\frac{i\epsilon}{\hbar})(1-\frac{i\epsilon}{\hbar})z\psi(z,t-\epsilon)dz\\
&=\int\chi^*(z,t)(1+\frac{i\epsilon}{\hbar}H)z(1-\frac{i\epsilon}{\hbar})(1-\frac{i\epsilon}{\hbar})z(1+\frac{i\epsilon}{\hbar})\psi(z,t)dz\\
&=\int\chi^*(z,t)(z^2+\frac{i\epsilon}{\hbar}zzH-2\frac{i\epsilon}{\hbar}zHz+2\frac{\epsilon^2}{\hbar^2}zHzH-\\
&\frac{\epsilon^2}{\hbar^2}zHHZ+\frac{i\epsilon}{\hbar}Hzz-\frac{\epsilon^2}{\hbar^2}HzzH+2\frac{\epsilon^2}{\hbar^2}HzHz)\psi(z,t)dz
\tag{13}
 \end{array}
$$

where we used the conjugate of Eqn. (8) at the fourth equivalence. The equations of (7.75) and (7.76) in Feynman's book were used at the fifth equivalence. Notice that we need to eliminate all the terms that have their orders higher than $\epsilon^2$ in the equation above. Because those terms are negligible at the limit of $\epsilon\rightarrow0$. 

For $C$, it's simply

$$
C=\int\chi^*(x,t)x^2\psi(x,t)dx\tag{14}.
$$

Finally, for $D$, we again let $x_{k}=x$ and $y=x_{k-1}$ to give

$$
\begin{array}{ll}
D&=\int\chi^*(x,t)xK(x,t;y,t-\epsilon)y\psi(y,t-\epsilon)dxdy\\
&=\int\chi^*(x,t)x(1-\frac{i\epsilon}{\hbar}H)x\psi(x,t-\epsilon)dx\\
&=\int\chi^*(x,t)x(1-\frac{i\epsilon}{\hbar}H)x(1+\frac{i\epsilon}{\hbar}H)\psi(x,t)dx\\
&=\int\chi^*(x,t)(x^2+\frac{i\epsilon}{\hbar}xxH-\frac{i\epsilon}{\hbar}xHx+\frac{\epsilon^2}{\hbar^2}xHxH)\psi(x,t)dx\tag{15}.
\end{array}
$$

Combining (11)-(15), we have all the $\epsilon$ terms canceled out to give

$$
\begin{array}{ll}
\langle\chi|m\frac{x_{k+1}-x_k}{\epsilon}m\frac{x_k-x_{k-1}}{\epsilon}|\psi\rangle&=\frac{m^2}{\hbar^2}\int\chi^*(x,t)(-xHxH\\
&-HxHx+xHHx+HxxH)\psi(x,t)dx\\
&=\int\chi^*(x,t)pp\psi(x,t)dx\tag{16}.
\end{array}
$$

which does match Feynman's results. Q.E.D.
