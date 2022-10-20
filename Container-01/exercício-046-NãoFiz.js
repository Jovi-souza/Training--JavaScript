// Nesta pequena tarefa, você recebe uma sequência de números separados por espaços e deve retornar o número mais alto e o mais baixo.

// Exemplos
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notas
// Todos os números são válidos Int 32, não há necessidade de validá-los.
// Sempre haverá pelo menos um número na string de entrada.
// A string de saída deve ser dois números separados por um único espaço, e o número mais alto é o primeiro.

function highAndLow(string) {
  const replace = string.replaceAll(' ', '')
  const arr = Array.from(replace)

  const high = arr.reduce( (at, ac) => {
    return at >= ac ? at : ac
  })

  const low = arr.reduce( (at, ac) => {
    return at <= ac ? at : ac
  })

  console.log(high, low)
}

highAndLow("1 8 0 -3 1 4 1 9")
