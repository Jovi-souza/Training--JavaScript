const produtos = [
    { nome: 'jornal', categoria: 'informação', preco: 89.99},
    { nome: 'cinema', categoria: 'entreterimento', preco: 150}
]

let despesasTotais = () => {

    let GetPreco = produtos[0].preco + produtos[1].preco

    return console.log(GetPreco)
}

despesasTotais()


let produtos2 = ([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
])

let despesasTotais2 = () => {

    let GetPreco = produtos2[0].preco + produtos2[1].preco

    return console.log(GetPreco)
}

despesasTotais2()