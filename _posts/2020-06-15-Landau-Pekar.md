---
layout: post

title: Landau and Frohlich, The Beginning of the Polaron

date: 2020-06-15

Author: Sizhe

tags: [notes, electromagnetism, quantum-field-theory, polaron]

toc: true

---

## Background

The polaron theory will be an important part of my final thesis work. I'm writing this to make sure I own every piece of my research proposal that I need to submit to my prelim committee. The blog is divided into three parts. In the first part I will explain the idea of polaron using Landau's very first phenomenological theory. The second part develops a simple model to calculate the effective mass and size of the polaron. The results from Landau's theory will be further developed in the last part to derive a quantized Hamiltonian (i.e. Frohlich's Hamiltonian).

## Landau's Polaron 
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

where $\varepsilon_0$ is the **permitivity of free space**. If we define that the **electric displacement field** $\mathbf{D}$ as

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

In the previous section we describe the effects of adding extra free electron in dielectric continuum as the reason for the polarization field. In this section we explore the size and mass of polaron by taking a closer look at the **dielectric polarization field** $\mathbf{P}$ defined in Eq.(1) and (4). We first split $\mathbf{P}$ into an "optical" part $$\mathbf{P}_{opt}$$ and an "acoustic" part $$\mathbf{P}_{acs}$$ because the dielectric spetroscopy of real materials usually has resonances in the ultraviolet and the infrared frequency regions[1] (see Figure 2).

<p align="center">
  <img width="512" height="455" src="{{ site.url }}/images/dielectric-spectroscopy.png">
</p>
<p style="text-align: center;">Figure 2.A typical dielectric spectroscopy[2]: dielectric constants are usually imaginary with the real part being permitivity and the imaginary part dielectric loss. The dielectric loss evaluates the asorption of electric energy by a dielectric material subjected to an alternating electric field</p>

>**Side notes on dielectric spectroscopy:** the dielectric constant measured at direct-current condition is called **static dielectric**, and it contains contributions to polarization from optical and acoustic frequency responces.

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

Both $\varepsilon$ and $\varepsilon_{\infty}$ are experimentally measurable, making the calculation of $\bar{\varepsilon}$ easy.

### The size of the polaron
Accroding to Landau's model, the charge distribution of a bounded electron is localized within a sphere with radius of $l_1$. At distances larger than $l_1$, the field created by the localized electron is Coulombic. Our target in this section is first to calculate the energy of a localized electron with static charge distribution. The total energy will be an expression with $l_1$ as its parameter. We then find the value of $l_1$ that minimize the energy. Second, we derive the size of the polaron by considering the dynamics of electron-phonon interactions.

Let us first visualize the field induced by the localized electron in Figure 3 where the charge of our localized electron is uniformly distributed within a sphere with radius of $l_1$.

<p align="center">
  <img width="565" height="260" src="{{ site.url }}/images/Landau-polaron-field.png">
</p>
<p style="text-align: center;">Figure 3. Localized charge distribution assumed in Landau's polaron theory</p>

The Coulombic(potential) energy of our electron friend is of order $-e^2/\bar{\varepsilon}l_1$ (see Feynman's derivation [here](https://www.feynmanlectures.caltech.edu/II_08.html)). We use $\bar{\varepsilon}$ here because we assumed that **the polarization induced by the electron is only from acoustic responces**. The kinetic energy of the electron is of order $$\hbar^2k^2/2m$$ where $k$ is the characteristic wavenumber of a system with spatial extent of order $l_1$, i.e. $k=2\pi/l_1$. Thus the kinetic energy is of order $$4\pi^2\hbar^2/2ml^2_1$$, and our estimation of the total energy for the electron in Figure 3, $\mathcal{U}_1$, is

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

The static charge distribution of the polaron assumed in (15)-(17) is **only reasonable when the velocity of electron movements is much faster than that of ions, otherwise the charge distribution would not be able to build up**. When the bounded electron moves slower than the propagation of lattice vibration,We need to find the polaron size by studying the dynamic problem of an electron moving with velocity of $v$ interacting with lattice vibration with frequency of $\omega$.

If the lattice is vibrating with a frequency $\omega$, the angular distance travelled by an electron at distance $d_1$ from an ion (see Figure 4) in a time $1/\omega$ is just $$v/\omega d_1$$. If the angle is small, we have

$$
d_1\gg v/\omega\tag{18}.
$$

**The limiting value of $d_1$ for an ion to see an electron as a static charge is of order $v/\omega$.**

<p align="center">
  <img width="667" height="320" src="{{ site.url }}/images/Landau-polaron-size-dynamic.png">
</p>
<p style="text-align: center;">Figure 4. Electron-phonon interaction when the bounded electron moves not so fast, and the ion see the localized electron as a static point charge at d1. The effective radius of the polaron is d2 </p>

On the other hand, **the effective size of polaron(localized electron) $d_2$ must not exceed the limiting value of $d_1$**. According to the uncertainty principle,

$$
d_2p\geq 2\pi \hbar\tag{19},
$$

where the momentum of the electron is $p=mv$. Therefore,

$$
d_2\sim\frac{2\pi\hbar}{mv}\tag{20}.
$$

The right subplot in Figure 4 shows that curves $d_1(v)$ and $d_2(v)$ intercept at the distance $l_2$. For ions outside of the polaron sphere with the radius of $l_2$, the polaron acts like a static charge. At the intersection,

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
In the previous subsection we discussed the polaron size under two conditions:(1) the fast moving electron with a size of $l_1$ and (2) the slow moving electron (comparing to the lattice vibration frequency) with a size of $l_2$. We now propose a simple model, which **treated the ions as point charges**, to calculate the effective mass of the polaron. **In the model the polarization induced by the polaron is represented by the displacements of ions**, and the effective mass of the polaron is then derived from the sum of kinetic energies of vibrating ions and mobile polaron.

Let us first derive an expression for the polarization field $\mathbf{P}$, because by the definition of Eq.(0) $\mathbf{P}$ is related to the displacement of charge centers. Since we consider ions in the lattice as point charges (e.g. the lattice sketched in Figure 4), the displacements of charge centers (see Figure 1) is ions' displacements. In Figure 3 we assumed that the induced polarization field is Coulombic outside the localized charge distribution, and is constant inside the confined charge distribution. Use Eq.(14) and the definition of electric field strenth to give:

$$
\left.\begin{array}{rl}
4 \pi \mathbf{P} & =\frac{\mathbf{D}}{\bar{\varepsilon}} = \frac{e}{\bar{\varepsilon}}\nabla_r\frac{1}{|\mathbf{r_{e}-r}|}\quad \text { if } \quad\left|\boldsymbol{r}-\boldsymbol{r}_{\mathrm{e}}\right|>l_{i} \\
& =0 \quad \text { if } \quad\left|\boldsymbol{r}-\boldsymbol{r}_{\mathrm{e}}\right|<l_{i}
\end{array}\right\}\tag{22}
$$

where $\mathbf{r}_{e}$ is the bounded electron coordinates, and $l_i$ could either be $l_1$ or $l_2$. The second line in Eq.(22) indicates that $\rho_b=0$ in the charge distribution of the free electron. The polarization field $\mathbf{P}$ is again assumed to only contains contributions from acoustic dielectric frequency responces.

>We use the assumption of acoustic polarization field again because **$$\mathbf{P}_{opt}$$ is only important when we have super fast polarons.**

According to the definition of Eq.(0), we have

$$
\mathbf{P(r)}=Nq\mathbf{d(r)}\tag{23},
$$

with $q$ and $\mathbf{d(r)}$ being ionic charge and relative ionic displacement at arbitrary coodinates, respectively. Substitute (23) into (22), and perform a time derivative to give the kinetic energy of all the displaced ions, $$T_{ion}$$, as

$$
T_{ion}=\sum_i \frac{1}{2}M\mathbf{\dot{d}_i^2(r)}=\sum_i\frac{1}{2}M\left(\frac{e}{4\pi\bar{\varepsilon}Nq}\frac{\partial}{\partial\mathbf{r}}\frac{\partial}{\partial t}\frac{1}{|\mathbf{r_{e}-r}|}\right)\tag{24}
$$
where $M$ is the reduced mass of ion pair. Let $\mathbf{v}=\dot{\mathbf{r}_e}$ and $m$ be the velocity and the mass of the bounded electron, the **effective mass of the polaron** $m^*$ is then defined as:

$$
\frac{1}{2}mv^2+T_{ion}=\frac{1}{2}m^*v^2\tag{25}.
$$

We can simplify Eq.(24) by using the following identities of vector derivative:

$$
\frac{d}{d t} \frac{1}{|\vec{x}|}=-\frac{1}{|\vec{x}|^{3}}\left(\vec{x} \cdot \frac{d \vec{x}}{d t}\right)\tag{26}
$$

and

$$
\frac{d}{d\mathbf{r}}\frac{1}{|\mathbf{r}|^n}=-n\frac{\mathbf{r}}{|\mathbf{r}|^{n+2}}\tag{27}.
$$

We find that

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

and the number density of ion $N$ is a constant.

Aligning the angle between the vectors $\mathbf{R}$ and $\mathbf{v}$ with $\theta$, we find that

$$
\begin{aligned}
\int d \Omega\left\{3(\mathbf{R \cdot v})^{2}+R^{2} v^{2}\right\}&=\iiint d \theta d \phi \sin \theta R^2v^2(3cos^2\theta+1)\\
&=8 \pi R^{2} v^{2}.
\end{aligned}\tag{31}
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

$$-\frac{\mathcal{U}_{1}}{\hbar \omega}=\frac{1}{8 \pi^{2}} \cdot \frac{e^{4} m}{\bar{\varepsilon}^{2} \hbar^{3} \omega}=-\frac{1}{4 \pi}\left(\frac{\mathcal{U}_{2}}{h \omega}\right)^{2}=\frac{\sqrt{2}}{8\pi^2}\alpha^2\tag{36}.$$

When $\alpha$ is large, $$\left\|\mathcal{U}_{1}\right\|>\left\|\mathcal{U}_{2}\right\| .$$ In this case the first type of approximation is better than the second, and the frequency corresponding to $$\left\|\mathcal{U}_{1}\right\|$$ is much greater than the oscillation frequency of the polarization(i.e. the polaron moves fast). **For large $\alpha$, we have large $$T_{ion}$$ too, indicating the most sytem inertia is carried by the ions outside of the localized electron charge distribution.**

## Derivation of the Frohlich Hamiltonian

### The classical Hamiltonian before quantization
Landau's phenomenological theory of the polaron triggers his fellow physicists to fromulate a mathematically rigorous Hamiltonian for a system that contains polarons. Like other condensed matter problems, the Hamiltonian for polarons is the center piece for us to understand the energy level distribution of our electron-ion-phonon interactions. One of the most influential formalation is come up with by Frohlich[1] based on quantum field theory. We shall now introduce the derivation of the Frohlich Hamiltonian by borrowing the results from previous sections.

The Frohlich Hamiltonian starts with the assumption of **the independence of lattice vibration on the wavevectors**, i.e. the group velocity $d\omega/d\mathbf{k}$ vanishes. As a result, only the longitudinal modes of the polarization $\mathbf{P}$ is considered (i.e., the infrared dielectric responses,caused by ion displacement[4]). If we use the definition of $\mathbf{P}$ in Eq.(0) and assumes linear restoring forces to any disturbances in charge distribution(see my blog [here](https://lonitch.github.io/Canonical-Dielectric-Response/) for more details), the polarization field can be described by the simple harmonic motion equation:

$$\ddot{\mathbf{P}}(\mathbf{r})+\omega^{2} \mathbf{P(r)}=\mathbf{F}\tag{37}$$

where $\mathbf{F}$ is the source term, and the $\omega$ is the vibrational frequency of induced polarization (or ion displacement). The derivation of Eq.(37) can also be found in my earlier blog [here](https://lonitch.github.io/Canonical-Dielectric-Response/). Because we only care about a slow electron in dielectric material, we can assume that the magnetic field produced by the motion of the electron is negligibly small, and therefore the polarization field must be irrotational:

$$
\nabla\times \mathbf{P}=0\tag{38}.
$$

We now need to figure out what the source term $\mathbf{F}$ is. Recall that the $\mathbf{P}$ is related to the displacement field $\mathbf{D}$ by

$$P(r)=\frac{1}{4 \pi}\left(\frac{1}{\varepsilon_{\infty}}-\frac{1}{\varepsilon}\right) D(r)=\frac{1}{4 \pi \bar{\varepsilon}} D(r).$$

Since $\mathbf{D(r)}$ is the externally applied field, the energy density of $\mathbf{D-P}$ interaction will be given by $\mathbf{-D(r) \cdot P(r)}$.

We now make a reasonable guess for the Lagrangian density $\mathcal{L}$ of our system, from which we can derive a canonical form of Hamiltonian $H$. The guessing process involves three steps:(1) identify the general field coordinates and their conjugate, (2) form the initial guess by comparing your system with other well-developed system, (3) adjust your Lagrangian density till it satisfies the Euler-Lagrange equation for fields. First, in our case the field coordinates, or the field variables we plug into $\mathbf{L}$ should be $\mathbf{P}$ and $\mathbf{D}$. Second, because $\mathbf{P}$ is a vector field, and the Lagrangian density $\mathbf{L}$ in this case should look similar to that for electromagnetic fields, which means that we need a term for the $\mathbf{P}$ itself, a term for field kinetic energy, and a term for interaction energy. Following the aforementioned logic and using trial-and-error method described in other research[5], we end up with the following Lagrangian density:

$$\mathcal{L}^{\prime}=\frac{\mu}{2}\left[\dot{\boldsymbol{P}}^{2}(\boldsymbol{r})-\omega^{2} \boldsymbol{P}^{2}(\boldsymbol{r})\right]+\boldsymbol{D}(\boldsymbol{r}) \cdot \boldsymbol{P}(\boldsymbol{r})\tag{39}$$

where $\mu$ is a constant needed to be determined. If we take $\mathbf{P}(\boldsymbol{r})$ as generalized coordinates $\mathbf{q_{r}}$ at each space point $\boldsymbol{r}$ then the conjugate generalized momenta $\mathbf{p_{r}}$ are

$$\mathbf{p}_{r}=\frac{\delta \mathcal{L}^{\prime}(r)}{\delta \dot{\mathbf{q}}_{r}}\tag{40}.$$

We Eq.(39) and (40), the Hamiltonian is then

$$H^{\prime}=\int d^{3} r\left(\mathbf{\dot{q}_{r} \cdot p_{r}}-\mathcal{L}^{\prime}\right)\tag{41},$$

and

$$p_{r}=\frac{\delta \mathcal{L}^{\prime}(r)}{\delta \dot{P}(r)}=\mu \dot{P}(r),\tag{42}$$

$$H^{\prime}=\int d^{3} r\left[\frac{\mu}{2}\{\mathbf{\dot{P}^{2}(r)+\omega^{2} P^{2}(r)\}-D(r) \cdot P(r)}\right]\tag{43}.$$

Because the Hamiltonian density $\mathcal{H}^{\prime}$ is defined as 

$$
\mathcal{H}^{\prime}=\mathbf{\dot{q}_{r} \cdot p_{r}}-\mathcal{L}^{\prime}\tag{44}
$$

we have

$$\begin{array}{l}
\dot{q}_{r}=\frac{\delta \mathcal{H}^{\prime}}{\delta p_{r}}=\frac{1}{\mu} p_{r} \\
\dot{p}_{r}=-\frac{\delta \mathcal{H}^{\prime}}{\delta q_{r}}=-\mu \omega^{2} q_{r}+D(r)
\end{array}\tag{45}$$

Combining the equation in (45) we find

$$\ddot{\boldsymbol{q}}_{r}=\ddot{\boldsymbol{P}}(\boldsymbol{r})=\frac{1}{\mu}\left[-\mu \omega^{2} \boldsymbol{q}_{\boldsymbol{r}}+\boldsymbol{D}(\boldsymbol{r})\right]=-\omega^{2} \boldsymbol{P}(\boldsymbol{r})+\frac{1}{\mu} \boldsymbol{D}(\boldsymbol{r})\tag{46}.$$

Comparing (46) with (37), we see that $\mathbf{F}=\frac{1}{\mu}\mathbf{D}$. To figure out the format of $\mu$, we first notice that in the static limit (37) becomes

$$\omega^{2} \mathbf{P}=\frac{1}{\mu} \mathbf{D}.$$

Since we only consider  the longitudinal polarization mode, we have from (12) to (14) that

$$\omega^2=\frac{1}{\mu}\frac{1}{2\pi\bar{\varepsilon}}\tag{47}.$$

The Lagrangian density in (39) is not complete as we only consider the fields. But we need to take account for the electron in a polaron-forming system. The Lagrangian of the electrion is just its kinetic energy, i.e.

$$L_e=\frac{1}{2}m^*\mathbf{\dot{r}_e^2},$$

with $m^*$ being the Bloch effective mass of the energy. The equation of motion for the electron is then

$$m^{*} \ddot{r}_{e}=-4 \pi e \mathbf{P}\tag{48}.$$

Because the field $\mathbf{P}$ is irrotational, we must have another field $\Phi$ whose gradient gives the field, i.e.

$$4\pi\mathbf{P}=\nabla\Phi.$$

Using $\Phi$ in our Lagrangian density to find that the complete Lagrangian is

$$
L=\frac{1}{2}m^*\mathbf{\dot{r}_e^2}+\int\mathcal{L}^{\prime}d\mathbf{r}\tag{49},
$$

and the complete Hamiltonian is

$$
H =\mathbf{\dot{r}_{e}} \cdot \mathbf{p}_e+\int d^{3} r \mathbf{\dot{q}_{r} \cdot p_{r}}-L =\frac{1}{2 m} \mathbf{p}_{e}^{2}+H^{\prime}=H_{F}+H_e+H_{int}\tag{50}
$$

where $\mathbf{p}_e=m^*\mathbf{\dot{r}}$,

$$H_{F}=\frac{\mu}{2} \int d^{3} r\left\{\dot{\boldsymbol{P}}^{2}(\boldsymbol{r})+\omega^{2} \boldsymbol{P}^{2}(\boldsymbol{r})\right\}, \quad \mu=\frac{4 \pi \overline{\boldsymbol{\varepsilon}}}{\omega^{2}}\tag{51}$$

$$H_{\mathrm{e}}=\frac{1}{2 m} p_{\mathrm{e}}^{2}=-\frac{\hbar^{2}}{2 m} \nabla_{r_{e}}^{2}\tag{52},$$

and

$$\begin{aligned}
H_{\mathrm{int}} &=-\int d^{3} r \mathbf{D \cdot P}=\frac{e}{4 \pi} \int d^{3} r \nabla_{r} \frac{1}{\left|r-r_{\mathrm{e}}\right|} \cdot \nabla_{r} \Phi(r) \\
&=-\frac{e}{4 \pi} \int d^{3} r \Phi(r) \nabla_{r}^{2} \frac{1}{\left|r-r_{\mathrm{e}}\right|}=e \Phi\left(r_{\mathrm{e}}\right)
\end{aligned}.\tag{53}$$

The Eq. (53) used the integration in part at the thir equivalence and droped the surface term because the interaction die out at the boundary. Also we have used the fact that 

$$\nabla \cdot \boldsymbol{D}=-\nabla^{2} \frac{e}{\left|\boldsymbol{r}-\boldsymbol{r}_{\mathrm{el}}\right|}=4\pi\rho_f=4 \pi e \delta\left(\boldsymbol{r}-\boldsymbol{r}_{\mathrm{e}}\right).$$

Note that $H_{\text {int }}$ depends on the field variables as well as on $r_{\mathrm{e}}$, although this dependence is not explicitly shown above.

### Quantize your Hamiltonian

You probably already noticed that in Eq.(52) I quantized the Hamiltonian of the electron into an operator. Now let us proceed to do the same thing for the rest of the Hamiltonian. Imagine we have a crystalline material whose unit cell has simple cubic volume of $V=L^3$. The periodic boundary condition (PBC) is applied for the unit cells. Each unit cell contains one extra electron and the Coulombic interaction between two electrons is long-range, so the image of building a material using unit cells and PBC introduce infinite interaction energy, which of course needs to be eliminated during our quantization process.

Let us first expand $\mathbf{P}$ in terms of space and time as

$$\boldsymbol{P}(\boldsymbol{r}, t)=\sum_{\boldsymbol{w}} \boldsymbol{P}_{\boldsymbol{w}}(t) e^{i \boldsymbol{w} \cdot \boldsymbol{r}}\tag{54},$$

where PBC on $V$ requires $\mathbf{w}=\frac{2 \pi \mathbf{n}}{L},$ with $\boldsymbol{n}=\left(n_{1}, n_{2}, n_{3}\right) ; n_{j}=0,1,2, \ldots, \infty ; j=1,2,3 .$ **The usual procedure to quantize a vector field is to introduce canonical commutation relations between the field coordinates and the corresponding conjugate momenta.** In our case the field coordinate is $\mathbf{P}$ and the conjugate momenta is 

$$
\mathbf{Q}=\frac{\partial \mathcal{L}}{\partial \dot{\mathbf{P}}}=\mu\dot{\mathbf{P}}\tag{55}
$$

The commutation relation between the two should statisfy

$$\left[\mathbf{P}_{i}(\boldsymbol{r}), \gamma \dot{\mathbf{P}}_{j}\left(\boldsymbol{r}^{\prime}\right)\right]=i \hbar \delta_{i j}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)\tag{56}.$$

which would lead us to define commutation relations for the Fourier components in (54). We also realize that $\mathbf{P}$ is a real vector field, meaning that its Fourier components $\mathbf{P_w}$ must be contrained by the following relation

$$
\mathbf{P_w^{\dagger}}=\mathbf{P_{-w}}\tag{57}.
$$

The subsidiary conditions of (56) and (57) meaning that $\mathbf{P_w}$ are not independent. Since the whole point of doing quantization is to transform the Hamiltonian into a separable format, we should get rid of this dependence among field coordinates. It is found to be more convenient to construct a new field $\mathbf{B}$ as a linear combination of $\mathbf{P}$ and $\mu\dot{\mathbf{P}}$ before we continue our quantization. Thus we define from the canonical transformation[6]:

$$\begin{array}{l}
\boldsymbol{B}(\boldsymbol{r})=\left(\frac{\mu \omega_{}}{2 \hbar}\right)^{1 / 2}\left[\mathbf{P}(\boldsymbol{r})+\frac{i}{\omega_{}} \dot{\mathbf{P}}(\boldsymbol{r})\right] \\
\boldsymbol{B}^{\dagger}(\boldsymbol{r})=\left(\frac{\mu \omega_{}}{2 \hbar}\right)^{\frac{1}{2}}\left[\mathbf{P}(\boldsymbol{r})-\frac{i}{\omega_{}} \dot{\mathbf{P}}(\boldsymbol{r})\right]
\end{array}\tag{58}$$

And therefore,

$$\begin{array}{l}
\mathbf{P}(\boldsymbol{r})=\left(\frac{\hbar}{2 \mu \omega_{0}}\right)^{1 / 2}\left[\boldsymbol{B}^{\dagger}(\boldsymbol{r})+\boldsymbol{B}(\boldsymbol{r})\right] \\
\dot{\mathbf{P}}(\boldsymbol{r})=i\left(\frac{\hbar \omega_{0}}{2 \mu}\right)^{1 / 2}\left[\boldsymbol{B}^{\dagger}(\boldsymbol{r})-\boldsymbol{B}(\boldsymbol{r})\right]
\end{array}\tag{59}.$$

Because the field $\mathbf{P}$ is irrotational (its curl is zero), the Fourier components in the expansion of $\mathbf{B}$, $\mathbf{B_w}$ should be defined with an unit vector pointing towards the wavevector $\mathbf{w}$ as:

$$\left.\begin{array}{rl}
\boldsymbol{B}(\boldsymbol{r}, t) & =\frac{1}{\sqrt{V}} \sum_{\boldsymbol{q}} \frac{\boldsymbol{q}}{|\boldsymbol{q}|} b_{\boldsymbol{q}}(t) e^{i \boldsymbol{q} \cdot \boldsymbol{r}} \\
\boldsymbol{B}^{\dagger}(\boldsymbol{r}, t) & =\frac{1}{\sqrt{V}} \sum_{\boldsymbol{q}} \frac{\boldsymbol{q}}{|\boldsymbol{q}|} b_{\boldsymbol{q}}^{\dagger}(t) e^{-i \boldsymbol{q} \cdot \boldsymbol{r}}
\end{array}\right\}\tag{60}.$$

Using the commutation relation of (56) and Eq.(59) it is easy to show that

$$\left[B_{j}(\boldsymbol{r}), B_{j^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right)\right]=\delta_{j j^{\prime}} \delta\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)\tag{61}.$$

From Eq(60) and (61) we have

$$\begin{array}{l}
{\left[b_{w}, b_{w^{\prime}}^{+}\right]=\delta_{w, w^{\prime}}} \\
{\left[b_{w}, b_{w^{\prime}}\right]=\left[b_{w}^{+}, b_{w^{\prime}}^{+}\right]=0}
\end{array}\tag{62}.$$

Insert Eq.(59) with the definitions in Eq.(60) into the field Hamiltonian $H_F$ in (51) to give

$$H_{F}=\frac{1}{2} \hbar \omega_{0} \sum_{\mathbf{q}}\left(b_{\mathbf{q}}^{\dagger} b_{\mathbf{q}}+b_{\mathbf{q}} b_{\mathbf{q}}^{\dagger}\right)=\hbar \omega_{} \sum_{\mathbf{q}} b_{\mathbf{q}}^{\dagger} b_{\mathbf{q}}+\frac{1}{2} \sum_{\mathbf{q}} \hbar \omega_{}\tag{63}.$$

because

$$\begin{aligned}
\int \boldsymbol{B}^{\dagger}(\boldsymbol{r}) \cdot \boldsymbol{B}(\boldsymbol{r}) d \boldsymbol{r} &=\frac{1}{V^{\prime}} \sum_{q^{\prime}} \sum_{q^{\prime \prime}} \frac{\boldsymbol{q}^{\prime} \cdot \boldsymbol{q}^{\prime \prime}}{q^{\prime} q^{\prime \prime}} b_{q^{\prime \prime}}^{\dagger} b_{\boldsymbol{q}^{\prime}} \int e^{-i\left(\boldsymbol{q}^{\prime \prime}-\boldsymbol{q}^{\prime}\right) \cdot \boldsymbol{r}} d \boldsymbol{r} \\
&=\sum_{\boldsymbol{q}^{\prime}} \sum_{\boldsymbol{q}^{\prime \prime}} \frac{\boldsymbol{q}^{\prime} \cdot \boldsymbol{q}^{\prime \prime}}{q^{\prime} q^{\prime \prime}} b_{\boldsymbol{q}^{\prime \prime}}^{\dagger} b_{\boldsymbol{q}^{\prime}} \delta\left(\boldsymbol{q}^{\prime \prime}-\boldsymbol{q}^{\prime}\right)=\sum_{\boldsymbol{q}^{\prime}} b_{\boldsymbol{q}^{\prime}}^{\dagger} b_{\boldsymbol{q}^{\prime}}
\end{aligned}.$$

We move on to quantize $H_{int}$ by first noticing that

$$\mathbf{P}(r)=\sqrt{\frac{\hbar}{2 \mu \omega V}} \sum_{q} \frac{\mathbf{q}}{|\mathbf{q}|}\left[b_{\mathbf{q}}^{+} e^{-i \mathbf{q} \cdot r}+b_{\mathbf{q}} e^{i \mathbf{q} \cdot r}\right]\tag{64}$$

Since $\nabla \Phi(r)=4 \pi P(r),$ we see that

$$\Phi(r)=4 \pi \sqrt{\frac{\hbar}{2 \mu \omega V}} i \sum_{q} \frac{1}{|\mathbf{q}|}\left[b_{\mathbf{q}}^{+} e^{-i \mathbf{q\cdot r}}-b_{\mathbf{q}} e^{i \mathbf{q\cdot r}}\right]\tag{65}.$$

Finally, it is instructive to introduce a dimensionless parameter by the following equation:

$$\begin{aligned}
\frac{\hbar^{2} u^{2}}{2 m} &=\hbar \omega \\
u &=\left(\frac{2 m \omega}{\hbar}\right)^{1/2}
\end{aligned}\tag{66}.$$

We then introduce dimensionless electron coordinates, volume parameter, and wave numbers

$$
\boldsymbol{x}=u \boldsymbol{r}_{\mathrm{e}} ; \quad S=u^{3} V ; \quad \boldsymbol{v}=\boldsymbol{q} / u
$$

From Eq.(63),(65) and (52), we obtain

$$\frac{H}{\hbar \omega}=\sum_{\boldsymbol{v}} b_{\boldsymbol{v}}^{+} b_{\boldsymbol{v}}-\nabla_{\boldsymbol{x}}^{2}+i \sqrt{\frac{4 \pi \alpha}{S}} \sum_{\boldsymbol{v}} \frac{1}{|\boldsymbol{v}|}\left(b_{\boldsymbol{v}}^{+} e^{-i \boldsymbol{v} \cdot \boldsymbol{x}}-b_{\boldsymbol{v}} e^{i \boldsymbol{v} \cdot \boldsymbol{x}}\right)\tag{67}$$

where

$$\alpha=\frac{2 \pi \varepsilon^{2} u}{\mu \hbar \omega^{3}}=\frac{e^{2}}{\bar{\varepsilon} \hbar} \sqrt{\frac{m}{2 \hbar \omega}}\tag{68}.$$

This paremeter combination $\alpha$ is usually referred in research as the **Coupling constant**.

## Conclusion

Now that the quantized Hamiltonian is derived, I need to use it in some simplified models to find the physical properties of modeled systems. Or maybe not since my ultimate goal is to put the Polaron theory in an *ab initio* calculation framework. Not sure if exactly solved models will help me with that at this point.

## References

[1] Kuper, Charles Goethe, and George Danley Whitfield, eds. Polarons and excitons. Plenum Press, 1963.

[2]https://web.archive.org/web/20010307184808/http://www.psrc.usm.edu/mauritz/dilect.html

[3] Szigeti, Bela. "Polarisability and dielectric constant of ionic crystals." Transactions of the Faraday Society 45 (1949): 155-166.

[4] Chatterjee, Ashok, and Soma Mukhopadhyay. Polarons and Bipolarons: An Introduction. CRC Press, 2018.

[5] Luan, Pi-Gang. "Lagrangian dynamics approach for the derivation of the energy densities of electromagnetic fields in some typical metamaterials with dispersion and loss." Journal of Physics Communications 2.7 (2018): 075016.

[6] Altland, Alexander, and Ben D. Simons. Condensed matter field theory. Cambridge university press, 2010.