// Exercício 1 - Calcular as duas raízes de uma equação do segundo grau pela fórmula de Bhaskara.
//delta = b ** 2 - 4ac
//x1 = - b - ( raiz(delta) / 2*a )
//x2 =  - b + ( raiz(delta) / 2*a )
// Saída: x1 = -1.00
// Saída: x2 = 0.33


// IMPORTAÇÃO 
const prompt = require("prompt-sync")()

// ENTRADA
let a = Number(prompt(" Digite o coeficinte  a da equação: "))
let b = Number(prompt(" Digite o coeficiente b da equação:"))
let c = Number(prompt(" Digite o coeficiente c da equação:"))


// PROCESSAMENTO 
let delta = b ** 2 - 4 * a * c 
    let x1 = ( (-1*b) - (Delta**0.5 ) ) / (2 * a)
    let x2 = ( (-1*b  + Math.sqrt(delta) ) ) / (2 * a)


//SAÍDA
console.log( x1.toFixed(2))
console.log(x2.toFixed(2)) 




