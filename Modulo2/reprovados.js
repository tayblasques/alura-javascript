const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

// método filter exige que o primeiro parametro seja uma função
const reprovados = nomes.filter((aluno,indice) => notas[indice] < 5)
console.log(`reprovados: ${reprovados}`)