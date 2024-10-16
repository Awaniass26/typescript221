// Écris une fonction qui prend un prénom et un âge en paramètre, mais où l’âge est optionnel.
// Si l’âge est fourni, la fonction doit afficher "Bonjour [prénom], tu as [âge] ans".
//  Sinon, afficher seulement "Bonjour [prénom]".
function param(prenom: string, age?:number):void{
    if(age!==undefined){
        console.log(`Bonjour ${prenom}, tu as ${age} ans`)
    }else{
        console.log(`Bonjour ${prenom}`)
    }
}


  
param("Alice", 25); 
param("Bob");  