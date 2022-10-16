/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

const multiplicar = (primeiroValor, segundoValor) => {
    let first = primeiroValor

    for (i = 1; i < segundoValor; i++) {
        first += primeiroValor
    }
    return first
}
console.log(multiplicar(20, 6))