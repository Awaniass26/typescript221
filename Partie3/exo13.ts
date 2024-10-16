// Crée une classe Animal avec une méthode parler().
// Crée une classe Chien qui hérite de Animal et redéfinit la méthode parler().

class Animal{
    nom: string;

    constructor(nom: string) {
        this.nom = nom;
    }
    parler(): void {
        console.log(`${this.nom} fait du bruit.`);
    }
}

class Chien extends Animal{
    parler(): void {
        console.log(`${this.nom} fait du bruit.`);
    }
}
let Animal1= new Animal("KOALA")
Animal1.parler()