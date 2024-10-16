// Déclare un tableau contenant plusieurs étudiants respectant l’interface précédente.
// Écris une fonction pour afficher la liste de tous les étudiants avec leur nom complet.
var etudiants = [
    { nom: "Marie", prenom: "WADD", age: 34 },
    { nom: "Pierre", prenom: "Dupont", age: 22 },
    { nom: "Léa", prenom: "Martin", age: 28 }
];
function afficherEtudiants(etudiants) {
    etudiants.forEach(function (etudiant) {
        console.log("Nom complet: ".concat(etudiant.prenom, " ").concat(etudiant.nom));
    });
}
afficherEtudiants(etudiants);
