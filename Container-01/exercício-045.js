// Complete a solução para que ela retorne true se o primeiro argumento(string) passado terminar com o 2º argumento(também uma string).

//     Exemplos:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(word, sec) {
  const wordToArr = Array.from(word)
  const last1 = wordToArr[wordToArr.length -1]
  const last2 = wordToArr[wordToArr.length -2] += wordToArr[wordToArr.length -1]
  console.log(last2 === sec || last1 === sec)
}

solution('sapo', 'o')