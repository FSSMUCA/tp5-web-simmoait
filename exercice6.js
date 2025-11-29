let sommePairs = 0;
let sommeImpairs = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        // Nombre pair
        sommePairs += i;
    } else {
        // Nombre impair
        sommeImpairs += i;
    }
}

console.log(`Somme des nombres pairs entre 1 et 50 : ${sommePairs}`); // 650
console.log(`Somme des nombres impairs entre 1 et 50 : ${sommeImpairs}`); // 625