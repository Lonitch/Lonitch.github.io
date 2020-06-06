---
layout: post

title: Derive Chemical Potential of Ideal Water Vapor from Equilibrium Statistical Mechanics

date: 2020-06-06

Author: Sizhe

tags: [notes, statistical-mechanics]

toc: true

---
*For Uzi.*
## **Introduction**

This note is dedicated to the derivation of chemical potential of water molecule at vapor state. The final result in this note can be used in the thermodynamic analysis of hydrated lattice systems where the interstitial and external H2O molecules are at phase equilibrium. Before we start the derivation, three important postulates are listed below and they will appear later in our derivation:

1. The energy difference between two electronic states of single H2O molecule is so big that only the ground state is available within the temperature range of interest.
2. The H2O vapor behaves ideally, and follows ideal gas law: $PV=Nk_B T$, where is $k_B$ Boltzmann constants and other symbols take their normal meanings.
3. And the rotation of H2O molecule can be treated classically.

We are not, however, in this note trying to derive chemical potential of water molecule at liquid phase for two reasons. On the one hand, the best first-principle statistical-mechanical model can only treat water molecules as two-dimensional disks and needs careful choices of molecular interaction constants[1]. On the other hand, the assumption of ideal H2O vapor has been applied in a grand canonical ensemble theory of water uptake in NaY lattice[2], where a good agreement was achieved between the predicted and experimental isotherms. 

## **Statistical Thermodynamics of Ideal Polyatomic gas**

In this section we start with deriving the partition function for ideal gas by considering generalized energy states of each molecule. We then take into account the energy contributions of translational, vibrational, and rotational states step by step. The outcome of this section is a canonical partition function that is analytical and has coefficients from well-established experimental data.

Let $\epsilon_i$ be the ith energy state of an arbitrary molecule of interest, and $N$ be the number of indistinguishable molecules in a system. The total energy of this system is then:

$$\mathrm{E}=\sum_{i} n_{i} \epsilon_{i}\tag{1}$$

where

$$\mathrm{N}=\sum_{i} n_{i}\tag{2}$$

With Eq. (1) and (2) we can construct a canonical partition function as

$$\mathrm{Z}=\frac{1}{N !} \prod_{j=1}^{N} \sum_{i} e^{-\epsilon_{i} / k_{B} T}=\frac{1}{N !} q^{N}\tag{3}$$

and

$$q=\sum_{i} e^{-\epsilon_{i} / k_{B} T}\tag{4}$$

Because the Hamiltonian of a single molecule is separable[3], the energy of single molecule can be represented as

$$\epsilon=\epsilon_{\mathrm{t}}+\epsilon_{v}+\epsilon_{r}+\epsilon_{e}\tag{5}$$

where t = translation, r = rotation, v = vibration, and e = electronic. Using Eq.(5) in Eq. (3) and (4) we obtain

$$\mathrm{Z}=\frac{1}{N !}\left(q_{t} q_{v} q_{r} q_{e}\right)^{N}\tag{6}$$

and

$$\mathrm{q}=q_{t}(V, T) q_{v}(T) q_{r}(T) q_{e}(T)\tag{7}$$

Notice that the partition function ,$q_t$ is dependent on the system volume because molecular translation is constrained by the system size. Because the translational energy states is independent of system shape, we can assume the system to be simply cubic with characteristic length of $L$. Moving a particle in a three-dimensional box is a standard quantum-mechanical problem with its eigenvalue solutions being

$$\epsilon_{\mathrm{t}, \mathrm{xyz}}=\frac{\pi^{2} \hbar^{2}\left(n_{x}^{2}+n_{y}^{2}+n_{z}^{2}\right)}{2 M L^{2}}\tag{8}$$

where $M$ is the molecular mass, and the quantum numbers $n_x,n_y,n_z$ are positive integers. The translational partition function can then be written as

$$\mathrm{q}_{\mathrm{t}}=\sum_{n_{x}=1}^{\infty} \exp \left\{-\frac{\pi^{2} \hbar^{2} n_{x}^{2}}{2 M L^{2} k_{B} T}\right\} \sum_{n_{y}=1}^{\infty} \exp \left\{-\frac{\pi^{2} \hbar^{2} n_{y}^{2}}{2 M L^{2} k_{B} T}\right\} \sum_{n_{z}=1}^{\infty} \exp \left\{-\frac{\pi^{2} \hbar^{2} n_{z}^{2}}{2 M L^{2} k_{B} T}\right\}\tag{9}$$

Due to the dense distribution of $\epsilon_t$ we replace the summations in Eq.(9) with integrals and give

$$\mathrm{q}_{\mathrm{t}}=\left(\int_{0}^{\infty} \exp \left\{-\frac{\pi^{2} \hbar^{2} n^{2}}{2 M L^{2} k_{B} T}\right\} d n\right)^{3}=\frac{V}{\Lambda^{3}}\tag{10}$$

with the thermal de Broglie wavelength being

$$\Lambda=\sqrt{\frac{2 \pi \hbar^{2}}{M k_{B} T}}\tag{11}$$

We now proceed to deal with vibrational partition function. For a polyatomic molecule we can always find the energy spectrum of its vibrational modes through phonon calculations[4]. The vibrational energy of a molecule can then be written as

$$\mathrm{E}_{\mathrm{vib}}=\int\left(g(\omega)+\frac{1}{2}\right) \hbar \omega d \omega=\epsilon_{v i b, 0}+\int g(\omega) \hbar \omega d \omega\tag{12}$$

where $g(\omega)$ is the degeneracy of vibrational modes with frequency of $\omega$. By following any textbook of statistical mechanics[5], we can derive the vibrational partition function as

$$\mathrm{q}_{\mathrm{v}}=e^{-\epsilon_{v i b, 0} / k_{B} T} \prod_{j}\left(\frac{1}{1-e^{-\frac{\hbar \omega_{j}}{k_{B} T}}}\right)^{g\left(\omega_{j}\right)}\tag{13}$$

The postulate (1) in the introduction indicates that the partition function of electronic states for single polyatomic molecule is simply

$$\mathrm{q}_{\mathrm{e}}=\exp \left(-\frac{\mathrm{U}_{0}}{\mathrm{k}_{\mathrm{B}} \mathrm{T}}\right)\tag{14}$$

with $U_0$ being ground state energy of single molecule in vapor phase.

We now take a closer look at the rotational partition function for H2O molecule. H2O is a nonlinear molecule, so its classical rotational properties can be simply represented by using the three principal moments of inertia, $I_A$, $I_B$, and $I_C$ [6]. Because the classical treatment of molecular rotation is only illegitimate in the case of very light (hydrogen-containing) gases at low temperatures (such as CH4 below 80K)[7], we can use the partition function derived by J.E. Mayer[8] for $q_r$, i.e.

$$\mathrm{q}_{\mathrm{r}}=\frac{\pi^{\frac{1}{2}}}{2}\left(\frac{2 I_{A} k_{B} T}{\hbar^{2}}\right)^{\frac{1}{2}}\left(\frac{2 I_{B} k_{B} T}{\hbar^{2}}\right)^{\frac{1}{2}}\left(\frac{2 I_{C} k_{B} T}{\hbar^{2}}\right)^{\frac{1}{2}}\tag{15}$$

Substitute Eq. (10), (13), (14), and (15) in (6), and use the relationship

$$\mathrm{F}=-\mathrm{k}_{\mathrm{B}} T \ln Z\tag{16}$$,

we finally arrive at

$$\begin{aligned}
\mathrm{F}&=\mathrm{NU}_{0}-N k_{B} \operatorname{Tln}\left(\frac{V e}{\Lambda^{3} N}\right)+\\
&N \int d \omega \frac{1}{2} g(\omega) \hbar \omega+N k_{B} T \int d \omega g(\omega) \ln \left(1-e^{-\frac{\hbar \omega}{k_{B} T}}\right)- \\
&N k_{B} \operatorname{Tln}\left[\frac{\pi^{\frac{1}{2}}}{2}\left(\frac{2 I_{A} k_{B} T}{\hbar^{2}}\right)^{\frac{1}{2}}\left(\frac{2 I_{B} k_{B} T}{\hbar^{2}}\right)^{\frac{1}{2}}\left(\frac{2 I_{C} k_{B} T}{\hbar^{2}}\right)^{\frac{1}{2}}\right]
\end{aligned}\tag{17}$$

Notice that in Eq.(17) we used Stirling's approximation $$\ln (1 / N !)=N-N \ln N$$ to simplify the second term. Using the fact that $\angle \mathrm{HOH}=104.5^{\circ},$ and hydrogen-oxygen bonding length $\mathrm{d}_{\mathrm{OH}}=0.9584 \mathrm{A}$, we find the principal moments of inertia of $H_2O$ molecule are:

$$
\mathrm{I}_{\mathrm{A}}=1.09 \times 10^{-40} g * \mathrm{cm}^{2}, \mathrm{I}_{\mathrm{B}}=1.91 \times 10^{-40} \mathrm{g} * \mathrm{cm}^{2}, \text { and } \mathrm{I}_{\mathrm{C}}=3.00 \times 10^{-40} \mathrm{g} * \mathrm{cm}^{2} . 
$$

From Eq.(17) we can also calculate energy contributions of translational and rotational modes to the internal energy by using the following two equations

$$E_{t}=k_{B} T^{2}\left(\frac{\partial \ln \left(q_{t}\right)^{N}}{\partial T}\right)=N k_{B} T^{2} \frac{d l n T^{3 / 2}}{d T}=\frac{3}{2} N k_{B} T$$

and

$$E_{r}=k_{B} T^{2}\left(\frac{\partial \ln \left(q_{r}\right)^{N}}{\partial T}\right)=\frac{3}{2} N k_{B} T$$

The translational and rotational modes make total contribution of $3Nk_B T$ to the internal energy of a N-molecule system, which is **the classical internal energy of ideal polyatomic gas derived from the equipartition theorem**[9].

## **Chemical Potential of Ideal Water Vapor**

To obtain an expression of chemical potential of water vapor, $\mu$, from Eq. (17), we use the postulate (2) to give

$$\begin{aligned}
\mu&=\frac{\mathrm{F}+\mathrm{PV}}{\mathrm{N}}=\frac{\mathrm{F}}{\mathrm{N}}+\mathrm{k}_{\mathrm{B}} T\\
&=U_{0}-k_{B} \operatorname{Tln}\left(\frac{V e}{\Lambda^{3} N}\right)+\\
&\int d \omega \frac{1}{2} g(\omega) \hbar \omega+k_{B} T \int d \omega g(\omega) \ln \left(1-e^{-\frac{\hbar \omega}{k_{B} T}}\right)-\\
&k_{B} \operatorname{Tln}\left[\frac{\pi^{\frac{1}{2}}}{2}\left(\frac{2 I_{A} k_{B} T}{\hbar^{2}}\right)^{\frac{1}{2}}\left(\frac{2 I_{B} k_{B} T}{\hbar^{2}}\right)^{\frac{1}{2}}\left(\frac{2 I_{C} k_{B} T}{\hbar^{2}}\right)^{\frac{1}{2}}\right]
\end{aligned}\tag{18}$$

In a thermodynamic analysis based on grand canonical ensemble theory, the volume of vapor reservoir is assumed to be infinite. To avoid the singularity in second term of Eq. (18) we replace $\frac{V e}{\Lambda^{3} N}$ with $\frac{k_{B} T e}{\Lambda^{3} P},$ where $e=2.71828$.

## Reasons for Not Using Standard Property Table

We can also calculate the Gibbs free energy (i.e.$F+PV$ in Eq. 18) by looking up the standard property tables[10]. However, there are two big pitfalls of using standard tables. One is that the entropy is not defined at atomic level, so we cannot deduce chemical potential through basic thermodynamic relationships. The other one is that the reference energy level that assumed in the tables might not coincide with theoretical calculations, which makes any chemical potential derivation based on mixed use of experimental and theoretical data fall on shaky ground.

## **References**

[1]	T. M. Truskett and K. A. Dill, “A simple statistical mechanical model of water,” J. Phys. Chem. B, vol. 106, no. 45, pp. 11829–11842, Nov. 2002.

[2]	B. Boddenberg, G. U. Rakhmatkariev, S. Hufnagel, and Z. Salimov, “A calorimetric and statistical mechanics study of water adsorption in zeolite NaY,” Phys. Chem. Chem. Phys., vol. 4, no. 17, pp. 4172–4180, Aug. 2002.

[3]	E. U. Condon, “Introduction to Quantum Mechanics, with applications to chemistry,” Science (80-. )., vol. 83, no. 2144, pp. 105–106, 1936.

[4]	“Phonon calculations - Wiki.” [Online]. Available: https://wiki.materialsproject.org/Phonon_calculations. [Accessed: 06-Jun-2020].

[5]	C. M. Van Vliet, Equilibrium and Non-Equilibrium Statistical Mechanics. 2008.

[6]	D. J. Rowe, “The moment of inertia,” in Nuclear Collective Motion, 2010, pp. 119–129.

[7]	T. Hill, An introduction to statistical thermodynamics. 1986.

[8]	J. Mayer, Equilibrium statistical mechanics. 2013.

[9]	“Kinetic theory.” [Online]. Available: http://physics.bu.edu/~duffy/py105/Kinetictheory.html#:~:text=The internal energy of an,also the total internal energy. [Accessed: 06-Jun-2020].

[10]	G. Hewitt and J. Barbosa, Heat exchanger design handbook. 2008.