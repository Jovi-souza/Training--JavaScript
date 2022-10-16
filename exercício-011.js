// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:

const receberPrimeiroEUltimoElemento = Array => {
    let first = Array[0]
    let last = Array[Array.length - 1]

    return [first, last]
    // return console.log(Array[0], Array[Array.length -1]) // essa op~çao estava me retornando o valor certo porém me retornava um terceiro valor undefined(aindan sei o motivo)
}

console.log(receberPrimeiroEUltimoElemento(['pedro', 7, 15, 38, 'Carlos', 37, 'marta']))

