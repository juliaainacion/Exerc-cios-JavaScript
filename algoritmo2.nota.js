
//Elabore um algoritmo que calcule a média entre as duas notas de um aluno e diga se ele está aprovado ou reprovado. Saiba que o critério 
//de aprovação é ter a nota maior ou igual a 6.0. O aluno que não atender a este critério está automaticamente reprovado.

// IMPORTAÇÃO
const prompt = require("prompt-sync")()

// ENTRADA
nota1 = Number(prompt("Digite a primeira nota:   "))
nota2 = Number(prompt("Digite a segunda nota: "))

// PROCESSAMENTO 
media = (nota1 + nota2) / 2
// SAÍDA 
if (media >= 6.0)
console.log("Aprovado", media.toFixed)
else
console.log("Reprovado", media.toFixed)
