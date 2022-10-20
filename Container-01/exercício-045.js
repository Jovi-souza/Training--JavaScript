// Complete a solução para que ela retorne true se o primeiro argumento(string) passado terminar com o 2º argumento(também uma string).

//     Exemplos:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(word, sec) {
  const end = word.endsWith(sec)
  console.log(end)
}

solution('sapo', 'o')