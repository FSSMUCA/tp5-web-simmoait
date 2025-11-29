let x = "150";
let y = 150;
let z = true;

// 1. Afficher le type de chaque variable
console.log(`Type de x ("${x}") : ${typeof x}`); // string
console.log(`Type de y (${y}) : ${typeof y}`); // number
console.log(`Type de z (${z}) : ${typeof z}`); // boolean

// 2. Convertir x en nombre et afficher son nouveau type
let x_en_nombre = Number(x);
console.log(`x converti en nombre (${x_en_nombre}). Nouveau type : ${typeof x_en_nombre}`); // number
  
// C'est parce que JavaScript est un langage à typage dynamique,
//  ce qui signifie que le type d'une variable n'est pas
//  déclaré à l'avance mais est déterminé et peut changer
//  au moment de l'exécution en fonction de la valeur qu'elle
//  contient.