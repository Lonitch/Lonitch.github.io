---
layout: post
title:  "Qubit Saga: Deutsch's Algorithm"
date:   2023-08-22 11:35:00
categories: post
---

<em>I've been unsure about what to write next for a while. Maybe it's because I've been daydreaming that my essays could connect linear algebra to quantum info like Feynman did with basic math to calculus. But I'm not there yet. So, let me switch gears and write something fun to myself and possibly to my audience.<!--more-->

- [1. Is Your Function Constant?](#1-is-your-function-constant)
  - [1.1 The Chernoff bound and exponential envelope](#11-the-chernoff-bound-and-exponential-envelope)
- [2. Quantum Circuit behind Deutsch's Algorithm](#2-quantum-circuit-behind-deutschs-algorithm)
- [3. Extend Deutsch's Algorithm](#3-extend-deutschs-algorithm)

The Deutsch algorithm can be considered an introductory-level quantum algorithm. Its creation was aimed at demonstrating the indisputable superiority of quantum computation in solving a certain class of problems. However, the problem discussed in this article lacks corresponding real-life examples. Therefore, readers might as well regard this algorithm as a deliberate construction by the academic community to prove quantum supremacy. In this article, starting from the corresponding mathematical problem, the author dissects the quantum circuit behind the Deutsch's algorithm and its extended versions.

## 1. Is Your Function Constant?
The problems efficiently solvable by the Deutsch algorithm can be described as follows: Given a function $$f(x)$$, if we do not know its explicit expression, how can we determine whether this function always outputs a constant value? The red line of <a href="#fig1">Fig 1.</a> represents a simple constant function, where $$f(x) = 1$$ for all values in its domain. The blue line of <a href="#fig1">Fig 1.</a> represents a balanced function, where $$f(x) = -1$$ when $$x < 0$$, and $$f(x) = 1$$ otherwise.
<div id="fig1" class="jxgbox shadow marginnote" style="aspect-ratio: 1 / 1; width: 40%; user-select: none; overflow: hidden; position: relative; touch-action: none;"></div>
{%marginnote 'figcap1' 'Fig. 1 Two function types'%}
<script>
  JXG.Options.text.useMathJax = true;
  const board = JXG.JSXGraph.initBoard("fig1", {
    boundingbox: [-1.5, 1.5, 1.5, -1.5],
    keepaspectratio: true,
    axis:true
});
board.create('stepfunction',
      [[-1.0,-0.5,0,0.5,1],[-1,-1,1,1,1]],
      {strokeColor:'blue',strokeWidth:1.2}
);
board.create('functiongraph',
      [function(x){return 1},-1,1],
      {strokeColor:'red',strokeWidth:1.2}
);
board.create('line', [[0.2,0.8],[0.4,0.8]], 
{color:'red',straightFirst:false, straightLast:false});
board.create('text',[0.45,0.8,"constant function"],{color:'red',fontSize:10});
board.create('line', [[0.2,0.6],[0.4,0.6]], 
{color:'blue',straightFirst:false, straightLast:false});
board.create('text',[0.45,0.6,"balanced function"],{color:'blue',fontSize:10});
</script>


In every paper of quantum algorithm, scholars always start with a discussion of how classical computer would solve a problem. Here we take the same route just to fool people that classical algorithms are dumb. We then explain that they are not unbearably bad, just polynomially slower than the quantum algorithm. Without losing the generality, let's first focus on a function $$f(x)$$ whose input $$x$$ is an integer in a range $$(-N,N)$$, with $$N$$ being an arbitrary number. Classically, We check if such a function is constant or not by evaluating the function N+1 times. If the evaluated values are all identical, it's a constant function. Deutsch's algorithm achieves this by ensuring a specific quantum state's probability becomes unity while excluding other possibilities, as we'll see.

### 1.1 The Chernoff bound and exponential envelope
The classical method above is never used in real life as it's usually hard to enumerate all possible inputs for discrete or continuous functions. Instead, we want to keep the probability of guessing the wrong function type to a low level, $$\epsilon$${% sidenote 'sd-0' 'the $$\epsilon$$ here should be diminishingly small.'%}. In the case above, we have a function producing non-deterministic binary output $$f(x_i)$$, and we're facing a decision problem, i.e., how probable we will guess the function type wrong after $$k\ll N/2+1$$ function evaluation? Let's assume, without any loss of generality, that the correct answer is $$f_i=1$$ if $$f(x_i)=1$$(constant function), and $$f_i=0$$ otherwise. With this assumption, the question becomes: **what is the possibility of the k evaluations telling me that the function is not constant?** After k evaluations by randomly choosing $$\{x_0,x_1,...,x_k\}$$, the majority voting fails when $$s_k=\sum_i^k f_i<k$$. {% sidenote 'sd-1' 'we need only one wrong answer to tell the function is not constant'%} There are $$C^q_k$$ k-sequences $$\{f_1,f_2,...,f_k\}$$ that have $$q$$ correct answers, and the probability of $$s_k=q$$ is

{%eqn 'p(s_k=q)=C^q_k(1/2+\delta)^q(1/2-\delta)^{k-q},'%}

in which $$p(f_i=1)=\frac{1}{2}+\delta$$ and $$p(f_i=0)=\frac{1}{2}-\delta$$.{% sidenote 'sd-2' 'we introduce $$\delta$$ here for the sake of generality. Note that for a balanced function $$\delta=0$$, and $$\delta=1/2$$ for constant function. Any other function type will have its $$\delta\in(0,1/2)$$.'%} It is clear that $$p(s_k=q)$$ follows [binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution) and the expectation value $$E(s_k)=k(1/2+\delta)$$. Therefore, the most probable $$s_k$$ that yields a failed majority voting should be as close to $$k(1/2+\delta)$$ as possible. However, we don't know how to choose $$\delta$$ as the explicit expression of $$f(x)$$ is unknow to us. An educated guess could be $$\delta\cong 0$$, that is, assuming that correct or wrong answers are **almost equally possible**. If we take such an assumption, then each $$\{f_1,f_2,...,f_k\}$$ with its $$s_k=k/2$$ can occur with the probability

{%eqn 'p(\{f_1,f_2,...,f_k\}; s_k=k/2+\lim_{\delta\rightarrow0}\delta)=(\frac{1}{2}-\delta)^{k/2}(\frac{1}{2}+\delta)^{k/2}.' 'eqn-psk'%}

Since there are $$2^k$$ possible squences $$\{f_1,f_2,...,f_k\}$$, we can conclude from <ref id='eqn-psk'/> that the possibility of guessing function type wrong after $$k$$ evaluations is

{% eqn 'p(s_k\leq k-1)<2^k(\frac{1}{2}-\delta)^{k/2}(\frac{1}{2}+\delta)^{k/2}=(1-4\delta^2)^{k/2},' 'eqn-psk-leq-k-1'%}

Note that $$1-x\leq \exp(-x)$$, we obtain the **Chernoff bound**:

{% eqn 'p(s_k\leq k-1)<\exp(-2\delta^2k).'%}

Let $$\epsilon=p(s_k\leq k-1)$$, we have the error drops below $$\epsilon$$ when the number of function evaluations exceeds the following limit:

{% eqn 'k>\frac{1}{2\delta^2}\ln(\frac{1}{\epsilon}).' %}

Thus, the problem described here has a classical complexity of $$O(\ln(1/\epsilon))$$.

There is a another way to calculate the classical complexity using the exponential envolop of $$p(s_k\leq k-1)$$.{%sidenote 'sn-3' 'this discussion is for people(including me) who are not comfortable with the assumed value of $$\delta$$ above'%} Because there is only one sequence that has $$s_k=k$$ with $$\{f_1,f_2,...f_k\}=\{1,1,...,1\}$$, we have the probability of such a sequence being

{% eqn 'p(s_k=k)=(\frac{1}{2}+\delta)^k'%}

and hence,


{% eqn 'p(s_k\leq k-1)=1-p(s_k=k)=1-(\frac{1}{2}+\delta)^k<e^{-k\delta^3}' %}

where the last inequality gives an exponential envelope for $$p(s_k\leq k-1)$$. Repeat the analysis above, we have

{% eqn '\epsilon<e^{-k\delta^3}\rightarrow k>\frac{1}{\delta^3}\ln(1/\epsilon)' 'eqn-envelop'%}

giving the same classical complexity as the Chernoff bound. <a href="#fig2">Fig 2.</a> below shows how $$p(s_k\leq k-1)$$, Chernoff bound, and the exponential envelope in <ref id='eqn-envelop'/> vary with the $$\delta$$. As we increase the $$k$$ value, the Chernoff bound breaks at $$\lfloor k\rfloor>3$$, and the envelope breaks as well when $$\lfloor k\rfloor\geq8$$. In summary, both bounds hold for the full range of $$\delta\in(0,1/2)$$ when limited function evaluations are performed.

<div id="fig2" class="jxgbox shadow" style="aspect-ratio: 2 / 1; width: 70%; user-select: none; overflow: hidden; position: relative; touch-action: none;"></div>
{%marginnote 'figcap2' 'Fig. 2 Interactive plot of $$p(s_k\leq k-1)$$, Chernoff bound, and exponential envelope varying with $$\delta$$. Use the slider to see how the $$p(s_k\leq k-1)$$ goes above the two bounds as k increases.'%}
<script>
  JXG.Options.text.useMathJax = true;
  const board2 = JXG.JSXGraph.initBoard("fig2", {
    boundingbox: [-0.5, 1.5, 1.5, -0.5],
    keepaspectratio: true,
    axis:true
});
var k = board2.create('slider', [[0.5,1],[1.5,1],[1,1,20]],
    {suffixLabel:'k= ',label: {fontSize: 18, strokeColor: 'black'}})
var epsilon = board2.create('functiongraph',
      [function(x){return 1-(0.5+x)**k.Value()},0,0.5],
      {strokeColor:'blue',strokeWidth:1.2}
);
var chernoff = board2.create('functiongraph',
      [function(x){return Math.exp(-2*k.Value()*x**2)},0,0.5],
      {strokeColor:'red',strokeWidth:1.2}
);
var envelope = board2.create('functiongraph',
      [function(x){return Math.exp(-k.Value()*(x**3))},0,0.5],
      {strokeColor:'green',strokeWidth:1.2}
);
board2.create('line', [[1,0.8],[1.4,0.8]], {labels:['Chernoff'],
color:'red',straightFirst:false, straightLast:false});
board2.create('text',[1.45,0.8,"\\[\\exp(-2\\delta^2k)\\]"],{color:'red',fontSize:14});
board2.create('line', [[1,0.6],[1.4,0.6]], {labels:[''],
color:'green',straightFirst:false, straightLast:false});
board2.create('text',[1.45,0.6,"\\[\\exp(-k\\delta^3)\\]"],{color:'green',fontSize:14});
board2.create('line', [[1,0.4],[1.4,0.4]], {labels:[''],
color:'blue',straightFirst:false, straightLast:false});
board2.create('text',[1.45,0.4,"\\[1-(1/2+\\delta)^k\\]"],{color:'blue',fontSize:14});
</script>

<a href="#fig2">Fig 2.</a> wraps up our problem statement in the context of classical computation. Next we will quickly go through some basics of quantum gates and draft the first quantum circuit for solving the problem here.

## 2. Quantum Circuit behind Deutsch's Algorithm
Transistors give rise to logic circuits by regulating the flow of electric current through varying voltage levels, so the binary states, 1 and 0, are represented physically by voltage levels. Because the voltage is always controllable by logic gates, signals passing through the logic circuit are deterministic. Quantum circuit, on the other hand, is never deterministic as its basic unit is "qubit", the quantum counterpart of the classical "bit". Qubits are physical realizations of quantum two-state systems.{% marginfigure 'mf-1' 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Schrodingers_cat.svg/1024px-Schrodingers_cat.svg.png' 'Schrodinger’s cat on Wikipedia' %} For people who are not familiar with quantum mechanics, you can think of qubit as a blackbox containing Schrodinger's cat and . We can only know if the cat is dead or alive by opening the box. Here, dead and alive are the two "**quantum states**"{%sidenote 'sn-5' 'here we use Dirac notation to represent quantum states. In this case, the cat has two possible states:$$\ket{alive}$$ or $$\ket{dead}$$'%}, and the behavior of opening box is our "**measurement**" of the cat's states{%sidenote 'sn-6' 'for now, let’s naively use the following notation to represent the measurement:$$\bra{M}$$'%}. Before the "measurement", the cat can either be dead or alive. Such a state uncertainty is captured by the concept of **superposition**. We can use Dirac representation to represent superposition in this case as $$\ket{alive}+\ket{dead}$$. At the moment of opening the blackbox, we apply the "measurement" to the superposed state, $$\bra{M}(\ket{alive}+\ket{dead})$$, which results in  $$\ket{alive}$$ if the cat jumps out of the box, or $$\ket{dead}$$ if the cat stays there forever.{%fig 'img' 'fullwidth' 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Schrodingers_cat.svg/1024px-Schrodingers_cat.svg.png' 'Schrodinger’s cat on Wikipedia' %}So, the qubit is the blackbox with a cat. It has two possible states analogous to the classical bit, $$\ket{0}$$ and $$\ket{1}$$. If we first set the qubit at the state of $$\ket{0}$$ and do nothing, next time when we measure the qubit, it will still be at the same state. Here comes the non-deterministic part. Unlike the classical logic gate, the quantum get can actually turn the pure states, $$\ket{0}$$ and $$\ket{1}$$ in this case, into superposed states like $$\ket{0}+\ket{1}$$.

## 3. Extend Deutsch's Algorithm
