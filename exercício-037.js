/*
Retorna o número (contagem) de vogais na string fornecida.

Consideraremos a, e, i, o, u como vogais para este Kata (mas não y).

A string de entrada consistirá apenas em letras minúsculas e/ou espaços.
*/ 

const contagemDeVogais = palavra => {
    const palavraParaArr = Array.from(palavra)

    const contarVogais = palavraParaArr.filter( letra => {

        const verificar = 
        letra == 'a' || 
        letra == 'e' || 
        letra == 'i' || 
        letra == 'o' || 
        letra == 'u'

        return verificar
        
    })

    console.log(contarVogais.length)
}

contagemDeVogais('carlos')