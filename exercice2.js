let prenom = "Sara";
let age = 22;

// 1. Construire la phrase
let phrase = `Je m'appelle ${prenom} et j'ai ${age} ans.`;
console.log(phrase);
// Je m'appelle Sara et j'ai 22 ans.

// 2. Modifier l’âge en 23 sans recréer toute la chaîne
age = 23;
let debut_phrase = `Je m'appelle ${prenom} et j'ai `;
let fin_phrase = ` ans.`;
let nouvelle_phrase = debut_phrase + age + fin_phrase;
console.log(nouvelle_phrase);
// Je m'appelle Sara et j'ai 23 ans.