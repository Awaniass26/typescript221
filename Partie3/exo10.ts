// Crée un alias de type pour représenter une liste de numéros de téléphone (tableau de chaînes de caractères).
// Écris une fonction qui prend cette liste en paramètre et affiche tous les numéros.
// Alias de type pour une liste de numéros de téléphone
type ListeDeNumeros = string[];
function afficherNumeros(liste: ListeDeNumeros): void {
    liste.forEach((numero) => {
        console.log(`Numéro: ${numero}`);
    });
}
let numeros: ListeDeNumeros = ["7777777","8888888","555557777","77777888"];


afficherNumeros(numeros);
