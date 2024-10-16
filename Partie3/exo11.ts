// Crée une classe Voiture avec des propriétés marque et annee.
// Ajoute une méthode afficherInfo pour afficher ces information

class Voiture{
    marque: string;
    annee: number;

    constructor(marque:string, annee:number){
        this.marque=marque;
        this.annee=annee;
    }

    afficherInfo():string{
        return(`La marque est ${this.marque} ${this.annee}` )
    }
}
const voiture1= new Voiture("BMW",2020)
console.log(voiture1.afficherInfo())