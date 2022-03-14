const cliente = {
    nome:"Tayná",
    idade:"26",
    cpf:"85642315468",
    email:"tayna@email.com"
}

//notação de ponto
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)

//metodo substring -> nesse caso irá printar apenas os 3 primeiros digitos do cpf
console.log(cliente.cpf.substring(0,3))