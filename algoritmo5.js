//EXERCÍCIO 5
//Crie um algoritmo que armazene um número digitado pelo usuário e verifique se ele é divisível por 2, por 3, por 5 ou por 6.
// Caso não seja divisível por nenhum destes números, emita uma outra mensagem informando a situação ao usuário.

// IMPORTAÇÃO 
const prompt = require("prompt-sync")()

//ENTRADA
let numero = Number(prompt("Digite um número:" ))
let mensagem = ""

//PROCESSAMENTO 
if (numero % 2 === 0)
mensagem += ("É divisível por 2")
f (numero % 3 === 0) 
    mensagem += ("É divisível por 3. ")
if (numero % 5 === 0) 
    mensagem += ("É divisível por 5. ")
if (numero % 6 === 0) 
    mensagem += ("É divisível por 6. ")
if (mensagem === "") 

//SAÍDA
if (mensagem === "") 
console.log("O número não é divisível por 2, 3, 5 ou 6")
else
console.log("O número" + mensagem)


