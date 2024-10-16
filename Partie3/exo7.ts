// Modifie l'interface étudiant pour y inclure une méthode afficherInfo qui retourne les informations de l’étudiant.
// Implémente cette interface et teste la méthode.
// Déclaration de l'interface Etudiant avec la méthode afficherInfo
interface Etudiant {
    nom: string;
    prenom: string;
    age: number;
    afficherInfo: () => string;
}

let marie: Etudiant = {
    nom: "Marie",
    prenom: "WADD",
    age: 34,
    
    afficherInfo: function(): string {
        return `Nom complet: ${this.prenom} ${this.nom}, Âge: ${this.age}`;
    }
};


console.log(marie.afficherInfo());
