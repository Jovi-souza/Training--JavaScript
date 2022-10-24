// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
// Exemplos:
// segundoMaior([12, 16, 1, 5]) // retornará 12
// segundoMaior([8, 4, 5, 6]) // retornará 6

const array = [12, 16, 1, 5]

const segundoMaior = array.reduce( (acomulador, atual) => {
  if( acomulador >= atual) {
    return acomulador
  }
  return atual
})

const teste = array.filter( num => num <= segundoMaior)

console.log(segundoMaior)
