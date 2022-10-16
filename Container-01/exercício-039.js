// Sua tarefa é criar uma função que faça quatro operações matemáticas básicas.

// A função deve ter três argumentos - operação(string/char), valor1(número), valor2(número).
// A função deve retornar resultado de números após aplicar a operação escolhida.

// Exemplos(Operador, valor1, valor2) --> saída
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


const calculadora = (operador, valor1, valor2) => {

    if ( operador === '+') {
        return valor1 + valor2    
    }
    if ( operador === '-') {
        return valor1 - valor2      
    }
    if ( operador === '*') {
        return valor1 * valor2        
    }
    if ( operador === '/') {
        return valor1 / valor2
    }

}

console.log(calculadora('-', 15, 18))