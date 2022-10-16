//Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
//que o segundo será o número de vezes que haverá repetição. Um array será retornado.

const repetira = (iraRepetir, numeroDeVezes) => {
    let array = []

    for (i = 0; i < numeroDeVezes; i++) {
        array.push(iraRepetir)
    }

    return array
}
console.log(repetira('Vitor', 10))
