// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
// ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
// exemplo a seguir:
// Exemplo:
// inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}

const inverter = objeto => {
    let valores = Object.entries(objeto)

    // let reverse = valores.map( arr => arr.reverse())

    // let obj = Object.fromEntries(reverse)
    
    const novoArr = []
    for( let i = 0; i < valores.length; i++) {
        novoArr.push([valores[i][1], valores[i][0]])
    }
    
    let obj = Object.fromEntries(novoArr)
    console.log(obj)
}

inverter({ a: 1, b: 2, c: 3})