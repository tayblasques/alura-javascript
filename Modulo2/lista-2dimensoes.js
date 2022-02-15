const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = ['10', '7', '9', '6']

// lista de 2 dimensões - chama duas listas em uma só
let listaDeNotasEAlunos = [alunos, medias]

// estamos chamando a lista de 2 dimensões onde o primeiro [0] está informando o primeiro indice da
// listaDeNotasEAlunos (que é a lista alunos)  e o segundo [0] informa que eu quero o primeiro indice dentro
// da lista alunos

// no segundo caso, estamos chamando a lista de 2 dimensões onde o [1] está informando o segundo indice da
// listaDeNotasEAlunos (que é a lista medias) e o [0] informa que eu quero o primeiro indice dentro
// da lista medias
console.log(`${listaDeNotasEAlunos[0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`)