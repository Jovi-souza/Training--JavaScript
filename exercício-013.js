// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

let array = ['java', 15, "pedro", 37, 25]

let filtrarNmeros = function () {
    return array.filter(Number)
}

console.log(filtrarNmeros())