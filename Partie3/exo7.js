var marie = {
    nom: "Marie",
    prenom: "WADD",
    age: 34,
    afficherInfo: function () {
        return "Nom complet: ".concat(this.prenom, " ").concat(this.nom, ", \u00C2ge: ").concat(this.age);
    }
};
console.log(marie.afficherInfo());
