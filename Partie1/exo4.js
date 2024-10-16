// Crée une classe Voiture avec les propriétés marque (string) et année (number).
//  Ajoute une méthode afficherInfo qui affiche les informations sur la voiture. 
// Instancie un objet de la classe et appelle la méthode.
var Voiture = /** @class */ (function () {
    function Voiture(marque, anne) {
        this.marque = marque;
        this.anne = anne;
    }
    Voiture.prototype.afficherInfo = function () {
        console.log("Marque: ".concat(this.marque));
        console.log("Ann\u00E9e: ".concat(this.anne));
    };
    return Voiture;
}());
var voiture1 = new Voiture("Toyota", 2020);
voiture1.afficherInfo();
