// Déclare un tableau contenant plusieurs étudiants respectant l’interface précédente.
// Écris une fonction pour afficher la liste de tous les étudiants avec leur nom complet.

interface Etudiant{
    nom: string;
    prenom: string;
    age: number;
}

let etudiants: Etudiant[] = [
    { nom: "Marie", prenom: "WADD", age: 34 },
    { nom: "Pierre", prenom: "Dupont", age: 22 },
    { nom: "Léa", prenom: "Martin", age: 28 }
];

function afficherEtudiants(etudiants: Etudiant[]): void {
    etudiants.forEach(etudiant => {
        console.log(`Nom complet: ${etudiant.prenom} ${etudiant.nom}`);
    });
}

afficherEtudiants(etudiants);
