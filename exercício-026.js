/*
Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
Exemplos:
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
*/ 

const contarCaractere = (caractere, frase) => {

    const caractereToUpper = caractere.toUpperCase()
    const fraseToUpper = frase.toUpperCase()

    const contador = fraseToUpper.split(caractereToUpper).length
    
    console.log(contador - 1)
}

contarCaractere("r", "A sorte favorece os audazes")