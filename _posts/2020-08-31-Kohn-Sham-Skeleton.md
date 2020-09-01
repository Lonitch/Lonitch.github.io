---
layout: post

title: Skeleton of Kohn-Sham Approach

date: 2020-08-31

Author: Sizhe

tags: [handwriting, density-functional-theory]

toc: false

---

## 1. Non-interacting Reference System
From Hartrr-Fock approach we know that the Slater determinant is the wavefunction of non-interacting fermion system, where the Hamiltonian is given by

$$\hat{\mathrm{H}}_{\mathrm{s}}=-\frac{1}{2} \sum_{\mathrm{i}}^{\mathrm{N}} \nabla_{\mathrm{i}}^{2}+\sum_{\mathrm{i}}^{\mathrm{N}} \mathrm{V}_{\mathrm{s}}\left(\mathrm{r}_{\mathrm{i}}\right)\tag{1.1},$$

where $V_s$ is the local potential. From (1.1) the one-electron Kohn-Sham operator is just

$$\hat{\mathrm{f}}^{\mathrm{KS}}=-\frac{1}{2} \nabla^{2}+\mathrm{V}_{\mathrm{s}}(\overrightarrow{\mathrm{r}})\tag{1.2},$$

with the one-electron Schrodinger equation being

$$\hat{\mathrm{f}}^{KS} \varphi_{i}=\varepsilon_{i} \varphi_{i}\tag{1.3}$$

with $\varphi_i$ being Kohn-Sham orbitals. The primary purpose of Kohn-Sham approach is finding the effective local potential $V_s(\vec{r})$ that gives the charge density distribution corresponding to the ground state, $\rho_0(\vec{r})$, from which the ground state energy is calculated as

$$E_0=F[\rho_0]+\int\rho_0(\vec{r})V_{Ne}d\vec{r}\tag{1.4},$$

where the functional $F[\rho]$ contains the contributions from electron kinetic, Coulombic, and quantum-mechanical energies,

$$F[\rho]=T[\rho]+J[\rho]+E_{qm}[\rho]\tag{1.5}.$$

## 2. Kohn-Sham Equation
We derive Kohn-Sham equation by first calculating the kinetic energy, $T[\rho]$ in (1.5). In the non-interacting reference system, the kinetic energy is the expectation value of the operator $\frac{1}{2}\nabla^2$ with $m$ and $\hbar$ being unity, i.e.,

$$\mathrm{T}_{\mathrm{S}}=-\frac{1}{2} \sum_{\mathrm{i}}^{\mathrm{N}}\left\langle\varphi_{\mathrm{i}}\left|\nabla^{2}\right| \varphi_{\mathrm{i}}\right\rangle\tag{2.1}.$$

Using $T_s$, we can separate $F[\rho]$ from (1.5) into three parts,

$$F[\rho]=T_s[\rho]+J[\rho]+E_{xc}[\rho]\tag{2.2}$$

where $E_{xc}$ is the so-called "exchange-correlation" energy that caused by all the quantum-mechanical effects that we don't know yet, and is defined as

$$E_{xc}[\rho]=(T[\rho]-T_{s}[\rho])+(E_{ee}[\rho]-J[\rho])=T_c[\rho]+T_{qm}[\rho]\tag{2.3}.$$

In an explicit form, (2.3) is then

$$\begin{aligned}
\mathrm{E}[\rho(\overrightarrow{\mathrm{r}})] &=\mathrm{T}_{\mathrm{S}}[\rho]+\mathrm{J}[\rho]+\mathrm{E}_{\mathrm{XC}}[\rho]+\mathrm{E}_{\mathrm{Ne}}[\rho] \\
&=\mathrm{T}_{\mathrm{S}}[\rho]+\frac{1}{2} \iint \frac{\rho\left(\overrightarrow{\mathrm{r}}_{1}\right) \rho\left(\overrightarrow{\mathrm{r}}_{2}\right)}{\mathrm{r}_{12}} \mathrm{d} \overrightarrow{\mathrm{r}}_{1} \mathrm{d} \overrightarrow{\mathrm{d}}_{2}+\mathrm{E}_{\mathrm{XC}}[\rho]+\int \mathrm{V}_{\mathrm{Ne}} \rho(\overrightarrow{\mathrm{r}}) \mathrm{d} \overrightarrow{\mathrm{r}} \\
&=-\frac{1}{2} \sum_{\mathrm{i}}^{\mathrm{N}}\left\langle\varphi_{\mathrm{i}}\left|\nabla^{2}\right| \varphi_{\mathrm{i}}\right\rangle+\frac{1}{2} \sum_{\mathrm{i}}^{\mathrm{N}} \sum_{\mathrm{j}}^{\mathrm{N}} \iint\left|\varphi_{\mathrm{i}}\left(\overrightarrow{\mathrm{r}}_{1}\right)\right|^{2} \frac{1}{\mathrm{r}_{12}}\left|\varphi_{\mathrm{j}}\left(\overrightarrow{\mathrm{r}}_{2}\right)\right|^{2} \mathrm{d} \overrightarrow{\mathrm{r}}_{1} \mathrm{d} \overrightarrow{\mathrm{r}}_{2} \\
&+\mathrm{E}_{\mathrm{XC}}[\rho(\overrightarrow{\mathrm{r}})]-\sum_{\mathrm{i}}^{\mathrm{N}} \int \sum_{\mathrm{A}}^{\mathrm{M}} \frac{\mathrm{Z}_{\mathrm{A}}}{\mathrm{r}_{1 \mathrm{A}}}\left|\varphi_{\mathrm{i}}\left(\overrightarrow{\mathrm{r}}_{1}\right)\right|^{2} \mathrm{d} \overrightarrow{\mathrm{r}}_{1}.
\end{aligned}\tag{2.4}$$

We apply the variational principle with the constraint of $\langle\varphi_i\mid\varphi_j\rangle=\delta_{ij}$, we obtain the **Kohn-Sham equation** as

$$\begin{array}{l}
\left(-\frac{1}{2} \nabla^{2}+\left[\int \frac{\rho\left(\overrightarrow{\mathrm{r}}_{2}\right)}{\mathrm{r}_{12}} \mathrm{d} \overrightarrow{\mathrm{r}}_{2}+\mathrm{V}_{\mathrm{XC}}\left(\overrightarrow{\mathrm{r}}_{1}\right)-\sum_{\mathrm{A}}^{\mathrm{M}} \frac{\mathrm{Z}_{\mathrm{A}}}{\mathrm{r}_{1 \mathrm{A}}}\right]\right) \varphi_{\mathrm{i}} \\
=\left(-\frac{1}{2} \nabla^{2}+\mathrm{V}_{\mathrm{eff}}\left(\overrightarrow{\mathrm{r}}_{1}\right)\right) \varphi_{\mathrm{i}}=\varepsilon_{\mathrm{i}} \varphi_{\mathrm{i}}
\end{array}\tag{2.5}.$$

Comparing (2.5) with (1.3) we find

$$V_S(\vec{r}) \equiv \mathrm{V}_{\mathrm{eff}}(\vec{r})=\int \frac{\rho\left(\vec{r_2}\right)}{\mathrm{r}_{12}} d \vec{r_2}+\mathrm{V}_{\mathrm{XC}}\left(\vec{\mathrm{r_1}}\right)-\sum_{A}^{M} \frac{Z_{A}}{r_{1A}}\tag{2.6}.$$

Unlike the Hartree-Fock approach, the $\varepsilon_i$ in (2.5) is **not ionization energy, and has no solid physical meaning.** The description above does not preassume any constriants, thus, **Kohn-Sham approach is in principle exact if we use exact form of $V_{xc}$.**

## 3. Exchange-correlation Functional in Kohn-Sham Scheme
In most modern implementation of density functional theory packages, the approxiamtions of $E_{xc}[\rho]$ can be categorized into three types: local density approximation (LDA), generalized gradient approximation(GGA), and meta-GGA.  LDA usually takes the general form of

$$E_{xc}^{LDA}[\rho]=\int\rho(\vec{r})\varepsilon_{xc}(\vec{r})d\vec{r}\tag{3.1},$$

where the exchange-correlation function has exchange $\varepsilon_x$ and correlation part $\varepsilon_c$,

$$\varepsilon_{xc}=\varepsilon_x+\varepsilon_c=-\frac{3}{4}(\frac{3\rho}{\pi})^{1/3}+\varepsilon_c\tag{3.2}.$$

The exchange part $\varepsilon_x$ is derived by Bloch and Dirac in the late 1920’s. The GGA takes the form of

$$\mathrm{E}_{\mathrm{XC}}^{\mathrm{GGA}}\left[\rho_{\alpha}, \rho_{\beta}\right]=\int \mathrm{f}\left(\rho_{\alpha}, \rho_{\beta}, \nabla \rho_{\alpha}, \nabla \rho_{\beta}\right) \mathrm{d} \overrightarrow{\mathrm{r}}\tag{3.3}$$

where $\rho_{\alpha}$ are the electron density with the $\alpha-$spin. When the second-order derivative of charge density is used, we have another class of $E_{XC}$ named as meta-GGA. In recent years, there is a rising star in the community of ExC functional called *hybrid function* defined as:

$$E_{X C}^{h y b r i d}=E_{X C}^{G G A}+0.25\left(E_{X}^{H F}-E_{X}^{G G A}\right)\tag{3.4}.$$

## 4. The Failure of Approximate $E_{XC}[\rho]$

The degeneracy of the spin states is the primary reason for the failure of various exchange-correlation functional. Take the ${}^2D$ state of the Scandium dication as an example. Its electron configuration is $Ne(3s)^2(3p)^6(3d)^1$, and the $3d$ electron could occupy any one of the orbitals: $E_{d(x^2-y^2)}$, $E_{dxz}$, $E_{dz^2}$, $E_{dyz}$, and $E_{dxz}$. The energies of these five different configurations must have the same energy, but the DFT calculations predict different energy values. One of the active unsolved problem in the community of DFT research is: how to deal with degeneracies due to spin or non-Abelian spatial symmetry? 

## 5. Basic Machinery of DFT Programs
In this section how things in KS scheme are calculated in modern implementation of DFT packages are briefly introduced.

### 5.1 Linear-combined-atomic-orbital (LCAO) ansatz
We simply expand the orbital function $\varphi_i$ in (1.3) using LCAO ansatz,

$$\varphi_i=\sum_i^Lc_{\mu i}\eta_{\mu}\tag{5.1}$$

where $\{\eta_i\}$ are $L$ predefined base functions. Inserting (5.1) into (1.3) gives

$$\hat{\mathrm{f}}^{\mathrm{KS}}\left(\overrightarrow{\mathrm{r}}_{1}\right) \sum_{\mathrm{v}=1}^{\mathrm{L}} \mathrm{c}_{\mathrm{vi}} \eta_{\mathrm{v}}\left(\overrightarrow{\mathrm{r}}_{1}\right)=\varepsilon_{\mathrm{i}} \sum_{\mathrm{v}=1}^{\mathrm{L}} \mathrm{c}_{\mathrm{vi}} \eta_{v}\left(\overrightarrow{\mathrm{r}}_{1}\right)$$

Multiplying both sides above $\eta_{\mu}(\vec{r_1})$ and integrating over $\vec{r}_1$ gives

$$\sum_{v=1}^{L} c_{v i} \int \eta_{\mu}\left(\vec{r}_{1}\right) \hat{f}^{K S}\left(\vec{r}_{1}\right) \eta_{v}\left(\vec{r}_{1}\right) d \vec{r}_{1}=\varepsilon_{i} \sum_{v=1}^{L} c_{v i} \int \eta_{\mu}\left(\vec{r}_{1}\right) \eta_{v}\left(\vec{r}_{1}\right) d \vec{r}_{1} \text { for } 1 \leq i \leq L\tag{5.2}.$$

On the left side of (5.2)

$$\mathrm{F}_{\mu v}^{\mathrm{KS}}=\int \eta_{\mu}\left(\overrightarrow{\mathrm{r}}_{1}\right) \hat{\mathrm{f}}^{\mathrm{KS}}\left(\overrightarrow{\mathrm{r}}_{1}\right) \eta_{\mathrm{v}}\left(\overrightarrow{\mathrm{r}}_{\mathrm{I}}\right) \mathrm{d} \overrightarrow{\mathrm{r}_{1}}\tag{5.3}$$

is called **Kohn-Sham matrix** and the overlap matrix is defined as

$$\mathrm{S}_{\mu \mathrm{v}}=\int \eta_{\mu}\left(\overrightarrow{\mathrm{r}}_{1}\right) \eta_{v}\left(\overrightarrow{\mathrm{r}}_{1}\right) \mathrm{d} \overrightarrow{\mathrm{r}}_{1}\tag{5.4}.$$

If we further define a matrix

$$\mathbf{C}=\left(\begin{array}{cccc}
\mathrm{c}_{11} & \mathrm{c}_{12} & \cdots & \mathrm{c}_{1 \mathrm{L}} \\
\mathrm{c}_{21} & \mathrm{c}_{22} & \cdots & \mathrm{c}_{2 \mathrm{L}} \\
\vdots & \vdots & & \vdots \\
\mathrm{c}_{\mathrm{L} 1} & \mathrm{c}_{\mathrm{L} 2} & \cdots & \mathrm{c}_{\mathrm{LL}}
\end{array}\right)$$

and

$$\boldsymbol{\varepsilon}=\left(\begin{array}{cccc}
\varepsilon_{1} & 0 & \cdots & 0 \\
0 & \varepsilon_{2} & \cdots & 0 \\
\vdots & \vdots & & \vdots \\
0 & 0 & \cdots & \varepsilon_{\mathrm{L}}
\end{array}\right)$$

Eq.(5.2) can be casted into a matrix format as

$$\mathbf{F}^{\mathrm{KS}} \mathbf{C}=\mathbf{S} \mathbf{C} \boldsymbol{\varepsilon}\tag{5.5}.$$

Therefore, the problem of solving K-S equations is expressed in the language of linear algebra.

### 5.2 Basic set

The utmost important element of LCAO ansatz described above is the basis functions $\eta_i$. Now we introduce several sets of basis functions. The first type is called *Gaussian-type-orbitals*, and is defined as 

$$\eta^{G T O}=N x^{1} y^{m} z^{n} \exp \left[-\alpha r^{2}\right]\tag{5.6}$$

where $L=1+m+n$ is used to classify the GTO as s-functions $(\mathrm{L}=0), \mathrm{p}$ -functions $(\mathrm{L}=1), \mathrm{d}-$ functions $(\mathrm{L}=2),$ etc. The second basis set is called *Slater-type*, i.e.,

$$\eta^{\mathrm{STO}}=\mathrm{N} \mathrm{r}^{\mathrm{n}-1} \exp [-\zeta \mathrm{r}] \mathrm{Y}_{\mathrm{Im}}(\Theta, \phi)\tag{5.7}.$$

And the *plane-wave* set,

$$\eta^{\mathrm{PW}}=\exp [\mathrm{i} \vec{\mathrm{k}} \vec{\mathrm{r}}]\tag{5.8}.$$

## Conclusion

I probably should spend more time with DFT these days as I expect to apply some interesting first-principle methods to probe the magnetic and electronic properties of various electroactive materials. This blog introduces K-S approach from a chemist perspective, where everything is boiled down to simple terms and does not require advanced prerequisite.