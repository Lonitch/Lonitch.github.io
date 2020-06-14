---
layout: post

title: Canonical Dielectric Function

date: 2020-06-13

Author: Sizhe

tags: [notes, electromagnetism]

toc: true

---

## Background

My humble knowledge of dielectric materials seems to be a big barrier between me and an sound understanding of the dependence of dielectric constant $\varepsilon$ on alternating field frequency $\omega$ and wave vector $\mathbf{k}$. The question of what are the reasonable assumptions needed to construct a dielectric constant function $\varepsilon(\omega)$ is the primary focus of this article.

## Only When They are Constants

One of the coolest things about Maxwell's equations is that they give plane-wave-like solutions for magnetic and electric field. If we treat these field as electromagnetic waves, many physical phenomena become much clearer. In this section we briefly review the plan-wave solution of electric field, which is a result from constant $\varepsilon$. Let us first reproduce the Maxwell's equations below with the constant $4\pi$ included in vacuum permitivity $\varepsilon_0$:

$$\begin{array}{c}
\nabla \cdot \mathbf{E}=\frac{\rho_{\text {other}}}{\varepsilon_{0} \varepsilon} \\
\nabla \cdot \mathbf{B}=0 \\
\nabla \times \mathbf{E}=-\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B}=\mu_{0} \mu \mathbf{j}_{\text {other}}+\mu_{0} \mu \varepsilon_{0} \varepsilon \frac{\partial \mathbf{E}}{\partial t}
\end{array}\tag{1.1-1.4}$$

where $\mu$ and $\varepsilon$ are relative magnetic permeability and permitivity with $\mu_0$ and $\varepsilon_0$ being the permeability and permitivity *in vacuo*. The $$\rho_{other}$$ and $$\mathbf{j}_{other}$$ are source charge density and external current, respectively. Now we first use assumption of **linear response** where $\mu$ and $\varepsilon$ are constants. If we further assume no external source charge or current, we have Eq.(1.4) becomes

$$\nabla \times \mathbf{B}=\mu_{0} \mu \varepsilon_{0} \varepsilon \frac{\partial \mathbf{E}}{\partial t}\tag{1.5}.$$

Taking a curl of 1.3 and using the identity of 

$$\nabla \times \nabla \times \mathbf{a}=\nabla(\nabla \cdot \mathbf{a})-\nabla^{2} \mathbf{a}$$

to give

$$\nabla(\nabla \cdot \mathbf{E})-\nabla^{2} \mathbf{E}=-\mu_{0} \mu \varepsilon_{0} \varepsilon \frac{\partial^{2} \mathbf{E}}{\partial t^{2}}\tag{1.6}.$$

We now use Gauss's law

$$
\nabla \cdot\left(\varepsilon_{0} \varepsilon \mathbf{E}\right)=0\tag{1.7}
$$

in (1.6) to give the standard **wave equation** for electric field $\mathbf{E}$ as

$$\nabla^{2} \mathbf{E}=\mu_{0} \mu \varepsilon_{0} \varepsilon \frac{\partial^{2} \mathbf{E}}{\partial t^{2}}\tag{1.8}.$$

We can also derive an identical equation for magnetic field $\mathbf{B}$. Comparing (1.8) with normal wave equation, we find that

$$\mu_{0} \mu \varepsilon_{0} \varepsilon=1/v^2$$

with $v$ being the **propagation speed**. Because in vacuum we have wave propagating at the speed of light, the $v$ can then be written as

$$
v=\frac{c}{\sqrt{\mu\varepsilon}}\tag{1.9},
$$

from which we define the **index of refraction $n$** to be:

$$
n=\sqrt{\mu\varepsilon}\tag{1.10}.
$$

The solution to (1.8) is then

$$\mathbf{E}(\mathbf{r}, t)=\mathbf{E}_{0} e^{i(\mathbf{k} \cdot \mathbf{r}-\omega t)}\tag{1.11}$$

with $\mathbf{k}$ being the wave vector. Eq.(1.11) describes a plane wave propagating at the direction of $\mathbf{k}$ with amplitude vector $\mathbf{E}_0$ and frequency $\omega$. Notice that $\mathbf{E}_0$ must be perpendicular to $\mathbf{k}$ because of Eq.(1.7), indicating that the electric field is a **transverse field**. Substitute (1.11) back into (1.8) to give

$$
\mathbf{k}^2=\mu_0\mu\varepsilon_0\varepsilon\omega^2
$$

and

$$
\omega(k)=\frac{c}{\sqrt{\mu\varepsilon}}k=\frac{c}{n}k\tag{1.12}
$$

From the **dispersion relation** in (1.12) we can calculation the phase velocity $v_p=\omega/k$ and the group velocity $v_g=d\omega/dk$ as

$$
v_p=v_g=\frac{c}{n}.
$$

## When $\varepsilon$ depends on $\omega$

It is an oversimplification to say that $\varepsilon$ and $\mu$ are constants, because we know that different kinds of light have different angle of refraction. So the wave equation (1.8) is not sufficient to describe the electromagnetic wave propagation. To remedy this we abandon the assumption of linear response and assume that the fields, as functions of space and time, takes the following form:

$$
\mathbf{F(r},t)=\tilde{\mathbf{F}}(\mathbf{r})e^{-i\omega t}\tag{2.1}
$$

where $\mathbf{F}$ could be $\mathbf{B,E,H,D,P}$. Substitute (2.1) back in to (1.1-1.4) to give

$$\begin{array}{c}
\nabla \cdot \tilde{\mathbf{D}}=0 \\
\nabla \cdot \tilde{\mathbf{B}}=0 \\
\nabla \times \tilde{\mathbf{E}}=i \omega \tilde{\mathbf{B}}\\
\nabla \times \tilde{\mathbf{H}}=-i \omega \tilde{\mathbf{D}}
\end{array}\tag{2.2-2.5}$$

where $\mathbf{D}=\varepsilon_0\varepsilon \mathbf{E}$ and $\mathbf{B}=\mu_0\mu\mathbf{H}$. The equations (2.2-2.5) are called **harmonic Maxwell's equations**. Let us still assume constant $\mu$ but variable $\varepsilon$ over a range of frequency, $\varepsilon(\omega)$ to repeat the steps from (1.5) to (1.8), and give

$$\nabla(\nabla \cdot \tilde{\mathbf{E}})-\nabla^{2} \tilde{\mathbf{E}}=\mu_{0} \mu \varepsilon_{0} \varepsilon(\omega) \omega^{2} \tilde{\mathbf{E}}\tag{2.6}.$$

Because $\nabla\cdot\mathbf{E}=0$, Eq.(2.6) becomes

$$\nabla^{2} \tilde{\mathbf{E}}=-\mu_{0} \mu \varepsilon_{0} \varepsilon(\omega) \omega^{2} \tilde{\mathbf{E}}\tag{2.7}.$$

Eq.(2.7) is called **Holmheltz equation** and it has a plane wave solution too, i.e.

$$\tilde{\mathbf{E}}(\mathbf{r})=\mathbf{E}_{0} e^{i \mathbf{k} \cdot \mathbf{r}}\tag{2.8}.$$

Substitute (2.8) back into (2.7) to give

$$
\omega(k)=\frac{c k}{\sqrt{\mu \varepsilon(\omega)}}.\tag{2.9}
$$

Now the fun part for us is to figure out the format of $\varepsilon(\omega)$. We can definitely derive it from quantum mechanics, but the semiclassical functions are usually sufficient and are discussed in the next section. From now on we assume $\mu=1$ to simplify the derivation.

## Semiclassical Functions of $\varepsilon(\omega)$

### Classical harmonic oscillator
Let us imagine a crystalline material where valence electrons are localized around nulei and the core electrons are strongly bounded to the nuclei. The assumption of classic harmonic oscillator says that any disturbance in the charge distribution results in a linear force to restore it back to equilibrium state. As in any such system of coupled particles, there exists a set of **normal modes** that describe the fundamental excitations of the system. The quantized excitations of these coupled (mechanical) oscillations are known as **phonons**.

Let's now assume that an EM wave is propagating through the solid.Whether or not the wave couples to any given normal mode of the system depends upon two conditions[1]. 

- First, the symmetry of the mode must be such that it can be excited by EM radiation. To first order this has to do with whether or not **the system has (electric) dipole moments that oscillate when the mode is excited**. 
- Second, **the wave vector $\mathbf{k}$ of the EM radiation and the normal mode must match**.

If the frequency of EM wave is close to the natural frequency of the mode, the material will give significant responses. **We can characterize the response of the system to EM radiation by the microscopic dipole moment $\mathbf{p}$ induced in each unit cell of the solid** (see [here](https://lonitch.github.io/Landau-Pekar/) for the definition of $\mathbf{p}$). Let us for now imagine there is only one normal mode coupled with each EM wavevector $\mathbf{k}$, then the equation of motion for $\mathbf{p}=q\mathbf{d(r,}t)$ is simply the one for a driven harmonic oscillator:

$$\frac{d^{2} \mathbf{d}(\mathbf{r}, t)}{d t^{2}}+m\omega_{0}^{2} \mathbf{d}(\mathbf{r}, t)=q \tilde{\mathbf{E}}(\mathbf{r}) e^{-i \omega t}\tag{3.1}$$
where $\mathbf{d}$,$q$, and $m$ are the amount of charge associated with the dipole moment, effective charge, and effective mass of the dipole moment. For $\mathbf{p}$ we have

$$
\frac{d^{2} \mathbf{p}(\mathbf{r}, t)}{d t^{2}}+\omega_{0}^{2} \mathbf{p}(\mathbf{r}, t)=\frac{q^2}{m}\tilde{\mathbf{E}}(\mathbf{r}) e^{-i \omega t}\tag{3.2}
$$

**The solution to (3.2) must be coupled with EM wave with the same frequency**, so $\mathbf{p}$ takes the form of

$$
\mathbf{p(r,}t)=\tilde{\mathbf{p}}(\mathbf{r})e^{-i\omega t}\tag{3.3}.
$$

Substitute (3.3) back to (3.2) to obtain a relation between $\tilde{\mathbf{p}}$ and $\tilde{\mathbf{E}}$ as

$$\tilde{\mathbf{p}}(\mathbf{r})=\frac{q^{2}}{m\left(\omega_{0}^{2}-\omega^{2}\right)} \tilde{\mathbf{E}}(\mathbf{r})\tag{3.4}.$$

To obtain the relationship between the macroscopic polarization field $\mathbf{P}$ and the electric field $\mathbf{E}$ we note that $\mathbf{P}=N_{c} \mathbf{p},$ where $N_{c}$ is the number density associated with the unit cells in the solid. This gives us

$$\tilde{\mathbf{P}}(\mathbf{r})=\frac{N_{c} q^{2}}{m\left(\omega_{0}^{2}-\omega^{2}\right)} \tilde{\mathbf{E}}(\mathbf{r})\tag{3.5}.$$

Using the relationship among the electric displacement field $\mathbf{D}$, $\mathbf{E}$, and $\mathbf{P}$, $\mathbf{D}=\varepsilon_0\mathbf{E}+\mathbf{P}$, we have

$$\tilde{\mathbf{D}}(\mathbf{r})=\varepsilon_{0} \tilde{\mathbf{E}}(\mathbf{r})+\tilde{\mathbf{P}}(\mathbf{r})$$

which results in

$$\tilde{\mathbf{D}}(\mathbf{r})=\varepsilon_{0}\left(1+\frac{N_{c} q^{2}}{\varepsilon_{0} m} \frac{1}{\omega_{0}^{2}-\omega^{2}}\right) \tilde{\mathbf{E}}(\mathbf{r})\tag{3.6}.$$

Because $\mathbf{\tilde{D}=}\varepsilon_0\varepsilon\tilde{\mathbf{E}}$, we find that the dielectric function is 

$$\varepsilon(\omega)=1+\frac{\omega_{p}^{2}}{\omega_{0}^{2}-\omega^{2}}\tag{3.7}$$

with the **plasma frequency** as:

$$\omega_{p}^{2}=\frac{N_{c} q^{2}}{\varepsilon_{0} m}\tag{3.8}.$$

### Multiple normal modes

We now expand our simple dielectric function to include the possibility that a given EM wave couples to more that one polarization mode of the solid. In this case the dipole moment $\mathbf{p}$ will have contributions from all modes involved in the response. And the dielectric function expands to include  all the involved modes,

$$\varepsilon(\omega)=1+\sum_{n=0}^{N} \frac{\omega_{p n}^{2}}{\omega_{n}^{2}-\omega^{2}}\tag{4.1}$$

with $\omega_{n}$ being the natural frequency associated with the normal mode labeled by $n,$ and

$$\omega_{p n}^{2}=\frac{N_{c} q_{n}^{2}}{\varepsilon_{0} m_{n}}\tag{4.2}.$$

At low frequency, (4.1) can be approximated by 

$$
\varepsilon(\omega)=\varepsilon_{\infty}+\frac{\omega_{p0}^2}{\omega_0^2-\omega^2}\tag{4.3}
$$

with

$$\varepsilon_{\infty}=1+\sum_{n=1}^{N} \omega_{p n}^{2} / \omega_{n}^{2}\tag{4.4}$$

### Damped harmonic oscillator

One thing missing in Eq.(3.2) is the damping term, which in this case is related to the dielectric dissipation. The simplest way to account for the damping effect is to add a term of $$\partial\mathbf{p}/\partial t$$ with a damping parameter $\gamma$, i.e.

$$\frac{d^{2} \mathbf{p}(\mathbf{r}, t)}{d t^{2}}+\gamma \frac{d \mathbf{p}(\mathbf{r}, t)}{d t}+\omega_{0}^{2} \mathbf{p}(\mathbf{r}, t)=\frac{q^{2}}{m} \tilde{\mathbf{E}}(\mathbf{r}) e^{-i \omega t}\tag{5.1}.$$

The solution to (5.1) is 
$$\tilde{\mathbf{P}}(\mathrm{r})=\frac{N_{c} q^{2}}{m\left(\omega_{0}^{2}-\omega^{2}-i \gamma \omega\right)} \tilde{\mathbf{E}}(\mathrm{r})\tag{5.2}$$

with the dielectric function being

$$\varepsilon(\omega)=1+\frac{\omega_{p}^{2}}{\omega_{0}^{2}-\omega^{2}-i \gamma \omega}\tag{5.3}.$$

And we see now that the dielectric function becomes a complex function. Following the similar logic from (3.7) to (4.4), we include multiple modes to find

$$\varepsilon(\omega)=1+\sum_{n=0}^{N} \frac{\omega_{p n}^{2}}{\omega_{n}^{2}-\omega^{2}-i \gamma_{n} \omega}\tag{5.4}.$$

If one of the mode in (5.4) is far less than the rest, we arrive at an equation similar to (4.3), i.e.

$$\varepsilon(\omega)=\varepsilon_{\infty}+\frac{\omega_{p 0}^{2}}{\omega_{0}^{2}-\omega^{2}-i \gamma_{0} \omega}\tag{5.5}.$$

The dielectric constant having a non-zero imaginary part has consequences for the dispersion relation $\omega(k)=c k / \varepsilon(\omega) .$ For a given real $\omega, k$ now **has both real and imaginary parts at all frequencies**.

## Conclusion

Luckily I don't need to read a bulky book of electromagnetism before I can understand the dielectric response. Understanding the response from a perspective of EM wave brings the flexibility to inteprete the polarization as a inferences between different waves(fields). And the coupling between the electric field and the polarization in charge distribution can be viewed as the matching between two different waves in terms of frequencies and wavevectors. Finally, it is a blessing that we can describe the polarization in crystalline materials just like the coherent lattice vibration (or phonon).

## References

[1] D. Mark Riffe, Canonical models of dielectric responses, arXiv, 2018