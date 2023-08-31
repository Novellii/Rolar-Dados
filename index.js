$(document).ready(function () {
    $("#rolar").click(function () {
        var opcao = $('#dado').val();
        var resultado = 0;

        var speed = 20;

        function incEltNbr(id) {
            var elt = document.getElementById(id);
            var endNbr = Number(document.getElementById(id).innerHTML);
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


        if (opcao == 'option01') {
            resultado = Math.floor(Math.random() * 100) + 1;
        }
        else if (opcao == 'option02') {
            resultado = Math.floor(Math.random() * 50) + 1;
        }
        else if (opcao == 'option03') {
            resultado = Math.floor(Math.random() * 20) + 1;
        }
        else if (opcao == 'option04') {
            resultado = Math.floor(Math.random() * 12) + 1;
        }
        else if (opcao == 'option05') {
            resultado = Math.floor(Math.random() * 10) + 1;
        }
        else if (opcao == 'option06') {
            resultado = Math.floor(Math.random() * 8) + 1;
        }
        else if (opcao == 'option07') {
            resultado = Math.floor(Math.random() * 6) + 1;
        }
        else {
            resultado = Math.floor(Math.random() * 4) + 1;
        }
        $("#TextoResultado").text(resultado);
        function incNbr() {
            incEltNbr("TextoResultado");
        }

        incEltNbr("TextoResultado");
    });
});
