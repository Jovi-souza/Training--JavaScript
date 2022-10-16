let pessoa = {
    nome: 'vitor',
    idade: 20,
    cidade: 'esperança'
}

function RetornarArray() {
    return console.log(Object.entries(pessoa))
}

RetornarArray()