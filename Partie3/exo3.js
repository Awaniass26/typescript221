// Écris une fonction qui prend un prénom et un âge en paramètre, mais où l’âge est optionnel.
// Si l’âge est fourni, la fonction doit afficher "Bonjour [prénom], tu as [âge] ans".
//  Sinon, afficher seulement "Bonjour [prénom]".
function param(prenom, age) {
    if (age !== undefined) {
        console.log("Bonjour ".concat(prenom, ", tu as ").concat(age, " ans"));
    }
    else {
        console.log("Bonjour ".concat(prenom));
    }
}
param("Bob");
param("Alice", 25);
