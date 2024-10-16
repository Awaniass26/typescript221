// Crée une interface Personne avec les propriétés nom (string), âge (number),
//  et estEtudiant (boolean). Écris ensuite une fonction qui prend un objet de
// type Personne en paramètre et affiche ses propriétés.
function objet(personne) {
    console.log("le nom est ".concat(personne.nom));
    console.log("l'age' est ".concat(personne.age));
    console.log("le statut est ".concat(personne.estEtudiant));
}
var personne1 = {
    nom: "Awa",
    age: 30,
    estEtudiant: false,
};
objet(personne1);
