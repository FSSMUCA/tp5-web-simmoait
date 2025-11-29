let nombre = Number(prompt("Veuillez entrer un nombre pour le classer :"));

if (isNaN(nombre)) {
    console.log("Ceci n'est pas un nombre valide.");
} else if (nombre < 0) {
    console.log("Nombre négatif");
} else {
    if (nombre <= 10) {
        console.log("Petit");
    } else if (nombre <= 50) {
        console.log("Moyen");
    } else {
        if (nombre <= 100){
            console.log("Grand");
        } else {
            console.log("Très grand");
        }
    }
}