//Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
//exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

// const mes = ['Janeiro', 'Fevereiro',
//     'Março', 'Abril',
//     'Maio', 'Junho',
//     'julho', 'Agosto',
//     'Setembro', 'Outubro',
//     'Novembro', 'Dezembro']

// imprimirNomeDoMes = (nome) => {
//     console.log(nome)
// }
// mes.forEach(imprimirNomeDoMes)

const nomeDoMes = (mes) => {
    if (mes == 1) {
        return "Janeiro"
    } else if (mes == 2) {
        return "Fevereiro"
    } else if (mes == 3) {
        return "Março"
    } else if (mes == 4) {
        return "Abril"
    } else if (mes == 5) {
        return "Maio"
    } else if (mes == 6) {
        return "Junho"
    } else if (mes == 7) {
        return "Julho"
    } else if (mes == 8) {
        return "Agosto"
    } else if (mes == 9) {
        return "Setembro"
    } else if (mes == 10) {
        return "Outubro"
    } else if (mes == 11) {
        return "Novembro"
    } else if (mes == 12) {
        return "Dezembro"
    }
}

console.log(nomeDoMes(5))
console.log(nomeDoMes(1))