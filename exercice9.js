function factorielle(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorielle(n - 1);
}

console.log(`Factorielle de 5 : ${factorielle(5)}`); // 120
console.log(`Factorielle de 0 : ${factorielle(0)}`); // 1
console.log(`Factorielle de 7 : ${factorielle(7)}`); // 5040