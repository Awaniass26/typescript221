// Crée une interface Personne avec les propriétés nom (string), âge (number),
//  et estEtudiant (boolean). Écris ensuite une fonction qui prend un objet de
// type Personne en paramètre et affiche ses propriétés.

interface Personne{
    nom: string;
    age: number;
    estEtudiant: boolean;
}
function objet(personne:Personne) :void{
        console.log(`le nom est ${personne.nom}`);
        console.log(`l'age' est ${personne.age}`);
        console.log(`le statut est ${personne.estEtudiant}`);
}

const personne1: Personne = {
    nom: "Awa",
    age: 30,
    estEtudiant: false,
};

objet(personne1);