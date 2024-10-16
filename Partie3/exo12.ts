// Ajoute un constructeur à la classe précédente pour initialiser les propriétés.
// Utilise les modificateurs d’accès public et private sur certaines propriétés.

class Voiture2{
    public marque: string;
    public annee: number;

    constructor(marque:string, annee:number){
        this.marque=marque;
        this.annee=annee;
    }

    afficherInfo():string{
        return(`La marque est ${this.marque} ${this.annee}` )
    }
}
const voiture3= new Voiture2("BMW",2020)
console.log(voiture3.afficherInfo())