const notas = [10, 6.5, 8, 7.5]
let somaDasNotas = 0

// forEach é uma função callback
// o parametro da função foreach não é um dado
// a diferença do for pro forEach: forEach faz o loop sem precisar passar a notação do número do indice
notas.forEach(nota => {
    somaDasNotas += nota
});

//outra maneira de escrever o mesmo for

notas.forEach(function(nota){
    somaDasNotas += nota
});

let media = somaDasNotas/notas.length
console.log(media)