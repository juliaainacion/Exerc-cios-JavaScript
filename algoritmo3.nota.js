// Escreva um algoritmo que calcule a média entre as duas notas de um aluno e diga se ele está Aprovado, Reprovado ou de Recuperação
//• Aprovado = Média maior ou igual a 7.0
//• Recuperação = Média maior ou igual a 6.0 e menor do que 7.0
//• Reprovado = Média menor do que 6.0
//Cálculo da média: (Nota 1 + Nota 2) / 2


// IMPORTAÇÃO 
const prompt = require("prompt-sync")()

//ENTRADA 
let nota1 = Number(prompt("Digite a primeira nota: "))
let nota2 = Number(prompt("Digite a segunda nota: "))

//PROCESSAMENTO 
let media = (nota1 + nota2) / 2 

//SAÍDA
if (media >= 7.0)
console.log("Aprovado", media.toFixed)
else if (media <= 6.0 )
console.log("Recuperação", media.toFixed)
else 
console.log("Reprovado", media.toFixed)

