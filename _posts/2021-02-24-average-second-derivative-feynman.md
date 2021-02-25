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

with $\hat{p}=-i\hbar\frac{\partial}{\partial x}$ being momentum operator.

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
\begin{aligned}
\int_{\infty}K(x,t+\epsilon;y,t)f(y,t)dy&=f(x,t+\epsilon)=f(x,t)+\epsilon\frac{\partial f}{\partial t}\\
&=f(x,t)-\frac{i\epsilon}{\hbar}\hat{H}f(x,t)\tag{5}
\end{aligned}
$$

Shrodinger's equation of $f(x,t)$ is used at the last line of Eq. (5). The Hamiltonian operator $\hat{H}$ is related to the Lagrangian $\mathcal{L}$ in $S$. Using the first equivalence of eq. (5) in eq. (4) gives

$$
\langle\chi|F|\psi\rangle_S=\int\chi^*(c)F(c)\psi(c) dx_c\tag{6}.
$$

Now, if we replace $F$ with a product of coordinates at two different time instances, $x_{k+1}(t+\epsilon)x_k(t)$ in eq.(4), we have

$$
\begin{aligned}
\langle\chi|x_{k+1}x_k|\psi\rangle_S&=\int\int\int\int \chi^*(b)K(b;x_{k+1},t+\epsilon)x_{k+1}K(x_{k+1},t+\epsilon;x_k,t)x_k\times\\
&\quad\quad\quad K(x_k,t;a)\psi(a) dx_{k+1}dx_kdx_adx_b\\
&=\int\int \chi^*(x_{k+1},t+\epsilon)x_{k+1}K(x_{k+1},t+\epsilon;x_k,t)x_k\psi(x_k,t)dx_{k+1}dx_k.\tag{7}
\end{aligned}
$$

According to Feynman's argument, if we integrate over $x_k$, we can use eq. (5) to get

$$
\begin{aligned}
\int K(x_{k+1},t+\epsilon;x_k,t)x_k\psi(x_k,t)dx_k&=x_{k+1}\psi(x_{k+1},t+\epsilon)\\
&=(1-\frac{i\epsilon}{\hbar}\hat{H})x_{k+1}\psi(x_{k+1},t)\tag{8},
\end{aligned}
$$

**From Feynman's argument, $x\psi(x,t)$ and $\psi$ are simultaneously eigenfunctions of $\hat{H}$** as indicated by the second equivalence in Eq.(8). My question is then, **How can we make sure that $\hat{H}$ always satisfies such condition? i.e., having $\psi$ and $x\psi$ as eigenfunctions simultaneously?** 

If we ignore this and move forward the eq. (7) now becomes

$$
\begin{aligned}
\langle\chi|x_{k+1}x_k|\psi\rangle_S&=\int \chi^*(x_{k+1},t+\epsilon)x_{k+1}(1-\frac{i\epsilon}{\hbar}\hat{H})x_{k+1}\psi(x_{k+1},t)dx_{k+1}\\
&=\int \chi^*(x,t+\epsilon)x(1-\frac{i\epsilon}{\hbar}\hat{H})x\psi(x,t)dx\\
&=\int\chi^*(x,t)(1+\frac{i\epsilon}{\hbar}\hat{H})x(1-\frac{i\epsilon}{\hbar}\hat{H})x\psi(x,t)dx\\
&=\int\chi^*(x)x^2\psi(x)dx+\frac{i\epsilon}{\hbar}\int\chi^*(\hat{H}x-x\hat{H})x\psi(x)dx.\tag{9}
\end{aligned}
$$

Since $\frac{im}{\hbar}[H,x]=p$, the equation above gives

$$
\langle\chi|x_{k+1}x_k|\psi\rangle_S=\int\chi^*(x)x^2\psi(x)dx+\frac{\epsilon}{m}\int\chi^*px\psi(x)dx\tag{10}.
$$

## Coming back to eq. (1)
---
Notice that

$$
\begin{aligned}
\langle\chi|m\frac{x_{k+1}-x_k}{\epsilon}m\frac{x_k-x_{k-1}}{\epsilon}|\psi\rangle&=\frac{m^2}{\epsilon^2}\{\langle\chi|x_{k+1}x_k|\psi\rangle-\langle\chi|x_{k+1}x_{k-1}|\psi\rangle-\\
&\langle\chi|x_kx_k|\psi\rangle+\langle\chi|x_{k}x_{k-1}|\psi\rangle\}\\
&=\frac{m^2}{\epsilon^2}\{A-B-C+D\}\tag{11}.
\end{aligned}
$$

where

$$
A=\int\chi^*(x)x^2\psi(x)dx+\frac{i\epsilon}{\hbar}\int\chi^*(\hat{H}x-x\hat{H})x\psi(x)dx,\tag{12}
$$

$$
\begin{aligned}
B&=\int\chi^*(x,t)(1+\frac{i\epsilon}{\hbar}\hat{H})x(1-\frac{i\epsilon}{\hbar}\hat{H})x\psi(x,t)dx\\
&=\int\chi^*(x,t)(x^2-\frac{i\epsilon}{\hbar}x\hat{H}x+\frac{i\epsilon}{\hbar}\hat{H}xx+\frac{\epsilon^2}{\hbar^2}\hat{H}x\hat{H}x)\psi(x,t)dx,\tag{13}
\end{aligned}
$$

$$
C=D=\int\chi^*(x)x^2\psi(x)dx\tag{14}
$$
according to equations(8)-(10). Combining (11)-(12), we have all the $\epsilon$ terms canceled out to give

$$
\langle\chi|m\frac{x_{k+1}-x_k}{\epsilon}m\frac{x_k-x_{k-1}}{\epsilon}|\psi\rangle=-\frac{m^2}{\hbar^2}\int\chi^*(x,t)\hat{H}x\hat{H}x\psi(x,t)dx\tag{15},
$$

Which does not match Feynman's results. I think my erroneous results have something to do with my understanding of eq. (8). Can anyone tell me which step in my derivation needs to be modified? And help will be appreciated. I really appreciate any help you can provide.

Notice that

$$
\begin{aligned}
\langle\chi|m\frac{x_{k+1}-x_k}{\epsilon}m\frac{x_k-x_{k-1}}{\epsilon}|\psi\rangle&=\frac{m^2}{\epsilon^2}\{\langle\chi|x_{k+1}x_k|\psi\rangle-\langle\chi|x_{k+1}x_{k-1}|\psi\rangle-\\
&\langle\chi|x_kx_k|\psi\rangle+\langle\chi|x_{k}x_{k-1}|\psi\rangle\}\\
&=\frac{m^2}{\epsilon^2}\{A-B-C+D\}\tag{11}.
\end{aligned}
$$

where

$$
A=\int\chi^*(x)x^2\psi(x)dx+\frac{i\epsilon}{\hbar}\int\chi^*(\hat{H}x-x\hat{H})x\psi(x)dx,\tag{12}
$$

$$
\begin{aligned}
B&=\int\chi^*(x,t)(1+\frac{i\epsilon}{\hbar}\hat{H})x(1-\frac{i\epsilon}{\hbar}\hat{H})x\psi(x,t)dx\\
&=\int\chi^*(x,t)(x^2-\frac{i\epsilon}{\hbar}x\hat{H}x+\frac{i\epsilon}{\hbar}\hat{H}xx+\frac{\epsilon^2}{\hbar^2}\hat{H}x\hat{H}x)\psi(x,t)dx,\tag{13}
\end{aligned}
$$

$$
C=D=\int\chi^*(x)x^2\psi(x)dx\tag{14}
$$
according to equastions(8)-(10). Combining (11)-(12), we have all the $\epsilon$ terms cancelled out to give

$$
\langle\chi|m\frac{x_{k+1}-x_k}{\epsilon}m\frac{x_k-x_{k-1}}{\epsilon}|\psi\rangle=-\frac{m^2}{\hbar^2}\int\chi^*(x,t)\hat{H}x\hat{H}x\psi(x,t)dx\tag{15},
$$

which does not match Feynman's results. I think my erroneous results have something to do with my understanding of eq.(8). Can anyone tell me which step in my derivation needs to be modified? and help will be appreciated. Thanks in advance!