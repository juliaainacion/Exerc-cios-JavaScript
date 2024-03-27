// Exercício 2 - Calcular a hipotenusa de um triângulo retângulo utilizando o Teorema de Pitágoras. 
// hipotenusa? = catOposto? + catAdjacente?
// ENTRADAS: catOposto = 3, catAdjacente = 4
// SAÍDA: hipotenusa = 5


// IMPORTAÇÃO 
const prompt = require("prompt-sync")()


// ENTRADA
let catOposto = Number(prompt(" Digite o valor do cateto oposto:"))
let catAdjacente = Number(prompt(" Digite o valor do cateto adjacente:"))

// PROCESSAMENTO 
h = (catOposto **2 + catAdjacente **2)**0.5 

// SAÍDA
console.log("O valor da hipotenusa é: ", h)  
console.log("O valor do cateto oposto  é: ", catOposto/ h)  
console.log("O valor do cateto adjacente é: ", catAdjacente/ h)  
console.log("O valor do cateto oposto dividido pelo cateto adjacente é: ", catOposto/ catAdjacente)  
