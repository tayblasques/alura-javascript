const notas = [10, 6, 8]
//push é uma função pronta do JS (push é o nome da função e o valor informado entre parenteses é o parametro dessa função)
//push serve para adicionar um novo elemento dentro do array, na última posição
notas.push(7)
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length
console.log(media)