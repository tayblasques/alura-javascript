// existem 3 formas de escrever funções
// DECLARAÇÃO DE FUNÇÃO
// 1) declara a função

function imprimeTexto(texto){
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto(soma());
//imprimeTexto("Outro Texto");

function soma(){
    // o return deve ser a ultima linha da função
    return 2 +2;
}
//console.log(soma());