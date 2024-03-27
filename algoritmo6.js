//EXERCÍCIO 6
//Modifique o arquivo no qual você escreveu o algoritmo da fórmula de Bhaskara, para que atenda às seguintes condições:
//• O coeficiente A não pode ser igual a 0; caso isto aconteça, emita a mensagem "Esta não é uma equação do segundo grau" e encerre o programa.
//• O delta não pode ser menor do que 0; caso isto aconteça, emita a mensagem "Esta equação não possui raízes reais, ou seja, suas raízes são números complexos".
const prompt = require("prompt-sync")()

//ENTRADA
let a = Number(prompt("Digite o coeficiente a da equação: "))
let b = Number(prompt("Digite o coeficiente b da equação: "))
let c = Number(prompt("Digite o coeficiente c da equação: "))

//PROCESSAMENTO
if (a === 0) {
    console.log("Esta não é uma equação do segundo grau.")
} else {
    let delta = b * b - 4 * a * c

    if (delta < 0) {
        console.log("Esta equação não possui raízes reais, ou seja, suas raízes são números complexos.")
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        console.log("As raízes da equação são: x1 = " + x1.toFixed(2) + " e x2 = " + x2.toFixed(2))
    }
}

