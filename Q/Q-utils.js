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
    possible_states = []
    circuit.stateAsString(true).split('\n').forEach((el)=>{
        if (el!=""){
            var lst=el.split('i')[1].split('\t');
            var p = parseFloat(lst[1])
            possible_states.push(lst[0].split('>').join('⟩')+" "+generateString(Math.floor(p/5))+(Math.round(p*100)/100).toString()+'%');
        }
    });
    reportDiv = document.getElementById(figId+'-report');
    possible_states.forEach((item)=>{
        var lineElement = document.createElement("div");
        // var line = "|"+item[0]+"⟩ "+item[1];
        lineElement.textContent =item;
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

// helper function for generating Q.js evaluation results in figure caption
qjs_caption_results = function(circuit){
    if( circuit.name !== undefined ){
        const el = document.getElementById( circuit.name +'-report' )
        if( el ) {
            var divChildren = el.querySelectorAll("div");
            divChildren.forEach(function(divChild) {
                el.removeChild(divChild);
            });
            lines = circuit.report$().replace(/^\n+/, "").split('\n')
            lines.forEach(function(line) {
                var lineElement = document.createElement("div");
                var ket1 = line.indexOf("|")
                var ket2 = line.indexOf("⟩")
                var state = line.substring(ket1+1,ket2).split('').reverse().join('')
                if(state.length > 0) {
                    lineElement.textContent = line.substring(0,ket1)+"|"+state+line.substring(ket2,line.length);
                }
                else{
                    lineElement.textContent= line
                }
                el.appendChild(lineElement);
            });

        }
    }
}

// helper function for generating numbered equations and figures
eqn_fig_indices = function(){
    // Get all the div elements with the class 'numbered-equation'
    var equationDivs = document.querySelectorAll('.numbered-equation');
    var eqnNumber = 1
    // Loop through the equation divs and add/update the 'render_count' attribute
    equationDivs.forEach(function(div) {
        var label = document.createElement('span');
        label.className = 'equation-label';
        label.textContent = '(' + eqnNumber + ')';
        div.insertBefore(label, div.firstChild.nextSibling);
        div.setAttribute('render_count', eqnNumber);
        eqnNumber+=1;
    });

    // Prepend Fig. x to class of 'numbered-fig'
    var figDivs = document.querySelectorAll('.numbered-fig');
    var figNumber = 1
    figDivs.forEach(function(fig) {
        var spanChild = fig.querySelector('span'); // Find <span> child
        
        if (fig.classList.contains('jxgbox')) {
            spanChild = fig.nextElementSibling;
            var spanChild = spanChild.querySelector('span.marginnote');
        }
        spanChild.insertAdjacentHTML("afterbegin",'Fig. ' + figNumber.toString() + ' ');
        fig.setAttribute('render_count', figNumber);
        figNumber+=1;
        
    });
}

// helper function for generating references to figures and equations
eqn_fig_refs = function(){
    // create references to equations or figures
    var divs = document.querySelectorAll("div[render_count]");
    var refs = document.querySelectorAll("ref");

    if (refs) {
        refs.forEach(function(ref) {
            var refId = ref.getAttribute("fig")||ref.getAttribute("eqn");

            divs.forEach(function(div) {
                var divId = div.getAttribute("id");
                if (divId==refId || divId==refId+"-container"){
                    var count = div.getAttribute("render_count");
                    var link = document.createElement("a");
                    link.href = "#" + divId;
                    if (ref.hasAttribute('eqn')){
                        link.textContent = "Eqn. " + count;
                    } else if(ref.hasAttribute('fig')){
                        link.textContent = "Fig. " + count;
                    } else{
                        link.textContent = divId;
                    }
                    ref.parentNode.insertBefore(link, ref);
                }
            });
        });
    }
}

// helper functions for rendering MathJax expressions
function findMjxContainersInMarginNotes() {
    var marginNoteSpans = document.querySelectorAll("span.marginnote");
    marginNoteSpans.forEach(function(marginNoteSpan) {
        var mjxContainers = marginNoteSpan.querySelectorAll(".MathJax");
        mjxContainers.forEach(function(mjxContainer) {
            if(mjxContainer.getAttribute('display')!=null){mjxContainer.setAttribute('display',false)};
        });
    });
}

// helper function for generating word index
createIndex = function(){
    // Find the <h2>Index</h2> element by its text content
    const indexHeaderElement = Array.from(document.querySelectorAll('h2')).find(element => element.textContent === 'Index');
    if (indexHeaderElement) {
        // Remove any existing tables
        const existingTable = indexHeaderElement.nextElementSibling;
        if (existingTable && existingTable.tagName === 'TABLE') {
            existingTable.remove();
        }
        const entries = document.querySelectorAll('strong em');
         // Sort the entries alphabetically by their text content
        const sortedEntries = Array.from(entries).sort((a, b) => {
            const textA = a.textContent.toLowerCase();
            const textB = b.textContent.toLowerCase();
            return textA.localeCompare(textB);
        });
        const table = document.createElement('table');
        table.setAttribute('class','indexTable');

        let cols = 2; // Default to 2 columns

        if (window.innerWidth > 760) {
        cols = 3;
        }
        if (window.innerWidth > 1000) {
        cols = 4;
        }

        let row = document.createElement('tr');
        let colCount = 0;

        sortedEntries.forEach((entry, index) => {
            entry.setAttribute('id',entry.textContent);
            if (colCount === 0) {
                row = document.createElement('tr');
            }

            const cell = document.createElement('td');
            const link = document.createElement('a');
            link.textContent = entry.textContent;
            link.href = `#${entry.id}`;
            cell.appendChild(link);
            row.appendChild(cell);
            colCount++;

            if (colCount === cols || index === entries.length - 1) {
                table.appendChild(row);
                colCount = 0;
        }
        });
        indexHeaderElement.insertAdjacentElement('afterend', table);
    }
}