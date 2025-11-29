// Boucle (Itérative)
function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}
// Récursion
function sommeRecursive(n) {
    if (n === 1) {
        return 1;
    }
    return n + sommeRecursive(n - 1);
}
console.log(`Somme itérative (10) : ${sommeIterative(10)}`);   // 55
console.log(`Somme récursive (10) : ${sommeRecursive(10)}`); // 55