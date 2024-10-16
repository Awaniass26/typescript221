// Écris une fonction générique qui prend un tableau de n’importe quel type 
// et retourne le premier élément du tableau.
// function tab<T>(nombres: [T]): T[] {
//     return nombres.length > 0 ? nombres[0] ;
// }
// let nombres = [10, 20, 30];
// console.log(tab(nombres));


function premierElement<T>(tableau: T[]): T | undefined {
    return tableau.length > 0 ? tableau[0] : undefined;
}

let nombres = [10, 20, 30];
console.log(premierElement(nombres));  