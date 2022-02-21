// método do forEach não retorna nada
// tudo o que a função callback do map faz, é retornado como um array

const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)
//nota == 10 ? nota : ++nota
// nessa linha de código são usados operadoes ternários (modulo 1)
// se a nota for igual a 10, retorna a nota. Se não for igual a 10, incrementa +1 ponto a nota,
// por isso o ++ vem antes de nota

console.log(notasAtualizadas)