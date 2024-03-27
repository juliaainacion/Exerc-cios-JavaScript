// Calcule a área de um losango -> (dmaior * dmenor) / 2

// IMPORTAÇÃO 
const prompt = require("prompt-sync")()

// ENTRADA
let diagonalMaior = Number(prompt("Digite o valor da diagonal maior diagonal do losângulo: "))
let diagonalMenor = Number(prompt("Digite o valor da diagonal menor diagonal do losângulo: "))

//PROCESSAMENTO
let areaLosango = (diagonalMaior * diagonalMenor) / 2

// SAÍDA
console.log("A área do losango é:", areaLosango)
