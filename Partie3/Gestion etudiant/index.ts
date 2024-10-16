
import { ajouterEtudiant, afficherEtudiants } from './gestionEtudiant';
import { Etudiant } from './etudiant';

console.log("Liste des étudiants:");
afficherEtudiants();

const etudiantAajouter: Etudiant = {
    id: 5,
    nom: "Sarr",
    prenom: "Aissatou",
    age: 19,
    filiere: "Biologie"
};

ajouterEtudiant(etudiantAajouter);

console.log("\nListe des étudiants après ajout:");
afficherEtudiants();
