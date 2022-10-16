// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
// num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
// com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
// Exemplo:
// recerberMelhorEstudante({
// Joao: [8, 7.6, 8.9, 6], // média 7.625
// Mariana: [9, 6.6, 7.9, 8], // média 7.875
// Carla: [7, 7, 8, 9] // média 7.75
// }) // retornará { nome: "Mariana", media: 7.875 }

let recerberMelhorEstudante = () => {
    alunos = {
        Joao: [8, 7.6, 8.9, 6],
        Mariana: [9, 6.6, 7.9, 8],
        Carla: [7, 7, 8, 9]
    }

    const mediaJoão = (alunos.Joao.reduce((notaA, notaB) => {
        return notaA + notaB
    })) / 4

    const mediaMariana = (alunos.Mariana.reduce((notaA, notaB) => {
        return notaA + notaB
    })) / 4

    const mediaCarla = (alunos.Carla.reduce((notaA, notaB) => {
        return notaA + notaB
    })) / 4


    if( mediaJoão >= mediaMariana && mediaJoão >= mediaCarla) {
        return console.log({
            nome: 'Joao',
            media: mediaCarla
        })
    }
    if( mediaMariana >= mediaJoão && mediaMariana >= mediaCarla) {
        return console.log({
            nome: 'Mariana',
            media: mediaMariana
        })
    }
    if( mediaCarla >= mediaJoão && mediaCarla >= mediaMariana){
        return console.log({
            nome: 'Carla',
            media: mediaCarla
        })
    }
}
recerberMelhorEstudante()
