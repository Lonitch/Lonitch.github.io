---
layout: post
title: $LaTex$ test
date: 2020-05-10
Author: Sizhe
tags: [tests, daily]
---

Use `$$` to start a math mode block. The first paragraph is selected as abstract of each post. We avoid using equations in abstracts, and use `<!-- more -->` to separate main contents from abstract.<!-- more -->

{%fig 'qcsvg' 'test quantum circuit' 'drawing'%}
<script type="text/javascript">
    // circuit definition
    var circuit = new QuantumCircuit(3);
    circuit.addGate("h", 0, 1);
    circuit.addGate("x", 1, 2);
    circuit.addGate("x", 0, 0);
    circuit.addGate("cx", 2, [1, 2]);
    circuit.addGate("ccx", 3, [0, 1, 2]);
    run_and_render_svg(circuit, 'drawing');
</script>
