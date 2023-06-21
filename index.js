document.getElementById("TextoResultado").innerHTML = Math.floor(Math.random() * 20) + 1;

var speed = 20;

function incEltNbr(id) {
    elt = document.getElementById(id);
    endNbr = Number(document.getElementById(id).innerHTML);
    incNbrRec(0, endNbr, elt);
}

function incNbrRec(i, endNbr, elt) {
    if (i <= endNbr) {
        elt.innerHTML = i;
        setTimeout(function () {
            incNbrRec(i + 1, endNbr, elt);
        }, speed);
    }
}

function incNbr() {
    incEltNbr("TextoResultado");
}

incEltNbr("TextoResultado");

function roll20() {
    return Math.random() * 21 | 1;
}

function resultado20() {
    javascript: window.top.location.reload(true)
}
