---
layout: post
title: Basics of Heat Conduction, Inductively
date: 2021-02-20
Author: Sizhe
tags: [notes, teaching, heat-transfer]
---

## A Bit Self-reflection
Been a while since my last post. A new semester has begun for about 4 weeks now, and my job as teaching assistant to a heat transfer class has to continue despite of the rampage of COVID. My research does not even remotely relate to heat transfer, but here I am, decide to summarize basics of heat conduction using inductive logics. By doing so I may not forget to mention important things during incoming classes. Hopefully, Delivering the content inductively can make the students feel that we are building a tunnel together from nowhere to a place where things can be understood in terms of temperature gradient, Fourier's law, and heat flux.<!--more-->

## Two concepts: Thermal energy and Specific Heat
We first deduce a relationship between thermal energy and specific heat. In a heat transfer analysis we essentially deal with thermal energy flow from hot regions to cold regions. Such energy transfer process is manifested by time-(in)dependent temperature distributions. Inspired by these facts, we conclude that there must be a relationship between heat energy and temperature. Like many other physical problems, we don't have an "absolute reference" to define the zero point of thermal energy. Instead, we only care about the differences in thermal energy between two objects/regions. So it is most likely that difference in thermal energy is directly related to temperature difference. In other words, the thermal energy difference $$\Delta Q$$, is a function of temperature difference $$\Delta T$$, i.e., 

$$\Delta Q = f(\Delta T)\tag{1}$$

To figure out the exact form of the function in eq.(1), we need help from Joseph Black, a scottish experimentalist who found that 
>**"equal masses of different substances require different among of heating time to reach a preset target temperature."** 

Let's assume that the heater Joseph used had a steady power output, $$P$$, then, the thermal energy injected into each substance in Joseph's experiment can be calculated as the product of $$P$$ and heating time $$t$$, i.e., $$\Delta Q=P\times t$$. By plotting $$\Delta Q$$ versus $$\Delta T$$ of each substance, Joseph found a linear relation which says

$$\Delta Q = \alpha\Delta T,\tag{2}$$

with $$\alpha$$ being a constant, different for each substance. Because two objects made of identical substance but differring in masses require different amount of thermal energy to achieve a given temperature, we know $$\alpha$$ varies with mass $$m$$. If we fix $$\Delta T$$ in eq.(2) and vary the sample mass in Joseph's experiment, we can further plot $$\Delta Q$$ versus $$m$$ to find that

$$\Delta Q = mc_p\Delta T\tag{3},$$

where $$c_p$$ is a coefficient called **specific heat**, and has an unit of energy per mass. In 1819, French chemist Pierre-Louis Dulong and the French physicist Alexis-Thérèse Petit found that 

>**"atomic weight times specific heat of an element is a constant", i.e., Dulong–Petit law.** 

Since then, people use such law to measure atomic weights for different elements. During the first decade of 20th century, Dulong-Petit law was found broken as specific heat of any substance exponentially decreases when environmental temperature drops to a extremely low value. The deviation from Dulong-Petit Law inspired Einstein and Debye to understand the root of specific heat in terms of **lattice vibrations**. It was Debye who first treated lattice vibrations as bosonic particles, called **[phonons](https://en.wikipedia.org/wiki/Debye_model)**. Debye's model, along with Planck's law of black body radiation, marked the beginning of quantum mechanics.

Obviously, eq.(3) is not handy to use as we are not excited to know the mass of the substance on which we observe heat transfer phenomena. To make eq.(3) more general, we normalize both sides of the equation by a characteristic volume to give

$$\Delta\mathcal{Q}=\rho c_p\Delta T\tag{4}.$$

We now have the mass density $$\rho$$ in eq.(4), and we will use this equation later to derive heat equation in 1D media.

## Fourier's Law: Governing Equation for Heat Transport in Materials

As what alluded above, the capacity of a material storing thermal energy can be attributed to lattice vibrations. However, **it is electrons that transport thermal energy within a material**. People know this because of the Seebeck effect where a potential difference is built between two ends of a wire because of heat transport. From this point of view, we need a new equation to describe the rate of heat transport. To derive such a equation, we first define the concept of "**heat flux**",$$q$$, as **flow of thermal energy per unit area per unit time. It has a unit of watts/area**. In his experimental paper published in 1822, Fourier concluded that 

>**"the heat flux resulting from thermal conduction is proportional to the magnitude of the temperature gradient and opposite to it in sign".**

From this conclustion, Fourier's law can be written as:

$$q=-\kappa\nabla T\tag{5},$$

where $$\kappa$$ is a coefficient called **thermal conductivity**. Eq.(5), along with the concept of thermal flux, sets up a stage for us to make an **analogy between heat conduction and electric current**. In an electric circuit, we have a relationship among resistance $$R$$, voltage $$V$$, current density $$i$$, and cross-section area $$A$$, as

$$\Delta V=i\times A\times R\tag{6}.$$

The current density $$i$$ is defined as the amount of electrons passing through per unit area per unit time. Now, if we imagine the heat conduction as a process of energy flowing through a material, we can replace current $$i$$ in (6) with heat flux $$q$$, and replace potential difference $$\Delta V$$ with $$\Delta T$$ to give,

$$\Delta T = q\times A\times R_t\tag{7}.$$

Eq.(7) gives the definition of "**thermal resistance**". For an isotropic 1D material of length $$L$$, if temperatures at two ends are $$T_2$$ and $$T_1$$, eq.(5) can be written as

$$q=-\kappa\nabla T=-\kappa\frac{T_2-T_1}{L}\tag{8},$$

under the steady-state condition. Substituting (8) into (7) gives the explicit expression for $$R_t$$ as

$$R_t=\frac{(T_1-T_2)}{-\kappa(T_2-T_1)A/L}=\frac{L}{\kappa A}\tag{9}.$$

With this current-heat flux analogy, we can easily apply rules of serial/parallel resistance in electric circuit to our thermal circuit. 

### Contact thermal resistance

We can treat heat conduction at an interface between two bodies as heat flow through a contact thermal resistance. Let lengths of body A and B be $$L_A$$ and $$L_B$$, and their cross sections be $$A$$, so their thermal resistances are $$R_{t,A}=\frac{L}{\kappa_AA}$$ and $$R_{t,B}=\frac{L_B}{\kappa_BA}$$. At the interface between A and B, we don't have the concept of thermal conductivity well defined, instead, we define the **thermal conductance coefficient**, $$h_c$$, by writting the contact thermal resistance $$R_{t,c}$$ as $$\frac{1}{h_cA}$$. Therefore, the heat flow between the two bodies in contact, bodies A and B, is found as

$$
q=\frac{T_{1}-T_{2}}{\Delta x_{A} /\left(k_{A} A\right)+1 /\left(h_{c} A\right)+\Delta x_{B} /\left(k_{B} A\right)}\tag{10},
$$

where $$T_1$$ and $$T_2$$ are temperatures at two ends.

## Heat Equation: Thermal Energy, Specific Heat, and Fourier's Law in one Place

Let's imagine an 1D rod of cross section area $$A$$. If we only focus on a thin slice of the rod with a thickness of $$dx$$, we know, from eq.(3) and (4), that the change rate of thermal energy in the slice is 

$$\frac{\partial Q}{\partial t}=\rho c_pA(dx)\frac{\partial T}{\partial t}\tag{11}.$$

On the other hand, the heat flux at the right and left faces of the slice are $$q_l$$ and $$q_r$$. By applying the conservation law of energy, we have

$$\frac{\partial Q}{\partial t}=(q_l-q_r)A\tag{12}.$$

Equating the RHS of equations (11) and (12) gives:

$$\rho c_p\frac{\partial T}{\partial t}=-\frac{\partial q}{\partial x}\tag{13}.$$

Using Fourier's law at RHS of (13), we finally arrive at the 1D **heat equation**:

$$\frac{\partial T}{\partial t}=\frac{1}{\rho c_p}\frac{\partial}{\partial x}\left(\kappa\frac{\partial T}{\partial x}\right)\tag{14}.$$

In 3D space, Eq.(14) is generalized as:

$$
\frac{1}{\alpha} \frac{\partial T}{\partial t}=\left(\frac{\partial^{2} T}{\partial x^{2}}+\frac{\partial^{2} T}{\partial y^{2}}+\frac{\partial^{2} T}{\partial z^{2}}\right)\tag{15}.
$$

where $$\alpha=\frac{\kappa}{\rho c_p}$$ is the thermal diffusivity. Here we assume thermal conductivity $$\kappa$$ to be constant. To investigate temperature distribution on a disk, we need to write eq.(15) in a cylindrical coordinate as

$$
\frac{1}{r} \frac{\partial}{\partial r}\left(r \cdot k \frac{\partial T}{\partial r}\right)+\frac{1}{r^{2}} \frac{\partial}{\partial \phi}\left(k \frac{\partial T}{\partial \phi}\right)+\frac{\partial}{\partial z}\left(k \frac{\partial T}{\partial z}\right)=\rho c_p \frac{\partial T}{\partial t}\tag{16}.
$$

## Conclusion

Things are not always derived from fist principles. Fourier's law has no rigorous root in mathematical physics, even though people have tried to derive it from basic axioms of quantum mechanics (see [here](https://journals.aps.org/pre/abstract/10.1103/PhysRevE.79.042101)). But as long as people are satisfied with the concept of energy flow and heat flux, we as human being should have no problem of using it. That is, we use things before we know what they really are. Looks like that's just basics of how to build mordern civilizations.