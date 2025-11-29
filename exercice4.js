let min = Number(prompt("Entrez le nombre minimal : "));
let max = Number(prompt("Entrez le nombre maximal : "));

let debut = Math.min(min, max);
let fin = Math.max(min, max);

console.log(`Affichage des multiples entre ${debut} et ${fin} :`);

for (let i = debut; i <= fin; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} : Five&Three`);
    } else if (i % 3 === 0) {
        console.log(`${i} : Three`);
    } else if (i % 5 === 0) {
        console.log(`${i} : Five`);
    } else {
        // Afficher juste le nombre s'il n'est multiple ni de 3 ni de 5
        console.log(i);
    }
}