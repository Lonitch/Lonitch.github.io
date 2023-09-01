---
layout: post
title: $LaTex$ test
date: 2020-05-10
Author: Sizhe
tags: [tests, daily]
---

Use `$$` to start a math mode block. The first paragraph is selected as abstract of each post. We avoid using equations in abstracts, and use `<!-- more -->` to separate main contents from abstract.

<!-- more -->

<div id="drawing" class="fullwidth"></div>
<a id="quirk">See QC in Quirk</a>
<script type="text/javascript">
    // circuit definition
    var circuit = new QuantumCircuit(3);
    circuit.addGate("h", 0, 1);
    circuit.addGate("x", 1, 2);
    circuit.addGate("x", 0, 0);
    circuit.addGate("cx", 2, [1, 2]);
    circuit.addGate("ccx", 3, [0, 1, 2]);
    circuit.run();
    console.log(circuit.probabilities());
    // svg rendering
    var container = document.getElementById("drawing");
    var svg = circuit.exportSVG(true);
    var parser = new DOMParser();
    var parsedHTML = parser.parseFromString(svg, 'text/html').body.firstChild;
    var m_height = "20";
    var label_x = [];
    parsedHTML.querySelectorAll(".qc-gate-label").forEach(function(el){label_x.push(parseInt(el.getAttribute("x")));});
    parsedHTML.querySelectorAll(".qc-gate-not").forEach(function(el){label_x.push(parseInt(el.getAttribute("cx")));});
    label_x = [...new Set(label_x)]
    label_x.sort(function (a, b) {return a - b;});
    label_id = 1;
    label_x.forEach(function(el){
        text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x",el.toString());
        text.setAttribute("y",m_height);
        text.setAttribute("class","qc-gate-label");
        text.setAttribute("text-anchor","middle");
        text.setAttribute("fill","black");
        text.textContent='m'+label_id.toString();
        parsedHTML.appendChild(text);
        label_id+=1;
    });
    container.appendChild(parsedHTML);
    // create link to quirk
    var quirkData = circuit.exportQuirk(true);
    var quirkURL = "http://algassert.com/quirk#circuit=" + JSON.stringify(quirkData);
    var quirkLink = document.getElementById("quirk");
    quirkLink.setAttribute("href", quirkURL);
</script>
