// parametros de função

function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(2, 2))
console.log(soma(289, 20))
console.log(soma(64, 127))

// paramentro x argumento

// ordem dos parametros
// Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a
// parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc)
// e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).

// os parametros devem ser passados na ordem em que foram declarados

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}

//console.log(nomeIdade("Tayná", 26))
function soma(num1, num2){
    return num1 + num2;
}

// quando os parametros recebem valor padrão em sua declaração, a função pode ser chamada com apenas um parametro
// exemplo: console.log(multiplica(soma(4, 5)))
function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

// aqui estamos primeiro executando a função soma ente 4 e 5, depois a soma entre 3 e 3
//pra no final rodar a multiplicação entre os resultados da soma
console.log(multiplica(soma(4, 5), soma (3, 3)));


