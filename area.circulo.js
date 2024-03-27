// Calcule -> pi * raio * raio OBS: pi vale 3.14

// IMPORTAÇÃO 
const prompt = require("prompt-sync")()


// ENTRADA
let raio = Number(prompt("Digite o valor do raio:"))
const PI = 3.14



// PROCESSAMENTO
let area_circulo = 3.14 * raio ** 2 

// SAÍDA
console.log("A área do círculo é:", area_circulo)
