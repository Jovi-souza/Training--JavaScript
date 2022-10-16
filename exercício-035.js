/*
Faça um programa que filtre uma lista de strings e retorne uma lista apenas com o nome de seus amigos.

Se um nome tem exatamente 4 letras, pode ter certeza que tem que ser um amigo seu! Caso contrário, pode ter certeza que ele não é...

Ex: Entrada = ["Ryan", "Kieran", "Jason", "Você"], Saída = ["Ryan", "Você"]

ou seja

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Nota: mantenha a ordem original dos nomes na saída.
*/

const meusAmigos = nomeAmigo => {
    
    const filtrarAmigo = nomeAmigo.filter( nome => {
        const contarLetras = nome.length
        if( contarLetras == 4) {
            return nome
        }
    })

    console.log(filtrarAmigo)
}

meusAmigos(["Ryan", "Kieran", "Mark"])