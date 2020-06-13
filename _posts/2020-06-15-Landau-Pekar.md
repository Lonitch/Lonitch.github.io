---
layout: post

title: Landau-Pekar Model, The Beginning of the Polaron

date: 2020-06-15

Author: Sizhe

tags: [notes, electromagnetism, quantum-mechanics, polaron]

toc: true

---

## Background

My journey towards the polaron theory has just begun. The first stop will be the Landau-Pekar theory that everybody in the community cites. It takes some knowledge of electromagnetism to appreciate the model, but unfortunately, I never took a formal class of EM in the school. So, another self-learning journey for me.

## Polaron Resulting from Binding Effect
The idea of polaron is that a free electron, attacted by a positively chaged particle, creates a positively charged "hole" around it through Coulombic interactions with nuclei. As a reseult, the electron is self-trapped by the potential well induced by itself. **The effect of polaron may be quanlitatively described by comparing the field energy of adding a free electron in a dielectric continuum with that *in vacuo* where the dielectric constant $\varepsilon=1$**. Based on this argument, we will derive an expression for the binding energy of an electron to a dielectric medium.

### Brief review of electric displacement field
When a dielectric material is placed in an electric field with strength equal to $\mathbf{E}$, the charge distribution around each atom in the material would become polarized (see Fig 1) and the atoms are no longer neutral. 

<p align="center">
  <img width="500" height="257" src="{{ site.url }}/images/polarization-dielectric.png">
</p>
<p style="text-align: center;">Figure 1. Charge Polarization in Dielectric Continuum</p>

The extent to which the molecules or atoms in dielectric continuum are polarized is described by the dipole moment $\mathbf{p}$: the product of charge center displacement $\mathbf{d}$ and total amount of charge $q$, i.e. $\mathbf{p}=q\mathbf{d}$. If there are $N$ molecules or atoms in each unit cell of the dielectric, then the **electric polarization** (the dipole moment per unit volume) $\mathbf{P}$ is give by:

$$
\mathbf{P}=N\mathbf{p}\tag{0}
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

from which we can easily get a relation between the change in charge density $\rho=Q/(dxdydz)$ and gradient of the **electric polarization field** $\mathbf{P}$ as

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
\mathbf{D}=\varepsilon_0\epsilon\mathbf{E}=\varepsilon\mathbf{E}\tag{5}
$$

with $\epsilon=1+\chi_e$ being the **relative permitivity**, and $\varepsilon=\varepsilon_0\epsilon$ the **static dielectric constant**.

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

Therefore, the **total energy change associated with changing the displacement field from 0 to $\mathbf{D}$ due to the addition of free charges** is just

$$
W=\int_0^D\int\frac{1}{2\varepsilon}d\mathbf{D}^2d\mathbf{r}=\int\frac{\mathbf{D}^2}{2\varepsilon}d\mathbf{r}\tag{8}
$$

Using the SI unit of charge, we have $\mathbf{E}=\mathbf{D}/{4\pi}$. Eq.(8) becomes

$$
W=\int\frac{\mathbf{D}^2}{8\pi\varepsilon}d\mathbf{r}\tag{9}
$$
### Binding energy of electron in dielectric medium
If we let $\rho$ be the charge density of a free electron in dielectric continuum, we have in SI unit,

$$
\nabla\cdot\mathbf{D}=4\pi\rho.
$$

Then **the binding energy of the electron in the dielectric** is given by:

$$
W(\varepsilon\neq1)-W(\varepsilon=1)=\int\frac{\mathbf{D}^2}{8\pi}(\frac{1}{\varepsilon}-1)d\mathbf{r}\tag{10}
$$

Because $\varepsilon>1$, This model, therefore, predicts a **binding effect** as $W(\varepsilon\neq1)-W(\varepsilon=1)<0$. The next step in the Landau-pekar theory is to consider a rigid charge moving through the lattice, carrying its polarization potential with it.

>**Side note on the effects of extra electron in dielectric continuum:** The purpose of this qualitative analysis above is to stress the fact that **the bounded electron causes extra charge polarization in a dielectric medium in the electric field**. You can understand Eq.(10) as follow: if we add a free electron in vacuum, the displacement field strength changes from 0 to $\mathbf{D}$, and the change in field energy is $W(\varepsilon=1)$. In a dielectric continuum the displacement field strength also changes from 0 to $\mathbf{D}$, but the change in field energy becomes $W(\varepsilon\neq1)$. Since the only difference between the two cases is the electron-continuum interaction, the energy difference $W(\varepsilon\neq1)-W(\varepsilon=1)$ thus reflects the effects of electron-ion interactions in dielectric continuum.

## Qualitative derivation of self-energy and effective mass of polaron

In the previous section we describe the effects of adding extra free electron in dielectric continuum as the reason for polarization of charge distribution. In this section we explore the size and mass of polaron by taking a closer look at the **dielectric polarization field** $\mathbf{P}$ defined in Eq.(1) and (4). We first split $\mathbf{P}$ into an "optical" part $$\mathbf{P}_{opt}$$ and an "acoustic" part $$\mathbf{P}_{acs}$$ because the dielectric spetroscopy of dielectric materials usually has resonances in the ultraviolet and the infrared frequency regions[1] (see Figure 2).

<p align="center">
  <img width="512" height="455" src="{{ site.url }}/images/dielectric-spectroscopy.png">
</p>
<p style="text-align: center;">Figure 2.A typical dielectric spectroscopy[2]: dielectric constants are usually imaginary with the real part being permitivity and the imaginary part dielectric loss. The dielectric loss evaluates the asorption of electric energy by a dielectric material subjected to an alternating electric field</p>

>**Side notes on dielectric spectroscopy:** the dielectric constant measured at direct-current condition is called **static dielectric**, and it contains contributions to polarization from optical and acoustic excitations.

We now proceed to derive an expression for the **effective dielectric constant** $\bar{\varepsilon}$ from $\mathbf{P}$. We will use $\bar{\varepsilon}$ later to calculate the energy of self-trapped electron $\mathcal{U}$ from which we can further derive the effective mass and size of polaron.

In SI unit the Eq.(4) (with $\varepsilon_0=1$) becomes

$$
\mathbf{D}=\mathbf{E}+4\pi\mathbf{P}\tag{11}
$$

Because $\mathbf{D}=\varepsilon\mathbf{E}$, Eq.(11) gives

$$
\mathbf{P}=\frac{1}{4\pi}(1-\frac{1}{\varepsilon})\mathbf{D}\tag{12}
$$

When a dielectric material is subjected to high-frequency AC electric field, 

$$
\mathbf{P\approx P_{opt}}.
$$

Let us write that

$$
\mathbf{D}=\varepsilon_{\infty}\mathbf{E}
$$

where $\varepsilon_{\infty}$ is **the high-frequency dielectric constant** measured at the AC frequency $\omega$ right below the ultraviolet resonance. Therefore,

$$
\mathbf{P}_{opt}=\frac{1}{4\pi}(1-\frac{1}{\varepsilon_{\infty}})\mathbf{D}\tag{13}.
$$

Substracting (13) from (12) gives an expression for $\mathbf{P}_{acs}$:

$$
\mathbf{P}_{acs}=\frac{1}{4\pi}(\frac{1}{\varepsilon_{\infty}}-\frac{1}{\varepsilon})\mathbf{D}=\frac{\mathbf{D}}{4\pi\bar{\varepsilon}}\tag{14}.
$$

Both $\varepsilon$ and $\varepsilon_{\infty}$ are experimentally measurable, making the calculation for $\bar{\varepsilon}$ easy.

### The size of the polaron
Accroding to Landau's model, the charge distribution of a bounded electron (small polaron) is localized within a sphere with radius of $l_1$. At distances larger than $l_1$, the field created by the localized electron is Coulombic. Our target in this section is first to calculate the energy of a localized electron with static charge distribution. The total energy will be an expression with $l_1$ as its parameter. We then find the value of $l_1$ that minimize the energy. Second, we derive the size of the polaron by considering the dynamics of electron-phonon interactions.

Let us first visualize the field induced by the localized electron in Figure 3 where the charge of our localized electron is uniformly distributed within a sphere with radius of $l_1$.

<p align="center">
  <img width="565" height="260" src="{{ site.url }}/images/Landau-polaron-field.png">
</p>
<p style="text-align: center;">Figure 3. Localized charge distribution assumed in Landau's polaron theory</p>

The Coulombic(potential) energy of our electron friend is of order $-e^2/\bar{\varepsilon}l_1$ (see Feynman's derivation [here](https://www.feynmanlectures.caltech.edu/II_08.html)). We use $\bar{\varepsilon}$ here because we assumed that **the polarization induced by the electron is only acoustic**. The kinetic energy of the electron is of order $$\hbar^2k^2/2m$$ where $k$ is the characteristic wavenumber of a system with spatial extent of order $l_1$, i.e. $k=2\pi/l_1$. Thus the kinetic energy is of order $$4\pi^2\hbar^2/2ml^2_1$$, and our estimation of the total energy for the electron in Figure 3, $\mathcal{U}_1$, is

$$
\mathcal{U}_1\sim \frac{-e^2}{\bar{\varepsilon}l_1}+\frac{4\pi^2\hbar^2}{2ml^2_1}\tag{15}.
$$

To find the $l_1$ that minimze $\mathcal{U}_1$, we calculate the derivative and find:

$$
\frac{\partial\mathcal{U}_1}{\partial l_1}\sim\frac{e^2}{\bar{\varepsilon}l^2_1}-\frac{4\pi^2\hbar^2}{ml^3_1}=0
$$

and

$$
l_1=\frac{4\pi^2\hbar^2\bar{\varepsilon}}{me^2}\tag{16}.
$$

Substitute (16) into (15) to give

$$
\mathcal{U}_1\sim\frac{-me^4}{8\pi^2\hbar^2\bar{\varepsilon}^2}\tag{17}.
$$

The static charge distribution of the polaron is **only reasonable when the velocity of polaron movements is much faster than that of ions, otherwise the charge distribution would not be static**. When the polaron moves slower than the propagation of lattice vibration,We need to find the polaron size by studying the dynamic problem of an electron moving with velocity of $v$ interacting with lattice vibration with frequency of $\omega$.

If the lattice is vibrating with a frequency $\omega$, the angular distance travelled by an electron at distance $d_1$ from an ion (see Figure 4) in a time $1/\omega$ is just $$v/\omega d_1$$. If the angle is small, we have

$$
d_1\gg v/\omega\tag{18}.
$$

**The limiting value of $d_1$ for an electron to see a polaron as a static charge is of order $v/\omega$.**

<p align="center">
  <img width="667" height="320" src="{{ site.url }}/images/Landau-polaron-size-dynamic.png">
</p>
<p style="text-align: center;">Figure 4. Electron-phonon interaction when the small polaron moves not so fast, and the ion see the localized electron as a static point charge at d1. The effective radius of the polaron is d2 </p>

On the other hand, **the effective size of polaron(localized electron) $d_2$ must not exceed the limiting value of $d_1$**. According to the uncertainty principle,

$$
d_2p\geq 2\pi \hbar\tag{19},
$$

where the momentum of polaron is $p=mv$. Therefore,

$$
d_2\sim\frac{2\pi\hbar}{mv}\tag{20}.
$$

The right subplot in Figure 4 shows that curves $d_1(v)$ and $d_2(v)$ intercept at the distance $l_2$. For ions outside of the sphere around the polaron with radius of $l_2$, the polaron acts like a static charge. At the intersection,

$$
v=\sqrt{\frac{2\pi\hbar\omega}{m}}
$$

and

$$
l_2=\sqrt{\frac{2\pi\hbar}{m\omega}}\tag{21}.
$$

Because the localized electron in Figure 4 moves slower than the electron depiced in Figure 3, the energy of the polaron is just its potential energy, and we have

$$
\mathcal{U}_2\sim-\frac{e^2}{\bar{\varepsilon}l_2}=-\frac{e^2\sqrt{m\omega}}{\bar{\varepsilon}\sqrt{2\pi\hbar}}
$$

### Effective mass of the polaron
In the previous subsection we discussed the polaron size under two conditions:(1) the fast moving polaron with a size of $l_1$ and (2) the slow moving polaron (comparing to the lattice vibration frequency) with a size of $l_2$. We now propose a simple model, which **treated the ions and polarons as point charges**, to calculate the effective mass of the polaron. **In the model the polarization induced by polaron is represented by the displacement of ions**, and the effective mass of the polaron is then derived from the sum of kinetic energies of vibrating ions and mobile polaron.

Let us first derive an expression for the polarization field $\mathbf{P}$, because by the definition of Eq.(0) $\mathbf{P}$ is related to the displacement of charge centers. Since we consider ions in the lattice as point charges (e.g. the lattice sketched in Figure 4), the displacement of charge centers (see Figure 1) is the displacements of ions' coordinates. In Figure 3 we assumed that the induced polarization field is Coulombic outside the localized charge distribution, and is constant inside the confined charge distribution. Use Eq.(14) and the definition of electric field strenth to give:

$$
\left.\begin{array}{rl}
4 \pi \mathbf{P} & =\frac{\mathbf{D}}{\bar{\varepsilon}} = \frac{e}{\bar{\varepsilon}}\nabla_r\frac{1}{|\mathbf{r_{e}-r}|}\quad \text { if } \quad\left|\boldsymbol{r}-\boldsymbol{r}_{\mathrm{e}}\right|>l_{i} \\
& =0 \quad \text { if } \quad\left|\boldsymbol{r}-\boldsymbol{r}_{\mathrm{e}}\right|<l_{i}
\end{array}\right\}\tag{22}
$$

where $\mathbf{r}_{e}$ is the bounded electron coordinates, and $l_i$ could either be $l_1$ or $l_2$. The second line in Eq.(22) indicates that there is no polarization within the localized charge distribution of the bounded electron as no displacement of charge center is assumed within the distribution. The polarization field $\mathbf{P}$ is again assumed to only contains contributions from acoustic dielectric modes.

According to the definition of Eq.(0), we have

$$
\mathbf{P(r)}=Nq\mathbf{d(r)}\tag{23},
$$

with $q$ and $\mathbf{d(r)}$ being ionic charge and relative ionic displacement of ith ion at arbitrary coodinates, respectively. Substitute (23) into (22), and perform a time derivative to give the kinetic energy of all the displaced ions, $$T_{ion}$$, as

$$
T_{ion}=\sum_i \frac{1}{2}M\mathbf{\dot{d}_i^2(r)}=\sum_i\frac{1}{2}M\left(\frac{e}{4\pi\bar{\varepsilon}Nq}\frac{\partial}{\partial\mathbf{r}}\frac{\partial}{\partial t}\frac{1}{|\mathbf{r_{e}-r}|}\right)\tag{24}
$$
where $M$ is the reduced mass of ith ion pair. Let $\mathbf{v}=\dot{\mathbf{r}_e}$ and $m$ be the velocity and the mass of the bounded electron, the **effective mass of the polaron** $m^*$ is then defined as:

$$
\frac{1}{2}mv^2+T_{ion}=\frac{1}{2}m^*v^2\tag{25}.
$$

We can simplify Eq.(24) by using the following identity of vector derivative:

$$
\frac{d}{d t} \frac{1}{|\vec{x}|}=-\frac{1}{|\vec{x}|^{3}}\left(\vec{x} \cdot \frac{d \vec{x}}{d t}\right)\tag{26}
$$

and

$$
\frac{d}{d\mathbf{r}}\frac{1}{|\mathbf{r}|^n}=-n\frac{\mathbf{r}}{|\mathbf{r}|^{n+2}}\tag{27}
$$

we find that

$$(\dot{d}(\boldsymbol{r}))^{2}=\frac{1}{16 \pi^{2} \bar{\varepsilon}^{2} N_{0}^{2}}\left(\frac{e}{q}\right)^{2}\left\{\frac{3(\boldsymbol{R} \cdot \boldsymbol{v})^{2}+R^{2} v^{2}}{R^{8}}\right\}, \quad R>l_{i}\tag{28}.$$

with

$$
\mathbf{R=r_e-r}.
$$

>To prove Eq.(26) and (27), we simply expand the vector derivative into its complete form as: $$\frac{d}{d\mathbf{r}}=\frac{d}{dx}\hat{e}_x+\frac{d}{dx}\hat{e}_y+\frac{d}{dx}\hat{e}_z.$$

The sum in Eq.(24) can also be replaced by an integral as follow:

$$
\sum_i=N\int R^2 dRd\Omega\tag{29}
$$

with 

$$
\int d\Omega=\iiint d \theta d \phi \sin \theta\tag{30}
$$

Aligning the angle between the vectors $\mathbf{R}$ and $\mathbf{v}$ with $\theta$, we find that

$$
\begin{aligned}
\int d \Omega\left\{3(\mathbf{R \cdot v})^{2}+R^{2} v^{2}\right\}&=\iiint d \theta d \phi \sin \theta R^2v^2(3cos^2\theta+1)\\
&=8 \pi R^{2} v^{2}\\
\end{aligned}\tag{31}.
$$

With Eq.(28),(29), and (31) we deduce that

$$T_{\text {ion }}=\frac{1}{3} \frac{M}{4 \pi\left(q\right)^{2} N} \cdot \frac{e^{2}}{\bar{\varepsilon}^{2}} \cdot \frac{v^{2}}{l_{i}^{3}}\tag{32}.$$

The Eq.(32) is still too bulky to handle, but we can reduce it by using Szigeti relation[3],

$$\varepsilon-\varepsilon_{\infty}=\frac{\varepsilon}{\varepsilon_{\infty}}\left(\frac{\varepsilon_{\infty}+2}{3}\right)^{2} \frac{4 \pi\left(q\right)^{2} N_{0}}{M \omega^{2}}=\frac{\varepsilon \varepsilon_{\infty}}{\bar{\varepsilon}}\tag{33}.$$

As a result, the kinetic energy of vibrating ions is

$$T_{\text {ion }}=\frac{1}{3}\left(\frac{\varepsilon_{\infty}+2}{3 \varepsilon_{\infty}}\right)^{2} \frac{e^{2}}{\bar{\varepsilon} \omega^{2}} \frac{v^{2}}{l_{i}^{3}}\tag{34}$$

>This expression is independent of the masses of the ions; therefore Landau's argument that an electron can become self-trapped because the ions are heavy is not valid.[1]

We now see from(25) and (34) that 

$$\begin{array}{rl}
\left(\frac{m^{*}}{m}-1\right) & =C_{1} \alpha^{4}, \quad \text { for } l_1 \\
& =C_{2} \alpha, \quad \text { for } l_2
\end{array}$$

with $C_i$ being constants, and the $\alpha$ is a **dimensionless coupling constant** and is defined as

$$\alpha=\frac{1}{\sqrt{2}} \frac{e^{2}}{\bar{\varepsilon}} \sqrt{\frac{m}{\omega \hbar^{3}}}\tag{35}.$$

**We thus obtained a very strong dependence of effective mass on the coupling constants in the case of $l_i=l_1$.** Notice that

$$-\frac{\mathcal{U}_{1}}{\hbar \omega}=\frac{1}{8 \pi^{2}} \cdot \frac{e^{4} m}{\bar{\varepsilon}^{2} \hbar^{3} \omega}=-\frac{1}{4 \pi}\left(\frac{\mathcal{U}_{2}}{h \omega}\right)^{2}=\frac{\sqrt{2}}{8\pi^2}\alpha^2\tag{36}$$

When $\alpha$ is large, $$\left|\mathcal{U}_{1}\right|>\left|\mathcal{U}_{2}\right| .$$ In this case the first type of approximation is better than the second, and the frequency corresponding to $$\left|\mathcal{U}_{1}\right|$$ is much greater than the oscillation frequency of the polarization. **For large $\alpha$, we have large $$T_{ion}$$ too, indicating the most sytem inertia is carried by the ions outside of the localized electron charge distribution.**


## References

[1] Kuper, Charles Goethe, and George Danley Whitfield, eds. Polarons and excitons. Plenum Press, 1963.

[2]https://web.archive.org/web/20010307184808/http://www.psrc.usm.edu/mauritz/dilect.html

[3] Szigeti, Bela. "Polarisability and dielectric constant of ionic crystals." Transactions of the Faraday Society 45 (1949): 155-166.