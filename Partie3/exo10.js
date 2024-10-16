function afficherNumeros(liste) {
    liste.forEach(function (numero) {
        console.log("Num\u00E9ro: ".concat(numero));
    });
}
var numeros = ["7777777", "8888888", "555557777", "77777888"];
afficherNumeros(numeros);
