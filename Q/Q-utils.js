// helper functions for rendering svg of quantum circuits
run_and_render_svg = function(circuit, figId){
    circuit.run();
    probabilities=circuit.probabilities();
    // svg rendering
    var container = document.getElementById(figId);
    var svg = circuit.exportSVG(true);
    var parser = new DOMParser();
    var parsedHTML = parser.parseFromString(svg, 'text/html').body.firstChild;
    // var container_width = container.offsetWidth;
    // var svg_width = parsedHTML.getAttribute('width');
    parsedHTML.setAttribute('style', 'margin-left:20%')
    var m_height = "20";
    var label_x = [];
    parsedHTML.querySelectorAll(".qc-gate-label").forEach(function(el){label_x.push(parseInt(el.getAttribute("x")));});
    parsedHTML.querySelectorAll(".qc-gate-not").forEach(function(el){label_x.push(parseInt(el.getAttribute("cx")));});
    parsedHTML.querySelectorAll(".qc-wire-label").forEach(function(el){el.setAttribute("y",parseInt(el.getAttribute("y"))-10);});
    label_x = [...new Set(label_x)]
    label_x.sort(function (a, b) {return a - b;});
    var label_id = 1;
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
    var quirkLink = document.getElementById(figId+"-quirk");
    quirkLink.setAttribute("href", quirkURL);
}