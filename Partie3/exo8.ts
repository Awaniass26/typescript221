// Crée une interface Personne avec des propriétés de base.
// Définis une nouvelle interface Professeur qui hérite de Personne et ajoute une propriété matiere.
// Crée un objet Professeur et affiche ses informations.
interface Personne{
    nom:string,
    prenom: string,
    adresse: string,
    age: number,
}

interface Professeur extends Personne{
    matiere: string,
}

let prof1: Professeur={
    nom: "Saliou",
    prenom: "Gaye",
    adresse: "Ouakam",
    age: 30,
    matiere: "maths",
   
}
console.log(`Nom: ${prof1.prenom} ${prof1.nom}`);
console.log(`Âge: ${prof1.age}`);
console.log(`Adresse: ${prof1.adresse}`);
console.log(`Matière enseignée: ${prof1.matiere}`);