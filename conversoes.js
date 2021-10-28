// tipo de dado
// booleanos

//conversao implícita
//permite que a gente converta um tipo de dado em outro (number em string e etc)

const numero = 456;
const numeroString = "456";

//Number()
//String()
console.log(numero + Number(numeroString)); //conversao explícita


// "===" compara valor e tipo
// "==" compara apenas valor

//Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:
let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

let usuarioConectado= false;
console.log (Number( usuarioConectado ) ); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado= true;
console.log (Number( usuarioConectado ) ); // agora teremos a conversão de true (verdadeiro) para o número 1.