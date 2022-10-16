/*
Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
*/ 

const removerVogais = palavra => {
    const remove = palavra.toLowerCase()
    .replace('a', '')
    .replace('e', '')
    .replace('i', '')
    .replace('o', '')
    .replace('u', '')
    
    console.log(remove.length, remove)
}

removerVogais('fundamentos')