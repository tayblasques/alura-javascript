//boolean

const usuarioLogado = true;
const contaPaga = false;

// truthy OR falsy

// 0 => false
// 1 => true

console.log(0 == false); // dois simbolos de "=" indicam que a comparação é apenas de tipo
console.log("" == false);
console.log(1 == true);

//null => vazio ou nada

let minhaVar;
let varNull = null;
console.log(typeof minhaVar); //undefined
console.log(typeof varNull); //object

let numero = 3;
let texto = "Alura";
console.log(typeof numero); //number
console.log(typeof texto); //string
//typeof é uma palavra chave pra sabermos qual é o tipo de dado que está sendo gravado na variável

//undefined
//é quando uma variavel não possui valor atribuido


