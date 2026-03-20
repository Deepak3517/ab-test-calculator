function normalCDF(x) {
    const t = 1 / (1 + 0.2316419 * Math.abs(x));
    const d = 0.3989423 * Math.exp(-x * x / 2);
    const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.7814779 + t * (-1.8212560 + t * 1.3302744))));
    return x > 0 ? 1 - p : p;
}

function calculate() {
    let controlVisitors = document.getElementById("control-visitors").value;
    let controlConversions = document.getElementById("control-conversion").value;
    let variantVisitors = document.getElementById("variant-visitors").value;
    let variantConversions = document.getElementById("variant-conversion").value;

    console.log(controlVisitors, controlConversions, variantVisitors, variantConversions);

let n1 = parseFloat(controlVisitors);
let x1 = parseFloat(controlConversions);
let n2 = parseFloat(variantVisitors);
let x2 = parseFloat(variantConversions);

let p1 = x1/n1
let p2 = x2/n2
console.log(p1, p2);


let pPooled = (x1+x2) / (n1+n2)
let se = Math.sqrt( pPooled * (1 - pPooled) * (1/n1 + 1/n2) )
console.log(pPooled, se);
 
let z = (p2 - p1) / se
console.log(z)
let pValue = 2 * (1 - normalCDF(Math.abs(z)));
console.log(pValue);

let alpha = parseFloat(document.getElementById("significance").value);
let zCrit;
if(alpha === 0.05) {
    zCrit = 1.96;
} else if(alpha === 0.01) {
    zCrit = 2.576;
} else {
    zCrit = 1.645;
}

let seDiff = Math.sqrt(  p1*(1-p1)/n1 + p2*(1-p2)/n2 )
let ciLower = (p2 - p1) - zCrit * seDiff
let ciUpper = (p2 - p1) + zCrit * seDiff
console.log(ciLower, ciUpper);

let verdict = pValue < alpha ? "Significant ✓" : "Not Significant ✗";
let verdictEl = document.getElementById("verdict");
verdictEl.innerText = verdict;

if(pValue < alpha) {
    verdictEl.className = "significant";
} else {
    verdictEl.className = "not-significant";
}


document.getElementById("z-score").innerText = z.toFixed(4);
document.getElementById("p-value").innerText = pValue.toFixed(4);
document.getElementById("ci").innerText = "[" + ciLower.toFixed(4) + ", " + ciUpper.toFixed(4) + "]";
document.getElementById("verdict").innerText = verdict;


}