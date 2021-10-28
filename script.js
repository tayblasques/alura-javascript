//var
// funciona em qualquer parte do código
//var tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);

//nesse caso a variável area não precisou ser declarada pois o nodeJS ja declarou a variavel
//porém faz parte de boas práticas declarar a variável

//let
//let e var não precisam ser inicializadas com um valor pré definido, ou seja, o valor pode ser alterado futuramente
//let precisa ser declarada antes de ser inicializada

let forma = "retangulo"
let altura = 5;
let comprimento = 7;
let area;

if ( forma === "retangulo") { // 3 simbolos de "=" indicam que a comparação é de tipo e valor
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

//const
//sempre que se inicia uma const é necessário atribuir um valor
//uma vez que declarada, a const precisa ser inicializada e seu valor não poderá ser alterado

const forma = "triangulo";
const altura = 5;
const comprimento = 7;
let area;

if ( forma === "quadrado") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

//OUTRO EXEMPLO COM CONST, onde o valor não muda como podemos ver no console.log
var respostaDeTudo = 42
let idade = 29
const pi = 3.14
{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)