// Crée une énumération pour représenter les jours de la semaine.
// Écris une fonction qui prend un jour en paramètre et affiche s’il s’agit d’un jour de semaine ou d’un week-end.
// Définition de l'énumération pour les jours
enum Jour {
    Lundi,
    Mardi,
    Mercredi,
    Jeudi,
    Vendredi,
    Samedi,
    Dimanche
  }
  

  function jourpa(jour: Jour): void {
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
  