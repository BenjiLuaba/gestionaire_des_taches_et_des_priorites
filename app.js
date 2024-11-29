taches = [];

function ajouterTache(nom, dateEcheance, priorite) {
    let checkPriorite = ["faible", "moyenne", "haute"]
    if (!checkPriorite.includes(priorite)) {
        priorite = checkPriorite[0];
    }
    let lesTaches = {
        nom: nom,
        dateEcheance: dateEcheance,
        priorite: priorite,
        estTerminee: false 
    }
    taches.push(lesTaches);
    return taches
        
}
let test = ajouterTache("Benjamin", 21, "moyenne");
console.log(test);

function afficherTaches() {
    console.log("Liste des tâches :");
    taches.forEach(tache => {
        let statut = tache.estTerminee ? "complète" : "non complète";
        console.log(`Nom : ${tache.nom}, Date d'échéance : ${tache.dateEcheance}, Priorité : ${tache.priorite}, Statut : ${statut}`);
    });
}
// Exemple d'utilisation
ajouterTache("Acheter des courses", "2024-12-01", "haute");
ajouterTache("Rendre le rapport", "2024-11-30", "moyenne");

// Afficher les tâches
afficherTaches();