const nome = "Tay";
const idade = 2021 - 1995;
const cidadeNasc = "Osasco";

//const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e eu nasci em " + cidadeNasc;

const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeNasc}`;
console.log(apresentacao)

const nome2 = "Leo";
const idade2 = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

//template string com operador ternario

const pedido = `${nome2} diz: "por favor, quero beber ${idade2 >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)