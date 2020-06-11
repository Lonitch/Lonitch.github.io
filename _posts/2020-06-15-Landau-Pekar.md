---
layout: post

title: Landau-Pekar Model, The Beginning of Polaron

date: 2020-06-15

Author: Sizhe

tags: [notes, electromagnetism, quantum-mechanics, polaron]

toc: true

---

## Background

My journey towards the polaron theory has just begun. The first stop will be the Landau-Pekar theory that everybody in the community cites. It takes some knowledge of electromagnetism to appreciate the model, but unfortunately, I never took a formal class of EM in the school. So, another self-learning journey for me.

## Binding Energy in Electric Displacement Field
The idea of polaron is that a free electron, attacted by a positively chaged particle, creates a positively charged "hole" around it through Coulombic interactions with nuclei. As a reseult, the electron is self-trapped by the potential well induced by itself. **The effect of polaron may be quanlitatively described by comparing the field energy of adding a free electron in a dielectric continuum with that *in vacuo* where the dielectric constant $\varepsilon=1$**. Based on this argument, we will derive an expression for the binding energy of an electron to a dielectric medium.

### Brief review of electric displacement field
When a dielectric material is placed in an electric field with strength equal to $\mathbf{E}$, the charge distribution around each atom in the material would become polarized (see Fig 1) and the atoms are no longer neutral. 

<p align="center">
  <img width="500" height="257" src="{{ site.url }}/images/polarization-dielectric.png">
</p>
<p style="text-align: center;">Figure 1. Charge Polarization in Dielectric Continuum</p>

The extent to which the molecules or atoms in dielectric continuum are polarized is described by the dipole moment $\mathbf{p}$: the product of charge center displacement $\mathbf{d}$ and total amount of charge $q$, i.e. $\mathbf{p}=q\mathbf{d}$. If there are $N$ molecules or atoms in each unit cell of the dielectric, then the **electric polarization** (the dipole moment per unit volume) $\mathbf{P}$ is give by:

$$
\mathbf{P}=N\mathbf{p}
$$

One of the interesting things about $\mathbf{P}$ is its divergence $\mathbf{\nabla\cdot P}$, as we shall now discuss. Imagine we have a dielectric continuum in which the number density of atoms $n$ varies with spatial coordinates, i.e. $n(x,y,z)$, and each nucleus is balanced by $q$ unit of electron charges. If we considers an infitestimal cube in the dielectric with spatial coordinates in a range from $(x,y,z)$ to $(x+dx,y+dy,z+dz)$, then the total amount of electron charge in such cube is:

$$
Q_{cube}=\int n(x,y,z)qdxdydz
$$

When we apply an electric field $\mathbf{E}$ on the dielectric, the electron charge centers shift off their original positions by a vector $\mathbf{\vec{d}}=(d_x,d_y,d_z)$. For our 3D cube, there are $n(x,y,z)qd_xdydz$ entering the cube through the face at $x$ while $n(x+dx,y,z)qd_xdydz$ charges enter the cube through the face at $x+dx$. The same thing happens to the faces at $y$,$y+dy$,$z$, and $z+dz$. Thus, the change in the amount of charges in the cube is just:

$$
\begin{aligned}
-d Q &= [n(x+dx,y,z)-n(x,y,z)]qd_xdydz\\
&+[n(x,y+dy,z)-n(x,y,z)]qd_ydxdz\\
&+[n(x,y,z+dz)-n(x,y,z)]qd_zdxdy
\end{aligned}
$$

from which we can easily get a relation between the change in charge density $\rho=Q/(dxdydz)$ and gradient of electric polarization $\mathbf{P}$ as

$$
d\rho=\frac{\partial \mathbf{P}_x}{\partial x}+\frac{\partial \mathbf{P}_y}{\partial y}+\frac{\partial \mathbf{P}_z}{\partial z}=-\nabla\cdot\mathbf{P}\tag{1}
$$

The change in charge density is due to the electrons bounded to nuclei in the dielectric, so let's label $d\rho$ as $\rho_b$, and the density of free charge as $\rho_f$. According to Gauss's law we have

$$
\nabla\cdot \mathbf{E}=\frac{\rho_b+\rho_f}{\varepsilon_0}\tag{2}
$$

where $\varepsilon_0$ is the **permitivity of free space**. If we define that the electric displacement field $\mathbf{D}$ as

$$\nabla\cdot \mathbf{D}=\rho_f\tag{3}$$

we have a relation between $\mathbf{E}$ and $\mathbf{D}$ as

$$
\begin{aligned}
\nabla\cdot\mathbf{D}&=\varepsilon_0\nabla\cdot \mathbf{E}+\nabla\cdot\mathbf{P}\\
\mathbf{D}&=\varepsilon_0\mathbf{E}+\mathbf{P}
\end{aligned}\tag{4}
$$

For many dielectric the electric polarization $\mathbf{P}$ is directly related to the electric field $\mathbf{E}$ by

$$
\mathbf{P}=\varepsilon_0\chi_e\mathbf{E}
$$

with $\chi_e$ being the **electric susceptivity**. And the constitutive relation between $\mathbf{E}$ and $\mathbf{D}$ is just

$$
\mathbf{D}=\varepsilon_0\epsilon\mathbf{E}=\epsilon\mathbf{E}\tag{5}
$$

with $\epsilon=1+\chi_e$ being the **relative permitivity**, and $\varepsilon=\varepsilon_0\epsilon$ the **dielectric constant**.

### Field energy of $\mathbf{D}$
If we add a small amount of free charge $\delta\rho_f$ in the dielectric with its dielectric constant being $\varepsilon$, the **change in electric field energy is:**

$$
\delta W=\int \phi(\mathbf{r})\delta\rho_f d\mathbf{r}
$$

where $\phi(\mathbf{r})$ is the **electrostatic potential function**. From Eq.(3) we find

$$
\delta W=\int \phi(\mathbf{r})\nabla\cdot \delta\mathbf{D}d\mathbf{r}
$$

Using the rule of partial integration, we have

$$
\begin{aligned}
\delta W&=\int \phi(\mathbf{r})\nabla\cdot \delta\mathbf{D}d\mathbf{r}=\int\nabla(\phi\delta \mathbf{D})d\mathbf{r}-\int\nabla\phi\delta \mathbf{D}d\mathbf{r}\\
&=\int\phi\delta\mathbf{D}\cdot d\mathbf{S}+\int \mathbf{E}\delta \mathbf{D}d\mathbf{r}
\end{aligned}\tag{6}
$$
where the Gauss' theorem is used for the first term in the second row above. *If our dielectric material has finite spatial dimensions, we can neglect the first term in Eq.(6)*. Substituting (5) in (6) gives

$$
\delta W=\int \frac{\mathbf{D}\delta \mathbf{D}}{\varepsilon}d\mathbf{r}=\frac{1}{2}\int\frac{\delta \mathbf{D}^2}{\varepsilon}d\mathbf{r}\tag{7}
$$

Therefore, the total energy change associated with changing the displacement field $\mathbf{D}$ from 0 to $\mathbf{D}$ is just

$$
W=\int_0^D\int\frac{1}{2\varepsilon}d\mathbf{D}^2d\mathbf{r}=\int\frac{\mathbf{D}^2}{2\varepsilon}d\mathbf{r}\tag{8}
$$

Using the SI unit of charge, we have $\mathbf{E}=\mathbf{D}/{4\pi}$. Eq.(8) becomes

$$
W=\int\frac{\mathbf{D}^2}{8\pi\varepsilon}d\mathbf{r}\tag{9}
$$
### Binding energy of electron in dielectric medium
If we let $\rho$ be the charge density of a model electron in dielectric continuum, we have in SI unit,

$$
\nabla\cdot\mathbf{D}=4\pi\rho.
$$

Then **the binding energy of the electron in the dielectric** is given by:

$$
W(\varepsilon\neq1)-W(\varepsilon=1)=\int\frac{\mathbf{D}^2}{8\pi}(\frac{1}{\varepsilon}-1)d\mathbf{r}\tag{10}
$$

Because $\varepsilon>1$, This model, therefore, predicts a **binding effect** as $W(\varepsilon\neq1)-W(\varepsilon=1)<0$. The next step in the Landau-pekar theory is to consider a rigid charge moving through the lattice, carrying its polarization potential with it.