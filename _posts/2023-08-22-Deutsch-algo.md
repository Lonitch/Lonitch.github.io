---
layout: post
title:  "Qubit Saga: Deutsch–Jozsa Algorithm"
date:   2023-08-22 11:35:00
categories: post
tags: [quantum-mechanics, quantum-algorithms]
---

*I've been unsure about what to write next for a while. Maybe it's because I've been daydreaming that my essays could connect linear algebra to quantum info like Feynman did with basic math to calculus. But I'm not there yet. So, let me switch gears and write something fun to myself and possibly to my audience.*<!--more-->

- [1. Is Your Function Constant?](#1-is-your-function-constant)
  - [1.1 The Chernoff bound and exponential envelope](#11-the-chernoff-bound-and-exponential-envelope)
- [2. Quantum Circuit Basics](#2-quantum-circuit-basics)
  - [2.1 Single- and multi-qubit gates](#21-single--and-multi-qubit-gates)
  - [2.2 Introduction to entanglement](#22-introduction-to-entanglement)
- [3. Quantum Circuit for Deutsch's Algorithm](#3-quantum-circuit-for-deutschs-algorithm)
  - [3.1 Construct a function in quantum circuit](#31-construct-a-function-in-quantum-circuit)
  - [3.2 Build the circuit before the Hadamard transform](#32-build-the-circuit-before-the-hadamard-transform)
  - [3.3 Hadamard transform at the last step](#33-hadamard-transform-at-the-last-step)

The Deutsch–Jozsa algorithm can be considered an introductory-level quantum algorithm. Its creation was aimed at demonstrating the indisputable superiority of quantum computation in solving a certain class of problems. However, the problem discussed in this article lacks corresponding real-life examples. Therefore, readers might as well regard this algorithm as a deliberate construction by the academic community to prove quantum supremacy. In this article, starting from the corresponding mathematical problem, the author dissects the quantum circuit behind the Deutsch's algorithm and its extended versions.

## 1. Is Your Function Constant?
The problems efficiently solvable by the Deutsch algorithm can be described as follows: Given a function $$f(x)$$, if we do not know its explicit expression, how can we determine whether this function always outputs a constant value? The red line of <ref fig='fig-functype'/> represents a simple constant function, where $$f(x) = 1$$ for all values in its domain. The blue line of <ref fig='fig-functype'/> represents a balanced function, where $$f(x) = -1$$ when $$x < 0$$, and $$f(x) = 1$$ otherwise.

{%fig 'jsx' 'Two function types' 'fig-functype'%}
<script>
  JXG.Options.text.useMathJax = true;
  const board = JXG.JSXGraph.initBoard("fig-functype", {
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
The classical method above is never used in real life as it's usually hard to enumerate all possible inputs for discrete or continuous functions. Instead, we want to keep the probability of guessing the wrong function type to a low level, $$\epsilon$${% sidenote 'the $$\epsilon$$ here should be diminishingly small.'%}. In the case above, we have a function producing non-deterministic binary output $$f(x_i)$$, and we're facing a decision problem, i.e., how probable we will guess the function type wrong after $$k\ll N/2+1$$ function evaluation? Let's assume, without any loss of generality, that the correct answer is $$f_i=1$$ if $$f(x_i)=1$$(constant function), and $$f_i=0$$ otherwise. With this assumption, the question becomes: **what is the possibility of the k evaluations telling me that the function is not constant?** After k evaluations by randomly choosing $$\{x_0,x_1,...,x_k\}$$, the majority voting fails when $$s_k=\sum_i^k f_i<k$$. {% sidenote 'we need only one wrong answer to tell the function is not constant'%} There are $$C^q_k$$ k-sequences $$\{f_1,f_2,...,f_k\}$$ that have $$q$$ correct answers, and the probability of $$s_k=q$$ is

{%eqn 'p(s_k=q)=C^q_k(1/2+\delta)^q(1/2-\delta)^{k-q},'%}

in which $$p(f_i=1)=\frac{1}{2}+\delta$$ and $$p(f_i=0)=\frac{1}{2}-\delta$$.{% sidenote 'we introduce $$\delta$$ here for the sake of generality. Note that for a balanced function $$\delta=0$$, and $$\delta=1/2$$ for constant function. Any other function type will have its $$\delta\in(0,1/2)$$.' %} It is clear that $$p(s_k=q)$$ follows [binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution) and the expectation value $$E(s_k)=k(1/2+\delta)$$. Therefore, the most probable $$s_k$$ that yields a failed majority voting should be as close to $$k(1/2+\delta)$$ as possible. However, we don't know how to choose $$\delta$$ as the explicit expression of $$f(x)$$ is unknow to us. An educated guess could be $$\delta\cong 0$$, that is, assuming that correct or wrong answers are **almost equally possible**. If we take such an assumption, then each $$\{f_1,f_2,...,f_k\}$$ with its $$s_k=k/2$$ can occur with the probability

{%eqn 'p(\{f_1,f_2,...,f_k\}; s_k=k/2+\lim_{\delta\rightarrow0}\delta)=(\frac{1}{2}-\delta)^{k/2}(\frac{1}{2}+\delta)^{k/2}.' 'eqn-psk'%}

Since there are $$2^k$$ possible squences $$\{f_1,f_2,...,f_k\}$$, we can conclude from <ref eqn='eqn-psk'/> that the possibility of guessing function type wrong after $$k$$ evaluations is

{% eqn 'p(s_k\leq k-1)<2^k(\frac{1}{2}-\delta)^{k/2}(\frac{1}{2}+\delta)^{k/2}=(1-4\delta^2)^{k/2},' 'eqn-psk-leq-k-1'%}

Note that $$1-x\leq \exp(-x)$$, we obtain the **Chernoff bound**:

{% eqn 'p(s_k\leq k-1)<\exp(-2\delta^2k).'%}

Let $$\epsilon=p(s_k\leq k-1)$$, we have the error drops below $$\epsilon$$ when the number of function evaluations exceeds the following limit:

{% eqn 'k>\frac{1}{2\delta^2}\ln(\frac{1}{\epsilon}).' %}

Thus, the problem described here has a classical complexity of $$O(\ln(1/\epsilon))$$.

There is a another way to calculate the classical complexity using the exponential envolop of $$p(s_k\leq k-1)$$.{%sidenote 'this discussion is for people(including me) who are not comfortable with the assumed value of $$\delta$$ above' %} Because there is only one sequence that has $$s_k=k$$ with $$\{f_1,f_2,...f_k\}=\{1,1,...,1\}$$, we have the probability of such a sequence being

{% eqn 'p(s_k=k)=(\frac{1}{2}+\delta)^k'%}

and hence,

{% eqn 'p(s_k\leq k-1)=1-p(s_k=k)=1-(\frac{1}{2}+\delta)^k<e^{-k\delta^3}' %}

where the last inequality gives an exponential envelope for $$p(s_k\leq k-1)$$. Repeat the analysis above, we have

{% eqn '\epsilon<e^{-k\delta^3}\rightarrow k>\frac{1}{\delta^3}\ln(1/\epsilon)' 'eqn-envelop'%}

giving the same classical complexity as the Chernoff bound. <ref fig='fig-bounds'/> below shows how $$p(s_k\leq k-1)$$, Chernoff bound, and the exponential envelope in <ref eqn='eqn-envelop'/> vary with the $$\delta$$. As we increase the $$k$$ value, the Chernoff bound breaks at $$\lfloor k\rfloor>3$$, and the envelope breaks as well when $$\lfloor k\rfloor\geq8$$. In summary, both bounds hold for the full range of $$\delta\in(0,1/2)$$ when limited function evaluations are performed.

{%fig 'jsx' 'fullwidth' 'Interactive plot of $$p(s_k\leq k-1)$$, Chernoff bound, and exponential envelope varying with $$\delta$$. Use the slider to see how the $$p(s_k\leq k-1)$$ goes above the two bounds as k increases.' 'fig-bounds'%}
<script>
JXG.Options.text.useMathJax = true;
  const board2 = JXG.JSXGraph.initBoard("fig-bounds", {
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

The analysis in <ref fig="fig-bounds"/> wraps up our problem statement in the context of classical computation. Next we will quickly go through some basics of quantum gates and draft the first quantum circuit for solving the problem here.

## 2. Quantum Circuit Basics
Transistors give rise to logic circuits by regulating the flow of electric current through varying voltage levels, so the binary states, 1 and 0, are represented physically by voltage levels. Because the voltage is always controllable by logic gates, signals passing through the logic circuit are deterministic. Quantum circuit, on the other hand, is never deterministic as its basic unit is "qubit", the quantum counterpart of the classical "bit". Qubits are physical realizations of quantum two-state systems.
{% fig 'img' 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Schrodingers_cat.svg/1024px-Schrodingers_cat.svg.png' 'Schrodinger’s cat on Wikipedia' 'fig-cartoon' %} 
For people who are not familiar with quantum mechanics, you can think of qubit as a blackbox containing Schrodinger's cat and . We can only know if the cat is dead or alive by opening the box. Here, dead and alive are the two "**quantum states**"{%sidenote 'here we use Dirac notation to represent quantum states. In this case, the cat has two possible states:$$\ket{alive}$$ or $$\ket{dead}$$'%}, and the behavior of opening box is our "**measurement**" of the cat's states{%sidenote 'for now, let’s naively use $$\hat{M}$$ to represent the measurement. In the language of linear algebra, this is an operator applicable to the vector space spanned by basis vectors of $$\ket{alive}$$ and $$\ket{dead}$$'%}. Before the "measurement", the cat can either be dead or alive. Such a state uncertainty is captured by the concept of **superposition**. Let's first use Dirac notation to represent superposition in this case as $$\ket{alive}+\ket{dead}$$. Notice the ressemblance here between the superposition and the linear combination{%sidenote 'If we treat $$\ket{alive}$$ and $$\ket{dead}$$ as two linearly independent vectors, then all of the linear combinations, $$\alpha\ket{alive}+\beta\ket{dead}$$ forms a vector space.'%} pervasive in linear algebra. At the moment of opening the blackbox, we apply the "measurement" to the superposed state, $$\hat{M}(\ket{alive}+\ket{dead})$$, which results in  $$\ket{alive}$$ if the cat jumps out of the box, or $$\ket{dead}$$ if the cat stays there forever. Before the measurement, we can only predict the cat's state using probabilities. For example, if we place a bottle of poison with the cat in the box, and we know cats like to topple small things. Then the probability of cat being alive at time $$t$$, $$p(\ket{\psi(t)}=\ket{alive})$$ should be lower than 1{%sidenote '$$\ket{\psi(t)}$$ represents the cat state at time $$t$$'%}. Note that $$p(\ket{\psi(t)}=\ket{alive})+p(\ket{\psi(t)}=\ket{dead})=1$$ at any time instance. To reflect this fact in the superposed state, we need to normalize the "length" of the linear combination $$\alpha\ket{alive}+\beta\ket{dead}$$ to one, i.e., $$\alpha^2+\beta^2=1$$. Due to their relations to probabilities, $$\alpha$$ and $$\beta$$ are called probability amplitudes, and they are generally complex numbers.

### 2.1 Single- and multi-qubit gates
So a qubit can be thought of a blackbox containing a cat whose state could be superposed. The cat has two possible states analogous to the classical bit, $$\ket{0}$$ and $$\ket{1}$$. If we first set the qubit at the state of $$\ket{0}$$ and do nothing(e.g. no poison bottle in the box){%sidenote 'Doing nothing is an oversimplified statement. Huge amount of efforts is required to protect a quantum system from noises that break state coherence before measurement.'%}, next time when we measure the qubit, it will still be at the state of $$\ket{0}$$ just like what we would expect on a classical computer. However, we can turn the qubit state into a superposed one by applying quantum gate to it{%sidenote 'there are only two effects of classical gates to bits: flip the bit or remain bit state.'%}. Such a gate is call Hadamard gate, and is represented as $$\fbox{H}$$ in quantum circuit.

The following circuit shows one Hadamard gate applied to one qubit(the horizontal line). 

{%fig 'qcsvg' 'One Hadamard gate' 'qc-hadamard'%}
<script>
qc=new QuantumCircuit(1);
qc.addGate('h',0,0);
run_and_render_svg(qc,'qc-hadamard');
</script>

The qubit in <ref fig="qc-hadamard"/> is set to $$\ket{0}$$ at the beginning. The wire represents evolution of the qubit in time, along which we have one intermediate point: `m1`. The caption of <ref fig="qc-hadamard"/> also gives the probabilities of getting different states of `q0` at the end. Because the Hadamard gate turns `q0` into a superposed state, $$1/\sqrt{2}\ket{0}+1/\sqrt{2}\ket{1}$${%sidenote '$$\alpha=\beta=1/\sqrt{2}$$'%}, we have $$(1/\sqrt{2})^2=1/2$$ possibility of getting $$\ket{0}$$ or $$\ket{1}$$ when measuring the state of `q0`. The full qubit evolution introduced in <ref fig="qc-hadamard"/> can be expressed in Dirac's notation as

{%eqn '\hat{I}_{m3}\hat{H}_{m2}\hat{I}_{m1}\ket{0}=\frac{1}{\sqrt{2}}(\ket{0}+\ket{1})' 'eqn-Hevolve'%} 

where subscripts indicate middle points' locations. They are written in a reversed order as it's conventional to apply operators from right to left to qubits.

Now, let's consider two qubits, and add a Hadamard gate to both of them. The corresponding circuit is shown in <ref fig='qc-twoh'/>, and its caption gives 4 possible two-qubit states upon measurement. 
{%fig 'qcsvg' 'Two Hadamard gate' 'qc-twoh'%}
<script>
var circuit = new QuantumCircuit(2);
circuit.addGate("h", 0, 0);
circuit.addGate("h", 0, 1);
run_and_render_svg(circuit,'qc-twoh')
</script>
As the symbols indicate, $$\ket{00}$$ represents the measurement where both `q0` and `q1` are at $$\ket{0}$$ while $$\ket{01}$$ has `q0` at $$\ket{1}$$ and `q1` at $$\ket{0}$${%sidenote 'For multi-qubit states, we count indices of individual qubits from right to left.'%}. We can be mathematically rigorous by writting the multi-qubit states using Kronecker products, e.g., $$\ket{10}=\ket{1}\otimes\ket{0}$$. A more detailed discussion of Kronecker products can be found in [my previous post](./Kronecker-product). Kronecker product also enables us to write multi-qubit gates by combining single-qubit gates. For example, the quantum circuit in <ref fig='qc-twoh'/> can be written as

{%eqn '\hat{H}_{q1}\otimes\hat{H}_{q0}\ket{0}_{q1}\otimes\ket{0}_{q0}=\hat{H}_{q1}\ket{0}_{q1}\otimes\hat{H}_{q0}\ket{0}_{q0}' 'eqn-twoh'%}

where subscripts are qubits' indices. Because we always follow the 'right-first' convention, <ref eqn='eqn-twoh'/> can be simplified and expanded as follows:

{%eqn '\begin{align}\hat{H}\ket{0}\otimes\hat{H}\ket{0}&=\left(\frac{\ket{0}+\ket{1}}{\sqrt{2}}\right)\otimes\left(\frac{\ket{0}+\ket{1}}{\sqrt{2}}\right)\\&=\frac{1}{2}\left(\ket{00}+\ket{01}+\ket{10}+\ket{11}\right)\end{align}' 'eqn-twoh-result'%}

The probability amplitudes in <ref eqn='eqn-twoh-result'/> are identical for all possible states, and they all correspond to $$(1/2)^2=1/4$$ possiblity of measured state being one of the four options, agreeing with the result in the caption of <ref fig='qc-twoh'>.

Another distinct feature of quantum circuits is **Controlled gates**, which apply quantum gates to a qubit when its **control qubit** is at state $$\ket{1}$$. The circuit in <ref fig='qc-ch'/> shows that $$\fbox{H#1}$$ is only applied to `q0` when the control qubit `q1` has a state of $$\ket{1}$$.
{%fig 'qcsvg' 'Controlled Hadamard gate' 'qc-ch'%}
<script type="text/javascript">
    var circuit = new QuantumCircuit(2);
    circuit.addGate("ch", 0, [1, 0]);
    run_and_render_svg(circuit, 'qc-ch');
</script>

Nothing happens to `q0` as the state of `q1` remains at $$\ket{0}$$ and the $$\fbox{H#1}$$ is never triggered. We can use the **Pauli-X** gate $$\fbox{X}$${%sidenote 'Pauli-X gate is represented by $$\bigoplus$$ in some circuits.'%} to flip `q1` state at `m1`, and the result is shown in <ref fig='qc-xch'/>. With `q1` state flipped from $$\ket{0}$$ to $$\ket{1}$$ at `m1`, the circuit above applies $$\fbox{H#1}$$ to `q0`, resulting two possible states: $$\ket{10}$$ and $$\ket{11}$$.
{%fig 'qcsvg' 'Controlled Hadamard gate with a Pauli-X gate' 'qc-xch'%}
<script type="text/javascript">
    // circuit definition
    var circuit = new QuantumCircuit(2);
    circuit.addGate("x", 0, 1);
    circuit.addGate("ch", 1, [1, 0]);
    run_and_render_svg(circuit, 'qc-xch');
</script>

We can prove that $$p(\ket{01})=p(\ket{11})=0.5$$ by progressively following the circuit from left to right. 
- At `m1`, we flip `q1`'s state, $$\hat{X}\otimes\hat{I}\ket{00}=\ket{10}$$;
- At `m2`, the Hadamard gate is triggered, 
{%eqn '\widehat{CH}\ket{10}=\ket{1}\otimes\left(\frac{\ket{0}+\ket{1}}{\sqrt{2}}\right)=\frac{1}{\sqrt{2}}(\ket{10}+\ket{11}),' 'eqn-ch'%}
where $$\widehat{CH}$$ is the controlled Hadamard gate. 
- Because the probability amplitudes of two possible states in <ref eqn='eqn-ch'/> are $$\frac{1}{\sqrt{2}}$$, the probabilities of getting $$\ket{10}$$ or $$\ket{11}$$ are 50% at the end, as the caption of <ref fig='qc-xch'> indicates.

### 2.2 Introduction to entanglement
Now that we have sufficient understanding of single- and multi-qubit operators{%sidenote 'we have used operators and gates interchangeably.'%}, we can move a step furter to see how quantum circuit can create entangled quantum states. Before we give the concept of entanglement, let us take a look at the following circuit:
{%fig 'qc' 'Making Bell state$$\frac{1}{\sqrt{2}}(\ket{00}+\ket{11})$$' 'palette' 'qc-bell-simple'%}
<script>
qc=Q`
      I H X#0 I 
      I I X#1 I
`
eval_draw(qc,'qc-bell-simple',use_palette=true);
</script>
The caption of <ref fig='qc-bell-simple'/> shows that there are only two possible states: $$\ket{00}$$ and $$\ket{11}$${%sidenote 'reader can prove this using the progressive method introduced above.'%} with 50% probability for each state. Now, let's say the measured state of `q1` is $$\ket{0}$$, according to the probability distribution, the two-qubit state must be $$\ket{00}$$, i.e., `q2` must be $$\ket{0}$$ as well. On the other hand, if `q1` is $$\ket{1}$$, we must have `q2` being $$\ket{1}$$. Thus, states of the two qubits are coupled, and we can confirm the states of both qubits by measuring only one of them. Such a correlation is called quantum entanglement. As a matter of fact, the entangled state $$\frac{1}{\sqrt{2}}(\ket{00}+\ket{11})$$ is one of the four **Bell states**. Because <ref fig='qc-bell-simple'/> is an interactive circuit to which you can add and delete gates, you apply $$\fbox{X}$$ at `m1` to `q1` to get another Bell state: $$\frac{1}{\sqrt{2}}(\ket{00}-\ket{11})$$, resulting the same probability distribution. On the other hand, if $$\fbox{X}$$ is applied at `m2` to `q2`, you get $$\frac{1}{\sqrt{2}}(\ket{01}+\ket{10})$$. If two $$\fbox{X}$$ are applied at `m1` to `q2` and `q1`, we get the last Bell state $$\frac{1}{\sqrt{2}}(\ket{01}-\ket{10})$$. 

Bell states introduced here belong to a class of entangled qubit states, called **maximally entangled states**. The name is due to the 100% certainty of one qubit's state if we know the state of the other one. There are states **partially entangled**. As an example, consider the state of $$\frac{1}{10}\ket{01}+\frac{\sqrt{99}}{10}\ket{00}$$. Kronecker product allows us to factor the state into a form of $$\ket{0}(\frac{1}{10}\ket{1}+\frac{\sqrt{99}}{10}\ket{0})$$. The measurement of `q2` will always gives $$\ket{0}$$, but we have 1% chance of getting $$\ket{1}$$ and 99% chance of getting $$\ket{0}$$ for `q1`.

## 3. Quantum Circuit for Deutsch's Algorithm
Our problem is to find out if a given function is constant or not without knowing its expression. In reality, this could happen if the function is too complicated to figure out its output pattern. For the sake of demonstration, however, we need to construct a simple function in our quantum circuit which maps various inputs to either the same output or different outputs. By constructing the function, we definitely know if it's constant or not. But imagine you inherit a function constructed previously that takes tens or even hundreds of inputs{%sidenote "let's hope this happens in the near future." %}, and you can still use Deutsch's algorithm to decide function type without sacrificing computational efficiency.

### 3.1 Construct a function in quantum circuit
A function is a map from a set of inputs to a set of outputs. On a quantum circuit that envolves multiple qubits, a function is a segment between two intermediate points that transform one set of multi-qubit states into another set. In quantum circuit, we use two **DIFFERENT** sets of qubits as inputs and outputs. For example, If we treat `q0` and `q1` as input qubits and `q2` as output qubit in <ref fig="qc-const-func"/>, then the circuit represents a constant function that always gives $$\ket{1}$$ at `q2` no matter how you prepare inputs at `q0` and `q1`.

{%fig 'qcsvg' 'A constant function $$f_c(x)$$ that takes inputs at q0 and q1 and output at q2' 'qc-const-func'%}
<script type="text/javascript">
    var circuit = new QuantumCircuit(3);
    circuit.addGate("x", 1, 2);
    run_and_render_svg(circuit, 'qc-const-func');
</script>

We can use controlled gates to construct a balanced function as shown in <ref fig='qc-balanced-func'/>. The function is indeed balanced as $$\ket{00}$$ and $$\ket{11}$$ results in $$\ket{1}$$ at `q2` while $$\ket{01}$$ and $$\ket{10}$$ maps to $$\ket{0}$$.
{%fig 'qcsvg' 'A balanced function $$f_b(x)$$ that takes inputs at q0 and q1 and output at q2' 'qc-balanced-func'%}
<script type="text/javascript">
    var circuit = new QuantumCircuit(3);
    circuit.addGate("x", 0, 2);
    circuit.addGate("cx", 1, [0,2]);
    circuit.addGate("cx", 2, [1,2]);
    run_and_render_svg(circuit, 'qc-balanced-func');
</script>
For circuits that implement complicated functions, it is a common practice to hide function details by wrapping corresponding circuit segments into composite gate. Multi-qubit gate that is wrapped in this way is also called **oracle**. For the 2-qubit constant function above, an oracle is created in <ref fig='qc-const-oracle'/>, i.e., the blue block, which always results in $$\ket{1}$$ at `q2`, and takes `q0` and `q1` as function arguments.

{%fig 'qcsvg' 'An oracle that hides details of the constant function' 'qc-const-oracle'%}
<script type="text/javascript">
    // circuit definition
    var oracle = new QuantumCircuit(3);
    oracle.addGate("x", 1, 2);
    var obj = oracle.save();
    var circuit = new QuantumCircuit(4);
    circuit.registerGate("f_c(x)", obj);
    circuit.addGate("h",0,0);
    circuit.addGate("h",0,1);
    circuit.addGate("h",0,3);
    circuit.addGate("f_c(x)",1,[0,1,2]);
    run_and_render_svg(circuit, 'qc-const-oracle');
</script>

In the next section, we will use constant and blanced functions introduced here to demostrate Deutsch-Jozsa algorithm, which can tell the two functions apart through one query.

### 3.2 Build the circuit before the Hadamard transform
The circuits in <ref fig='qc-deutsch-jozsa'/> and <ref fig='qc-deutsch-jozsa-2'/> show how Deutsch-Jozsa algorithm is applied to two different function: the constant $$f_c(x)$$ and the balanced $$f_b(x)$$. To apply the algorithm to a function of arbitrary number of arguments, you need to replace the oracle in the circuits below with the function and apply the Hadamard gates to all its input qubits before the oracle and apply to them again the Hadamard gates after the controlled Pauli-X gate. 
{%fig 'qcsvg' 'The Deutsch-Jozsa Algorithm for checking the type of $$f_c(x)$$. The information measured at q1 and q2 is stored at two classical bits, c0 and c1' 'qc-deutsch-jozsa'%}
<script type="text/javascript">
    // function oracle
    var oracle = new QuantumCircuit(3);
    oracle.addGate("x", 0, 2);
    var obj = oracle.save();
    // assemble the big circuit
    var circuit = new QuantumCircuit(4);
    circuit.registerGate("f_c(x)", obj);
    circuit.addGate("h",0,0);
    circuit.addGate("h",0,1);
    circuit.addGate("f_c(x)",1,[0,1,2]);

    circuit.addGate("x",0,3);
    circuit.addGate("h",1,3);
    circuit.addGate("cx",2,[2,3]);
    circuit.addGate("h",3,0);
    circuit.addGate("h",3,1);
    circuit.addMeasure(0, "c0", 0)
    circuit.addMeasure(1, "c1", 1)
    run_and_render_svg(circuit, 'qc-deutsch-jozsa');
</script>

{%fig 'qcsvg' 'The Deutsch-Jozsa Algorithm for checking the type of $$f_b(x)$$' 'qc-deutsch-jozsa-2'%}
<script type="text/javascript">
    // function oracle
    var oracle = new QuantumCircuit(3);
    oracle.addGate("x", 0, 2);
    oracle.addGate("cx", 1, [0,2]);
    oracle.addGate("cx", 2, [1,2]);
    var obj = oracle.save();
    // assemble the big circuit
    var circuit = new QuantumCircuit(4);
    circuit.registerGate("f_b(x)", obj);
    circuit.addGate("h",0,0);
    circuit.addGate("h",0,1);
    circuit.addGate("f_b(x)",1,[0,1,2]);

    circuit.addGate("x",0,3);
    circuit.addGate("h",1,3);
    circuit.addGate("cx",2,[2,3]);
    circuit.addGate("h",3,0);
    circuit.addGate("h",3,1);
    run_and_render_svg(circuit, 'qc-deutsch-jozsa-2');
</script>

Let us go back to the basics to analyze what the circuit does. First of all, we have four qubits in both circuits that serve three different purposes:
- function arguments are provided by `q0` and `q1`,
- function output is given at `q2`, and
- ancilla{%sidenote "ancilla qubits are used for storing partial results or creating entanglement."%} qubit `q3` used for creating entanglement.

We can again use the progressive method in [Sec.2.1](#21-single--and-multi-qubit-gates) to see how the multi-qubit state evolves at each intermediate point in <ref fig='qc-deutsch-jozsa'/>. With $$\fbox{H}$$ at `q0` and `q1`, and $$\fbox{X}$$ at `q3`, we turn $$\ket{0000}$$ into the following state at `m1`:

{%eqn '\begin{align}
\ket{\psi}_{m1}&=\frac{(\ket{0}+\ket{1})}{\sqrt{2}}\otimes\frac{(\ket{0}+\ket{1})}{\sqrt{2}}\otimes\ket{0}\otimes\ket{1}\\\\
&=\frac{1}{2}(\ket{00}+\ket{01}+\ket{10}+\ket{11})\otimes\ket{0}\otimes\ket{1}
\end{align},' 'algo-step-1'%}

where the two Kronecker products bridge the states at input qubits, output, and ancilla. The second line in <ref fig='algo-step-1'/> indicates that the input qubits are turned into superposed states, including all the possible inputs. This manifests the power of quantum computing, that is, evaluating all possible outputs of a function by feeding it a superposed state composed of all possible inputs. To make our discussion concise, let us write the superposed state as

{%eqn '\begin{align}
\ket{\psi}_{m1}&=\sum_{x=0}^{2^n-1}\frac{1}{\sqrt{2^n}}\ket{x}\otimes\ket{0}\otimes\ket{1}
\end{align},' 'algo-step-1-2'%}

where we convert the 2-digit binary number(`00`,`01`,`10`,`11`) into decimal numbers $$x$$, and $$n$$ is the number of input qubits in <ref eqn="algo-step-1-2"/>. The conversion simplifies the notation of `q2` evaluated at `m2`, where we apply the oracle gate to `q0`, `q1` and `q2`, and apply $$\fbox{H}$$ to `q3`. The oracle does not change qubit states at `q0` and `q1` but writes the result, $$f(x)$$, to `q2`{%sidenote 'remember $$f(x)=$$ 0 or 1, so we can encode the value of $$f(x)$$ using one qubit.'%}, resulting in

{%eqn "\ket{\psi}_{m2}=\sum_{x=0}^{2^n-1}\frac{1}{\sqrt{2^n}}\ket{x}\otimes\ket{f(x)}\otimes\frac{\ket{0}-\ket{1}}{\sqrt{2}}." "algo-step-2"%}

The critical step happens at `m3` where we apply a controlled Pauli-X $$\widehat{CX}$$ to `q2` and `q3`. Since $$f(x)=$$ 1 or 0, it is easy to verify $$\small\widehat{CX}\ket{f(x)}\otimes\ket{0}=\ket{f(x)\oplus0}$$ and $$\small\widehat{CX}\ket{f(x)}\otimes\ket{1}=\ket{f(x)\oplus1}$$. The $$\oplus$$ within $$\ket{ }$$ here is the add modulo 2. Also, $$\small\widehat{CX}\ket{f(x)}\otimes(\ket{0}-\ket{1})=-\ket{f(x)}\otimes(\ket{0}-\ket{1})$$ when $$f(x)=1$$ and $$\small\widehat{CX}\ket{f(x)}\otimes(\ket{0}-\ket{1})=\ket{f(x)}\otimes(\ket{0}-\ket{1})$$ if $$f(x)=0$$. With this reasoning, the state at `m3` becomes

{%eqn "\begin{align}\ket{\psi}_{m3} &=\sum_{x=0}^{2^n-1}\frac{1}{\sqrt{2^n}}\ket{x}\otimes\ket{f(x)}\otimes\frac{\ket{f(x)\oplus0}-\ket{f(x)\oplus1}}{\sqrt{2}}
\\\\
&=\sum_{x=0}^{2^n-1}\frac{1}{\sqrt{2}}\ket{x}\otimes\ket{f(x)}\otimes(-1)^{f(x)}\frac{\ket{0}-\ket{1}}{\sqrt{2}}\\\\
&=\sum_{x=0}^{2^n-1}(-1)^{f(x)}\frac{1}{\sqrt{2}}\ket{x}\otimes\ket{f(x)}\otimes\frac{\ket{0}-\ket{1}}{\sqrt{2}}
\end{align}" 'algo-step-3'%}
Thus, the effect of controlled-X at `m3` is adding a ***global phase*** $$(-1)^{f(x)}$$ to $$\ket{\psi}_{m3}$${%sidenote "global phase is a complex number of unity norm attached to a quantum state, and it does not affect probability distribution of the state measurements."%}. Due to the commutativity between Kronecker product and scalar product, we can move the global phase in front of any qubit(e.g. the last line in <ref eqn='algo-step-3'/>), and such a manipulation is also referred as ***phase kickback***.

At this point, we can confidently disregard `q2` and `q3` in the discussion below as their states will remain the same after `m3`, and $$\ket{\psi}_{m3}$$ is simplified into

{%eqn '\ket{\psi}_{m3}=\sum_{x=0}^{2^n-1}(-1)^{f(x)}\frac{1}{\sqrt{2}}\ket{x}' 'algo-step-3-2'%}

The step at `m4` reveals the function type by applying Hadamard gates(i.e. $$\hat{H}\otimes\hat{H}=\hat{H}^{\otimes n}$$) again to the input qubits. Before we derive the final result, we need to take a deeper look at what $$\hat{H}^{\otimes n}$$ could do to states like $$\ket{\psi}_{m3}$$.

### 3.3 Hadamard transform at the last step
Let $$k$$ be a n-length binary string and $$\ket{k}$$ be a n-qubit state, then the Hadamard transform gives

{%eqn "H^{\otimes n}|k\rangle=\frac{1}{\sqrt{2^n}} \sum_{j=0}^{2^n-1}(-1)^{k \cdot j}|j\rangle," "eqn-h-trans"%}

where $$j \cdot k=j_0 k_0 \oplus j_1 k_1 \oplus \cdots \oplus j_{n-1} k_{n-1}$$ is the sum of the bitwise product, where $$\oplus$$ is addition modulo 2. We will try to derive <ref eqn="eqn-h-trans"/> from the perspective of basis transformation, inspired by the blog [here](https://benjaminwhiteside.com/2021/08/02/the-hadamard-transform/){%sidenote "you need knowledge of group theory in order to fully appreciate the writing"%}. We begin our derivation by considering the simple case of $$\small\ket{k}=\ket{\underbrace{00...0}_{n}}$$, i.e.,

{%eqn "\begin{align}
H^{\otimes n}|\underbrace{00...0}_{n}\rangle&=\frac{1}{\sqrt{2^n}}\prod^{n}(\ket{0}+\ket{1})\\\\
&=\frac{1}{\sqrt{2^n}}\sum_{z=0}^{2^n-1}\ket{z}
\end{align}" "h-trans-1"%}

Now, let's take a step further by replacing the j-th 0 of $$\ket{k}$$ with 1, and the Hadamard transform of this modified state is then

{%eqn "\begin{align}
H^{\otimes n}|\underbrace{00...0}_{n-j}\rangle\otimes\ket{1\underbrace{00...0}_{j-1}}&=\frac{1}{\sqrt{2^n}}\prod^{n-j}(\ket{0}+\ket{1})\times (\ket{0}-\ket{1})\times \prod^{j-1}(\ket{0}+\ket{1})\\\\
&=\frac{1}{\sqrt{2^n}}\sum_{z_j=0}\ket{z}-\frac{1}{\sqrt{2^n}}\sum_{z_j=1}\ket{z}\\\\
&=\frac{1}{\sqrt{2^n}}\sum_{z=0}^{2^n-1}(-1)^{k_j\cdot z_j}\ket{z}.
\end{align}" "h-trans-2"%}

Because $$k_j=1$$ in this case, and $$(-1)^{k_j\cdot z_j}=1$$ in <ref eqn="h-trans-2"/> when $$z_j=1$$.