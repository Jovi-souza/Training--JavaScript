//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo

const maiorOuIgual = (valorA, valorB) => {
    if (valorA === valorB || valorA > valorB) {
        return true
    } else if (valorB > valorA) {
        return false
    }
}

console.log(maiorOuIgual(0, 0));