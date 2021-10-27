const texto1 = "Olá, Mundo!";
const texto2 = 'Olá, Mundo!';
const senha = "senhaSuperSegura456!";
const stringDeNumero = "34567";

const citacao = "Meu nome é ";
const meuNome = "Tayná";

//concatenação (+)

console.log(citacao + meuNome);

//template String ou template literal
//==================================

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar ao
//JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.
//==================================

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

//o toLowerCase() que converte todos os caracteres da string informada para letras minúsculas

//A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres