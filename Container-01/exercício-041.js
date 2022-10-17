// Converter número em matriz invertida de dígitos
// Dado um número aleatório não negativo, você deve retornar os dígitos desse número em uma matriz na ordem inversa.

// Exemplo (Entrada => Saída):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

const Converter = (num) => {
  const string = num.toString()
  const toArray = Array.from(string)
  toArray.reverse()
  console.log(toArray)
}

Converter(348597)
