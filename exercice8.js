function totalAvecRemise(total, remise) {
    let montantRemise = total * (remise / 100);
    let totalFinal = total - montantRemise;
    return totalFinal.toFixed(2);
}
let totalHT = Number(prompt("Entrez le total HT :"));
let remisePourcent = Number(prompt("Entrez la remise en pourcentage (%) :"));

let resultatFinal = totalAvecRemise(totalHT, remisePourcent);

console.log(`Total HT : ${totalHT} €`);
console.log(`Remise appliquée : ${remisePourcent} %`);
console.log(`Total final après remise : ${resultatFinal} €`);