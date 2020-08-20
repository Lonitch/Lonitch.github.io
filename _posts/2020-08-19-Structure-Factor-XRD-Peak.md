---
layout: post

title: Structure Factor and X-ray Diffraction Peaks

date: 2020-08-19

Author: Sizhe

tags: [notes, condensed-matter-physics]

toc: false

---

## Laue condition, Miller Index, and Structure Factor

**Laue condition** needs to be satisfied to have constructive X-ray diffraction interference (i.e., the peaks on X-ray spectrum). Using the reciprocal lattice, the condition states that 

>If the difference between the incident $(\boldsymbol{k})$ and scattered $\left(\boldsymbol{k}^{\prime}\right)$ wave vectors is equal to a reciprocal lattice vector, the diffracted intensity may be nonzero. This is the Laue condition. With $\boldsymbol{K}=\boldsymbol{k}^{\prime}-\boldsymbol{k},$ this leads to the simple equation $\boldsymbol{K}=\boldsymbol{G}$, where $\boldsymbol{G}$ is the vectors on reciprocal lattice.

Let the base vectors of the reciprocal space be $\boldsymbol{g}_i$, then the **Miller index** is the *coordinates* on the reciprocal space, i.e.,

$$\boldsymbol{G}=h \boldsymbol{g}_{1}+k \boldsymbol{g}_{2}+l \boldsymbol{g}_{3}$$

where $h,k,l$ are integers. For any family of lattice planes separated by a distance $d$, there is a reciprocal vector with length $\|\boldsymbol{G}\|=2\pi/d$, and this vector is perpendicular to the lattice planes.

**The Laue condition is based solely on the Bravais lattice**, so the positions of the diffraction peaks are independent of the atomic basis. However, **the intensities of the peaks are strongly influenced by the basis.** The structure factor, $S(\boldsymbol{G}),$ and the form factor, $f_{\alpha},$ tell us how the intensities of the peaks depend on the atoms making up the crystals. These quantities are calculated as a sum (or integral) within the unit cell. In the simplest approximation the scattering depends on the atomic charge distribution $\rho_{\alpha}(r),$ and the intensity is proportional to the absolute value squared of

$$S(\boldsymbol{G})=\sum_{\alpha} f_{\alpha} \mathrm{e}^{-i \boldsymbol{G} \cdot \boldsymbol{r}_{\alpha}}\tag{1}$$

and

$$f_{\alpha}(\boldsymbol{G})=\frac{1}{e} \int \rho_{\alpha}(\boldsymbol{r}) \mathrm{e}^{-i \boldsymbol{G} \cdot \boldsymbol{r}} \mathrm{d}^{3} \boldsymbol{r}\tag{2}$$

where $e$ is the electron charge, **the sum is over the atoms in the unit cell, and the integration is over the volume of an atom**. Similar formulae work for electron and neutron scattering, except the form factor integral is different depending on the microscopic interaction at play. Even for $\mathrm{X}$ -rays, the calculation of the form factor as an integral over the charge density works only for the simplest cases. For a realistic calculation of scattered radiation
intensities one has to perform a *Rietveld analysis*.

## Problem: Structure of $Rb_{x}C_{60}$

Assume you perform a powder X-ray diffraction measurement on a Rb doped $\mathrm{C}_{60}$ material with $\lambda=0.9$ Angstrom $\mathrm{X}$ -rays. What are the positions $(2 \theta,$ in degrees $)$ of the first five diffraction peaks for the three observed structures (doping $x=3,4,$ and 6)?

$Rb_{x}C_{60}$ has an $fcc$ structure for $x=3,bct$ for $x=4,$ and $bcc$ for $x=6.$ To calculate the X-ray peak positions, $2\theta,$ we must use

$$G=\sqrt{\left(h \cdot \mathbf{b}_{1}\right)^{2}+\left(k \cdot \mathbf{b}_{2}\right)^{2}+\left(l \cdot \mathbf{b}_{3}\right)^{2}}$$

where $b_{1}=b_{2}=\frac{2\pi}{a},$ and $b_{3}=\frac{2\pi}{a}$ for $fcc$ and $bcc$ or $b_{3}=\frac{2\pi}{c}$ for bct. We can then use the condition $2\frac{2\pi}{\lambda}\sin\theta=G$ to calculate values of $2\theta$. Since we are using the conventional cubic unit cells, we must calculate the structure factor, Eq. (1), to determine which $(h,k,l)$ values are allowed.

$$S_{K}=\sum_{j=1}^{n} e^{i K \cdot d_{j}}$$

for $n$ scatterers at positions $$\boldsymbol{d}_j$$ in a unit cell. For the $fcc$ unit cell, there is a $$C_{60}$$ at position $$\boldsymbol{d}_{1}=0,$$ and on the three faces $$\boldsymbol{d}_{2}=\frac{a}{2}(\hat{x}+\hat{y}),\boldsymbol{d}_{3}=\frac{a}{2}(\hat{x}+\hat{z}),\boldsymbol{d}_{4}=\frac{a}{2}(\hat{y}+\hat{z}).$$ The general vector is
$$\boldsymbol{K}=\frac{2\pi}{a}(h\hat{x}+k\hat{y}+l\hat{z}).$$ Therefore

$$\begin{aligned}
S_{K} &=1+\mathrm{e}^{\mathrm{i} \pi(h+k)}+\mathrm{e}^{\mathrm{i} \pi(h+l)}+\mathrm{e}^{\mathrm{i} \pi(k+l)} \\
&=1+(-1)^{h+k}+(-1)^{h+l}+(-1)^{k+l}
\end{aligned}$$

**When $S_{K}\neq0$, the Bragg peak associated with the reciprocal lattice vector $\boldsymbol{K}$ at scattering angle $2\theta$ is allowed.** Similarly we can look at the two-molecule per unit cell bet and bee structures to determine that their structure factors are given by

$$S_{K}=1+(-1)^{h+k+l}.$$

The resultant calculated values for the first five allowed diffraction peaks for the fcc structures is shown below

|  h | k | l | G         | 2$\theta$|
|----|---|---|-----------|----------|
| 1  | 1 | 0 | 0.7694637 | 6.318201 |
| 2  | 0 | 0 | 1.088186  | 8.939824 |
| 2  | 1 | 1 | 1.33275   | 10.95458 |
| 2  | 2 | 0 | 1.538927  | 12.65571 |
| 3  | 1 | 0 | 1.720573  | 14.15675 |

## Problem: Powder Diffraction of hcp and fcc Crystals
Cobalt has two forms: $\alpha$-Co, with hcp structure (lattice spacing of $a=$ $2.51)$Å and $\beta-$ Co, with $fcc$ structure (lattice spacing of $a_{cubic}=3.55$Å). Assume that the $hcp$ structure has an ideal $c/a$ ratio. Calculate and compare the position of the first five X-ray powder diffraction peaks. The quantity $K=4\pi/\lambda\sin\theta$ can be used to characterize the peak positions (here $\lambda$ is the wavelength of the X-ray radiation and $2 \theta$ is the scattering angle).

To satisfy the powder diffraction condition, the length of the reciprocal lattice vector must be equal to $G=K=4\pi/\lambda\sin\theta$. To calculate the position of the peaks for the $fcc$ structure we use the simple cubic unit cell with four atoms per cell. The reciprocal lattice is cubic, with lattice spacing of $G_{0}=2\pi/a_{cubic}=1.77Å^{-1},$ and the structure factor is nonzero only if the (hkl) indices are all odd or all even. The length of the reciprocal lattice vector is $G=G_{0}\sqrt{h^{2}+k^{2}+l^{2}}$. 

The hcp lattice has two atoms per unit cell. The reciprocal lattice is constructed from a simple hexagonal lattice by assigning a zero structure factor to some of the points, resulting in alternating hexagonal and honeycomb arrays. We will index the reciprocal lattice points in terms of $$\boldsymbol{G}=h\boldsymbol{a}^{\prime}+k\boldsymbol{b}^{\prime}+l\boldsymbol{c}^{\prime},$$ where the angle between $\boldsymbol{a}^{\prime}$ and $\boldsymbol{b}^{*}$ is $120^{\circ}$
and $\boldsymbol{c}^{\prime}$ is perpendicular to $$\boldsymbol{a}^{\prime}$$ and $$\boldsymbol{b}^{\prime}$$. The lengths of the primitive vectors are calculated as $$a^{\prime}=b^{\prime}=4\pi/\sqrt{3}a=2.89Å^{-1}$$, $$c^{\prime}=2\pi/c=\sqrt{3/8}2\pi/ a=1.53Å^{-1}$$.

For $\beta-Co$, we have

| $hkl$ | $h^{2}+k^{2}+l^{2}$ | $G$   |
|-------|---------------------|-------|
| 111   | 3                   | 3\.07 |
| 002   | 4                   | 3\.54 |
| 220   | 8                   | 5\.01 |
| 311   | 11                  | 5\.87 |
| 222   | 12                  | 6\.13 |
| 400   | 16                  | 7\.08 |
| 331   | 19                  | 7\.71 |
| 420   | 20                  | 7\.92 |

For $\alpha-Co$,

| $hkl$ | $G$   |
|-------|-------|
| 100   | 2\.89 |
| 002   | 3\.07 |
| 101   | 3\.27 |
| 102   | 4\.21 |
| 110   | 5\.01 |
| 103   | 5\.43 |
| 200   | 5\.78 |
| 112   | 5\.87 |
| 004   | 6\.13 |

The nearest-neighbor distance is the same for the two structures. This is why some of the X-ray diffraction peak positions coincide.
