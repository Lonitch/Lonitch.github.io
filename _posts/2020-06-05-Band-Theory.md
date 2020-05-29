---
layout: post

title: Notes on Band Theory for Sloppy Non-Physicists

date: 2020-06-05

Author: Sizhe

tags: [notes, physics-basics, condensed-matter-physics]

toc: true

---

## Motivation

For a non-physicist, the energy band theory for solid materials could get nasty and hard to internalize. But band theory is like a basic languege everybody is fluent with in the community of solit state material research. Therefore, for people like me who is doing research or simply want to learn more advanced physics, we have to grasp the essences of band theory. To my best knowledge there is no textbook of solid-state materials that is designed for pedestrians. Thus, I am making this blog to summarize basic principles that could be of some use for chemists and beginners to research of materials science. This blog is definitely not mathematically vigorous but will performs as a reminder of important stuff about band theory that people could pick it up and read whenever they are lost in the analyses of energy bands. So still basic stuff, no pressure is on.

## Band theory: what it is all about?
Once upon a time, there was a guy whose name is Schrodinger who was obssessed with stuff at very small length scale. He came up with an equation named after himself to calculate the energy of basic particles called fermions. The fermion refers to a family of particles among which the most famous one is the electrons. Right after Schrodinger published his out-of-nowhere equation, a group of mathematicians realized that the Schrodinger equation is an eigenvalue problem because it has a general form of:

$$Ax=\lambda x$$

The solutions $x$ to such equation are called eigenstates, and each eigenstate corresponds to a specific eigenvalue $\lambda$. In Schrodinger's equation $A$ is usually called "Hamiltonian". Hamiltonian can takes a form of matrix just like the normal eigenvalue equation, except that the elements in the matrix could be an operator or a constant.