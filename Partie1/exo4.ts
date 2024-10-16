// Crée une classe Voiture avec les propriétés marque (string) et année (number).
//  Ajoute une méthode afficherInfo qui affiche les informations sur la voiture. 
// Instancie un objet de la classe et appelle la méthode.

class Voiture{
    public marque: string;
    public anne: number;

    constructor(marque: string, anne:number) {
        this.marque = marque;
        this.anne=anne;
    }
afficherInfo(): void {
        console.log(`Marque: ${this.marque}`);
        console.log(`Année: ${this.anne}`);
    }
}

const voiture1 = new Voiture("Toyota", 2020);
voiture1.afficherInfo()


