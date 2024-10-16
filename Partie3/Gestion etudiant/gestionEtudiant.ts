
import { Etudiant } from './etudiant';
import { listeEtudiants } from './listeEtudiant';

export function ajouterEtudiant(nouvelEtudiant: Etudiant): void {
    listeEtudiants.push(nouvelEtudiant);
}

export function afficherEtudiants(): void {
    listeEtudiants.forEach((etudiant) => {
        console.log(`ID: ${etudiant.id}, Nom: ${etudiant.nom}, Prénom: ${etudiant.prenom}, Age: ${etudiant.age}${etudiant.filiere ? ', Filière: ' + etudiant.filiere : ''}`);
    });
}
