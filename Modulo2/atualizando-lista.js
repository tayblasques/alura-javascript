const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

// splice permite que a gt remova ou adicione elementos em qualquer lugar do array
// parametro 1: posição do array que deseja iniciar a exclusão
// parametro 2: número de elementos que queremos remover
// NOTE: (a remoção acontece em sequência a partir do número passado no parametro 1)
// parametro 3: passe caso deseje adicionar um novo elemento ao array (não é obrigatório)
listaDeChamada.splice(1, 2, 'Rodrigo')

// nesse caso o primeiro parametro é onde deve ser inserido o novo valor
listaDeChamada.splice(2, 0, 'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`)

