// Crée une classe Voiture avec des propriétés marque et annee.
// Ajoute une méthode afficherInfo pour afficher ces information
var Voiture = /** @class */ (function () {
    function Voiture(marque, annee) {
        this.marque = marque;
        this.annee = annee;
    }
    Voiture.prototype.afficherInfo = function () {
        return ("La marque est ".concat(this.marque, "en").concat(this.annee));
    };
    return Voiture;
}());
var voiture1 = new Voiture("BMW", 2020);
console.log(voiture1.afficherInfo());
