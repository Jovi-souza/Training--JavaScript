// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.
let array = [2, 6, 15, 7, 54, 24, 45]

let numPar = array.filter( (key, value) => key % 2 == 0 && value % 2 == 0 )

console.log(numPar)
