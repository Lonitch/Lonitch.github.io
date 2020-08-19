---
layout: post

title: k-p Method and Effective Mass Theory

date: 2020-08-18

Author: Sizhe

tags: [daily, math]

toc: false

---


## $\vec{k} \cdot \vec{p} $ method
**Purpose**: derive analytical expressions for the band dispersion and the efective masses in the immediare vicinity of a $k-$ point at which all the single-electron states are known.

In other words, $\vec{k} \cdot \vec{p}$ method $ \rightarrow $ extrapolation method applied to compute valence bands of SEMICONDUCTOR! 

From Bloch's theorem, the wavefumction takes a form of

$$
\psi_{n \vec{k}}=e^{i \vec{k} \cdot \vec{r}} u_{n \vec{k}}(\vec{r})\tag{1.1}
$$

with $n$ being energy band index. Eq. (1.1) is a solution to single-electron Schrodinger eqn.

$$
\left(\frac{\hat{p}^{2}}{2 m}+U(\vec{r})\right) \psi_{n \vec{k}}=E_{n \vec{k}} \vec{\psi}_{n \vec{k}}\tag{1.2}
$$

Using (1.1) in (1.2) to give, 

$$ \begin{aligned}\left[\frac{\hat{p}^{2}}{2 m}+U(\vec{r})\right] e^{i \vec{k} \cdot \vec{r}} u_{n \vec{k}}(\vec{r})&=E_{n \vec{k}} \psi_{n k}\\
\left[\frac{\hat{p}^{2}}{2 m}+\frac{\hbar^{2} k^{2}}{2 m}+\frac{\hbar k \cdot \hat{p}}{m}+U(\vec{r})\right]u_{n\vec{k}}&=E_{n\vec{k}}u_{n\vec{k}}\\
\left[\frac{\hat{p}^{2}}{2 m}+\frac{\hbar k \cdot \hat{p}}{m}+U(\vec{r})\right]u_{n\vec{k}}&=\left(E_{n\vec{k}}-\frac{\hbar^{2} k^{2}}{2 m}\right)u_{n\vec{k}}.
\end{aligned}\tag{1.3}$$

Now we use the information above to derive a secular relation for calculating $E_{nk}$. Assume that we know $u_{n k}(r)$ and $E_{nk}$ for all "$n$" at $\vec{k}_0$, then we can expand $u_{n\vec{k}}$ at $\vec{k}$ in terms of $u_{n\vec{k_0}}$ as

$$
u_{n \vec{k}}(\vec{r})=\sum_{n^{\prime}} C_{n^{\prime}}\left(\vec{k}, \vec{k}_{0}\right) u_{n^{\prime}\vec{k}_{0}}(\vec{r}) \tag{1.4},
$$

and

$$\left[\frac{\hat{p}^{2}}{2 m}+\frac{\hbar \overrightarrow{k_{0}} \cdot \hat{p}}{m}+U(\vec{r})\right] u_{n \vec{k}_0}(\vec{r})=\left(E_{n\vec{k}_0}-\frac{\hbar^{2} \vec{k}^2_{0}}{2 m}\right) u_{n \vec{k}_{0}}(\vec{r})\tag{1.5}.$$

Use (1.4) and (1.5) in (1.3) to give:

$$
\begin{aligned}
&\sum_{n^{\prime}} C_{n^{\prime}}(\vec{k}, \vec{k}_0)\left[\left(E_{n^{\prime}\vec{k}_0} -\frac{\hbar \overrightarrow{k_{0}}^{2}}{2 m}\right) u_{n^{\prime} \vec{k_{0}}}(\vec{r})+\frac{\hbar}{i m}\left(\vec{k}-\vec{k}_{0}\right) \cdot \nabla u_{n^{\prime}\vec{k}_{0}}(\vec{r})\right]\\
&=\sum_{n^{\prime}} C_{n^{\prime}}(\vec{k}, \vec{k}_0)\left(E_{n \vec{k}}-\frac{\hbar^{2} k^{2}}{2 m}\right) u_{n^{\prime}\overrightarrow{k_{0}}}(\vec{r}).
\end{aligned}$$

Mutiply both sides by $u^*_{n k_{0}}(\vec{r})$ and integrating over $\vec{r}$ yields:

$$\begin{aligned}&\sum_{n^{\prime}} C_{n^{\prime}}\left(\vec{k}, \vec{k}_{0}\right)\left[\left(E_{n^{\prime}\vec{k}_{0}} -\frac{\hbar^{2} \vec{k}_{0}^{2}}{2 m}\right) \delta_{n n^{\prime}}+\frac{\hbar}{m}\left(\vec{k}-\overrightarrow{k_{0}}\right) \cdot \vec{P}_{n n^{\prime}}\left(k_{0}\right)\right]\\
&=\sum_{n^{\prime}} C_{n^{\prime}}\left(\vec{k}, \overrightarrow{k_{0}}\right)\left(E_{n \vec{k}}-\frac{\hbar^{2} \vec{k}^{2}}{2 m}\right) \delta_{n n^{\prime}}.
\end{aligned}\tag{1.6}$$

where

$$\int d \vec{r} u_{n \vec{k}_{0}}^{*} u_{n^{\prime} k_{0}}=\delta_{n n^{\prime}}$$

and the **momentum matrix element** is

$$-i \int d \vec{r} u_{n\vec{k}}  \nabla u_{n^{\prime}\vec{k}_{0}}=\vec{P}_{n n^{\prime}}\left(k_{0}\right).$$

Move the RHS of (1.6) to LHS to give:

$$\begin{aligned}\sum_{n^{\prime}}&\left\{\frac{\hbar}{m}\left(\vec{k}-\vec{k}_{0}\right) \cdot \vec{P}_{n n'}\left(\vec{k}_{0}\right)+\right.\\
&\left.\left[E_{n \vec{k}_{0}}+\frac{\hbar^{2}}{2 m}\left(\vec{k}^{2}-\vec{k}_{0}^{2}\right)-E_{n \vec{k}}\right] \delta_{n n'}\right\}C_{n'}(\vec{k},\vec{k}_0)=0.\end{aligned}\tag{1.7}$$

The "**secular equation**" for $E_{nk}$ follows from the condition for the existence of nontrivial solutions to this set of homogeneous linear equations,

$$det\left|\frac{\hbar}{m}\left(\vec{k}-\vec{k}_{0}\right) \cdot \vec{P}_{n n'}\left(\vec{k}_{0}\right)+\left[E_{n \vec{k}_{0}}+\frac{\hbar^{2}}{2 m}\left(\vec{k}^{2}-\vec{k}_{0}^{2}\right)-E_{n \vec{k}}\right] \delta_{n n'}\right|=0.\tag{1.8}$$

## Special things about the derivation of (1.8)

- No restriction on $\vec{k}$;
- If only an under-complete set of $u_{nk_0}$ is used, the k-p method is accurate only for $\vec{k}$ near $\vec{k}_0$.
- When sufficiently large set of $u_{nk_0}$ is used, the band structure in FBZ can be approximated.

## Effective mass tensor theory

**Purpose**: The k-p method above deals with unperturbed single-electron Schrodinger equation. Using effective mass tensor theory, we are able to take into account non-periodic perturbation in the Hamiltonian operator, and study the motion of electron or holes in a perturbed potential.

When $\vec{k}$ approaches an extreme point of an energy band $$\vec{k}_{0}$$, we can expand $$E_{n\vec{k}}$$ as a Taylor series about $$\vec{k}_0$$:

$$
\begin{aligned}
E_{n \vec{k}} & \approx E_{n \vec{k}_{0}}+\frac{1}{2} \sum_{\alpha \beta}\left(\frac{\partial^{2} E_{n\vec{k}} }{\partial k_{\alpha} \partial k_{\beta}}\right)\left(\vec{k}-\overrightarrow{k_{0}}\right)_{\alpha}\left(\vec{k}-\vec{k}_{0}\right)_{\beta} \\
&=E_{n k_{0}}+\left.\sum_{\alpha \beta}\left(\frac{\hbar^{2}}{2 m^{*}}\right)_{\alpha \beta}\right|_{\vec{k}_{0}}\left(\vec{k}-\vec{k}_{0}\right)_{\alpha}\left(\vec{k}-\vec{k}_{0}\right) \beta
\end{aligned}
$$

Where the inverse effective mass tensor element is defined as

$$ \quad\left(\frac{1}{m^{*}}\right)_{\alpha \beta}=\frac{1}{\hbar^{2}} \frac{d^{2} E_{n \vec{k}}}{d k_{\alpha} d k_{\beta}}\tag{2.1}.$$ 

If the solid possesses the cubic symmetry then the effective mass tersor is a diagonal matrix.

Consider the ettective mass theory for a single nondegenerate energy band and let the single-electron Hamiltonian to be

$$\widehat{H}=\widehat{H}_0+V(\vec{r})$$

where

$$
\widehat{H}_{0}|n \vec{k}\rangle=E_{n \vec{k}}|n \vec{k}\rangle
$$

and

$$|\psi\rangle=\sum_{n\vec{k}}^{\prime} a_{n\vec{k}} |n \vec{k}\rangle$$

with the summation over FBZ only. Using the summation we have

$$\sum_{n_{k}}^{\prime} a_{n \vec{k}}\left(E_{n k}+V\right)|n \vec{k}\rangle=E\sum_{n\vec{k}}^{\prime} a_{n\vec{k}} |n \vec{k}\rangle.$$

Multiply $\|n'\vec{k'}\rangle$ on both sides to give

$$\left\langle n^{\prime} \vec{k}^{\prime}\left|\sum_{n \vec{k}}^{\prime} a_{n \vec{k}}\left(E_{n \vec{k}}+v\right)\right| n \vec{k}\right\rangle=\left\langle n^{\prime} \vec{k}^{\prime}\right| E \sum_{nk}^{\prime} a_{n\vec{k}} \left|n\vec{k}\right\rangle\tag{2.2}.$$

From 

$$ \left\langle n' \vec{k}^{\prime} \mid n \vec{k}\right\rangle=\delta_{n n} \cdot \delta_{k k^{\prime}}, $$ 

we have from (2.2) that

$$
\left(E_{n k}-E\right) a_{n k}+\sum_{n=k^{\prime}}^{\prime} V_{n \vec{k} n^{\prime} \vec{k}^{\prime}} a_{n^{\prime}\vec{k^{\prime}} }=0
$$

where

$$V_{n\vec{k}n'\vec{k}'}=\left\langle n \vec{k}|V| n^{\prime} \vec{k}^{\prime}\right\rangle=\int d \vec{r} e^{-i (\vec{k}-\vec{k}^{\prime}) \cdot \vec{r}} u_{n \vec{k}}^{*}(\vec{r}) V u_{n^{\prime}\vec{k}'}\tag{2.3}.$$

If we express $$u^*_{nk}u_{n'k'}$$ as a Fourier series w.r.t the reciprocal lattice vector, $\mathbf{K}$,

$$
u_{n \vec{k}}^{*} u_{n^{\prime}\vec{k'}}=\sum_{\mathbf{K}} C_{\mathbf{K}}\left(n \vec{k}, n^{\prime} \vec{k}^{\prime}\right) e^{i \mathbf{K} \cdot \vec{r}}
$$

and 

$$C_{\mathbf{K}}\left(n \vec{k}, n^{\prime} \vec{k}^{\prime}\right)=\frac{1}{V} \int_{V} d \vec{r} e^{-i \mathbf{K} \cdot \vec{r}} u_{n \vec{k}}^{*} u_{n^{\prime}\vec{k'}} $$

Then

$$
\begin{aligned}
V_{n \vec{k}, n^{\prime} \vec{k}^{\prime}} &=\sum_{k} C_{\mathbf{K}}\left(n \vec{k}, n^{\prime} \vec{k}^{\prime}\right) \int d r e^{-i\left(\vec{k}-\vec{k}^{\prime}-\mathbf{K}\right) \cdot \vec{r}} V(r) \\
&=\sum_{\mathbf{K}} C_{\mathbf{K}}\left(n \vec{k}, n^{\prime} \vec{k}^{\prime}\right) V_{\vec{k}-\vec{k}^{\prime}-\mathbf{K}}
\end{aligned}
$$

**Note that $V$ is usually small, so it doesn't cause band mixing.** Thus we can ignore the matrix element where $n\neq n'$ to give

$$
\begin{align}\sum^{\prime}_{n'\vec{k'}}V_{n\vec{k},n'\vec{k}'}a_{n'\vec{k}'}&\approx\sum^{\prime}_{\vec{k'}}V_{n\vec{k},n\vec{k}'}a_{n\vec{k}'}\\
&=\sum_{\mathbf{K}}\sum_{\vec{k'}}C_{\mathbf{K}}(n\vec{k},n\vec{k}')V_{\vec{k}-\vec{k'}-\mathbf{K}}a_{n\vec{k'}}.\end{align}\tag{2.4}
$$

Change summation variable $$\vec{k}^{\prime} \rightarrow \vec{k}^{\prime}+\mathbf{K},$$ we have from (2.4)

$$ \sum^{\prime}_{n'\vec{k'}}V_{n\vec{k},n'\vec{k}'}a_{n'\vec{k}'}\approx\sum_{\vec{k}^{\prime}} \sum_{\mathbf{K}} C_{\mathbf{K}}\left(n \vec{k}, n \vec{k}^{\prime}\right) V_{\vec{k}-\vec{k'}} a_{n \vec{k}^{\prime}} \tag{2.5},$$

where we applied the periodicity of $$a_{n \vec{k}}$$ and $$C_{K}$$ on reciprocal Latrice. Now we ignore the terms with $C_{K\neq 0}$ to give

$$\begin{aligned}\sum_{n=1} V_{n \vec{k}n^{\prime} \vec{k}^{\prime}}  a_{n\vec{k}^{\prime}} &\approx \sum_{k^{\prime}} C_{0}\left(n \vec{k}, n \vec{k}^{\prime}\right) V_{k-k^{\prime}} a_{n \vec{k}^{\prime}}\\
&=\frac{1}{V} \sum_{\vec{k}^{\prime}} V_{\vec{k}-\vec{k}^{\prime}} a_{n \vec{k}^{\prime}}
\end{aligned}\tag{2.6}.$$

According to the definition of $C_{K}$ we have

$$
C_{0}(n \vec{k}, n \vec{k})=\frac{1}{N v_{c}}
$$

with $v_c$ being unit cell volumn. For valence electron $$u_{n \vec{k}}$$ varies slowly with $\vec{k}$, so we have

$$
C_{0}\left(n \vec{k}, n \vec{k}^{\prime}\right) \approx C_{0}\left(n\vec{k}, n \vec{k}\right)=\frac{1}{N v_{c}}
$$

Therefore

$$
(E_{n \vec{k}}-E) a_{n \vec{k}}+\frac{1}{N v_{c}} \sum_{\vec{k}^{\prime}} V_{\vec{k}-\vec{k}^{\prime}} a_{n \vec{k}^{\prime}}=0 \tag{2.7}
$$

To transtiom (2.7) into a form for real space, we multiply both sides With $$e^{i \vec{k} \cdot r}$$ and sum over all $$\vec{k}$$ in reciprocal space to give

$$\sum_{\vec{k}}\left[\left(E_{n k}-E\right) a_{n \vec{k}} e^{i \vec{k} \cdot r}+\frac{1}{Nv_c}\sum_{\vec{k}'}V_{\vec{k}-\vec{k}'}a_{n\vec{k}'}e^{i\vec{k}\cdot\vec{r}}\right]=0\tag{2.8}.$$

where the **envelop function** is defined as

$$F_{n}(\vec{r})=\sum_{\vec{k}} e^{i \vec{k} \cdot \vec{r}} a_{n \vec{k}}.$$

In (2.8) we also rewrite $$E_{n \vec{k}}$$ as $$E_{n}(\vec{k})$$ with the operator being $$E_{n}(-i \nabla)$$. The second term in (2.8) is then

$$ \frac{1}{N v_{L}} \int d \vec{r'} \sum_{\vec{k} \vec{k}^{\prime}} e^{i \vec{k} \cdot(\vec{r}-\vec{r'})} e^{i \vec{k'} \cdot \vec{r}^{\prime}} V\left(\vec{r}^{\prime}\right) a_{n \vec{k'}}=V(\vec{r}) F_{n}(\vec{r})$$

Thus,

$$\left[\widehat{E}_{n}(-i \nabla)+V(\vec{r})\right] F_{n}(\vec{r})=E F_{n}(\vec{r}) \tag{2.9}. $$

To solve the original perturbed Schrodinger equation, we can first solve (2.9) to get envelop function $F_n$, and then use it to construct the solution to the Schrodinger equation as

$$\left\langle\vec{r} \mid \vec{\psi}_{n}\right\rangle=\vec{\psi}_{n}(\vec{r})=\sum_{\vec{k}} a_{n\vec{k}}  \psi_{n \vec{k}}(\vec{r}) \approx\sum_{n\vec{k}} a_{n \vec{k}} e^{i \vec{k} \cdot \vec{r}} u_{n \vec{k}_{0}}(\vec{r})=F_nu_{n\vec{k}_0}.$$

To get the format of $\hat{E}_n$ in (2.9), we first expand $E_n$ about $\vec{k}=0$ to the second order

$$E_{n}(\vec{k})=E_{n}(0)+\sum_{\alpha \beta}\left(\frac{\hbar^{2}}{2 m^{*}}\right)_{\alpha \beta} k_{\alpha} k_{\beta} \tag{2.10}$$

So

$$\left[\sum_{\alpha_{\beta}}\left(\frac{\hbar^{2}}{2 m^{*}}\right)_{\alpha{\beta}}\left(-i \frac{\partial}{\partial k_{\alpha}}\right)\left(-i \frac{\partial}{\partial k_{\beta}}\right)+V(\vec{r})\right] F_{n}=(E-E_n(0))F_n.$$

### Summary
<p align="center">
  <img width="550" height="133" src="{{ site.url }}/images/kp.PNG">
</p>
<p style="text-align: center;">Summary</p>

The detailed handwriting note can be downloaded [here](https://drive.google.com/file/d/1SHvv67Mr5i_ymo7njdj5RoPQTQ9jd-or/view?usp=sharing).