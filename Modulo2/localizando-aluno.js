const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = ['10', '7', '9', '6']

let listaDeNotasEAlunos = [alunos, medias]

// includes retorna true or false
// indexOf retorna número
const exibeNomeNota = (nomeDoAluno) =>{
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    }
    else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota('João'))