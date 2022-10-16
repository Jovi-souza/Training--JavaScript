/*
Você vai receber uma palavra. Seu trabalho é retornar o caractere do meio da palavra. Se o comprimento da palavra for ímpar, retorne o caractere do meio. Se o comprimento da palavra for par, retorne os 2 caracteres do meio.

#Exemplos:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Entrada

Uma palavra (string) de comprimento 0 < str < 1000(Em javascript você pode obter um pouco mais de 1000 em alguns casos de teste devido a um erro nos casos de teste). Você não precisa testar para isso. Isso está aqui apenas para lhe dizer que você não precisa se preocupar com o tempo limite da sua solução.

#Resultado

O(s) caractere(s) do meio da palavra representada como uma string.
*/

const pegarMeio = palavra => {
    const palavraParaArr = Array.from(palavra)
    const PegarMeio = Number.parseInt(palavra.length / 2)
    const meioMenor = palavraParaArr[PegarMeio - 1]
    const meioMaior = palavraParaArr[PegarMeio]

    const verif = palavra.length % 2 === 0 ? `${meioMenor} ${meioMaior}` : meioMaior

    console.log(verif)
}

pegarMeio('borboletas')