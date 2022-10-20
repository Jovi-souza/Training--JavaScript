// Verifique se uma string tem a mesma quantidade de 'x's e 'o's. O método deve retornar um booleano e não diferenciar maiúsculas de minúsculas. A string pode conter qualquer char.

// Exemplos de entrada/saída:

// XO("xxoo") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function verificar(string) {
  const arr = Array.from(string)
  let x = []
  let o = []
  arr.map( letra => {
    if( letra === 'x'){
      return x.push(letra)
    } else if( letra === 'o' ) {
      return o.push(letra)
    }
  })
  console.log(x)
  console.log(x.length === o.length ? true : false)
}

verificar("ooxx")