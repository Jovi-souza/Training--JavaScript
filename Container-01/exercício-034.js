// Quando fornecido com um número entre 0-9, devolva-o em palavras.

// Entrada:: 1

// Saída :: "Um".

const palavras = {
    0: 'zero',
    1: 'um',
    2: 'dois',
    3: 'tres',
    4: 'quatro',
    5: 'cinco',
    6: 'seis',
    7: 'sete',
    8: 'oito',
    9: 'nove'
}

const retornarPalavra = numero => palavras[numero]

console.log(retornarPalavra(6))