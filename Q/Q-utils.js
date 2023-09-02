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
    // parsedHTML.setAttribute('style', 'margin-left:20%')
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
    blackbox=parsedHTML.querySelectorAll('.qc-gate-blackbox')
    blackbox_center = []
    blackbox.forEach((el)=>{
        el.remove(); 
        el.setAttribute('fill','#639be0'); 
        parsedHTML.appendChild(el);
        x=parseInt(el.getAttribute('x'));
        y=parseInt(el.getAttribute('y'));
        w=parseInt(el.getAttribute('width'));
        h=parseInt(el.getAttribute('height'));
        blackbox_center.push([x+Math.floor(w/2),y+Math.floor(h/2)]);
    });
    // console.log(blackbox_center);
    blackbox_label=parsedHTML.querySelectorAll('.qc-blackbox-label');
    blackbox_label.forEach((el,i)=>{
        el.remove();
        el.setAttribute('x',blackbox_center[i][0]);
        el.setAttribute('y',blackbox_center[i][1]);
        parsedHTML.appendChild(el);
    });
    container.appendChild(parsedHTML);
    // create link to quirk
    var quirkData = circuit.exportQuirk(true);
    var quirkURL = "http://algassert.com/quirk#circuit=" + JSON.stringify(quirkData);
    var quirkLink = document.getElementById(figId+"-quirk");
    quirkLink.setAttribute("href", quirkURL);
    // generate distribution
    possible_states = Object.entries(prob_report(probabilities)).sort((a, b) => a[0].localeCompare(b[0]));
    reportDiv = document.getElementById(figId+'-report');
    possible_states.forEach((item)=>{
        var lineElement = document.createElement("div");
        var line = "|"+item[0]+"⟩ "+item[1];
        lineElement.textContent =line;
        reportDiv.appendChild(lineElement);
    });
}

prob_report = function(probabilities){
    var state_strings = generateCombinations(probabilities.length).sort();
    var states = {};
    var nq = probabilities.length-1;
    state_strings.forEach(function(digits){
        ps =[];
        digits.split("").forEach((s,i)=>{
            if(s=='1'){
                ps.push(probabilities[nq-i]);
            }else{
                ps.push(1-probabilities[nq-i]);
            }
        });
        p = Math.round(ps.reduce((a,b)=>{return a*b})*10000)/100;
        if (p>0){
            states[digits]= generateString(Math.floor(p/5))+p.toString()+'%';
        }
    });

    return states;

}

function generateCombinations(n) {
    var states = [];
    function generate(current, length) {
        if (length === 0) {
            states.push(current);
        } else {
            generate(current + '0', length - 1);
            generate(current + '1', length - 1);
        }
    }

    generate('', n);
    return states
}

const generateString = (x) => "=".repeat(x) + "|".repeat(20 - x);
