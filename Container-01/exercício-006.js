/*
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".

*/
const inverso = (verificar) => {

    if (verificar === true) {
        return false
    } else if (verificar === false) {
        return true
    } else if (verificar > 0) {
        return verificar - verificar * 2
    } else if (verificar < 0) {
        return verificar - verificar * 2
    } else if (verificar != Number) {
        return "booleano ou números esperado, mas o parâmetro é do tipo string"
    }
}

console.log(inverso('carla'))