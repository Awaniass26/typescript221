// Ajoute un constructeur à la classe précédente pour initialiser les propriétés.
// Utilise les modificateurs d’accès public et private sur certaines propriétés.
var Voiture2 = /** @class */ (function () {
    function Voiture2(marque, annee) {
        this.marque = marque;
        this.annee = annee;
    }
    Voiture2.prototype.afficherInfo = function () {
        return ("La marque est ".concat(this.marque, " ").concat(this.annee));
    };
    return Voiture2;
}());
var voiture3 = new Voiture("BMW", 2020);
console.log(voiture1.afficherInfo());
