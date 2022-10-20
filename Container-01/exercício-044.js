// Se você não consegue dormir, apenas conte ovelhas!!

// Tarefa:
// Dado um inteiro não negativo, 3 por exemplo, retorne uma string com um murmúrio: "1 sheep...2 sheep...3 sheep...". A entrada será sempre válida, ou seja, nenhum inteiro negativo.

function ContarOvelhas(ovelhas) {
  let count = ''
  for(i= 1; i <= ovelhas; i++ ) {
    count += `${i} sheep...`
  }
  console.log(count)
}

ContarOvelhas(6)