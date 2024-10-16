// Définis une interface pour un étudiant avec les propriétés nom, prenom, et age.
// Crée un objet étudiant et affiche ses informations dans la console.
interface Etudiant{
    nom: string;
    prenom: string;
    age: number;
}

let marie: Etudiant= {
    nom: "Marie",
    prenom: "WADD",
    age: 34

};

console.log(`Nom: ${marie.nom}`);
console.log(`Prénom: ${marie.prenom}`);
console.log(`Âge: ${marie.age}`);


