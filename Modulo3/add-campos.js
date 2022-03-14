const cliente = {
    nome:"Tayná",
    idade:"26",
    cpf:"85642315468",
    email:"tayna@email.com"
}

//adicionando um campo ao objeto com adição de ponto
cliente.fone = "984856458"
//passando novamente a info, ele altera o valor que já existe
cliente.fone = "98485645878"
//deletando infos do objeto
delete cliente.fone
console.log(cliente);