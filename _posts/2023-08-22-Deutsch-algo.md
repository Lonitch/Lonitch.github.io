---
layout: post
title:  "Qubit Saga: Deutsch's Algorithm"
date:   2023-08-22 11:35:00
categories: post
---

- [Is Your Function Constant?](#is-your-function-constant)
- [Quantum Circuit behind Deutsch's Algorithm](#quantum-circuit-behind-deutschs-algorithm)
- [Extend Deutsch's Algorithm](#extend-deutschs-algorithm)

The plan for the prequel of qubit has been shelved for a long time, and for a while, there was uncertainty about what to write in the next installment. Upon closer examination, the reason lies in the author's constant daydreaming that they could emulate the way Feynman, several decades ago, seamlessly bridged the logical chain from arithmetic to calculus using just four pages. Could one achieve a similar feat of bridging the logical chain from linear algebra to quantum mechanics in just four pages? At least for now, I cannot. Until I'm capable enough, please allow me to write something of academic value.<!--more-->

<!-- <div id="jxgbox" class="jxgbox shadow" style="aspect-ratio: 2 / 1; width: 40%; user-select: none; overflow: hidden; position: relative; touch-action: none;"></div>
<script>
  const board = JXG.JSXGraph.initBoard("jxgbox", {
    boundingbox: [-10, 10, 10, -10],
    keepaspectratio: true
});
var p0 = board.create('point', [0, 0], {
    name: 'T',
    trace: true
});
var p1 = board.create('point', [7, 5], {
    name: 'A',
    trace: true
});
var p2 = board.create('point', [5, 7], {
    name: 'B',
    trace: true
});
var l = board.create('line', [p1, p2], {
    name: ''
});
 
var t = board.create('transform', [function() {
    return p0.X();
}, function() {
    return p0.Y();
}], {
    type: 'translate'
});
t.bindTo([p1, p2]);
</script> -->
The Deutsch algorithm can be considered an introductory-level quantum algorithm. Its creation was aimed at demonstrating the indisputable superiority of quantum computation in solving a certain class of problems. However, the problem discussed in this article lacks corresponding real-life examples. Therefore, readers might as well regard this algorithm as a deliberate construction by the academic community to prove quantum supremacy. In this article, starting from the corresponding mathematical problem, the author dissects the quantum circuit behind the Deutsch's algorithm and its extended versions.

## Is Your Function Constant?
The problems efficiently solvable by the Deutsch algorithm can be described as follows: Given a function $$f(x)$$, if we do not know its explicit expression, how can we determine whether this function always outputs a constant value? The left diagram of <a href="#fig1">Fig 1.</a> represents a simple constant function, where $$f(x) = 1$$ for all values in its domain. The right diagram of <a href="#fig1">Fig 1.</a> represents a balanced function, where $$f(x) = -1$$ when $$x < 0$$, and $$f(x) = 1$$ otherwise.
<figure class="fullwidth">
<div id="fig1"></div>
<script>
	var trace1 = {
  x: [-1, 0, 1],
  y: [1, 1, 1],
  mode: 'lines',
  name: 'Constant Function'
  };

  var trace2 = {
  x: [-1, -0.0001, 0.0001, 1],
  y: [-1, -1, 1, 1],
  xaxis: 'x2',
  yaxis: 'y2',
  mode: 'lines',
  name: 'Balanced Function'
  };

  var data = [trace1, trace2];

  var layout = {
    grid: {rows: 1, columns: 2, pattern: 'independent'},
    autosize: false,
    width: 1000,
    height: 400,
    paper_bgcolor:'#f3f8f4',
    plot_bgcolor:'#f3f8f4',
    xaxis:{
      range:[-1,1]
    },
    yaxis:{
      title:"f(x)",
      position:1.2,
      range:[-1.5,1.5]
    },
    xaxis2:{
      range:[-1,1]
    },
    yaxis2:{
      range:[-1.5,1.5]
    },
    margin: {
      l: 50,
      r: 50,
      b: 0,
      t: 0,
      pad: 1
    },
  };
  var config = {responsive: true}
  Plotly.newPlot('fig1', data, layout, config);
</script>
<figcaption id="fig1">Fig 1. Two function types</figcaption>
</figure>
In every paper of quantum algorithm, it always starts with how classical computer would solve a problem. Here we take the same route just to fool people that classical algorithms are dumb. We then explain that they are not unbearably bad, just polynomially slower than the quantum algorithm. Without losing the generality, let's first focus on a function $$f(x)$$ whose input $$x$$ is an integer in a range $$(-N,N)$$, with $$N$$ being an arbitrary number. Classically, We check if such a function is constant or not by evaluating the function N+1 times. If the evaluated values are all identical, it's a constant function. Deutsch's algorithm achieves this by ensuring a specific quantum state's probability becomes unity while excluding other possibilities, as we'll see.

The classical method above is never used in real life. Instead, we usually want to keep the probability of guessing the wrong function type to a small value, $$\epsilon$$. {% sidenote 'sd-1' 'the $$\epsilon$$ here can be very small.'%}In the case above, we need to evaluate the function $$(1-\epsilon)N$$ times so that the possiblity of guessing wrong is no higher than $$\epsilon$$. Thus, the problem described here has a complexity of $$O(N)$$.
## Quantum Circuit behind Deutsch's Algorithm

## Extend Deutsch's Algorithm