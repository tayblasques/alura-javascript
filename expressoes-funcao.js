// expressão de função
// o nome da função é opcional, mas na maioria das vezes a função é anonima

// const soma = function (num1, num2){
//     return num1 + num2
// }
//console.log(soma(2, 1))

// diferença principal entre declaração e expressão: HOISTING
// funções e var são "listadas" no topo do arquivo

// Quando a função é "escrita" sem utilizar const/let ela pode ser chamada antes de ser declarada.

console.log(apresentar())

function apresentar (){
    return "olá";
}

console.log(soma(1, 2))
const soma = function (num1, num2){
    return num1 + num2
}