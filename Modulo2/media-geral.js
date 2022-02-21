const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]


//reduce vai trazer todo o array em um unico valor
// reduce deve ter dois parametros acum e atual, onde o atual é o valor atual do loop
// os parametros devem ser passados sempre na ordem acum,atual

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) =>
    atual + acum,0)
    return somaDasNotas/notasDaSala.length
}

// A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois
// parâmetros, ambos obrigatórios: O valor acumulado e o valor atual.
console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python ${mediaSala(salaPython)}`)

const notas = [10, 6.5, 8, 7]
const media = notas.reduce((acum, atual) => atual + acum, 0)/notas.length
console.log(media)