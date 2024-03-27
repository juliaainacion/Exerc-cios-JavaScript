// Elabore um algoritmo que calcule a média entre as duas notas de um aluno e diga se ele está aprovado. 
//Saiba que o critério de aprovação é ter a nota maior ou igual a 6.0.

// IMPORTAÇÃO 
const prompt = require("prompt-sync")()
// ENTRADA
let nota1 = Number(prompt("Digite a primeira nota: "))
let nota2 = Number(prompt("Digite a segunda nota: "))
//PROCESSAMENTO 
let media = (nota1 + nota2) / 2
// SAÍDA
if (media >= 6.0)
console.log("Aprovado", media.toFixed)

