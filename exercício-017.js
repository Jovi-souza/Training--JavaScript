// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
let array = [8, 10, 15, 5]

const SomaArray = array.reduce((result, proximo) => {
    return result + proximo
})

console.log(SomaArray)


