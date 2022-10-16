// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.

const simboloMais = (get) => {
    let mais = ''

    for (i = 0; i < get; i++) {
        let add = '+'
        mais += add
    }

    return mais
}
console.log(simboloMais(5))
