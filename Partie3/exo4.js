// Crée une énumération pour représenter les jours de la semaine.
// Écris une fonction qui prend un jour en paramètre et affiche s’il s’agit d’un jour de semaine ou d’un week-end.
// Définition de l'énumération pour les jours
var Jour;
(function (Jour) {
    Jour[Jour["Lundi"] = 0] = "Lundi";
    Jour[Jour["Mardi"] = 1] = "Mardi";
    Jour[Jour["Mercredi"] = 2] = "Mercredi";
    Jour[Jour["Jeudi"] = 3] = "Jeudi";
    Jour[Jour["Vendredi"] = 4] = "Vendredi";
    Jour[Jour["Samedi"] = 5] = "Samedi";
    Jour[Jour["Dimanche"] = 6] = "Dimanche";
})(Jour || (Jour = {}));
function jourpa(jour) {
    switch (jour) {
        case Jour.Samedi:
        case Jour.Dimanche:
            console.log("C'est un week-end.");
            break;
        default:
            console.log("C'est un jour de semaine.");
    }
}
jourpa(Jour.Samedi);
jourpa(Jour.Mardi);
