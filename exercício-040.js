// Bem-vindo. Neste kata, você é solicitado a elevar ao quadrado cada dígito de um número e concatená-los.

// Por exemplo, se executarmos 9119 através da função, 811181 sairá, porque 9 2 é 81 e 1 2 é 1.

// Nota: A função aceita um inteiro e retorna um inteiro

const elevandoAoQuadrado = numeros => {
    const toString = numeros.toString()
    const paraArr = Array.from(toString)

    const mapeandoArr = paraArr.map( num => num * num )
    const usandoReduce = mapeandoArr.reduce( (ac, at) => `${ac}${at}`)
    const toNumber = Number.parseInt(usandoReduce)

    console.log(toNumber)
}

elevandoAoQuadrado(9119)